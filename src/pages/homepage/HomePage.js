import "./HomePage.css";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import SideBar from "../../sidebar/SideBar";

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <div className='homePage'>
        <Posts></Posts>
        <SideBar></SideBar>
      </div>
    </>
  );
};

export default HomePage;
