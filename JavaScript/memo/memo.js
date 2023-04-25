function addTodo() {
  const addValue = document.getElementById("addValue").value;

  allMemo.push({ title, content, len: allMemo.length });

  localStorage.setItem("allMemo", JSON.stringify(allMemo));
  render();
}

function render() {
  const display = document.getElementById("display");
  display.innerHTML = "";

  // // 최신 게시물이 위로 올라오도록
  // for (let i = allMemo.length; i > 0 ; i--) {
  //     // 아래와 유사 코드
  // }

  for (const item of allMemo) {
    const saveTitle = document.createElement("h2");
    const saveContent = document.createElement("p");
    const saveId = document.createElement("p");
    const deleteMemoBtn = document.createElement("button");

    saveTitle.textContent = item.title;
    saveContent.textContent = item.content;
    saveId.textContent = item.len + 1;
    deleteMemoBtn.textContent = "삭제";
    deleteMemoBtn.setAttribute("id", item.len);
    deleteMemoBtn.setAttribute("onclick", "remove()");

    display.appendChild(saveId);
    display.appendChild(saveTitle);
    display.appendChild(saveContent);
    display.appendChild(deleteMemoBtn);
  }
}

function remove() {
  // console.log(event.srcElement.id);
  // console.log(allMemo);
  const idx = allMemo.find((item) => item.len == event.srcElement.id);
  if (idx) {
    allMemo.splice(
      allMemo.findIndex((item) => item.len == idx.len),
      1
    );
  }
  localStorage.setItem("allMemo", JSON.stringify(allMemo));
  render();
}
