import Users from "@/components/users/Users";
import useUsers from "@/shared/hooks/useUsers";
import React from "react";

function UsersPageUsingCSR() {
  const { users } = useUsers();
  return (
    <div>
      <h3>Fetching Users Using Client-Side Rendering</h3>
      <br />
      <Users users={users} />
    </div>
  );
}

export default UsersPageUsingCSR;
