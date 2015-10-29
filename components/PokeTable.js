/*
	Module dependencies
*/

import React from 'react';
import PokeRow from './PokeRow';

class PokeTable extends React.Component{
	growl(){
		
	}
	
	render(){
		return <ul className="poketable">
		{
			this.props.pokemons.map(function(pokemon){
				return <PokeRow 
						key={pokemon.number}
						name={pokemon.name} 
						number={pokemon.number}
						growl={this.growl.bind(this)}
						/>
			})
		}
		</ul>
	}
}

export default PokeTable;