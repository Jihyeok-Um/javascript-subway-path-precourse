import { $ } from '../utils/dom.js';
import { ALERT_MESSAGE } from '../constants/constants.js';
import { renderResult } from '../view/render.js';
import { checkStationCorrect } from '../utils/checkValue.js';
import { entireRouteForTime, entireRouteForDistantce } from './entireRoute.js';

export const getTimeResult = () => {
  const departureStation = $('#departure-station-name-input').value;
  const arrivalStation = $('#arrival-station-name-input').value;
  if (checkStationCorrect(departureStation, arrivalStation)) {
    window.alert(ALERT_MESSAGE);
    return;
  }
  result(departureStation, arrivalStation);
  renderResult();
};

export const getDistanceResult = () => {
  const departureStation = $('#departure-station-name-input').value;
  const arrivalStation = $('#arrival-station-name-input').value;
  if (checkStationCorrect(departureStation, arrivalStation)) {
    window.alert(ALERT_MESSAGE);
    return;
  }
  renderResult();
};

export const result = (departureStation, arrivalStation) => {
  console.log(departureStation, arrivalStation);
  console.log(
    entireRouteForTime.findShortestPath(departureStation, arrivalStation),
  );
};
