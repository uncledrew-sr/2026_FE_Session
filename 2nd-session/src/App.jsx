// App.jsx
import { useState } from "react";
import Hello from "./Hello"
import Profile from "./Profile"
import UserCard from "./UserCard";
import Timer from "./Timer";

function App(){
  const [showTimer, setShowTimer] = useState(false);
  
  return(
    <>
        <div>
            <h1>메인 화면</h1>
            <Hello /> {/* 컴포넌트 사용법 */}
            <Hello />
            <Hello />
        </div>
        <div>
            <h1>프로필 목록</h1>
            <Profile name="CHOI" job="DevOps" />
            <Profile name="KIM" job="디자이너" />
            <Profile name="PARK" job="백엔드 개발" />
        </div>
        <div style={{ display: 'flex' }}>
            <UserCard name="철수" job="개발자" color="royalblue" />
            <UserCard name="영희" job="디자이너" color="tomato" />
            <UserCard name="지성" job="PM" color="seagreen" />
        </div>
        <div style={{ padding: '20px' }}>
            <h1>리액트 생명 주기 테스트</h1>
            <button onClick={() => setShowTimer(!showTimer)}>
                {showTimer ? "타이머 숨기기" : "타이머 보이기"}
            </button>
            {/* 조건부 렌더링: showTimer가 true일 때만 Mount */}
            {showTimer && <Timer />}
        </div>
    </>
  )
}

export default App;