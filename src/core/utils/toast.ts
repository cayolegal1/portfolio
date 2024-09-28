const notify = (title: string, message: string, delay: number = 4000) => {
  if (!document) return;

  const toast = document.getElementById("toast");
  const toast_title = document.getElementById("toast_title");
  const toast_body = document.getElementById("toast_body");

  if (toast && toast_title && toast_body) {
    toast_title.textContent = title;
    toast_body.textContent = message;
    toast.classList.replace("toast__hidden", "toast__visible");

    setTimeout(() => {
      toast.classList.replace("toast__visible", "toast__hidden");
    }, delay);

    setTimeout(() => {
      toast_title.textContent = "";
      toast_body.textContent = "";
    }, delay + 500);
  }
};

export const notifySuccess = (title: string, message: string) => {
  notify(title, message);
};

export const notifyError = (title: string, message: string) => {
  notify(title, message);
};