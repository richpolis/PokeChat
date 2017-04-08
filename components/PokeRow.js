/*
	Module dependencies
*/

import React from 'react';
import PokeAvatar from './PokeAvatar';

class PokeRow extends React.Component{
	onClick(ev){
		this.props.growl.call(null, this.props.name);
	}
	
	render(){
		return <li className="pokerow" onClick={this.onClick.bind(this)}>
			<PokeAvatar number={this.props.number}/>
			{this.props.name}
		</li>
	}
}

export default PokeRow;
