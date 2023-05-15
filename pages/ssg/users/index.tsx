import Users from "@/components/users/Users";
import UserService from "@/services/UserService";
import { User } from "@/shared/types/User";
import { GetStaticProps } from "next";
import React from "react";

interface UserPageProps {
  users: Array<User>;
}

const UserPageUsingSSG: React.FC<UserPageProps> = ({ users }) => {
  return (
    <div>
      <h3>Displaying Users Using Static-Site Generation</h3>
      <br />
      <Users users={users} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  users: Array<User>;
}> = async () => {
  const users: Array<User> = await UserService.fetchUsers();
  return {
    props: {
      users,
    },
  };
};

export default UserPageUsingSSG;
