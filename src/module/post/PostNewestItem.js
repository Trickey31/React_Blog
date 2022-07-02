import React from "react";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
// import styled from "styled-components";
// const PostNewestItemStyles = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   margin-bottom: 28px;
//   padding-bottom: 28px;
//   border-bottom: 1px solid #ccc;
//   &:last-child {
//     padding-bottom: 0;
//     margin-bottom: 0;
//     border-bottom: 0;
//   }
//   .post {
//     &-image {
//       display: block;
//       flex-shrink: 0;
//       width: 180px;
//       height: 130px;
//       img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         border-radius: 12px;
//       }
//     }
//     &-category {
//       display: inline-block;
//       padding: 8px;
//       border-radius: 8px;
//       color: #6b6b6b;
//       font-size: 12px;
//       font-weight: 600;
//       background-color: white;
//       margin-bottom: 8px;
//     }
//     &-info {
//       display: flex;
//       align-items: center;
//       gap: 12px;
//       font-size: 14px;
//       font-weight: 600;
//       margin-left: auto;
//       color: #6b6b6b;
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
//       font-size: 16px;
//       margin-bottom: 8px;
//     }
//   }
// `;
const PostNewestItem = () => {
  return (
    <div className="flex items-center gap-5 mb-7 pb-7 border-b last:m-0 last:border-0">
      <PostImage
        url="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
        className="flex-shrink-0 w-[180px] h-[130px]"
      ></PostImage>
      <div className="post-content">
        <PostCategory type="secondary" className="mb-2">
          Kiến Thức
        </PostCategory>
        <PostTitle>
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
        <PostMeta></PostMeta>
      </div>
    </div>
  );
};

export default PostNewestItem;
