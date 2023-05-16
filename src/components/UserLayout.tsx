import React from "react";
import Users from "./Users";
import CreateUser from "./CreateUser";
import { useUserContext } from "../context/UserContext";

const UserLayout = () => {
  const { users, createUser } = useUserContext();
  return (
    <>
      <CreateUser createUser={createUser} />
      <Users users={users} />
    </>
  );
};

export default UserLayout;
