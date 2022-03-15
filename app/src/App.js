// import logo from './logo.svg';
// import './App.css';
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import MailContainer from "./Components/MailContainer/MailContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Header />
      <MailContainer />
    </div>
  );
}

export default App;
