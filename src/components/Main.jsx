import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.jsx";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => console.log(`Не удалось изменить данные ${error}`));
  }, []);

  useEffect(() => {
    api
      .getItems()
      .then((res) => {
        setCards([...res]);
      })
      .catch((error) =>
        console.log(`Не удалось загрузить изображения ${error}`)
      );
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-edit"
          type="button"
          onClick={onEditAvatar}
        >
          <img
            className="profile__avatar"
            alt="Аватар пользователя"
            src={userAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__open"
            type="button"
            aria-label="Редактировать профиль"
            onClick={onEditProfile}
          />
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements">
        {cards.map((card) => {
          return <Card key={card._id} card={card} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
}

export default Main;