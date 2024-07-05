import React from "react";

const Home = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const users = await res.json();
  return (
    <div>
      <ul>
        {users.products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
