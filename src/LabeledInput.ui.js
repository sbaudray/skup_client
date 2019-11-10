import React from "react";

function LabeledInput({ type, name, label }) {
  return (
    <>
      <label>
        <div>{label}</div>
        <input className="input" type={type} name={name} />
      </label>
      <style jsx>
        {`
          .input {
            margin-top: 8px;
          }
        `}
      </style>
    </>
  );
}

export default LabeledInput;
