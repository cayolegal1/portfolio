"use client";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Chrome dispara `beforeinstallprompt` antes de mostrar el prompt nativo de
 * instalación. Este tipo no está en las libs estándar de TS, así que lo
 * declaramos localmente.
 */
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

/**
 * Captura el evento `beforeinstallprompt` y expone una función `install` que
 * lanza el prompt nativo para instalar la web como PWA. Toda la lógica vive
 * aquí para que los componentes solo tengan que llamar a `install()`.
 */
export const usePwaInstall = () => {
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onBeforeInstallPrompt = (event: Event) => {
      // Evita que el navegador muestre el mini-infobar automáticamente,
      // guardamos el evento para dispararlo bajo demanda.
      event.preventDefault();
      deferredPrompt.current = event as BeforeInstallPromptEvent;
      setCanInstall(true);
    };

    const onAppInstalled = () => {
      deferredPrompt.current = null;
      setCanInstall(false);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  /**
   * Intenta instalar la web como PWA. Devuelve `true` si el usuario aceptó.
   * Si el navegador no ofreció el evento (ya instalada, no soportado, etc.)
   * intenta abrir la web en una ventana independiente como fallback.
   */
  const install = useCallback(async () => {
    const prompt = deferredPrompt.current;

    if (!prompt) {
      // No hay prompt disponible: ya está instalada o el navegador no lo
      // soporta. Abrimos la web en modo standalone-like como último recurso.
      window.open(window.location.href, "_blank", "noopener,noreferrer");
      return false;
    }

    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    deferredPrompt.current = null;
    setCanInstall(false);

    return outcome === "accepted";
  }, []);

  return { canInstall, install };
};
