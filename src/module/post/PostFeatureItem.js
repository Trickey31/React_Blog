import { db } from "firebase-app/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import slugify from "slugify";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostFeatureItem = ({ data }) => {
  const [category, setCategory] = useState([]);
  const [user, setUser] = useState("");
  useEffect(() => {
    async function fetch() {
      const docRef = doc(db, "categories", data.categoryId);
      const docSnap = await getDoc(docRef);
      setCategory(docSnap.data());
    }
    fetch();
  }, [data.categoryId]);
  useEffect(() => {
    async function fetchUser() {
      if (data.userId) {
        const docRef = doc(db, "users", data.userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.data) setUser(docSnap.data());
      }
    }
    fetchUser();
  }, [data.userId]);
  if (!data || !data.id) return null;
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  return (
    <div className="w-full rounded-2xl relative h-[169px] lg:h-[272px]">
      <PostImage url={data.image} className="w-full h-full"></PostImage>
      <div className="post-overlay absolute inset-0 rounded-2xl opacity-60 mix-blend-multiply bg-secondary-gradient"></div>
      <div className="absolute inset-0 z-10 p-5 text-white">
        <div className="flex justify-between items-center mb-4">
          {category?.name && (
            <PostCategory to={category.slug}>{category.name}</PostCategory>
          )}
          <PostMeta
            to={slugify(user?.fullname || "", { lower: true })}
            author={user?.fullname}
            date={formatDate}
          ></PostMeta>
        </div>
        <PostTitle to={data.slug} size="big">
          {data.title}
        </PostTitle>
      </div>
    </div>
  );
};

export default PostFeatureItem;
