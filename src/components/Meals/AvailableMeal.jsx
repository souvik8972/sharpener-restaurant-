
import Card from '../UI/Card';
import FoodItem from './FoodItem';
import classes from "./Available.module.css"
// Make sure the path is correct based on your file structure


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeal = () => {
    return (
        <div>
        
            <Card>
                <ul className={classes.ul}>
                    {
                        DUMMY_MEALS.map(meal => (
                            <FoodItem 
                                key={meal.id}
                                id={meal.id}
                                name={meal.name}
                                description={meal.description}
                                price={meal.price}
                            />
                        ))
                    }
                </ul>
            </Card>
        </div>
    );
};

export default AvailableMeal;
