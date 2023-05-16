import React, { ChangeEvent, useRef, useState } from "react";
import { User } from "../shared/types/User";
import { uuid } from "../shared/helpers";

interface createUserProps {
  createUser: (user: User) => void;
}

const defaultUser: User = {
  id: "",
  name: "",
  jobTitle: "",
  createdAt: "",
};

const CreateUser: React.FC<createUserProps> = ({ createUser }) => {
  const [user, setUser] = useState(defaultUser);

  const onCreateUserHandler = async (e: any) => {
    e.preventDefault();
    if (user.name && user.jobTitle) {
      await createUser({
        ...user,
        id: uuid(),
        createdAt: new Date().toISOString(),
      });
      setUser({
        ...defaultUser,
      });
    }
  };

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value) {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <form onSubmit={onCreateUserHandler}>
      Enter Name:{" "}
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={onChangeInputHandler}
      />
      <br />
      Enter Job Title:{" "}
      <input
        type="text"
        name="jobTitle"
        value={user.jobTitle}
        onChange={onChangeInputHandler}
      />
      <br />
      <button>Create User</button>
      <br />
      <br />
      <hr />
      <br />
      <br />
    </form>
  );
};

export default CreateUser;
