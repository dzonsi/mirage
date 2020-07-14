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

	@media screen and (max-width: 460px) {
		&:nth-child(-n + 3) {
			display: block;
		}
	}

	@media screen and (min-width: 460px) {
		&:nth-child(-n + 4) {
			display: block;
		}
	}

	${minWidth.xs`
		margin: 0 2rem 0 0;
		&:nth-child(4) {
			margin: 0;
		}
	`}

	${minWidth.sm`
		&:nth-child(-n + 5) {
			display: block;
		}
		&:nth-child(4) {
			margin: 0 2rem 0 0;
		}
		&:nth-child(5) {
			margin: 0;
		}
	`}

	${minWidth.lg`
		&:nth-child(-n + 6) {
			display: block;
		}
		&:nth-child(5) {
			margin: 0 2rem 0 0;
		}
		&:nth-child(6) {
			margin: 0;
		}
	`}

	${({ show }) => show === 'all' ? `

		display: block;

		& > li {
			margin: 0 2rem 0 0;
		}

		&:nth-child(4) {
			margin: 0 2rem 0 0;
		}

		&:nth-child(5) {
			margin: 0 2rem 0 0;
		}

		&:nth-child(6) {
			margin: 0 2rem 0 0;
		}

	` : null

	}

	&:hover {

		& h3 {
			color: ${({ theme }) => theme.zeta};
		}

		& p {
			color: ${({ theme }) => theme.name === 'light' ? theme.eta : theme.alpha};
		}

	}

	& a {
		display: inline-block;
	}

	& img {
		width: 100px;
		height: 100px;
		border-radius: 15px;
		margin: 0 0 0.5rem;

		${minWidth.sm`
			width: 120px;
			height: 120px;
			border-radius: 20px;
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

		${minWidth.xs`
			font-size: 1rem;
		`}

		${minWidth.sm`
			max-width: 120px;
		`}

		${minWidth.md`
			font-size: 1.4rem;
			text-align: center;
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
		`}

	}

`