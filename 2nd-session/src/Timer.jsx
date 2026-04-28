import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. Mount 시점에 타이머 시작
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("타이머 작동 중");
    }, 1000);

    // 2. Unmount 시점에 타이머 멈춤
    return () => {
      clearInterval(timerId);
      console.log("타이머 종료");
    };
  }, []); // 빈 배열: Mount/Unmount 시에만 실행

  return (
    <div style={{ border: '2px solid red', padding: '20px' }}>
      <h2>타이머: {seconds}초</h2>
    </div>
  );
}

export default Timer;