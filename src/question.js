import React from "react";

const Question = () => {
  let answer = 2 * (parseInt(Math.random() * 10) + 1);
  // answer = b / ( c - a )
  let a = parseInt(Math.random() * 5) + 1;
  let c = parseInt(Math.random() * 5) + 1 + a;
  let b = answer * (c - a);
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let randomPos = parseInt(Math.random() * 26);
  let z = characters.substr(randomPos, 1);
  // let options = [];
  return(
    <div>
      <h1>Question</h1>
      <p>
        What is the value of <i>{z}</i> that satifies the equation below?
      </p>
      <p>
        {a !== 1 ? a : ''}<i>{z}</i> + {b} = {c !== 1 ? c : ''}<i>{z}</i>
      </p>
      <ol type='A'>
        <li>-2</li>
        <li>{answer}</li>
        <li>1/2</li>
        <li>1</li>
      </ol>
    </div>
  );
};

export default Question;