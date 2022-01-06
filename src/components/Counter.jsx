import React from "react";
import { Badge, Button } from "react-bootstrap";

function Counter({ value, increase, decrease, remove }) {
  return (
    <div>
      <Badge bg="warning">{value}</Badge>
      <Button onClick={increase} variant="primary m-3">
        +
      </Button>
      <Button onClick={decrease} variant="primary">
        -
      </Button>
      <Button onClick={remove} variant="danger m-3">
        Remove
      </Button>
    </div>
  );
}

export default Counter;
