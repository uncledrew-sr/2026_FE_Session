import { Link } from "react-router-dom";

function Nav() {
  return (
    <div style={styles.nav}>
      <Link to="/" style={styles.link}>
        홈
      </Link>
      <Link to="/about" style={styles.link}>
        소개
      </Link>
      <Link to="/post/1" style={styles.link}>
        게시글 1
      </Link>
      <Link to="/post/2" style={styles.link}>
        게시글 2
      </Link>
      <Link to="/post/999" style={styles.link}>
        게시글 999
      </Link>
      <Link to="/없는페이지" style={styles.link}>
        없는 페이지
      </Link>
    </div>
  );
}
export default Nav;


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
};