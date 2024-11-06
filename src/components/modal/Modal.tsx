import React from "react";

export interface ModalProps {
  variant: "confirmated" | "success" | "error" | "warning";
  title: string;
  message: string;
  onClose: () => void;
  primaryButtonText: string;
  secondaryButtonText: string;
}

const Modal: React.FC<ModalProps> = ({
  variant,
  title,
  message,
  onClose,
  primaryButtonText,
  secondaryButtonText,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "confirmated":
        return {
          iconClass: "modal-confirmation-icon",
          titleClass: "confirmation-govco",
        };
      case "success":
        return {
          iconClass: "modal-success-icon",
          titleClass: "success-govco",
        };
      case "error":
        return {
          iconClass: "modal-error-icon",
          titleClass: "error-govco",
        };
      case "warning":
        return {
          iconClass: "modal-warning-icon",
          titleClass: "warning-govco",
        };
      default:
        return {
          iconClass: "",
          titleClass: "",
        };
    }
  };

  const { iconClass, titleClass } = getVariantStyles();

  return (
    <div className="container-modal-govco" style={{ display: "block" }}>
      <div
        className="modal-container-govco"
        tabIndex={-1}
        data-bs-backdrop="false"
        data-bs-keyboard="false"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-govco">
          <div className="modal-content modal-content-govco">
            <div className="modal-header modal-header-govco modal-header-alerts-govco">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
                disabled
              ></button>
            </div>
            <div className="modal-body modal-body-govco center-elements-govco">
              <div className="modal-icon">
                <span className={`modal-icon-govco ${iconClass}`}></span>
              </div>
              <h3 className={`modal-title-govco ${titleClass}`}>{title}</h3>
              <p className="modal-text-govco modal-text-center-govco">
                {message}
              </p>
            </div>
            <div className="modal-footer-govco modal-footer-alerts-govco">
              <div className="modal-buttons-govco">
                <button
                  type="button"
                  className="btn btn-primary btn-modal-govco"
                >
                  {primaryButtonText}
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-modal-govco btn-contorno"
                >
                  {secondaryButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
