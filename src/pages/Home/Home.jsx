import React from "react";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import homepageImage from "../../assets/bannerImage.png";

function Home() {
  const cardProps = {
    $cardContainerBackgroundColor: "#f6f6f6",
    $cardContainerPadding: "43px 50px 50px 50px",
    $cardContainerGap: "50px 50px",
    $cardContainerMarginBottom: "50px",
    $cardContainerBackgroundColorWidth590px: "unset",
    $cardContainerGap590px: "20px 0px",
    $cardContainerPadding590px: "unset",
    $cardContainerMarginBottom590px: "27px",
    $cardsWidth1350px: "335px",
    $cardsHeight1350px: "300px",
    $cardsHeight590px: "255px",
    $invisibleCardDisplayNone1399px: "none",
    $invisibleCardDisplayNone1790px: "none",
  };

  const bannerProps = {
    $bannerContainerMarginBottom999px: "22px",
    $bannerImage: homepageImage,
    bannerTitle: "Chez vous, partout et ailleurs",
    $bannerImageShadow: true,
    $bannerImageBrightness: "40%",
    $bannerImageBorderRadius999px: "10px",
    $titleFontSize940px: "34px",
    $titleFontSize730px: "24px",
    $titleMaxWidth440px: "70%",
    $titlePositionLeft440px: "16px",
  };

  return (
    <>
      <Banner {...bannerProps} />
      <Cards {...cardProps} />
    </>
  );
}

export default Home;
