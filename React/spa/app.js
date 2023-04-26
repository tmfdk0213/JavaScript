const container = document.querySelector("#root");

// 환경변수
const NEWSLIST_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/$id.json";

// api 데이터 받아오는 함수
async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("네트워크에 문제가 있습니다.");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function newsFeed() {
  const newsFeed = await getData(NEWSLIST_URL);
  console.log(newsFeed);
  const newsList = [];

  newsList.push("<ul>");

  for (let i = 0; i < 10; i++) {
    newsList.push(`
            <li>
                <a href="#/detail">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
            </li>
        `);
  }

  newsList.push("</ul>");

  container.innerHTML = newsList.join("");
}

newsFeed();

async function newsDetail() {
  const id = location.hash.substring(9);
  const newsContent = getData(CONTENT_URL.replace("$id", id));
  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div><a>목록으로 돌아가기</a></div>`;

  console.log(newsContent);
}

//라우터 : 화면을 중계하는 함수
