function getFirstSelector(selector) {
  return document.querySelector(selector);
}

<<<<<<< HEAD
function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + 1;
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div');
=======
function nestedTarget(){
  document.getElementById('nested').getElementByClassName('target');
>>>>>>> a81cd8ea984a60fd8a762d62d40666b4cc9604c0
}
