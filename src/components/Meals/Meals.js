import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);
    return (
        <div>
            {
                meals.map(meal => <li key={meal.idMeal}><Link to={`/meals/${meal.idMeal}`}>{meal.strMeal}</Link></li>)
            }
            <Outlet />
        </div>
    );
};

export default Meals;