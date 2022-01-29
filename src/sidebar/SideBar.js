import "./SideBar.css";
const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className='sideBarItem'>
        <span className='sideBarTitle'>ABOUT US</span>
        <img
          src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg'
          alt=''
        />
        <p className='sideBarDescription'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio id
          dicta minima fuga sed veritatis soluta unde eum quisquam perspiciatis
          minus ipsa nisi impedit qui debitis vero, eveniet est? Odio.
        </p>
      </div>

      <div className='sideBarItem'>
        <span className='sideBarTitle'>CATEGORIES</span>
        <ul className='sideBarList'>
          <div className='sideBarListItem'>Life</div>
          <div className='sideBarListItem'>Music</div>
          <div className='sideBarListItem'>Style</div>
          <div className='sideBarListItem'>Sport</div>
          <div className='sideBarListItem'>Agriculture</div>
          <div className='sideBarListItem'>Tech</div>
        </ul>
      </div>
      <div className='sideBarItem'>
        <span className='sideBarTitle'>FOLLOW US</span>
        <div className='sideBarSocial'>
          <i className='sideBarIcon fab fa-facebook-square'></i>
          <i className='sideBarIcon fab fa-twitter-square'></i>
          <i className='sideBarIcon fab fa-pinterest-square'></i>
          <i className='sideBarIcon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
