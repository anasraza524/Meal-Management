import React from 'react';
import './MealWeeks.css';

function MealWeeks({meal,active}) {
  return (
    <div className="card" style={{border:active?"red solid 1 px":""}}>
            <div className="card-header">
                <img src={meal.image} alt={meal.name} />
                <span className="meal-type">{meal.mealType[0]}</span>
            </div>
            <div className="card-body">
                <h3>{meal.name}</h3>
                <p>{meal.instructions[0]}</p>
                <p><strong>Cuisine:</strong> {meal.cuisine}</p>
                <p><strong>Rating:</strong> {meal.rating} <span className="stars">★★★★★</span></p>
            </div>
        </div>
  );
}

export default MealWeeks;
