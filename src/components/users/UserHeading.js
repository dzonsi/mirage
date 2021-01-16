import React, { useState } from "react";
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

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
	const num = getRandom(0, imgArray.length - 1);

	const [tempUser, setTempUser] = useState({...user});

	const [edit, setEdit] = useState(false);

	function changeUsername(value) {
		setTempUser(value);
	}

	if(user) {
		return (
			<div className={props.className}>
				<img src={images[imgArray[num]]} alt="User profile" />
				<div>
					<h2 id="name" className="name" contentEditable={edit ? true : false}>{user.name}</h2>
					<p>
						<input onInput={e => changeUsername(e.target.value)} id="input" type="text" name="username" value={tempUser.username} className="username" disabled={edit ? false : true} />
					</p>
					<p onClick={() => setEdit(!edit)}>Edit: {edit ? 'true' : 'false'}</p>
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

	& div {
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
		max-width: 190px;
		word-break: break-word;
		transition: font-size .2s linear, background-color .2s;

		@media screen and (min-width: 450px) {
			max-width: 240px;
		}

		${minWidth.xs`
			font-size: 1.5rem;
		`}

		${minWidth.sm`
			font-size: 1.8rem;
			max-width: 300px;
		`}

		&[contenteditable='true'] {
			background-color: rgba(255, 255, 255, 0.25);
		}

	}

	& p {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.beta};
		margin: 0 0 0.5rem 0;
		transition: font-size .2s linear;

		${minWidth.xs`
			font-size: 1rem;
		`}

		${minWidth.sm`
			font-size: 1.3rem;
		`}

		&:last-child {
			margin: 0;
			color: ${({ theme }) => theme.eta};
		}
	}

	& .username {

		width: 190px;
		max-width: 190px;

		@media screen and (min-width: 450px) {
			width: 240px;
			max-width: 240px;
		}

		${minWidth.sm`
			width: 300px;
			max-width: 300px;
		`}

		color: ${({ theme }) => theme.eta};
		background-color: rgba(255, 255, 255, 0.25);
		padding: .2rem .4rem;
		border: none;
		transition: background-color .2s;

		&:disabled {
			color: ${({ theme }) => theme.eta};
			background-color: transparent;
			border: none;
		}
	}

`