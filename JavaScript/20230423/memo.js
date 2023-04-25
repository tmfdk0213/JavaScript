//기능
//1.입력할수 있어야함
//2저장기능
//2-1입력한 값 가져오기
//2-2가져온걸 저장하기
//2-3저장하고 입력한 곳 초기화
//삭제
//저장된거 불러오기
//화면에 불러오기
//메모들을 가져와야함
//가져온 메모를 화면에 보여준다
//수정하기
//
function getMemoTitle() {
  const memoTitle = document.querySelector("#memotitle").value;
  return memoTitle;
}
function getMemoContent() {
  const memoContent = document.querySelector("#memo").value;
  return memoContent;
}

function resetInput() {
  document.querySelector("#memotitle").value = "";
  document.querySelector("#memo").value = "";
}

function createMemo() {
  const title = getMemoTitle();
  const content = getMemoContent();

  const memoObj = {
    title: title,
    content: content,
  };

  return memoObj;
}

const memolists = [];

function saveMemo(memo) {
  memolists.push(memo);
}

function createMemoLi(memo) {
  const $memoLi = document.createElement("li");
  const $title = document.createElement("strong");
  const $content = document.createElement("p");

  $title.innerHTML = memo.title;
  $content.innerHTML = memo.content;
  $memoLi.append($title, $content);
  return $memoLi;
}

function showMemo() {
  const $memoLists = [];
  for (let index = 0; index < memolists.length; index++) {
    // const memoObj = {
    //     title: title,
    //     content: content
    // }
    // 이렇게 생긴 메모 하나 가져오기
    const memo = memolists[index];

    const $memoLi = document.createElement("li");
    const $title = document.createElement("strong");
    const $content = document.createElement("p");

    $title.innerHTML = memo.title;
    $content.innerHTML = memo.content;
    $memoLi.append($title, $content);

    $memoLists.push($memoLi);
  }
  console.log($memoLists);
}

function buttonOnclickHandler() {
  const memo = createMemo();
  saveMemo(memo);
  showMemo();
  resetInput();
}

const $memoButton = document.querySelector("#memosubmit");
$memoButton.onclick = buttonOnclickHandler;
