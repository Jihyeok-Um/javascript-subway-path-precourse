import Dijkstra from '../utils/Dijkstra.js';
import { stationsList } from '../init.js';

export const entireRouteForTime = new Dijkstra();
export const entireRouteForDistance = new Dijkstra();

export const entireRouteTime = [
  [0, 3, 0, 2, 0, 0, 0],
  [3, 0, 3, 0, 8, 0, 0],
  [0, 3, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 5, 0, 0],
  [0, 8, 0, 5, 0, 3, 1],
  [0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
];

export const entireRouteDistance = [
  [0, 2, 0, 3, 0, 0, 0],
  [2, 0, 2, 0, 2, 0, 0],
  [0, 2, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 6, 0, 0],
  [0, 2, 0, 6, 0, 10, 1],
  [0, 0, 0, 0, 10, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
];

export const checkAddEdge = (
  dijkstra,
  departureStation,
  arrivalStation,
  cost,
) => {
  if (cost === 0 || cost === 100) {
    return;
  }
  dijkstra.addEdge(departureStation, arrivalStation, cost);
};

for (let i = 0; i < entireRouteTime.length; i++) {
  for (let j = 0; j < entireRouteTime.length; j++) {
    checkAddEdge(
      entireRouteForTime,
      stationsList[i],
      stationsList[j],
      entireRouteTime[i][j],
    );
  }
}

for (let i = 0; i < entireRouteDistance.length; i++) {
  for (let j = 0; j < entireRouteDistance.length; j++) {
    checkAddEdge(
      entireRouteForDistance,
      stationsList[i],
      stationsList[j],
      entireRouteDistance[i][j],
    );
  }
}
