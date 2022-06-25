import Heading from "components/layout/Heading";
import PostItem from "module/post/PostItem";
import PostNewestItem from "module/post/PostNewestItem";
import PostNewestLarge from "module/post/PostNewestLarge";
import React from "react";
// import styled from "styled-components";

// const HomeNewestStyles = styled.div`
//   .layout {
//     display: grid;
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//     grid-gap: 40px;
//     margin-bottom: 64px;
//     align-items: start;
//   }
//   .sidebar {
//     padding: 28px 20px;
//     background-color: #f3edff;
//     border-radius: 16px;
//   }
// `;

const HomeNewest = () => {
  return (
    <div className="home-block pb-10 lg:pb-[60px]">
      <div className="container">
        <Heading>Mới nhất</Heading>
        <div className="grid grid-cols-2 gap-10 items-start mb-16">
          <PostNewestLarge></PostNewestLarge>
          <div className="px-7 py-5 bg-[#f3edff] rounded-2xl">
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
          </div>
        </div>
        <div className="grid-layout grid-layout--primary grid auto-cols-[220px] gap-4 lg:grid-cols-4 lg:gap-12">
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
        </div>
      </div>
    </div>
  );
};

export default HomeNewest;
