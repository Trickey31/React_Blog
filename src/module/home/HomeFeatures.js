import Heading from "components/layout/Heading";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import PostFeatureItem from "module/post/PostFeatureItem";
import React, { useState } from "react";
import { useEffect } from "react";

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", true),
      limit(3)
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) =>
        results.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      setPosts(results);
    });
  }, []);

  if (posts.length <= 0) return null;
  return (
    <div className="home-block pb-10 lg:pb-[60px]">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        <div className="grid-layout grid auto-cols-[235px] gap-4 lg:grid-cols-3 lg:gap-12">
          {posts.map((post) => (
            <PostFeatureItem key={post.id} data={post}></PostFeatureItem>
          ))}
          {/* <PostFeatureItem></PostFeatureItem>
          <PostFeatureItem></PostFeatureItem>
          <PostFeatureItem></PostFeatureItem> */}
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
