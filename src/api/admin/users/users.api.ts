import axios from "axios";

// export const getAllUsers = async () => {
//   return await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//     res.json()
//   );
// };




export const getAllUsers = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");


};


