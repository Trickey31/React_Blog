import Layout from "components/layout/Layout";
import HomeBanner from "module/home/HomeBanner";
import HomeFeature from "module/home/HomeFeatures";
import HomeNewest from "module/home/HomeNewest";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </div>
  );
};

export default HomePage;
