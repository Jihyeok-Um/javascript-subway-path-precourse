import { $ } from './utils/dom.js';
import { renderHeader, renderInputForm } from './view/render.js';
import { getDistanceResult, getTimeResult } from './core/getResult.js';

function App() {
  $('head').innerHTML = `<link rel="stylesheet" href="src/style.css"/>`;
  renderHeader();
  renderInputForm();

  const handleSubmit = e => {
    e.preventDefault();

    if ($('#distance').checked === true) {
      getDistanceResult();
    } else if ($('#time').checked === true) {
      getTimeResult();
    }
  };

  $('#search-form').addEventListener('submit', handleSubmit);
}

new App();
