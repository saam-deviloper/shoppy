import React, { useState } from "react";
//modal
import BasicModal from "./BasicModal";
//import styled button
import { Shittybutt } from "./shared/StyledComp";
//import image
import banner from "../component/assets/Images/banner.jpg";
import banner2 from "../component/assets/Images/banner2.png";

import Style from "./Home.module.css";

export default function Home() {
  const [isVisi, setIsVisi] = useState(false);

  const HandleDisplay = () => {
    setIsVisi((prevVisi) => !prevVisi);
  };

  return (
    <div>
       {isVisi ? (
        <BasicModal onClose={HandleDisplay} isVisible={isVisi}>
          <h1>Hello World</h1>
          <h3>Modal with Portal</h3>
          <p>click over to close</p>
        </BasicModal>
      ):
      (<div className={Style.bannerContainer}>
       <div className={Style.banner1}>
         <img src={banner}  alt="banner"/>
         <div className={Style.banner_title} >
           <h1 style={{color:'yellow',paddingLeft:'20px'}} >React.Js</h1>
           <p style={{color:'white',fontWeight:'700',fontSize:"2.5rem"}}>Simple SHOP with RestfulApi</p>
           <p style={{color:'white',fontWeight:'700',fontSize:"2rem"}}>Visit Store for more info...</p>

         </div>
       </div>
       <div className={Style.banner2}>
       <img src={banner2} alt="banner2"/>
       </div>
      </div>)
      }

      <Shittybutt onClick={HandleDisplay}>Modal with portal</Shittybutt>
      {/* <Button variant='success' className="w-25 mx-2" >Bootstrap butt</Button> */}
    </div>
  );
}
