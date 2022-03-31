import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Meal = () => {
    const [meal, setMeal] = useState([]);
    const { mealId } = useParams();
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals));
    }, [mealId]);
    return (
        <div>
            <h1>{meal[0]?.strMeal}</h1>
        </div>
    );
};

export default Meal;