// Convierte el array **result** en un array de strings con números de 3 cifras y completando con ceros a la izquierda los números que tengan menos de 3 cifras.

const array1 = [
  [1, 3, 5],
  [7, 9, 7],
  [5, 3, 1],
];

const array2 = [
  [2, 4, 6],
  [8, 10, 8],
  [6, 4, 2],
];

function multiply() {
  row_m1 = array1.length;
  col_m1 = array1[0].length;
  row_m2 = array2.length;
  col_m2 = array2[0].length;

  if (col_m1 != row_m2) throw "No se pueden multiplicar las matrices";

  let result = new Array(row_m1);
  for (x = 0; x < result.length; x++) result[x] = new Array(col_m2).fill(0);

  for (x = 0; x < result.length; x++) {
    for (y = 0; y < result[x].length; y++) {
      for (z = 0; z < col_m1; z++) {
        result[x][y] = result[x][y] + array1[x][z] * array2[z][y];
      }
    }
  }
  console.log(result);
}

multiply();

function stringAndPad() {
  row_m1 = array1.length;
  col_m1 = array1[0].length;
  row_m2 = array2.length;
  col_m2 = array2[0].length;

  if (col_m1 != row_m2) throw "No se pueden multiplicar las matrices";

  let result = new Array(row_m1);
  for (x = 0; x < result.length; x++) result[x] = new Array(col_m2).fill(0);

  for (x = 0; x < result.length; x++) {
    for (y = 0; y < result[x].length; y++) {
      for (z = 0; z < col_m1; z++) {
        result[x][y] = result[x][y] + array1[x][z] * array2[z][y];
      }
    }
  }

  console.log(result);

  //--------------------------------1. 1st conversion (3 strings)

  let arrOfStr = result.map((arr) => {
    return String(arr);
  });

  console.log(arrOfStr);

  //--------------------------------2. 2nd conversion (9 string)

  const arrayOfStringNumbers = arrOfStr.flatMap((arr) => arr.split(","));
  console.log(arrayOfStringNumbers);

  // ------------------------------ 3. Pad with leading 0

  const solution = arrayOfStringNumbers.map((num) => {
    if (num.length < 3) {
      num = "0" + num;
    }
    return num;
  });

  console.log(solution);
}

stringAndPad();
