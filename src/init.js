import Dijkstra from './utils/Dijkstra.js';

export const lineTwoForTime = new Dijkstra();
export const lineThreeForTime = new Dijkstra();
export const sinbundangLineForTime = new Dijkstra();

export const lineTwoForDistantce = new Dijkstra();
export const lineThreeForDistantce = new Dijkstra();
export const sinbundangLineForDistantce = new Dijkstra();

export const stationsList = [
  '교대',
  '강남',
  '역삼',
  '남부터미널',
  '양재',
  '양재시민의숲',
  '매봉',
];
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
    [0, 3, 100],
    [3, 0, 3],
    [100, 3, 0],
  ],
  LINE_THREE: [
    [0, 2, 100, 100],
    [2, 0, 5, 100],
    [100, 5, 0, 1],
    [100, 100, 1, 0],
  ],
  SINBUNGDANG_LINE: [
    [0, 8, 100],
    [8, 0, 3],
    [100, 3, 0],
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

//2호선
for (let i = 0; i < route.LINE_TWO.length; i++) {
  for (let j = 0; j < route.LINE_TWO.length; j++) {
    lineTwoForTime.addEdge(
      route.LINE_TWO[i],
      route.LINE_TWO[j],
      routeTime.LINE_TWO[i][j],
    );
  }
}

for (let i = 0; i < route.LINE_TWO.length; i++) {
  for (let j = 0; j < route.LINE_TWO.length; j++) {
    lineTwoForDistantce.addEdge(
      route.LINE_TWO[i],
      route.LINE_TWO[j],
      routeDistantce.LINE_TWO[i][j],
    );
  }
}

//3호선
for (let i = 0; i < route.LINE_THREE.length; i++) {
  for (let j = 0; j < route.LINE_THREE.length; j++) {
    lineThreeForTime.addEdge(
      route.LINE_THREE[i],
      route.LINE_THREE[j],
      routeTime.LINE_THREE[i][j],
    );
  }
}

for (let i = 0; i < route.LINE_THREE.length; i++) {
  for (let j = 0; j < route.LINE_THREE.length; j++) {
    lineThreeForDistantce.addEdge(
      route.LINE_THREE[i],
      route.LINE_THREE[j],
      routeDistantce.LINE_THREE[i][j],
    );
  }
}

//신분당선
for (let i = 0; i < route.SINBUNGDANG_LINE.length; i++) {
  for (let j = 0; j < route.SINBUNGDANG_LINE.length; j++) {
    sinbundangLineForTime.addEdge(
      route.SINBUNGDANG_LINE[i],
      route.SINBUNGDANG_LINE[j],
      routeTime.SINBUNGDANG_LINE[i][j],
    );
  }
}

for (let i = 0; i < route.SINBUNGDANG_LINE.length; i++) {
  for (let j = 0; j < route.SINBUNGDANG_LINE.length; j++) {
    sinbundangLineForDistantce.addEdge(
      route.SINBUNGDANG_LINE[i],
      route.SINBUNGDANG_LINE[j],
      routeDistantce.SINBUNGDANG_LINE[i][j],
    );
  }
}
