import styles from "./Toast.module.css";
export default function Toast() {
  return (
    <div className={`${styles.toast_container} toast__hidden`} id="toast">
      <div
        aria-atomic="true"
        aria-live="assertive"
        className={styles.toast}
        role="alert"
      >
        <div className={styles.toast_header}>
          <span className={styles.toast_icon} id="toast_icon" />
          <strong className={styles.toast_title} id="toast_title"></strong>
        </div>
        <div className={styles.toast_body} id="toast_body"></div>
      </div>
    </div>
  );
}
