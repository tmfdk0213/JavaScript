const array = ['사과','배','귤','바나나']
console.log('#for in 반복문')
for (const i in array){
    console.log(i)
}
console.log('#for of.,ㅡ[-------------ㅈㄷ] 반복문')
for(const  i of array ){
    console.log(i)
}

//항등원
//어떤 값에 무엇을 더해야 값이 유지되냐
//1 + ??? = 원본이 유지되냐?
//덧셈은 0이 항등원(10+0=10)
//곱셈은 1이 항등원
//1~100까지 숫자를 곱하는 프로그램
let output = 1
for( i = 1; i <= 100; i++  ){
 for(let j = 1; j < i * j; j++){
    output += i
 }
}
console.log(`1~100의 숫자를 모두 곱하면, ${output}입니다`)