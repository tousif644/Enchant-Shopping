import React from "react";

const Questions = () => {
  return (
    <div>
        <h4>Questions and Answers</h4>
        <h3>How React works ?</h3>
        <p>
          <b>Ans: </b>React reads these objects and uses them to create HTML
          elements on the virtual DOM, after which it gets synced with the real
          DOM. So we'll have trees of objects on the virtual DOM and trees of
          objects on the real DOM. React automatically updates the associated
          DOM element when we change data on a React element.
        </p>

        <h3>Props vs State Differnce</h3>
        <p>
          <b>Ans: </b>The key difference between props and state is that state
          is internal and controlled by the component itself while props are
          external and controlled by whatever renders the component.
        </p>

        <h3>How useState Works ?</h3>
        <p>
          <b>Ans: </b>useState is a Hook that allows you to have state variables
          in functional components. You pass the initial state to this function
          and it returns a variable with the current state value (not
          necessarily the initial state) and another function to update this
          value.
        </p>
      </div>
)};

export default Questions;
