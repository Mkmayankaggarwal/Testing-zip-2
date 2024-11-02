import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  if (!isOpen) return <div className='corr'> <button onClick={openModal} className="btn btn-theme">Book an Appointment</button>    </div>;

  return (
    
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title title">Make Appointment <span>Now!</span></h5>
            <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="popup-form" className="row" method="post" action="http://themeht.com/hectolab/html/ltr/php/contact.php">
              <div className="messages"></div>
              <div className="form-group col-sm-6">
                <input id="form_name2" type="text" name="name" className="form-control" placeholder="Your Name" required data-error="Name is required." />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group col-sm-6">
                <input id="form_email2" type="email" name="email" className="form-control" placeholder="Your Email" required data-error="Valid email is required." />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group col-sm-6">
                <input id="form_number1" type="text" name="phone" className="form-control" placeholder="Phone Number" required />
              </div>
              <div className="form-group col-sm-6">
                <input type="text" className="form-control" placeholder="Appointment Date" id="datepicker1" />
              </div>
              <div className="form-group col-sm-6">
                <select className="form-select form-control" defaultValue="">
                  <option value="" disabled>- Select Service</option>
                  <option value="1">Cardiology</option>
                  <option value="2">Blood Test</option>
                  <option value="3">Dental</option>
                  <option value="4">Orthopaedics</option>
                  <option value="5">Neurology</option>
                  <option value="6">Outdoor Checkup</option>
                  <option value="7">Pharmacy</option>
                </select>
              </div>
              <div className="form-group col-sm-6">
                <select className="form-select form-control" defaultValue="">
                  <option value="" disabled>- Select Department</option>
                  <option value="1">Cardiology</option>
                  <option value="2">Blood Test</option>
                  <option value="3">Dental</option>
                  <option value="4">Orthopaedics</option>
                  <option value="5">Neurology</option>
                  <option value="6">Outdoor Checkup</option>
                  <option value="7">Pharmacy</option>
                </select>
              </div>

              <div className="col-sm-12 mt-3">
                <button className="btn btn-theme btn-radius" type="submit">
                  <span>Make Appointment</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
