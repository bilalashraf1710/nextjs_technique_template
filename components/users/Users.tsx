import { User } from "@/shared/types/User";
import React from "react";
import UserRow from "./UserRow";

interface UsersProps {
  users: Array<User>;
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <UserRow {...user} key={user.id} />;
      })}
    </div>
  );
};

export default Users;
