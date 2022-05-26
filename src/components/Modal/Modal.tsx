import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import './Modal.scss';

const BackDrop = ({ onConfirm }) => {
  return <div className="backdrop" onClick={onConfirm} />;
};

const RootModal = ({ title, onSubmit, onCancel }) => {
  return (
    <div className="modal">
      <header className="header">
        <h2>{title}</h2>
      </header>
      <footer className="actions">
        <Button type="primary" onClick={onSubmit}>
          Yes
        </Button>
        <Button type="primary" onClick={onCancel}>
          Cancel
        </Button>
      </footer>
    </div>
  );
};

const Modal = ({ onSubmit, onConfirm, title, onCancel }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <RootModal title={title} onSubmit={onSubmit} onCancel={onCancel} />,
        document.getElementById('modal-root'),
      )}
    </>
  );
};
export default Modal;
