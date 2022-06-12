import axios from "axios";
import { LoginReqType } from "../types";

const USER_API_URL = "https://api.marktube.tv/v1/me";

export default class UserService {
  public static async login(reqData: LoginReqType) {
    const response = await axios.post(USER_API_URL, reqData);
  }
}