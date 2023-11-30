import React from 'react';
import "./frontpage.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Frontpage = () => {
    const history=useHistory();
  return (
    <div className='frontpageMain'>
        <div className='frontPage'>
            <div className='frontpageText'>
              <span><h1>EASY</h1></span>
              <span><h1><b>LINK</b></h1></span>
            </div>
            <div className='frontpageImage'><img src="https://cdn6.aptoide.com/imgs/f/6/5/f65923195f1f1d5467634b2b63e1bc7c_icon.png" width="250" height="250"></img></div>
        </div>
        <div className='frontLoginButton'><button onClick={()=>history.push("/login")}>Login</button></div>
    </div>
  )
}

export default Frontpage