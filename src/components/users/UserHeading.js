import React, { useState } from "react";
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';
import PropTypes from 'prop-types';
import { importAll, getRandom } from '../../functions/functions';

// import all images as object
const images = importAll(require.context('../../assets/images/avatar', false, /\.png/));

// array from all images keys
const imgArray = Object.keys(images);

function UserHeading(props) {

	const { user } = props;
	const num = getRandom(0, imgArray.length - 1);

	if(user) {
		return (
			<div className={props.className}>
				<img className="user-img" src={images[imgArray[num]]} alt="User profile" />
				<div className="user">
					<h2 className="name">{user.name}</h2>
					<p className="username">
						<span className="u-s-n">"</span>{user.username}<span className="u-s-n">"</span>
					</p>
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

	& .user-img {
		width: 100px;
		height: 100px;
		border-radius: 15px;
		margin: 10px;
		transition: all .2s linear;

		${minWidth.xs`
			width: 150px;
			height: 150px;
			border-radius: 20px;
			margin: 10px 10px 10px 50px;
		`}

		${minWidth.sm`
			width: 200px;
			height: 200px;
			border-radius: 50%;
			margin: 10px 10px 10px 50px;
		`}

		${minWidth.md`
			width: 250px;
			height: 250px;
		`}

	}

	& .user {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		flex: 1;
		margin: 10px;
		transition: margin .2s linear;

		${minWidth.xs`
			margin: 10px 10px 10px 50px;
		`}

	}

	& .name {
		font-size: 1.3rem;
		font-weight: 700;
		padding: .2rem .4rem;
		transition: font-size .2s linear;

		${minWidth.xs`
			font-size: 1.5rem;
		`}

		${minWidth.sm`
			font-size: 1.8rem;
		`}

		${minWidth.md`
			font-size: 2rem;
		`}

	}

	& .username {
		font-weight: 700;
		color: ${({ theme }) => theme.eta};
		padding: .2rem .4rem;
		margin: 0;
		transition: font-size .2s linear;

		${minWidth.xs`
			font-size: 1.3rem;
		`}

		${minWidth.sm`
			font-size: 1.5rem;
		`}

		${minWidth.md`
			font-size: 1.7rem;
		`}

	}

`