// Profile.jsx
function Profile(props) { // props = 객체
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  )
}

export default Profile