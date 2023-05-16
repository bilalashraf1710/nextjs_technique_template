import { User as UserType } from "@/src/shared/types/User";
import React from "react";
import User from "./User";

interface UsersProps {
  users: Array<UserType>;
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <User {...user} key={user.id} />;
      })}
    </div>
  );
};

export default Users;
