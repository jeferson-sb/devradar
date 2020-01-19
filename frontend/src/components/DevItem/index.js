import React from 'react';
import './styles.css';
import ModalDev from '../ModalDev';

function DevItem({ dev, onDelete }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  async function handleDeleteDev() {
    const { _id } = dev;
    await onDelete(_id);
  }

  return (
    <>
      <li className='dev-item'>
        <header>
          <img src={dev.avatar_url} alt={dev.name} />
          <div className='user-info'>
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
          <button className='close-button' onClick={handleDeleteDev}>
            <span>&times;</span>
          </button>
        </header>
        <p>{dev.bio}</p>
        <footer>
          <a href={`https://github.com/${dev.github_username}`}>
            Acessar perfil no Github
          </a>
          <button className='button' onClick={() => setIsOpen(true)}>
            Atualizar informações
          </button>
        </footer>
      </li>
      <ModalDev
        isOpen={modalIsOpen}
        dev={dev}
        closeModal={() => setIsOpen(false)}
      />
    </>
  );
}

export default DevItem;
