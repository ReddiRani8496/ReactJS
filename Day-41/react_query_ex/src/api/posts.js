import axios from "axios";

export function getPosts() {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.data);
}
