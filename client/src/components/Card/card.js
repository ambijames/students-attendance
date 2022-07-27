import React, { useState } from "react";
import 'tachyons';
import './card.css'
const Card = () => {
  const [click, setClick] = useState('ABSCENT')
  const handleClick = () => setClick('PRESENT')


  return (
    <div className="bg-light-green dib br3 pa3 ma2 bw2 shadow-5">
      <img alt="robots" src="https://robohash.org/hello?200*200" />
      <div>

        <h2>john andrew</h2>
        <p>john@gmail.com</p>
      </div>
      <div className="toggle">
        <button onClick={handleClick}>{click}</button>
      </div>

    </div>
  );
};
export default Card;

