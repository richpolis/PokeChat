/*
	Module dependencies
*/

import React from 'react';

class PokeAvatar extends React.Component {
	render(){
		var number = this.props.number;
		var url = 'http://veekun.com/dex/media/pokemon/main-sprites/x-y/' + number +  '.png';
		return <img src={url} className="avatar" />
	}
}

export default PokeAvatar;