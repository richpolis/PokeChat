/*
	Module dependencies
*/

import React from 'react';

export default class PokeMessage extends React.Component{
	render(){
		return <li className="pokemesssage">
				{this.props.message.text}
			   </li>
	}
}