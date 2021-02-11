import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { minWidth } from '../../theme/mixins/minWidth';

function Post(props) {

	const { post, user } = props;

	return (
		<article className={props.className}>
			<NavLink to={`/users/${post.userId}`} className="user">{user.name}</NavLink>
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

	& .user, & .title, & .body {
		font-size: 0.8rem;
		margin-bottom: 0.5rem;
	}

	.user {
		display: inline-block;
		font-size: 1rem;
		font-weight: 700;
	}

	.title {
		color: ${({ theme }) => theme.zeta};
	}
`