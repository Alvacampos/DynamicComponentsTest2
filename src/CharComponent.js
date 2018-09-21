import React from 'react';

const CharComponent = ({ item, click }) => {
	const style = {
		display: 'inline-block',
		padding: '16px',
		textAlign: 'center',
		margin: '16px',
		border: '1px solid black',
		backgroundColor: 'red'
	};
	const style2 = {
		display: 'inline-block',
		padding: '5px',
		textAlign: 'center',
		margin: '16px',
	};
	return (
		<div style = {style}>
			{item}
			<br/>
			<button onClick = { click } style = { style2 }>Delete</button>
		</div>
	);
}

export default CharComponent;