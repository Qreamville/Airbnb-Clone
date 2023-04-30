"use client";

import React, { ReactElement, useState, useEffect, useCallback } from "react";
import styles from "../../../styles/component/modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: () => string;
}

const Modal = ({
  actionLabel,
  isOpen,
  onClose,
  onSubmit,
  body,
  disabled,
  footer,
  secondaryAction,
  secondaryLabel,
  title,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.modal}>
        <div>
          {/* Content */}
          <div
            className={`${
              showModal ? styles["modal-active"] : ["modal-disabled"]
            }`}
          >
            <div className={styles.header}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
