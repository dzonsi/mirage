import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchPosts } from '../../action-creators/postsCreators';
import PropTypes from 'prop-types';
import { minWidth } from '../../theme/mixins/minWidth';

function Posts(props) {

	const { posts, loading, error } = props;

	useEffect(() => {
		if(!props.posts.length) {
			props.fetchPosts();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={props.className}>
			<h2>Posts</h2>
		</div>
	)
}

Posts.propTypes = {
	posts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.any
}

const mapStateToProps = state => ({
	posts: state.postsReducer.posts,
	loading: state.postsReducer.loading,
	error: state.postsReducer.error
});

const mapDispatchToProps = {
	fetchPosts
}

const PostsConnected = connect(mapStateToProps, mapDispatchToProps) (Posts);

export const PostsStyled = styled(PostsConnected)`

`