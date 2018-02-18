import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = ['salad', 'bacon', 'cheese', 'meat'];

const buildControls = (props) => (
	<div className={classes.buildControls}>
		<p>Price {props.price}</p>
		{ controls.map(c => {
			return <BuildControl add={props.add} remove={props.remove} key={c} label={c.toUpperCase()} />
		})}
	</div>
	
)

export default buildControls;