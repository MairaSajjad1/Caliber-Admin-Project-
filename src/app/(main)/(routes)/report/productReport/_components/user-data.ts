import { avatarIds } from "@/utils";
import { getRandomArrayElement } from "@/utils";
import { v4 as uuidv4 } from 'uuid';


export const userType = {
  ADMIN: "ADMIN",
  CUSTOMER: "CUSTOMER",
};

export type Type = "ADMIN" | "CUSTOMER";

export type UserType = {
  id: string;
  name: string;
  avatar: string;
  mobile: string;
  type: Type;
};


const getRandomArrayElementt = (array: string | any[]) => array[Math.floor(Math.random() * array.length)];

const avatarIdss = ["001", "002", "003", "004", "005"];
const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];
const types = ["CUSTOMER", "ADMIN"];

const generateRandomUser = () => {
  const id = uuidv4();
  const name = getRandomArrayElementt(names);
  const avatar = `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElementt(
    avatarIdss
  )}.webp`;
  const mobile = `+${Math.floor(Math.random() * 9000000000) + 1000000000}`;
  const type = getRandomArrayElementt(types);

  return {
    id,
    name,
    avatar,
    mobile,
    type,
  };
};

const users = Array.from({ length: 40 }, () => generateRandomUser());

export const userData = users;
