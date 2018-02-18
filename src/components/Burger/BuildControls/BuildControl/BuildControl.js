import React from 'react'

import classes from './BuildControl.css'

const buildControl = (props) => (
	<div className={classes.buildControl}>
		<div className={classes.Label}>{props.label}</div>
		<button onClick={() => props.remove(props.label.toLowerCase())}  className={classes.Less}>Less</button>
		<button onClick={() => props.add(props.label.toLowerCase())} className={classes.More}>More</button>
	</div>
)

export default buildControl;