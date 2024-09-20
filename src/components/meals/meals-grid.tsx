import { IMeal } from '@/types';
import styles from './meals-grid.module.css';
import MealItem from './meal.item';

interface IMealsProps {
    meals: IMeal[];
}

export default function MealsGrid({ meals }: IMealsProps) {
    return (
        <ul className={styles.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}