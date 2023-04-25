*
***
*****
*******
*********
***********
*************
***************
*****************
//피라미드만들기

let output = "";
for (i = 0; i < 9; i++) {
  for (let j = 0; j < i + 1; j++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);
//i + 1 = 1,2,3,4,5
//2 * i = 1,3,5,7,9

////앞에 띄어쓰기 추가하기
let output = "";
for (i = 0; i < 9; i++) {
  output += " ";
  for (let j = 0; j < i + 1; j++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);
//i + 1 = 1,2,3,4,5
//2 * i = 1,3,5,7,9

//띄어쓰기 갯수 늘리기
let output = "";
for (i = 0; i < 9; i++) {
  for (k = 0; k < i + 1; k++) {
    output += " ";
  }
  for (let j = 0; j < i + 1; j++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);

//반대로 띄어쓰기 갯수 늘리기
let output = "";
for (i = 0; i < 9; i++) {
  for (k = 0; k < 9 - i + 1; k++) {
    output += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);

//p193 예제4번문제

let output = "";
for (i = 0; i < 9; i++) {
    for (k = 0; k < 9 - i + 1; k++) {
      output += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      output += "*";
    }
    output += "\n";
  }

  
for (i = 0; i < 10; i++) {
  for (k = 0; k < i + 1; k++) {
    output += " ";
  }
  for (let j = 0; j < 2 *(9 - i) + 1; j++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);
