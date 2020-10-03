import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { minWidth } from '../../theme/mixins/minWidth';

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

function Item(props) {

	const num = getRandom(0, imgArray.length - 1);

	const { user } = props;

	return (
		<li className={props.className}>
			<NavLink to={`/users/${user.id}`}>
				<img src={images[imgArray[num]]} alt="User profile" />
				<h3>{user.name}</h3>
				<p>{user.address.city}</p>
			</NavLink>
		</li>
	)

}

Item.propTypes = {
	user: PropTypes.object.isRequired,
}

export const ItemStyled = styled(Item)`
	display: none;

	@media screen and (max-width: 500px) {
		&:nth-child(-n + 3) {
			display: block;
		}
	}

	@media screen and (min-width: 500px) {
		&:nth-child(-n + 4) {
			display: block;
		}
	}

	${minWidth.xs`
		margin: 0 2rem 0 0;
		&:nth-child(4) {
			margin: 0;
		}

		${({ show }) => show === 'all' ? `margin: 0 2rem 2rem 0 !important;` : null }
	`}

	${minWidth.sm`
		overflow: hidden;
		background-color: ${({ theme }) => theme.name === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'};
		border-radius: 20px;
		${({ theme }) => theme.name === 'light' ? 'box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.25);' : null }
		transition: all .1s linear;

		&:hover {
			background-color: ${({ theme }) => theme.name === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
		}

	`}

	${minWidth.lg`
		&:nth-child(5) {
			display: block;
		}
		&:nth-child(4) {
			margin: 0 2rem 0 0;
		}
		&:nth-child(5) {
			margin: 0;
		}
	`}

	& a {
		display: block;

		${minWidth.sm`
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 1rem;
		`}
	}

	& img {
		width: 100px;
		height: 100px;
		border-radius: 15px;
		margin: 0 0 0.5rem;
		transition: transform .1s linear;

		${minWidth.sm`
			width: 120px;
			height: 120px;
			border-radius: 50%;
		`}

		${minWidth.md`
			width: 150px;
			height: 150px;
			border-radius: 50%;
		`}

	}

	& h3 {
		font-size: 0.75rem;
		font-weight: 700;
		margin: 0 0 0.2rem;
		max-width: 100px;
		text-align: left;

		${minWidth.xs`
			font-size: 1rem;
		`}

		${minWidth.sm`
			text-align: center;
		`}

		${minWidth.md`
			font-size: 1.4rem;
			max-width: 150px;
		`}

	}

	& p {
		font-size: 0.75rem;
		color: ${({ theme }) => theme.beta};
		margin: 0;

		${minWidth.xs`
			font-size: 0.85rem;
		`}

		${minWidth.md`
			font-size: 1rem;
			text-align: center;
			text-align: left;
		`}

	}

	&:hover {

		& h3 {
			color: ${({ theme }) => theme.zeta};
		}

		& p {
			color: ${({ theme }) => theme.name === 'light' ? theme.eta : theme.alpha};
		}

		& img {
			transform: scale(1.05);
		}

	}

	${({ show }) => show === 'all' ? `

		display: block;
		margin: 0 2rem 1rem 0;

	` : null

	}

`