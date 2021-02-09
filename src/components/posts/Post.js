import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { minWidth } from '../../theme/mixins/minWidth';

function Post(props) {

	const { post } = props;

	return (
		<article className={props.className}>
			<NavLink to={`/users/${post.userId}`}>User name</NavLink>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</article>
	)
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
}

export const PostStyled = styled(Post)`

`