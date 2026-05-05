import Nav from "../Nav";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  return (
    <div style={styles.wrap}>
      <Nav />
      <span style={styles.badge}>path="/"</span>
      <h1 style={styles.title}>🏠 홈 페이지</h1>
      <p style={styles.sub}>
        BrowserRouter가 "/" URL을 감지해서 이 컴포넌트를 렌더링했어요.
      </p>
      <button style={styles.btn} onClick={() => navigate("/about")}>
        소개 페이지로 이동 →
      </button>
    </div>
  );
}
export default Home;

const styles = {
  wrap: {
    minHeight: "100vh",
    background: "#0f0f0f",
    color: "#f0f0f0",
    fontFamily: "monospace",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    padding: "2rem",
  },
  nav: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  },
  link: {
    color: "#FCD535",
    textDecoration: "none",
    fontSize: "14px",
    padding: "6px 14px",
    border: "1px solid #FCD535",
    borderRadius: "4px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: 0,
  },
  sub: {
    fontSize: "1rem",
    color: "#888",
    margin: 0,
  },
  btn: {
    marginTop: "1rem",
    padding: "10px 24px",
    background: "#FCD535",
    color: "#0f0f0f",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
  },
  badge: {
    fontSize: "12px",
    background: "#1e1e1e",
    border: "1px solid #333",
    padding: "4px 10px",
    borderRadius: "99px",
    color: "#888",
  },
} as const;