import React from 'react';
import Modal from 'react-modal';
import DevForm from '../DevForm';
import './styles.css';

import api from '../../services/api';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

function ModalDev({ isOpen, dev, closeModal }) {
  async function handleUpdateDev(data) {
    await api.put(`/devs/${dev._id}`, data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Update Info'
    >
      <h2>Atualizar informações de {dev.name}</h2>
      <button onClick={closeModal}>Fechar</button>
      <DevForm onSubmit={handleUpdateDev} />
    </Modal>
  );
}

export default ModalDev;
