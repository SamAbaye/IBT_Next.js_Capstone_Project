import React from "react";
import "./Catagory.css";

function CategoryBar({ selected, onSelect }) {
  const cat = [
    "All",
    "Traditional Stews & Wat",
    "Tibs & Grills",
    "Raw & Cured Delicacies / Kitfo",
    "Fasting & Vegan / Tsom",
    "Beverages & Tej",
  ];

  return (
    <div className="menu-catagory">
      {cat.map((catagory) => (
        <button
          className={
            selected === catagory ? "catagory-btn active" : "catagory-btn"
          }
          key={catagory}
          onClick={() => onSelect(catagory)}
        >
          {catagory}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
