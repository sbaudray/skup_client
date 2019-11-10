import React from "react";

const GlobalStyles = () => {
  return (
    <style jsx global>
      {`
        html,
        body,
        #root {
          margin: 0;
          height: 100%;
        }
      `}
    </style>
  );
};

export default GlobalStyles;
