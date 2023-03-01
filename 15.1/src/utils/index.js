import { NUM_ANIMALS } from "../constants/index";

export const getRandomIndex=() => {
  return Math.floor(Math.random()*NUM_ANIMALS);
}

export const getRandomAnswer=() => {
  return Math.random()>0.4? true:false;
}