import { TITLE } from '../constants/constants.js';
import { $ } from '../utils/dom.js';

export const renderHeader = () => {
  const header = document.createElement('header');
  const main = document.createElement('main');
  header.innerHTML = `<h1>${TITLE}</h1>`;
  $('#app').appendChild(header);
  $('#app').appendChild(main);
};

export const renderInputForm = () => {
  const template = () => {
    return `
        <form id='search-form'>
            <div>
                <label>출발역</label>
                <input id='departure-station-name-input'></input>
            </div>
            <div>
                <label>도착역</label>
                <input id='arrival-station-name-input'></input>
            </div>
            <div>
                <input type="radio" id='distance' name="search-type" checked>최단거리</label>
                <input type="radio" id='time' name="search-type">최소시간</label>
            </div>
            <button id='search-button'>길 찾기</button>
        </form>
      `;
  };
  $('main').innerHTML += template();
};

export const renderResult = () => {};
