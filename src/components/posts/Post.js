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
					<span className="name">{user.name}</span>&nbsp;
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

export const PostStyled = styled(Post)`

	background-color: ${({ theme }) => theme.name === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'};
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 6px;

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
	}

	& .title, & .body {
		font-size: 0.8rem;
		margin-bottom: 0.5rem;
	}

	& .user {
		display: inline-block;
		font-size: 0.8rem;
		margin-left: 10px;
	}

	& .name {
		font-size: 1rem;
		font-weight: 700;
	}

	& .username {
		color: ${({ theme }) => theme.beta};
	}

	& .title {
		color: ${({ theme }) => theme.zeta};
	}
`