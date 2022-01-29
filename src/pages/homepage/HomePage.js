import "./HomePage.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";

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
