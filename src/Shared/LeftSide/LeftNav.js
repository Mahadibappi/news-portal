import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <h2>All Category {category.length}</h2>
      {category.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
