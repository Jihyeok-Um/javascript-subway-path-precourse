import Dijkstra from '../utils/Dijkstra.js';
import { stationsList } from '../init.js';

export const entireRouteForTime = new Dijkstra();
export const entireRouteForDistantce = new Dijkstra();

export const entireRouteTime = [
  [0, 3, 100, 5, 100, 100, 100],
  [3, 0, 3, 100, 8, 100, 100],
  [0, 3, 0, 100, 100, 3, 100],
  [2, 100, 100, 0, 100, 100, 100],
  [100, 8, 100, 5, 0, 3, 1],
  [100, 100, 100, 100, 3, 0, 100],
  [100, 100, 100, 100, 1, 100, 0],
];

for (let i = 0; i < entireRouteTime.length; i++) {
  for (let j = 0; j < entireRouteTime.length; j++) {
    entireRouteForTime.addEdge(
      stationsList[i],
      stationsList[j],
      entireRouteTime[i][j],
    );
  }
}
