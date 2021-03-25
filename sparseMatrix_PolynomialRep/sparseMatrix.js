const element = {
  i: [],
  j: [],
  x: [],
};

const sparse = {
  m: this.m,
  n: this.n,
  num: this.num,
  element: element,
};

function create(sprs) {
  sprs.m = 4;
  sprs.n = 5;
  sprs.num = 5;
  for (var i = 0; i <= sprs.num; i++) {
    //for other programming language accept input from console
    sprs.element.i[i] = i + 1;
    sprs.element.j[i] = i + 2;
    sprs.element.x[i] = i + 5;
  }
  sprs;
}
create(sparse);
