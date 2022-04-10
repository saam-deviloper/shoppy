import React, { useState } from "react";
//modal
import BasicModal from "./BasicModal";
//import styled button
import { Shittybutt } from "./shared/StyledComp";
//import image
import banner from "../component/assets/Images/banner.jpg";
import Style from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [isVisi, setIsVisi] = useState(false);
  //show modal
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
      ) : (
        <>
          <div className={Style.bannerContainer}>
            <div className={Style.banner1}>
              <img src={banner} alt="banner" />
              <div className={Style.banner_title}>
                <h1 style={{ color: "yellow", paddingLeft: "20px" }}>
                  React.Js
                </h1>
                <p style={{ color: "white" }}>Simple SHOP with RestfulApi</p>
                <p style={{ color: "white" }}>
                  Visit 
                  <Link
                    to={"/shop"}
                    style={{ color: "yellow", textDecoration: "none" }}
                  >
                    Shop
                  </Link>
                   section for more info...
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      {<hr />}
      <Shittybutt onClick={HandleDisplay}>Modal with portal</Shittybutt>
    </div>
  );
}
