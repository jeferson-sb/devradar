import React, { useState, useEffect } from 'react';
import './styles.css';

function DevForm({ onSubmit }) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => console.log(err),
      { timeout: 30000 }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    await onSubmit({
      github_username: githubUsername,
      techs,
      latitude,
      longitude
    });
    setGithubUsername('');
    setTechs('');
  }

  return (
    <form onSubmit={handleAddDev}>
      <div className='input-block'>
        <label htmlFor='github_username'>Usuário do Github</label>
        <input
          type='text'
          name='github_username'
          id='github_username'
          value={githubUsername}
          onChange={e => setGithubUsername(e.target.value)}
          required
        />
        <span></span>
      </div>
      <div className='input-block'>
        <label htmlFor='techs'>Tecnologias</label>
        <input
          type='text'
          name='techs'
          id='techs'
          value={techs}
          onChange={e => setTechs(e.target.value)}
          required
        />
        <span></span>
      </div>
      <div className='input-group'>
        <div className='input-block'>
          <label htmlFor='latitude'>Latitude</label>
          <input
            type='number'
            name='latitude'
            id='latitude'
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            required
          />
          <span></span>
        </div>
        <div className='input-block'>
          <label htmlFor='longitude'>Longitude</label>
          <input
            type='number'
            name='longitude'
            id='longitude'
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            required
          />
          <span></span>
        </div>
      </div>

      <button type='submit'>Salvar</button>
    </form>
  );
}

export default DevForm;
