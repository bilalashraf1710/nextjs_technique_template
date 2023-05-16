import React from "react";
import { User } from "../shared/types/User";
import { uuid } from "../shared/helpers";
import UserForm from "./UserForm";

interface CreateUserProps {
  createUser: (user: User) => Promise<void>;
}

const CreateUser: React.FC<CreateUserProps> = ({ createUser }) => {
  const onCreateUserHandler = async (user: User) => {
    if (user.name && user.jobTitle) {
      await createUser({
        ...user,
        id: uuid(),
        createdAt: new Date().toISOString(),
      });
    }
  };

  return <UserForm onSubmit={onCreateUserHandler} usedFor="create" />;
};

export default CreateUser;
