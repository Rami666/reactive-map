import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CityModal = ({ city, onHide }) => {
  return (
    <Modal show={!!city} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{city.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add city details and content here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CityModal;