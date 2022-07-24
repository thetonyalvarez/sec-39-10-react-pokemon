import { useState, useEffect } from "react";
import uuid from "uuid";
import axios from "axios";

const useFlip = (initValue = false) => {
  const [isFacingUp, setIsFacingUp] = useState(initValue);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  }
  return [isFacingUp, flipCard]
}

const useAxios = (url) => {
  const [response, setResponse] = useState([]);

  const addResponse = async (endpoint = "") => {
    const resp = await axios.get(url + endpoint)
    setResponse(data => [...data, resp.data]);
  }

  return [ response, addResponse ]

}

export { useFlip, useAxios }