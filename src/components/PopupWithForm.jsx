import React from "react";

function PopupWithForm({
  name,
  title,
  confirmation,
  children,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          className="popup__close popup__close-button"
          type="button"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        <form
          className="popup__form"
          name={`${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button 
            className="popup__save" 
            type="submit" 
            aria-label="Сохранить">
            {confirmation || "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
