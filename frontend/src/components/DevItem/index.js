import React from 'react';
import './styles.css';

function DevItem({ dev, onDelete }) {
  async function handleDeleteDev() {
    const { _id } = dev;
    await onDelete(_id);
  }

  return (
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
      <a href={`https://github.com/${dev.username}`}>
        Acessar perfil no Github
      </a>
      <button className='button'>Atualizar informações</button>
    </li>
  );
}

export default DevItem;
