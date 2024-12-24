import type { UserT } from "@appTypes/types/user";

export const useUser = () => {
  const user: UserT = {
    plan: "free",
    email: "JohnDoe@gmail.com",
    avatar: "",
    get userName() {
      return this.email.split("@")[0];
    },
  };

  return user;
};
