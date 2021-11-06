import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/component";

function App() {
  const handleName = () => {
    alert(fullName);
  };
  let fullName = "Amin",
    bio = "bio test",
    profession = "test";
  return (
    <div className="App">
      <Profile
        fullName={fullName}
        handleName={handleName}
        bio={bio}
        profession={profession}
      >
        <img src={logo} />
      </Profile>
    </div>
  );
}

export default App;
