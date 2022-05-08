import React from 'react';
import "./NutrientItem.css";

export default ({ name, value, className = '' }) => {
  return (
    <div className={["nutrient-item", className].filter(Boolean).join(' ')}>
      {name && <div>{ name }</div>}
      <span>{ value }</span>
    </div>
  )
}
