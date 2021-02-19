const { userName, userDetail } = require('./data');
const render = require('./render');
const userNameList = document.querySelector('#user-list');

let curr = window.location.hash.slice(1)*1

const _render = ()=>{
  render({userNameList, userName, userDetail, curr});
}

_render();

window.addEventListener('hashchange', ()=>{
  curr = window.location.hash.slice(1)*1;
  _render();
})


