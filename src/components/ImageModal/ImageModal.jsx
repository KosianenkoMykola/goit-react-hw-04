import Modal from 'react-modal';
// import css from './ImageModal.module.css';

export default function ImageModal({ isOpen, onRequestClose, image }) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {image && (
        <div>
          <img src={image.urls.regular} alt={image.alt_description} />
          <p>{image.description}</p>
        </div>
      )}
    </Modal>
    )
}