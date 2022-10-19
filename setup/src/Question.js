import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  const collapse = () => {
    setIsOpen(false);
  };

  const expand = () => {
    setIsOpen(true);
  };

  return (
    <article className="question">
      <header>
        <h4>{question.title}</h4>

        <button className="btn">
          {isOpen ? (
            <AiOutlineMinus onClick={collapse} />
          ) : (
            <AiOutlinePlus onClick={expand} />
          )}
        </button>
      </header>
      {isOpen ? <p>{question.info}</p> : ""}
    </article>
  );
};

export default Question;
