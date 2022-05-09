import React from 'react';
import "./NutrientItem.css";

const NutrientItem = ({ name, value, className = '' }) => {
  return (
    <div className={["nutrient-item", className].filter(Boolean).join(' ')}>
      {name && <div>{ name }</div>}
      <span>{ value }</span>
    </div>
  )
}

export default NutrientItem;
