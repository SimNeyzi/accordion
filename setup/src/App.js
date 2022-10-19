import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <section className="container">
        {data.map((question, key) => {
          return <SingleQuestion key={question.id} question={question} />;
        })}
      </section>
    </main>
  );
}

export default App;
