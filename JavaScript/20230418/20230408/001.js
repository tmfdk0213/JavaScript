// https://paullabworkspace.notion.site/bd7905dbc2194415b429074e75cdb7f7
/* 💡 연습문제 1번

[1-1]. 다음 값의 평균을 구하세요.
[1-2]. 다음 값의 분산을 구하세요.
[*hint] 분산 => (각 값에 - 평균) ** 2 값들의 평균
[*hint] 또 다른 분산식 => 각값의 제곱의 평균 - 평균의 제곱
[*hint] 루트는 ** 0.5로 씌울 수 있다.

[10, 20, 30, 10, 20, 30, 40, 10]

*/

// --- 풀이 ---

/* 💡 연습문제 2번

[2]. 다음 string의 평균 값을 구하세요.
[*hint] '5, 4, 10, 2, 5'.split(',')

'5, 4, 10, 2, 5'

*/

// --- 풀이 ---

/* 💡 연습문제 3번

[3]. 다음 array의 각 자리수의 합을 구하세요.
[*hint] 문자열로 변환해서 풀어주세요!
// 1+1, 2+2, 3+3, 1+1+1, 2
// 2, 4, 6, 3, 2
// 정답 : 17

[11, 22, 33, 111, 2]

*/

// --- 풀이 ---

/* 💡 연습문제 4번

[4-1]. 반복문만 사용하여 숫자단위 콤마 찍기
예시) 100 1000 10000 100000 => 100 1,000 10,000 100,000
[4-2]. 반복문만 사용하여 숫자단위 콤마 없애기
얘시) 100 1,000 10,000 100,000 => 100 1000 10000 100000
[4-3]. 문자열 뒤집기
예시) 'hello world' => 'dlrow olleh'

*/

// --- 풀이 ---

/* 💡 연습문제 5번

[5]. 로또 번호를 추첨하는 코드를 작성해주세요.

*/

// --- 풀이 ---

//공 1개 뽑기
var num = Math.random() * 45 + 1;
var ball1 = parseInt(num);
document.write(ball1);

var lotto = [1, 2, 3, 4, 5, 6];
document.write(lotto[lotto]);

var lotto = [1, 2, 3, 4, 5, 6];
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
