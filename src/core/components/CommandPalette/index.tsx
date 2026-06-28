"use client";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type JSX,
} from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { toggleLanguage } from "@/app/actions";
import { SECTIONS } from "@/core/data/global";
import { LOCALES } from "@/i18n/settings";
import data from "@/core/data/user-info.json";
import styles from "./CommandPalette.module.css";

type Command = {
  id: string;
  group: string;
  label: string;
  keywords?: string;
  run: () => void;
};

export default function CommandPalette(): JSX.Element | null {
  const t = useTranslations("CommandPalette");
  const nav = useTranslations("Header");
  const router = useRouter();

  const [isMac] = useState(
    () =>
      typeof navigator !== "undefined" &&
      /mac/i.test(navigator.platform || navigator.userAgent),
  );
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setCopied(false);
  }, []);

  const commands = useMemo<Command[]>(() => {
    const goTo = (id: string) => () => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      close();
    };
    const setLanguage = (locale: string) => async () => {
      const formData = new FormData();
      formData.set("locale", locale);
      await toggleLanguage(formData);
      close();
      router.refresh();
    };
    const openUrl = (url: string) => () => {
      window.open(url, "_blank", "noopener,noreferrer");
      close();
    };

    return [
      { id: "nav-home", group: t("nav"), label: nav("home"), run: goTo(SECTIONS.HOME) },
      { id: "nav-projects", group: t("nav"), label: nav("projects"), run: goTo(SECTIONS.PROJECTS) },
      { id: "nav-experience", group: t("nav"), label: nav("experience"), run: goTo(SECTIONS.EXPERIENCE) },
      { id: "nav-technologies", group: t("nav"), label: nav("technologies"), run: goTo(SECTIONS.TECHNOLOGIES) },
      { id: "nav-about", group: t("nav"), label: nav("about_me"), run: goTo(SECTIONS.ABOUT) },
      { id: "nav-contact", group: t("nav"), label: nav("contact"), run: goTo(SECTIONS.CONTACT) },
      { id: "lang-es", group: t("language"), label: nav("spanish"), keywords: "espanol idioma language", run: setLanguage(LOCALES.SPANISH) },
      { id: "lang-en", group: t("language"), label: nav("english"), keywords: "ingles idioma language", run: setLanguage(LOCALES.ENGLISH) },
      { id: "lang-pt", group: t("language"), label: nav("portuguese"), keywords: "portugues idioma language", run: setLanguage(LOCALES.PORTUGUES) },
      { id: "link-github", group: t("links"), label: t("view_github"), keywords: "github git repo code", run: openUrl(data.github_url) },
      { id: "link-linkedin", group: t("links"), label: t("view_linkedin"), keywords: "linkedin", run: openUrl(data.linkedin_url) },
      {
        id: "copy-email",
        group: t("links"),
        label: copied ? t("email_copied") : t("copy_email"),
        keywords: "email mail correo contacto",
        run: async () => {
          try {
            await navigator.clipboard.writeText(data.email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          } catch {
            window.open(`mailto:${data.email}`, "_self");
          }
        },
      },
    ];
  }, [t, nav, close, router, copied]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(command =>
      `${command.label} ${command.group} ${command.keywords ?? ""}`
        .toLowerCase()
        .includes(q),
    );
  }, [commands, query]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusId = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusId);
    };
  }, [open]);

  const onPanelKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected(prev => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected(prev => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[selected]?.run();
    }
  };

  return (
    <>
      <button
        aria-keyshortcuts="Meta+K Control+K"
        aria-label={t("trigger")}
        className={styles.trigger}
        onClick={() => setOpen(true)}
        type="button"
      >
        <span className={styles.trigger_keys}>
          <kbd className={styles.kbd} suppressHydrationWarning>
            {isMac ? "⌘" : "Ctrl"}
          </kbd>
          <kbd className={styles.kbd}>K</kbd>
        </span>
      </button>

      {open &&
        createPortal(
          <div
            aria-label={t("trigger")}
            aria-modal="true"
            className={styles.overlay}
            onClick={close}
            role="dialog"
          >
            <div
              className={styles.panel}
              onClick={e => e.stopPropagation()}
              onKeyDown={onPanelKeyDown}
            >
              <input
                aria-label={t("placeholder")}
                className={styles.input}
                onChange={e => {
                  setQuery(e.target.value);
                  setSelected(0);
                }}
                placeholder={t("placeholder")}
                ref={inputRef}
                value={query}
              />
              <ul className={styles.list} role="listbox">
                {filtered.length === 0 && (
                  <li className={styles.empty}>{t("empty")}</li>
                )}
                {filtered.map((command, index) => (
                  <li
                    aria-selected={index === selected}
                    className={`${styles.item} ${index === selected ? styles.item_active : ""}`}
                    key={command.id}
                    onClick={() => command.run()}
                    onMouseEnter={() => setSelected(index)}
                    role="option"
                  >
                    <span className={styles.item_label}>{command.label}</span>
                    <span className={styles.item_group}>{command.group}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
