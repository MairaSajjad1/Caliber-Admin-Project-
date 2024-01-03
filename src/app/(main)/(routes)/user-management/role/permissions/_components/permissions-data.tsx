import { avatarIds } from "@/utils";
import { getRandomArrayElement } from "@/utils";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "lucide-react";


export type UserType = {
  id: string;
  name: string;
  avatar: string;
  Permission: string;
};


const getRandomArrayElementt = (array: string | any[]) => array[Math.floor(Math.random() * array.length)];

const avatarIdss = ["001", "002", "003", "004", "005"];
const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];
const permission = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];
const generateRandomUser = () => {
  const id = uuidv4();
  const name = getRandomArrayElementt(names);
  const avatar = `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElementt(
    avatarIdss
  )}.webp`;

  return {
    id,
    name,
    avatar,
    permission,
  };
};

const users = Array.from({ length: 40 }, () => generateRandomUser());

export const userData = users;
