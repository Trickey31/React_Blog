import React from "react";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
// import styled from "styled-components";
// const PostNewestLargeStyles = styled.div`
//   .post {
//     &-image {
//       display: block;
//       margin-bottom: 16px;
//       height: 433px;
//       img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         border-radius: 16px;
//       }
//     }
//     &-category {
//       display: inline-block;
//       padding: 8px 12px;
//       border-radius: 8px;
//       color: #6b6b6b;
//       font-size: 14px;
//       font-weight: 600;
//       background-color: #f3edff;
//       margin-bottom: 16px;
//     }
//     &-info {
//       display: flex;
//       align-items: center;
//       gap: 12px;
//       font-size: 14px;
//       font-weight: 600;
//       margin-left: auto;
//     }
//     &-dot {
//       display: inline-block;
//       width: 4px;
//       height: 4px;
//       background-color: currentColor;
//       border-radius: 100rem;
//     }
//     &-title {
//       font-weight: bold;
//       line-height: 1.5;
//       display: block;
//       font-size: 22px;
//       margin-bottom: 12px;
//     }
//   }
// `;

const PostNewestLarge = () => {
  return (
    <div>
      <PostImage
        url="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
        className="mb-4 h-[433px]"
      ></PostImage>
      <PostCategory className="mb-[10px]">Kiến Thức</PostCategory>
      <PostTitle size="big" className="mb-[10px]">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </PostTitle>
      <PostMeta></PostMeta>
    </div>
  );
};

export default PostNewestLarge;
