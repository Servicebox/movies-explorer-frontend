import React from "react";
import iconYes from "../../images/yes.png";
import iconNo from "../../images/no.png";

function PopupTooltip({ onClose, isOpen, isError }) {
  const popupClass = `popup ppopup_type_info ${isOpen ? "popup_opened" : ""}`;

  return (
    <div className={popupClass}>
      <div className="popup__container popup__container_type_info">
        <button
          className="popup__close-button popup__close-button_place_info"
          type="button"
          onClick={onClose}
        />
        <img
          className="popup__photo-info"
          src={isError ? iconNo : iconYes}
          alt="Статус регистрации"
        />
        <p className="popup__copyright popup__copyright_place_info ">
          {" "}
          {isError
            ? "Что-то пошло не так! Попробуйте ещё раз."
            : "Вы успешно зарегистрировались!"}
        </p>
      </div>
    </div>
  );
}

export default PopupTooltip;