import Users from "@/components/users/Users";
import UserService from "@/services/UserService";
import { User } from "@/shared/types/User";
import { GetStaticProps } from "next";
import React from "react";

interface UserPageProps {
  users: Array<User>;
}

const UserPageUsingISR: React.FC<UserPageProps> = ({ users }) => {
  return (
    <div>
      <h3>Displaying Users Using Incremental Static Regeneration</h3>
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
    revalidate: 10, // seconds
  };
};

export default UserPageUsingISR;
