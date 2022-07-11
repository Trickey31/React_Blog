import { ActionDelete, ActionView } from "components/action";
import { Table } from "components/table";
import { db } from "firebase-app/firebase-config";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UserTable = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "users");
    onSnapshot(colRef, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) =>
        results.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      setUserList(results);
    });
  }, []);
  const handleDeleteUser = async (docId) => {
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
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Info</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 &&
            userList.map((user) => (
              <tr key={user.id}>
                <td title={user.id}>{user.id.slice(0, 5) + "..."}</td>
                <td className="whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1657491783539-c0b187145fc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                      alt=""
                      className="w-10 h-10 object-cover rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3>{user.fullname}</h3>
                      <time className="text-sm text-gray-400">
                        {new Date().toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                </td>
                <td>
                  <em className="text-gray-400">{user?.username}</em>
                </td>
                <td>{user.email}</td>
                <td></td>

                {/* <td>
                  {category.status === categoryStatus.APPROVED && (
                    <LabelStatus type="success">Approved</LabelStatus>
                  )}
                  {category.status === categoryStatus.UNAPPROVED && (
                    <LabelStatus type="danger">Unapproved</LabelStatus>
                  )}
                </td> */}
                <td>
                  <div className="flex gap-5 text-gray-400">
                    <ActionView></ActionView>
                    {/* <ActionEdit
                      onClick={() =>
                        navigate(`/manage/update-category?id=${category.id}`)
                      }
                    ></ActionEdit> */}
                    <ActionDelete
                      onClick={() => handleDeleteUser(user.id)}
                    ></ActionDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
