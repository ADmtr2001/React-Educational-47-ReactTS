import React from "react";
import Card, { CardVariant } from "./components/Card";

const App = () => {
  return (
    <div>
      <Card
        width='200px'
        height='200px'
        variant={CardVariant.primary}
        onClick={(num) => console.log(num)}
      >
        <button>Click Me!</button>
        <div>Hello</div>
      </Card>
    </div>
  );
};

export default App;
