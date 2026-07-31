import { files } from "./data.js";
import "./style.css";
const calculateBtn = document.querySelector(".calculate-btn");
const usedSpaceDisplay = document.querySelector(".used-space");
const resetBtn = document.querySelector(".reset-btn");

const convertToMB = (length, unit) => {
  let sizeInMB;
  if (unit === "B") {
    sizeInMB = length * 0.00000095;
  }
  if (unit === "KB") {
    sizeInMB = length * 0.00097656;
  }
  if (unit === "MB") {
    sizeInMB = length;
  }
  if (unit === "GB") {
    sizeInMB = length * 1024;
  }
  return sizeInMB;
};
const calculateUsedSpace = () => {
  let spaceUsed = 0;
  files.forEach((file) => {
    const { name, size } = file;
    const { length, unit = "B" } = size;
    const sizeInMB = convertToMB(length, unit);
    spaceUsed += sizeInMB;
  });
  usedSpaceDisplay.innerText = `Total used space: ${spaceUsed.toFixed(2)} MB`;
  resetBtn.classList.remove("hidden");
};

const formatUnits = () => {};

const resetDisplay = () => {
  usedSpaceDisplay.innerText = "";
  resetBtn.classList.add("hidden");
};

calculateBtn.addEventListener("click", calculateUsedSpace);
resetBtn.addEventListener("click", resetDisplay);
