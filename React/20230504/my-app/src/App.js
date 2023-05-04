import "./App.css";
import Menu from "./components/menu/Menu";
import NewMenu from "./components/newMenu/NewMenu";

import "./App.css";
import TripList from "./components/tripList/TripList";

function App() {
  return (
    <div>
      <TripList />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <NewMenu />
//       <Menu />
//       <h1 hello="hi">안녕 라이캣!!</h1>
//       <h1 style={{}}>안녕 라이캣 2호!!</h1>
//     </div>
//   );
// }

// export default App;

// {/* {js 내부 주석입니다} */}
//     {/* 숫자형은 {10}중괄호로 감싸준다 */}
//     {/* 인라인스타일은 {{}}이렇게 두개로 감싸준다 */}
// 맞춰보세요!
// 아래와 같은 JSX 코드가 있습니다! 어떤점이 잘못되었는지 맞춰보세요 🙂
// function TextArea() {
//   return (
//     <div class="wrapper">
//       <textarea
//         readonly
//         maxlength=3
//         style={"background-color: blue;"}
//       />
//     </div>
//   );
// }

//A.숫자에 중괄호를 써야한다!!!{3}

//실습

// function App() {
// 	const name = '라이캣!';
//   const someStyle = {backgroundColor:"black", color:"white"};
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth()+1;
//   const date = today.getDate();
//   const hour = today.getHours();
//   const min = today.getMinutes();
//   const sec = today.getSeconds();

//   return (
//     <div>
//       <div>
//         <h1 style={someStyle}>안녕, {name} 1호</h1>
//         <h1>안녕, 라이캣 2호!</h1>
//         <div className="newClass"/>
//       </div>
//       <div style={{backgroundColor:"black", color:"white"}}>
//         <h1 style={{color:'red'}}>년 : {year}</h1>
//         <h1>월/일 : {month}/{date}</h1>
//         <h1>시간 : {hour}시 {min}분 {sec}초</h1>
//       </div>
//     </div>
//   );
// }

// export default App;
