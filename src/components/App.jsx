import '../index.css';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import React from 'react';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ });

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
}

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({ });
  }

  return (
  <div>
  < Header />
  < Main 
      onEditAvatar={handleEditAvatarClick} 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick} 
      onCardClick = {handleCardClick}  />
  < Footer />

  < PopupWithForm 
      name='profile-popup' 
      title='Редактировать профиль'
      confirmation='Сохранить'
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      children={<>
        <input className="popup__field popup__field_type_name" type="text" placeholder="Ваше имя" name="username" id="type-name" minLength={2} maxLength={40} autoComplete="off" required />
        <span className="type-name-error popup__error" />
        <input className="popup__field popup__field_type_job" type="text" placeholder="Ваше призвание" name="job" id="type-job" minLength={2} maxLength={200} autoComplete="off" required />
        <span className="type-job-error popup__error" />
      </>}
  />

  < PopupWithForm 
      name='item'
      title='Новое место'
      confirmation='Создать'
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      children={<>
        <input className="popup__field popup__field_type_title" type="text" placeholder="Название" name="title" id="type-title" minLength={2} maxLength={30} required />
        <span className="type-title-error popup__error" />
        <input className="popup__field popup__field_type_link" type="url" placeholder="Ссылка на картинку" name="link" id="type-link" required />
        <span className="type-link-error popup__error" />
      </>}
  />

  < PopupWithForm 
      name='confirm'
      title='Вы уверены?'
      confirmation='Да'
      onClose={closeAllPopups}>
  </PopupWithForm>

  < PopupWithForm 
      name='avatar'
      title='Обновить аватар'
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      confirmation='Сохранить'>
      <input className="popup__field popup__field_type_link" type="url" placeholder="Ссылка на аватар" name="avatar" id="avatar-link" required />
      <span className="avatar-link-error popup__error" />
  </PopupWithForm>

  <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

  </div>
  );
}

export default App;