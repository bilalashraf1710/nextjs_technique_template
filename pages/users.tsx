import Users from "@/components/users/Users";
import { ApiRoutes } from "@/shared/api/constants/ApiRoutes";
import { User } from "@/shared/types/User";
import React, { useEffect, useState } from "react";

const UserPageUsingApiExample = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const usersRequest = await fetch(ApiRoutes.USERS);
    const { users } = await usersRequest.json();
    setUsers(users);
  };

  if (!users.length) {
    return <>Loading Users...</>;
  }

  return (
    <div>
      <h3>Fetching & Displaying Users From NextJS Api</h3>
      <br />
      <Users users={users} />
    </div>
  );
};

export default UserPageUsingApiExample;
