/*
	Module dependencies
*/

import React from 'react';
import PokeMessage from './PokeMessage';

export default class PokeChat extends React.Component{
	constructor(props){
		super(props);
		this.state = { messages: [] };
	}
	
	
	render(){
		return <ul className="pokechat">
			{
				this.props.messages.map((message)=>{
					return <PokeMessage message={message} />
				});
			}
			</ul>
	}
}