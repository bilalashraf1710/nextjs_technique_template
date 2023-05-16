import UpdateUser from "@/src/components/UpdateUser";
import { useUserContext } from "@/src/context/UserContext";
import { User } from "@/src/shared/types/User";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UpdateUserPage = () => {
  const [user, setUser] = useState<User>();
  const router = useRouter();
  const { getUserById, updateUser } = useUserContext();

  const loadUserById = async (id: string) => {
    const user = await getUserById(id);
    setUser(user);
  };

  useEffect(() => {
    const id = router.query?.id?.toString() ?? "";
    if (router.isReady) {
      loadUserById(id);
    }
  }, [router]);

  if (!user) {
    return <>Loading...</>;
  }

  return <UpdateUser user={user} updateUser={updateUser} />;
};

export default UpdateUserPage;
