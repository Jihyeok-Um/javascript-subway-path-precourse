import { TITLE } from '../constants/constants.js';
import { $ } from '../utils/dom.js';

export const renderHeader = () => {
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  header.innerHTML = `<h1>${TITLE}</h1>`;
  $('#app').appendChild(header);
  $('#app').appendChild(main);
  $('#app').appendChild(footer);
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
  $('main').innerHTML = template();
};

export const renderResult = result => {
  renderResultTable();
  renderResultTableItem(result);
};

export const renderResultTable = () => {
  const template = () => {
    return `
        <h2>결과</h2>
        <h3>최단거리</h3>
        <table>
          <thead>
            <th>총 거리</th>
            <th>총 소요 시간</th>
          </thead>
          <tbody></tbody>
        </table>
    `;
  };
  $('footer').innerHTML = template();
};

export const renderResultTableItem = result => {
  const template = () => {
    return `
        <td>${result[2]}km</td>
        <td>${result[1]}분</td>
        <tr>
        <td colspan="2">${result[0]}</td>
    `;
  };
  $('tbody').innerHTML = template();
};
