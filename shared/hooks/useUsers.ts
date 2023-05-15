import UserService from "@/services/UserService";
import React, { useEffect, useState } from "react";
import useIsFirstRender from "./useIsFirstRender";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const isFirstRender = useIsFirstRender();

  const loadUsers = async () => {
    const users = await UserService.fetchUsers();
    setUsers(users);
  };

  useEffect(() => {
    isFirstRender && loadUsers();
  }, []);
  return {
    users,
  };
};

export default useUsers;
