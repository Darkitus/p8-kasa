import React from "react";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import homepageImage from "../../assets/bannerImage.png";

function Home() {
  return (
    <>
      <Banner
        bannerImage={homepageImage}
        bannerTitle="Chez vous, partout et ailleurs"
        shadow={true} // J'ai ajouté ce props pour ajouter une ombre à la bannière sur cette page uniquement
      />
      <Cards />
    </>
  );
}

export default Home;
