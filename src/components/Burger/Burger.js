import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const burger = (props) => {

	let ingredients = null;

	if(!props.ingredients.length) {
		ingredients = <p>Please start adding ingredients</p>
	} else {
		ingredients = props.ingredients.map((ig, index) => {
					return <BurgerIngredient type={ig} key={index + ig}/>;
				});
	}



	return(
		<div className={classes.burger}>
			<BurgerIngredient type="bread-top" />
				{ingredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	)

}

export default burger;