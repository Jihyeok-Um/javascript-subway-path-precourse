import {
  stationsList,
  lineTwoForTime,
  lineThreeForTime,
  sinbundangLineForTime,
} from '../init.js';

export const checkStationCorrect = (departureStation, arrivalStation) => {
  checkStationLength(departureStation, arrivalStation);
  checkStationExistence(departureStation, arrivalStation);
  checkStationEqual(departureStation, arrivalStation);
  checkStationNotConnect(departureStation, arrivalStation);
};

const checkStationLength = (departureStation, arrivalStation) => {
  return departureStation.length < 2 || arrivalStation.length < 2;
};

const checkStationExistence = (departureStation, arrivalStation) => {
  return !(
    stationsList.includes(departureStation) &&
    stationsList.includes(arrivalStation)
  );
};

const checkStationEqual = (departureStation, arrivalStation) => {
  return departureStation === arrivalStation;
};

const checkStationNotConnect = (departureStation, arrivalStation) => {
  if (
    lineTwoForTime.findShortestPath(departureStation, arrivalStation) ===
      undefined &&
    lineThreeForTime.findShortestPath(departureStation, arrivalStation) ===
      undefined &&
    sinbundangLineForTime.findShortestPath(departureStation, arrivalStation) ===
      undefined
  ) {
    return true;
  }
};
