import { User } from "@/src/shared/types/User";
import React from "react";
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/router";

const User: React.FC<User> = ({ id, name, jobTitle }) => {
  const { deleteUser } = useUserContext();
  const router = useRouter();

  const deleteUserHandler = async () => {
    await deleteUser(id);
  };

  return (
    <div>
      <p>name: {name}</p>
      <p>jobTitle: {jobTitle}</p>
      <button onClick={() => router.push("/user/update/" + id)}>
        update user
      </button>
      <span>&nbsp;</span>
      <button onClick={deleteUserHandler}>delete user</button>
      <hr />
    </div>
  );
};

export default User;
