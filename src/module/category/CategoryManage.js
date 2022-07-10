import { ActionDelete, ActionEdit, ActionView } from "components/action";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { categoryStatus } from "utils/constant";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Button } from "components/button";
import { debounce } from "lodash";

const CategoryManage = () => {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const colRef = collection(db, "categories");
    const newRef = filter
      ? query(
          colRef,
          where("name", ">=", filter),
          where("name", "<=", filter + "utf8")
        )
      : query(colRef, limit(1));
    onSnapshot(newRef, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) =>
        results.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      setCategoryList(results);
    });
  }, [filter]);
  const handleDeleteCategory = async (docId) => {
    const colRef = doc(db, "categories", docId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        await deleteDoc(colRef);
      }
    });
  };
  const handleInputFilter = debounce((e) => setFilter(e.target.value), 500);
  const handleLoadMoreCategory = async () => {
    const first = query(collection(db, "categories"), limit(1));
    const documentSnapshots = await getDocs(first);

    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    console.log("last", lastVisible.data());

    // Construct a new query starting at this document,
    // get the next 25 cities.
    const nextRef = query(
      collection(db, "categories"),
      startAfter(lastVisible),
      limit(1)
    );
    onSnapshot(nextRef, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) =>
        results.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      setCategoryList(results);
    });
  };
  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button
          type="button"
          to="/manage/add-category"
          className="h-[60px] mx-auto px-[25px] flex items-center justify-center text-base text-white bg-primary-gradient rounded-lg font-semibold"
        >
          Create category
        </Button>
      </DashboardHeading>
      <div className="flex justify-end mb-10">
        <input
          type="text"
          placeholder="Search category..."
          className="py-4 px-6 border border-gray-300 outline-none rounded-lg"
          onChange={handleInputFilter}
        />
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.length > 0 &&
            categoryList.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <em className="text-gray-400">{category.slug}</em>
                </td>
                <td>
                  {category.status === categoryStatus.APPROVED && (
                    <LabelStatus type="success">Approved</LabelStatus>
                  )}
                  {category.status === categoryStatus.UNAPPROVED && (
                    <LabelStatus type="danger">Unapproved</LabelStatus>
                  )}
                </td>
                <td>
                  <div className="flex gap-5 text-gray-400">
                    <ActionView></ActionView>
                    <ActionEdit
                      onClick={() =>
                        navigate(`/manage/update-category?id=${category.id}`)
                      }
                    ></ActionEdit>
                    <ActionDelete
                      onClick={() => handleDeleteCategory(category.id)}
                    ></ActionDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="mt-10">
        <button onClick={handleLoadMoreCategory}>Load more</button>
      </div>
    </div>
  );
};

export default CategoryManage;
