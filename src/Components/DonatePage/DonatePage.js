import React from 'react';
import './DonatePage.css';
// import CallToAction from '../../Global/CallToAction/CallToAction';
// import BannerComponent from '../../Global/BannerComponent/Banner';
// import bannerImage from '../../../Assets/DonateBanner.png';

// const breadText = ["Home", "Support Us", "Donate"]
// const bannerInfo = {
//  bannerTitle: "DONATE",
//  backgroundImage: bannerImage,
// }


function DonatePage() {
  return (
    <>
      <div className="callToActionContainer">

        <div className="callToActionTop">
          <p className="ActionWords">Give the Gift of Learning by Supporting</p>
          <p className="ActionWords">our Organization</p>
          <img className="blueBarr" src={blueBarr}></img>
        </div>


        <div className="ButtonContainer">
          <button className="CallAbutton">$50</button>
          <button className="CallAbutton">$100</button>
          <button className="CallAbutton">$150</button>
          <button className="CallAbutton">OTHER</button>


        </div>
        <div className="yellowCircleDiv">
          <img src={yellowCircle}></img>
        </div>

        <div className="purpleCircleDiv">
          <img src={purple}></img>
        </div>

        <div className="greenCircleDiv">
          <img src={greenCircle}></img>
        </div>

        <div className="redCircleDiv">
          <img src={redVector}></img>
        </div>
        {/* <img className="greenCircle" src={greenCircle}></img>
        <img className="yellowCircle" src={yellowCircle}></img>
          <img className="redVector" src={redVector}></img>
        <img className="blueVector" src={blueVector}></img>
     */}
        <div className="CallToActionNotes">
          <p>100% of your donations are invested in programs support and delivrery</p>
          <p>Donation of all amounts are appreciated and reconized on our social media.</p>
        </div>
      </div>




      {/* <BannerComponent breadCrumbText={breadText} info={bannerInfo}/> */}
      <div className="DonatePageContainer">
        {/* <CallToAction/> */}

        <button className="">
        </button>
      </div>
    </>
  )

}
export default DonatePage;
