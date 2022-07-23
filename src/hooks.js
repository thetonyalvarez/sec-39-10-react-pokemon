import { useState } from "react";

const useFlip = (initValue = false) => {
  const [isFacingUp, setIsFacingUp] = useState(initValue);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  }
  return [isFacingUp, flipCard]
}

export default useFlip