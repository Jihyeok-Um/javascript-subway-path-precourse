import Dijkstra from './utils/Dijkstra.js';

export const lineTwoForTime = new Dijkstra();
export const lineThreeForTime = new Dijkstra();
export const shinbungdangLineForTime = new Dijkstra();

export const lineTwoForDistantce = new Dijkstra();
export const lineThreeForDistantce = new Dijkstra();
export const shinbungdangLineForDistantce = new Dijkstra();

export const stations = {
  GYODAE: '교대',
  GANGNAM: '강남',
  YEOKSAM: '역삼',
  SOUTHERN_TERMINAL: '남부터미널',
  YANGJAE: '양재',
  YANGJAE_CITIZENS_FORESET: '양재시민의숲',
  MAEBONG: '매봉',
};

export const route = {
  LINE_TWO: [stations.GYODAE, stations.GANGNAM, stations.YEOKSAM],

  LINE_THREE: [
    stations.GYODAE,
    stations.SOUTHERN_TERMINAL,
    stations.YANGJAE,
    stations.MAEBONG,
  ],

  SINBUNGDANG_LINE: [
    stations.GANGNAM,
    stations.YANGJAE,
    stations.YANGJAE_CITIZENS_FORESET,
  ],
};

export const routeTime = {
  LINE_TWO: [
    [0, 3, 6],
    [3, 0, 3],
    [6, 3, 0],
  ],
  LINE_THREE: [
    [0, 2, 7, 8],
    [2, 0, 5, 6],
    [7, 5, 0, 1],
    [8, 6, 1, 0],
  ],
  SINBUNGDANG_LINE: [
    [0, 8, 11],
    [8, 0, 3],
    [11, 3, 0],
  ],
};

export const routeDistantce = {
  LINE_TWO: [
    [0, 2, 4],
    [2, 0, 2],
    [4, 2, 0],
  ],
  LINE_THREE: [
    [0, 3, 9, 10],
    [3, 0, 6, 7],
    [9, 6, 0, 1],
    [10, 7, 1, 0],
  ],
  SINBUNGDANG_LINE: [
    [0, 2, 12],
    [2, 0, 10],
    [12, 10, 0],
  ],
};

for (let i = 0; i < route.LINE_TWO.length; i++) {
  for (let j = 0; j < route.LINE_TWO.length; j++) {
    if (i === j) {
      continue;
    }
    lineTwoForTime(
      route.LINE_TWO[i],
      route.LINE_TWO[j],
      routeTime.LINE_TWO[i][j],
    );
  }
}
