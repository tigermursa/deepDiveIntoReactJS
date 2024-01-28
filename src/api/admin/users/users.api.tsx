export const getAllUsers = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
};

// import axios from "axios";

// const getAllUsers = () => {
//   return axios.get("https://jsonplaceholder.typicode.com/users");
// };

// export default getAllUsers;
