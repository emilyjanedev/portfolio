import LogRocket from "logrocket";

export function initLogRocket() {
  if (typeof window !== "undefined") {
    LogRocket.init("k18tty/es-developer-portfolio");
  }
}
