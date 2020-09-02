import React from "react";
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';


import PropTypes from 'prop-types';

// import all images as object
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return false; });
  return images;
}
const images = importAll(require.context('../../assets/images/avatar', false, /\.png/));

// array from all images keys
const imgArray = Object.keys(images);

// math random between to numbers
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function UserHeading(props) {

	const { user } = props;
	console.log(user);
	const num = getRandom(0, imgArray.length - 1);

	if(user) {
		return (
			<div className={props.className}>
				<img src={images[imgArray[num]]} alt="User profile" />
				<div>
					<h2>{user.name}</h2>
					<p>"{user.username}"</p>
				</div>
			</div>
		)
	}

	if(!user) {
		return (
			<h2>Something went wrong while fetching user!</h2>
		)
	}

}

UserHeading.propTypes = {
	user: PropTypes.object.isRequired
}

export const UserHeadingStyled = styled(UserHeading)`
	display: flex;

	& img {
		width: 100px;
		height: 100px;
		border-radius: 15px;
		margin: 10px;
	}

	& div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		flex: 1;
		margin: 10px;
	}

	& h2 {
		font-size: 1.3rem;
		font-weight: 700;
	}

	& p {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.beta};
		margin: 0 0 0.5rem 0;

		&:last-child {
			margin: 0;
			color: ${({ theme }) => theme.eta};
		}
	}

`