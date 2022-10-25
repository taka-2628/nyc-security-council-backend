import NavFullScreen from "./NavFullScreen";
import '../stylesheets/Home.css';

function Home(){
  return(
    <div id="home">
      <NavFullScreen />
      <div id="dark-filter"></div>
      <div id="title-animation-cont">
        <div id="title-animation-wrapper">
          <h1>New York City Security Council</h1>
          <h1 className="title-second">New York City Security Council</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;
