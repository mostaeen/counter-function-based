import { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

import Counters from "./components/Counters";
import Nav from "./components/Nav";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
  ]);
  const handleIncrease = (id) => {
    setCounters(
      counters.map((c) => {
        if (c.id === id) c.value += 1;
        return c;
      })
    );
  };
  const handleDecrease = (id) => {
    setCounters(
      counters.map((c) => {
        if (c.id === id && c.value > 0) c.value -= 1;
        return c;
      })
    );
  };
  const handleRemove = (id) => {
    setCounters(counters.filter((c) => c.id !== id));
  };
  return (
    <div>
      <Nav total={counters.filter((c) => c.value > 0).length} />
      <Button
        onClick={() =>
          setCounters(
            counters.map((c) => {
              c.value = 0;
              return c;
            })
          )
        }
        variant="warning"
      >
        Reset All
      </Button>
      <Counters
        counters={counters}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;
