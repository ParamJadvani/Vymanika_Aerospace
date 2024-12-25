// Import React
// import React from 'react';

// Define the Button component
const Button = () => {
  return (
    <div>
      {/* https://freecodez.com */}
      <button>
        Button
        <div className="star-1">
          <svg
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              fill="#FFFDEF"
            ></path>
          </svg>
        </div>
        {/* Repeat for other stars */}
      </button>
      <style>
        {`
          :root {
            --color: #95f9fe;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background: #252525;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          button {
            position: relative;
            padding: 12px 35px;
            background: var(--color);
            font-size: 17px;
            font-weight: 500;
            color: #181818;
            border: 3px solid var(--color);
            border-radius: 8px;
            box-shadow: 0 0 0 #fec1958c;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
          }
          .star-1 {
            position: absolute;
            top: 20%;
            left: 20%;
            width: 25px;
            height: auto;
            filter: drop-shadow(0 0 0 #fffdef);
            z-index: -5;
            transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
          }
          button:hover {
            background: transparent;
            color: var(--color);
            box-shadow: 0 0 25px #fec1958c;
          }
          button:hover .star-1 {
            top: -80%;
            left: -30%;
            filter: drop-shadow(0 0 10px #fffdef);
            z-index: 2;
          }
        `}
      </style>
    </div>
  );
};

export default Button;
