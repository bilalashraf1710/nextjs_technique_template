import { User } from "@/shared/types/User";
import React from "react";

const User: React.FC<User> = ({ name, jobTitle }) => {
  return (
    <div>
      <p>name: {name}</p>
      <p>jobTitle: {jobTitle}</p>
      <hr />
    </div>
  );
};

export default User;
