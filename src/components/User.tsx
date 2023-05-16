import { User } from "@/src/shared/types/User";
import React from "react";
import { useUserContext } from "../context/UserContext";

const User: React.FC<User> = ({ id, name, jobTitle }) => {
  const { deleteUser } = useUserContext();

  const deleteUserHandler = async () => {
    await deleteUser(id);
  };

  return (
    <div>
      <p>name: {name}</p>
      <p>jobTitle: {jobTitle}</p>
      <button onClick={deleteUserHandler}>delete user</button>
      <hr />
    </div>
  );
};

export default User;
