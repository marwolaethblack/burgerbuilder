import React, { Component } from 'react';

import Aux from '../../hoc/aux'
import Burger from '../../components/Burger/Burger'

export default class BurgerBuilder extends Component {

	state = {
		ingredients: ['meat', 'cheese', 'salad', 'bacon', 'meat']	
	}


	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<div>Build controls</div>
			</Aux>
		);
	}
}
