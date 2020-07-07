import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Item(props) {

	// import all images as object
	function importAll(r) {
	  let images = {};
	  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	  return images;
	}
	const images = importAll(require.context('../../assets/images/avatar', false, /\.png/));

	// array from all images keys
	const imgArray = Object.keys(images);

	// math random between to numbers
	function getRandom(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) ) + min;
	}
	const num = getRandom(0, imgArray.length - 1);

	const { user } = props;

	return (
		<NavLink to={`/users/${user.id}`} className={props.className}>
			<img src={images[imgArray[num]]} alt="User profile" />
			<h3>{user.name}</h3>
			<p>{user.address.city}</p>
		</NavLink>
	)

}

Item.propTypes = {
	user: PropTypes.object.isRequired,
}

export const ItemStyled = styled(Item)`
	& img {
		width: 80px;
		height: 80px;
		border-radius: 10px;
	}
`