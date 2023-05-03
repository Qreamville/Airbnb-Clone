"use client";

import React, { ReactElement, useState, useEffect, useCallback } from "react";
import styles from "../../../styles/component/modal.module.scss";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

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
  secondaryActionLabel?: string;
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
  secondaryActionLabel,
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
            <div className={styles.header}>
              <button onClick={handleClose}>
                <IoMdClose size={18} />
              </button>
              <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.body}>{body}</div>
            <div className={styles.footer}>
              <div>
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                    disabled={disabled}
                  />
                )}
                <Button
                  label={actionLabel}
                  onClick={handleSubmit}
                  disabled={disabled}
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
