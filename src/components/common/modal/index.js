import React from 'react';
import { Modal, Button } from "react-bootstrap";
import ModalBodyComponent from './modalBody';

import './modal.css';

const ModalComponent = (props) => {
    const { show, article, handleClose } = props;
    const { title } = article;
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <ModalBodyComponent article={article} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Done</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;