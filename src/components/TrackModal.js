import React from 'react';
import { Modal } from 'semantic-ui-react';
import "./TrackModal.css"

const TrackModal = ({ open, onClose, title, description }) => {
  return (
    <div className='blue'>
      <Modal 
    open={open} 
    onClose={onClose}
    size="mini" // Sets the modal size to small
    centered
    style={{
        overflow: 'visible',
        position: 'relative',
        height: 'auto',
      }}
    >
    <button className="custom-close-button" onClick={onClose}>
        &times;
      </button>
      <Modal.Header className='title'>{title}</Modal.Header>
        <Modal.Content>
          <p className="desc">{description}</p>
        </Modal.Content>
      
    </Modal>
    </div>
    
  );
};

export default TrackModal;