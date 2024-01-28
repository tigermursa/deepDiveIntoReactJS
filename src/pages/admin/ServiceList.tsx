import React, { useEffect, useState } from "react";

const ServiceList = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

  return (
    <div>
      {data.map((user) => (
        <div key={user.id} className="p-4 border">
          <h5>Person id:{user.id}</h5>
          <p>Name:{user.name}</p>
          <p>City:{user.address.city}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
