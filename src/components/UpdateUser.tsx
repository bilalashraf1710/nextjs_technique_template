import React from "react";
import { User } from "../shared/types/User";
import UserForm from "./UserForm";
import { useRouter } from "next/router";

interface UpdateUserProps {
  user: User;
  updateUser: (user: User) => Promise<void>;
}

const UpdateUser: React.FC<UpdateUserProps> = ({ user, updateUser }) => {
  const router = useRouter();
  const onUpdateUserHandler = async (user: User) => {
    if (user.name && user.jobTitle) {
      await updateUser(user);
      router.push("/");
    }
  };

  return (
    <UserForm user={user} onSubmit={onUpdateUserHandler} usedFor="update" />
  );
};

export default UpdateUser;
