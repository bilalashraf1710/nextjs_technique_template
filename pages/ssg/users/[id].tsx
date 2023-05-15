import User from "@/components/users/User";
import Users from "@/components/users/Users";
import UserService from "@/services/UserService";
import { generateStaticPathListFromParamsArray } from "@/shared/helpers";
import { User as UserType } from "@/shared/types/User";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface UserPageProps {
  user: UserType;
}

const UserPageUsingSSG: React.FC<UserPageProps> = ({ user }) => {
  return (
    <div>
      <h3>Displaying User By ID Using Static-Site Generation</h3>
      <br />
      <User {...user} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allUserIds = await UserService.fetchAllUserIds();
  const paths = generateStaticPathListFromParamsArray(allUserIds, "id");

  return {
    paths,
    fallback: false,
  };
};

export default UserPageUsingSSG;

export const getStaticProps: GetStaticProps<{
  user: User;
}> = async ({ params }) => {
  const id = params?.id as string;
  const user = await UserService.fetchUserById(id);

  return {
    props: {
      user,
    },
  };
};
