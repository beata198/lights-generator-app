import React, { useState } from "react";
import bulbTurnedOff from "/images/bulb.svg";
import bulbBlue from "/images/light-blue.svg";
import bulbGreen from "/images/light-green.svg";
import bulbOrange from "/images/light-orange.svg";
import bulbPink from "/images/light-pink.svg";
import bulbRed from "/images/light-red.svg";
import bulbYellow from "/images/light-yellow.svg";

const SingleLight = () => {
  const [isOn, setIsOn] = useState(true);

  const imageSrc = isOn ? bulbBlue : bulbTurnedOff;

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div>
      <img src={imageSrc} alt="" onClick={handleToggle} />
    </div>
  );
};

export default SingleLight;
