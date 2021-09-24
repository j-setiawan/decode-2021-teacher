import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Modals({ componentToPassDown, isOpen = false }) {
  console.log(isOpen);
  const [isModalOpen, setIsOpen] = React.useState(isOpen);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={isOpen ? isOpen : false}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <>{componentToPassDown}</>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
