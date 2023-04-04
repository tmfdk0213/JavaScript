// arr(*****)
const arr = [10, 20, 30];
arr[0] = 100; // const는 값의 변화가 안된다고 하지 않았나?
// arr = 100
// arr = [10, 20, 30]
console.log(arr);
console.dir(arr); // 프러퍼티와 메서를 볼 수 있습니다.

// arr.1 // error
// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자입니다. 문자로 입력된 값은 .을찍어서 호출할 수 있습니다.
arr[1];
arr.length;
arr["length"];

// 두개가 같은 얘기입니다.
arr.length = 10;
arr[0] = 100;

// 프로퍼티를 추가하는 것도 가능합니다.
arr["leehojun"] = 100;
arr.hojun = 1000;

// 배열의 특징
// let arr = [];
// let arr = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3);
// Array(100).fill(0)

// 1. 배열은 순서가 있습니다. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 합니다. 배열 안에 값을 원소(elements)라고 합니다.
const arr = [10, 20, 30];
arr[0] = 100;

// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있습니다.
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

arr[0];
// [1, 2, 3]
arr[1];
// [4, 5, 6]
arr[2];
// [7, 8, 9]
arr[1][2];
// 6

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10; // 스칼라
const b = [10, 20, 30]; // 벡터
const c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 메트릭스
const d = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
]; // 텐서(3차원 이상의 다차원)

// 그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산입니다.

const arr = [1, 2, 3];
arr.push(4);

// push
const arr = [1, 2, 3];
arr.push(4);

// push 실무 예제
// let tableBodyData = []
//     for (const iterator of data) {
//         tableBodyData.push(`
//             <tr>
//                 <td>${iterator['a']}</td>
//                 <td>${iterator['b']}</td>
//                 <td>${iterator['c']}</td>
//                 <td>${iterator['d']}</td>
//                 <td>${iterator['e']}</td>
//                 <td>${iterator['f']}</td>
//             </tr>
//         `)
//     }
//     document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')
const arr = [1, 2, 3, 4, 5];
arr.pop();
// 1. 마지막에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
// 5
arr;
// (4) [1, 2, 3, 4]

// pop
const arr = [1, 2, 3, 4, 5];
let lastValue = arr.pop();
arr;

// unshift
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// shift
// 1. 앞에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ["사과", "바나나", "수박"];
// myArray2.shift();
// console.log(myArray2);

let firstValue = myArray2.shift();
firstValue;
// 사과

//문제(*****)
//||답변||으로 답해주세요
//pop, shift, unshift,push 에 대해 설명해주세요
//pop: 배열의 마지막 값을 꺼내고 그 값을 반환한다
//shift: 배열의 앞에서 값을 꺼내고 그 값을 반환한다
//unshift: 배열의 첫번째 요소에 그 값을 추가한다
//push : 배열의 마지막에 그 값을 추가한다

// 실무 팁(***)
let tip1 = [1, 2, 3, 4, 5];
// console.log(tip1[tip1.length-1])
// 원본 수정 없이 [1, 2, 3, 4] 값과 [5]라는 값을 얻어내고 싶을 때
console.log([...tip1].pop());
let tip2 = [...tip1];
console.log(tip2.pop());
console.log(tip2);

let tip3 = [1, 2, 3, 4, 5];
let tip4 = [10, 20, 30, 40, 50];

console.log([...tip3, 1000, ...tip4]);

const tip5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip5.flat());

const tip6 = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
];

tip6.flat();
tip6.flat(1);
tip6.flat(2);
tip6.flat(Infinity); // 다 펼쳐지면 스톱

const tip7 = new Array(10).fill(0); // Array(10).fill(0)도 됩니다.
const tip8 = Array.from("hello world");

// '.'.repeat(100).split('.') // 권하진 않습니다.

// map하고 다시 오겠습니다.
// const tip9 = Array(100).fill(0).map

// arr.splice(start, deleteCount, items)
const arr = [1, 2, 3];
arr.splice(1, 0, 4); // arr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, [10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, [10, 20, 30]를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

// 문제
// ||를 사용해서 답변해주세요.
const arr = [10, 20, 30, 40, 50];
const x = [1, 2, 3];
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
// splice만 사용하여 위처럼 만들어주세요.
arr.splice(1, 0, ...x);
arr.splice(7, 0, ...x);

const arr = [10, 20, 30, 40, 50];
arr.splice(2, 1, 5); // arr에 2번째에, 1개를 삭제하고, 5를 넣는다.
console.log(arr); // [10, 20, 5, 40, 50]
// arr.splice().splice() // 메서드 체이닝이 안되는 이유는 splice는 삭제된 값을 반환합니다.
