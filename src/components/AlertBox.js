import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const AlertBox = () => {
  const [show, setShow] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "10px",
      }}
    >
      {show ? (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>☝☝</Alert.Heading>
          <p>Search for a movie/ series Here!</p>
        </Alert>
      ) : (
        false
      )}
    </div>
  );
};

export default AlertBox;
