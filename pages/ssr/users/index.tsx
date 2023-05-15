import Users from "@/components/users/Users";
import UserService from "@/services/UserService";
import { User } from "@/shared/types/User";
import { GetServerSideProps } from "next";
import React from "react";

interface UserPageProps {
  users: Array<User>;
}

const UserPageUsingSSR: React.FC<UserPageProps> = ({ users }) => {
  return (
    <div>
      <h3>Fetching Users Using Server-Side Rendering</h3>
      <br />
      <Users users={users} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  users: Array<User>;
}> = async () => {
  const users: Array<User> = await UserService.fetchUsers();
  return {
    props: {
      users,
    },
  };
};

export default UserPageUsingSSR;
