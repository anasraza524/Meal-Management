import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './sections/Header/Header';
import MealBanner from './sections/MealBanner/MealBanner';
import axios from 'axios';

function App() {
  const [pizza, setPizza] = useState({ allMeals: [], week1: [], week3: [], week2: [], week4: [] });
  const [addWeek, setAddWeek] = useState([]);
  const [activeNav, setActiveNav] = useState('AllMeals')


  const pizzaData = async () => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://dummyjson.com/recipes',
        headers: {}
      };

      const response = await axios.request(config);
      let data = response.data.recipes;
      setPizza({ allMeals: data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    pizzaData();
  }, []);
const handleSave = (tab) => { 

  switch (tab) {
    case 'Week 1':
      setPizza({...pizza,week1:addWeek})
      break;
    case 'Week 2':
      setPizza({...pizza,week2:addWeek})
      break;
    case 'Week 3':
      setPizza({...pizza,week3:addWeek})
      break;
    case 'Week 4':
      setPizza({...pizza,week4:addWeek})
      break;
    default:
      break;


  }
  setAddWeek([]);
  setActiveNav('');
 }
  const handleCardClick = (meal) => {
    if (!addWeek.some(item => item.id === meal.id)) {
      setAddWeek([...addWeek, meal]);
    }
  };

  const handleNavChange = () => {
    switch (activeNav) {
      case 'AllMeals':
        return pizza.allMeals
      case 'Week1':
        return pizza.week1
      case 'Week2':
        return pizza.week2
      case 'Week3':
        return pizza.week3
      case 'Week4':
        return pizza.week4
      default:
        return pizza.allMeals
    }
  }
  return (
    <div className="App">
      <MealBanner />
      <Header setActiveNav={setActiveNav} handleSave={handleSave} activeNav={activeNav}/>
      <div className="meal-container">
        {handleNavChange()?.map((meal, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleCardClick(meal)}
            style={{
              border: addWeek.some(item => item.id === meal.id) ? '1px solid red' : '1px solid #ddd'
            }}
          >
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
        ))}
      </div>
    </div>
  );
}

export default App;
