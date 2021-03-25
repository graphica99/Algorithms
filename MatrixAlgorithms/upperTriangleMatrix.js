class UpperTriangleMatrix {
  constructor(arr) {
    this.arr = arr;
  }

  //column major insertion
  setUpperTriangle(i, j, value) {
    if (i <= j) {
      var index = (j * (j - 1)) / 2 + i - 1;
      this.arr[index] = value;
    }
    // console.log(this.arr);
  }

  displayUpperTriangle() {
    for (var x = 0; x < this.arr.length; x++) {
      for (var y = 0; y < this.arr.length; y++) {
        if (x <= y) {
          var index = (index = (y * (y - 1)) / 2 + x - 1);
          console.log(this.arr[index]);
        } else {
          // console.log(0);
        }
      }
    }
  }
}

var upperTriangleMatrix = new UpperTriangleMatrix([]);
upperTriangleMatrix.setUpperTriangle(1, 1, 8);
upperTriangleMatrix.setUpperTriangle(2, 2, 25);
upperTriangleMatrix.setUpperTriangle(1, 5, 71);
upperTriangleMatrix.setUpperTriangle(2, 5, 3);
upperTriangleMatrix.setUpperTriangle(3, 3, 6);
upperTriangleMatrix.setUpperTriangle(5, 5, 7);
upperTriangleMatrix.displayUpperTriangle();
