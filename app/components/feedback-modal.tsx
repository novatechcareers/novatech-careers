"use client";

import { useEffect } from "react";

type FeedbackModalProps = {
  open: boolean;
  title: string;
  message: string;
  type?: "success" | "error";
  onClose?: () => void;
};

export default function FeedbackModal({
  open,
  title,
  message,
  type = "error",
  onClose,
}: FeedbackModalProps) {
  useEffect(() => {
    if (!open || !onClose) return;

    const timer = window.setTimeout(() => {
      onClose();
    }, type === "success" ? 2400 : 4000);

    return () => window.clearTimeout(timer);
  }, [open, onClose, type]);

  if (!open) return null;

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true">
      <div className={`popup-box ${type === "success" ? "success" : "error"}`}>
        <div className={`popup-icon ${type === "success" ? "success" : "error"}`}>
          {type === "success" ? "✓" : "!"}
        </div>

        <div className="popup-content">
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
