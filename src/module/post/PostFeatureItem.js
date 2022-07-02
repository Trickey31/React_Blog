import React from "react";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostFeatureItem = () => {
  return (
    <div className="w-full rounded-2xl relative h-[169px] lg:h-[272px]">
      <PostImage
        url="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
        className="w-full h-full"
      ></PostImage>
      <div className="post-overlay absolute inset-0 rounded-2xl opacity-60 mix-blend-multiply bg-secondary-gradient"></div>
      <div className="absolute inset-0 z-10 p-5 text-white">
        <div className="flex justify-between items-center mb-4">
          <PostCategory>Kiến Thức</PostCategory>
          <PostMeta></PostMeta>
        </div>
        <PostTitle size="big">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
      </div>
    </div>
  );
};

export default PostFeatureItem;
