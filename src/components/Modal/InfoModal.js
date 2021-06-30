import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import CategoryContext from "../../context/categoryContext";
import { useHistory } from "react-router-dom";

const InfoModal = ({ show, onHide }) => {
  const { resetContext, fieldValues } = useContext(CategoryContext);
  const history = useHistory();

  const redirectHome = () => {
    resetContext();
    history.push("/");
    onHide();
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Receipt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Subscriber: {fieldValues.subscriber_id}
            </li>
            <li className="list-group-item">Gender: {fieldValues.gender_id}</li>
            <li className="list-group-item">City: {fieldValues.city_id}</li>
            <li className="list-group-item">Amount: {fieldValues.amount_id}</li>
            <li className="list-group-item">
              Currency: {fieldValues.currency_id}
            </li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            redirectHome();
            onHide();
          }}
        >
          Home page
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
