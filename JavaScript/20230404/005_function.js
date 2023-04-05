// 함수의 일반적인 형태
// 파선아실
function one(a, b) {
  // 1
  let z = a + b; // 2
  return z ** 2; // 3
}

console.log(one(7, 3));
console.log(one(7, 3));

// 화살표 함수
const two = (a, b) => (a + b) ** 2;
console.log(two(7, 3));
console.log(two(7, 3));

// 이름 없이 선언하는 함수
const three = function (a, b) {
  // 1
  let z = a + b; // 2
  return z ** 2; // 3
};

console.log(three(7, 3));
console.log(three(7, 3));

// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function four(a, b, c) {
  let z = c(a, b) + c(a, b);
  return z * 2;
}

four(7, 3, one);

// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없습니다.
// 외부에서 직접 값을 가져오는 것을 지양해주세요.
function four(a, b, c) {
  let z = one(a, b) + one(a, b);
  return z * 2;
}

four(7, 3, one);

// 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics

//함수와 메서드(클래스 안에서 사용되는 함수 )
//. 을 찍어 접근할 수 있는 함수다? => 메서드
//함수란?
//함수를 호출 할 수 있는 이름은 결국 변수입니다.
let x = console.log;
x("hello");
