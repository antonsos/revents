import React from 'react';
import { connect } from 'react-redux';

//COMPONENTS
import TestModal from './testModal'

const modalLookup = {
  TestModal
}

const mapState = (state) => ({
  currentModal: state.modals
})

const modalManeger = ({currentModal}) => {

  let renderedModal;

  if(currentModal) {
    const {modalType, modalProps} = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />
  }

  return <span>{renderedModal}</span>
}

export default connect(mapState)(modalManeger);
