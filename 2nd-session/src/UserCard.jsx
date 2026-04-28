function UserCard({ name, job, color }) {
  const cardStyle = {
    backgroundColor: color,
    padding: '15px',
    borderRadius: '10px',
    margin: '10px',
    color: 'white'
  };

  return (
    <div style={cardStyle}>
      <h2>이름: {name}</h2>
      <p>직업: {job}</p>
    </div>
  );
}

export default UserCard;