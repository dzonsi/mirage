import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { minWidth } from '../../theme/mixins/minWidth';
import { importAll, getRandom } from '../../functions/functions';

// import all images as object
const images = importAll(require.context('../../assets/images/avatar', false, /\.png/));

// array from all images keys
const imgArray = Object.keys(images);

function Post(props) {

	const { post, user } = props;
	const num = getRandom(0, imgArray.length - 1);

	return (
		<article className={props.className}>
			<div className="post-heading">
				<img className="user-img" src={images[imgArray[num]]} alt="User profile" />
				<NavLink to={`/users/${post.userId}`} className="user">
					<span className="name">{user.name}</span>
					<span>&nbsp;</span>
					<span className="username">@{user.username}</span>
				</NavLink>
			</div>
			<h3 className="title">{post.title}</h3>
			<p className="body">{post.body}</p>
		</article>
	)
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
}

const areEqual = (prevProps, nextProps) => true;

export const PostStyled = React.memo(styled(Post)`

	background-color: ${({ theme }) => theme.name === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'};
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 6px;

	${minWidth.sm`
		padding: 1.5rem;
	`}

	&:last-child {
		margin-bottom: 0;
	}

	& .post-heading {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	& .user-img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		transition: all .1s linear;

		${minWidth.xs`
			width: 50px;
			height: 50px;
		`}

		${minWidth.sm`
			width: 70px;
			height: 70px;
		`}
	}

	& .user {
		display: inline-block;
		font-size: 0.8rem;
		margin-left: 10px;
		position: relative;

		&:after {
			content: "";
			display: block;
			width: 0;
			height: 2px;
			border-radius: 1px;
			position: absolute;
			left: 50%;
			bottom: -2px;
			background-color: ${({ theme }) => theme.name === 'light' ? theme.gamma : theme.beta};
			transition: all .2s ease-out;

		}

		${minWidth.xs`
			margin-left: 20px;
		`}

		&:hover, &:focus {
			&:after {
				width: 100%;
				left: 0;
			}
		}

		&:active {
			color: ${({ theme }) => theme.zeta};

			& .username {
				color: ${({ theme }) => theme.zeta};
			}
		}
	}

	& .name {
		font-size: 1rem;
		font-weight: 700;

		${minWidth.xs`
			font-size: 1.2rem;
		`}
	}

	& .username {
		color: ${({ theme }) => theme.beta};

		${minWidth.xs`
			font-size: 1rem;
		`}
	}

	& .title, & .body {
		font-size: 0.8rem;
		margin-bottom: 0.5rem;

		${minWidth.xs`
			font-size: 1rem;
			margin: 0 70px 0.5rem 70px;
		`}

		${minWidth.sm`
			margin: 0 90px 0.5rem 90px;
		`}
	}

	& .title {
		color: ${({ theme }) => theme.iota};
		font-weight: 700;
	}
`, areEqual);