/// <reference lib="webworker" />
import { generateFibonacci } from './fibbo';
 
addEventListener('message', (evt) => {
  console.log("worker response to",evt)
  console.log("data "+evt.data.param);
  const response=generateFibonacci(evt.data.param)
  postMessage(response);
});



