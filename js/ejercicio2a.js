// Dados los arrays de arrays **array1** y **array2** obtén un nuevo array llamado **result** que sea el resultado de multiplicar las filas de primero por las columnas del segundo - multiply rows of first array by columns of second array

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
