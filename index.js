function getFirstSelector(selector) {
return document.querySelector(selector);
}

function nestedTarget() {
return document.querySelector('#nested .target');

}

function increaseRankBy(n) {
  var sel = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < sel.length; i++) {
    sel[i].innerHTML = sel[i] + n;
  }
  return sel;
}

function deepestChild() {
  var sel = document.querySelectorAll('#grand-node div');
  var temp = sel[sel.length - 1];
  return temp;

  }
