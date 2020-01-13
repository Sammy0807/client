/* eslint-disable */
import axios from "axios";
import store from "@/store/store";

export default () => {
  return axios.create({
    baseURL: `http://localhost:${process.env.PORT + 1} || 8081 || 50001`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  });
};
