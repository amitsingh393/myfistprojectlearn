import logo from './logo.svg';
import './App.css';
import img1 from './dsfd.jpg';
import img2 from './vv.jpg';
import img3 from './cghdfgh.jpg';
function App() {
  return (
    <>
      <div className='navbar'>
        <div className="img">
         <img src={img3}/>
        </div>
        <div className='home'>
          <a href="*">Home</a>
        </div>
        <div className='about'>
          <a href="*">ABOUT</a>
        </div>
        <div className='service'>
          <a href="*">SERVICE</a>
        </div>
        <div className='product'>
          <a href="*">PRODUCT</a>
        </div>
        <div className='contact'>
          <a href="*">CONTACT</a>
        </div>

        <div className="A">
          <div className="login">
            <a href="*">LOGIN</a>
          </div>
          <div className="some">
            <a href="*">SOME</a>
          </div>
        </div>

       
      </div>
       <div className="navbar1 navbar">
<div className="img">
        </div>

        <div className='home'></div>
        <div className='about'></div>
        <div className='service'></div>
        <div className='product'></div>
        <div className='contact'></div>

        <div className="A">
          <div className="login"></div>
          <div className="some"></div>
        </div>
       </div>
       <div className='containeer'>
        <div className='containeer1'>
           <img src={img1} />
        </div>
        <div className='containeer2 containeer1'>
        <img src={img2}/>
       </div>
       </div>
       </>

  );
}

export default App;
