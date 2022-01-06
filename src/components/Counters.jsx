import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Counter from "./Counter";

function Counters({ counters, handleIncrease, handleDecrease, handleRemove }) {
  return (
    <div>
      {counters.map((c) => (
        <Counter
          key={c.id}
          value={c.value}
          increase={() => handleIncrease(c.id)}
          decrease={() => handleDecrease(c.id)}
          remove={() => handleRemove(c.id)}
        />
      ))}
    </div>
  );
}

export default Counters;
