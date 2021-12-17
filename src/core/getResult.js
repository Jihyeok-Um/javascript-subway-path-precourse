import { $ } from '../utils/dom.js';
import { ALERT_MESSAGE } from '../constants/constants.js';
import { renderResult } from '../view/render.js';
import { checkStationCorrect } from '../utils/checkValue.js';
import { stationsList } from '../init.js';
import {
  entireRouteForTime,
  entireRouteForDistance,
  entireRouteTime,
  entireRouteDistance,
} from './entireRoute.js';

export const getTimeResult = () => {
  const departureStation = $('#departure-station-name-input').value;
  const arrivalStation = $('#arrival-station-name-input').value;
  if (checkStationCorrect(departureStation, arrivalStation)) {
    window.alert(ALERT_MESSAGE);
    return;
  }
  renderResult(getResultListForTime(departureStation, arrivalStation));
};

export const getDistanceResult = () => {
  const departureStation = $('#departure-station-name-input').value;
  const arrivalStation = $('#arrival-station-name-input').value;
  if (checkStationCorrect(departureStation, arrivalStation)) {
    window.alert(ALERT_MESSAGE);
    return;
  }
  renderResult(getResultListForDistance(departureStation, arrivalStation));
};

export const getResultListForDistance = (departureStation, arrivalStation) => {
  let result = [];
  result.push(
    entireRouteForDistance.findShortestPath(departureStation, arrivalStation),
  );
  result.push(getEntireTime(result[0]));
  result.push(getEntireDistance(result[0]));
  return result;
};

export const getResultListForTime = (departureStation, arrivalStation) => {
  let result = [];
  result.push(
    entireRouteForTime.findShortestPath(departureStation, arrivalStation),
  );
  result.push(getEntireTime(result[0]));
  result.push(getEntireDistance(result[0]));
  return result;
};

export const getEntireTime = result => {
  let time = 0;
  for (let i = 0; i < result.length - 1; i++) {
    time +=
      entireRouteTime[stationsList.indexOf(result[i])][
        stationsList.indexOf(result[i + 1])
      ];
  }
  return time;
};

export const getEntireDistance = result => {
  let distance = 0;
  for (let i = 0; i < result.length - 1; i++) {
    distance +=
      entireRouteDistance[stationsList.indexOf(result[i])][
        stationsList.indexOf(result[i + 1])
      ];
  }
  return distance;
};
