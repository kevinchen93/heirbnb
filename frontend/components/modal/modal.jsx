import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';
import LogoutFormContainer from '../session/logout_form_container';

import CreateListingFormContainer from '../listing/create_listing_form_container';
import EditUserListingFormContainer from '../listing/edit_user_listing_form_container';

import CreateReviewFormContainer from '../review/create_review_form_container';
import EditReviewFormContainer from '../review/edit_review_form_container';

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'logout':
    component = <LogoutFormContainer />;
      return (
        <div onClick={closeModal}>
          <div onClick={e => e.stopPropagation()} >
            {component}
            <div onClick={closeModal} className="logout-modal-screen" />
          </div>
        </div>
      )
    case 'edit listing':
      component = <EditUserListingFormContainer customProps={modal.props}/>;
      break;
    case 'create review':
      component = <CreateReviewFormContainer />;
      break;
    case 'edit review':
      component = <EditReviewFormContainer customProps={modal.currentReview}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
