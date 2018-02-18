import React, { Component } from 'react';

import Aux from '../../hoc/aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

export default class BurgerBuilder extends Component {

	state = {
		ingredients: ['meat', 'cheese', 'salad', 'bacon', 'meat'],
		price: 0	
	}

	addIngredientHandler = (ing) => {
		this.setState((prevState, props) => {
			const ingredients = [...prevState.ingredients];
			const price = prevState.price + 1;
			ingredients.push(ing);
			return {
				ingredients,
				price
			}
		})
	}

	removeIngredientHandler = (ing) => {
		this.setState((prevState, props) => {
			let ingredients = [...prevState.ingredients];
			const index = ingredients.lastIndexOf(ing);
			const price = prevState.price - 1;
			ingredients.splice(index, 1);
			return {
				ingredients,
				price
			}
		})
	}


	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls price={this.state.price} add={this.addIngredientHandler} remove={this.removeIngredientHandler}/>
			</Aux>
		);
	}
}
