import React, { useState } from "react";
import "tachyons";
import "./card.css";
const Card = ({ fullName, email, photoUrl}) => {
  const [click, setClick] = useState("ABSCENT");
  const handleClick = () => setClick("PRESENT");

  return (
    <div>
      <div className="bg-transparent dib br3 pa3 ma2 bw2 shadow-5">
        <img alt="robots" src={!photoUrl ? `https://robohash.org/${fullName}?200*200` : photoUrl}/>
        <div style={{ textAlign: 'center'}}>
          <h2>{fullName}</h2>
          <p>{ email }</p>
        </div>
        <div style={{textAlign: 'center'}}>
          <button onClick={handleClick} style={{ fontSize: '1rem', padding: '0.7rem 2rem'}}>{click}</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
