class LowerTriangleMatrix {
  constructor(arr) {
    this.arr = arr;
  }
  //   set() {
  //     this.arr = new Array(4);
  //     for (var i = 0; i < this.arr.length; i++) {
  //       this.arr[i] = new Array(4);
  //     }
  //   }

  //   chuckArr(arr,numberOfChunks)
  // chuckArr(arr,numberOfChunks){
  //     //eg arr [1, 2, 4, 5, 8, 9, 1, 2, 4, 5];
  //     ///num of chuncks 4
  //     //result  = [[1],[2,4],[5,8,9],[1,2,4,5]];
  //     var result = new Array(numberOfChunks);
  //     for(var i = 0; i < numberOfChunks; i++){
  //         result[i] = new Array(i+1)
  //     }
  //   }

  //   insertData(data) {
  //     this.set();
  //     for (var j = 0; j < this.arr.length; j++) {
  //       for (var l = 0; l < this.arr[j].length; l++) {
  //         this.arr[j][l] = 0;
  //       }
  //       for (var k = 0; k <= j; k++) {
  //         if (j >= k) {
  //           this.arr[j][k] = data[j];
  //         }
  //       }
  //     }
  //   }

  // Row major insertion.
  insertData(i, j, value) {
    if (i >= j) {
      var index = (i * (i - 1)) / 2 + j - 1;
      this.arr[index] = value;
    }
  }

  //column major insertions
  //   insertDataColumnMajor(i,j,value){

  //   }

  displayMatrix() {
    for (var x = 0; x < this.arr.length; x++) {
      for (var y = 0; y < this.arr.length; y++) {
        if (x >= y) {
          var index = (x * (x - 1)) / 2 + y - 1;
          console.log(this.arr[index]);
        }
        // console.log(0);
      }
    }
  }
}

const lowerTMatrix = new LowerTriangleMatrix([]);
lowerTMatrix.insertData(0, 0, 3);
lowerTMatrix.insertData(1, 1, 8);
lowerTMatrix.insertData(2, 1, 9);
lowerTMatrix.insertData(2, 2, 6);
lowerTMatrix.insertData(3, 1, 11);
lowerTMatrix.insertData(3, 2, 7);
lowerTMatrix.displayMatrix();
