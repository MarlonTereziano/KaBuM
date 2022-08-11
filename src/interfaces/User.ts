import api from "../services/api";

export interface IUser {
  email: string;
  name: string;
  last_name?: string;
  password: string;
  adress: string;
  image_profile: string;
};