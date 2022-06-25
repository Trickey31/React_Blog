import Heading from "components/layout/Heading";
import PostFeatureItem from "module/post/PostFeatureItem";
import React from "react";

const HomeFeature = () => {
  return (
    <div className="home-block pb-10 lg:pb-[60px]">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        <div className="grid-layout grid auto-cols-[235px] gap-4 lg:grid-cols-3 lg:gap-12">
          <PostFeatureItem></PostFeatureItem>
          <PostFeatureItem></PostFeatureItem>
          <PostFeatureItem></PostFeatureItem>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
