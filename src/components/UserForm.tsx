import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { User } from "../shared/types/User";

interface UserFormProps {
  user?: User;
  onSubmit: (user: User) => Promise<void>;
  usedFor: "create" | "update";
}

const defaultUser: User = {
  id: "",
  name: "",
  jobTitle: "",
  createdAt: "",
};

const UserForm: FC<UserFormProps> = ({
  user = defaultUser,
  onSubmit,
  usedFor,
}) => {
  const [userState, setUserState] = useState(user);

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value) {
      setUserState((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(userState);
    resetUserStateAfterSubmit();
  };

  const resetUserStateAfterSubmit = () => {
    if (usedFor === "create") {
      setUserState(defaultUser);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      Enter Name:{" "}
      <input
        type="text"
        name="name"
        value={userState.name}
        onChange={onChangeInputHandler}
      />
      <br />
      Enter Job Title:{" "}
      <input
        type="text"
        name="jobTitle"
        value={userState.jobTitle}
        onChange={onChangeInputHandler}
      />
      <br />
      <button>{usedFor} user</button>
      <br />
      <br />
      <hr />
      <br />
      <br />
    </form>
  );
};

export default UserForm;
