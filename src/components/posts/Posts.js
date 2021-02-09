import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchPosts } from '../../action-creators/postsCreators';
import PropTypes from 'prop-types';
import { minWidth } from '../../theme/mixins/minWidth';

import { LoadingStyled as Loading } from '../shared/Loading';
import { PostStyled as Post } from './Post';

function Posts(props) {

	const { posts, loading, error } = props;

	useEffect(() => {
		if(!posts.length) {
			props.fetchPosts();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if(loading) {
		return (
			<Loading />
		)
	}

	if(posts.length) {
		return (
			<section id="posts" className={props.className}>
				<h2>Posts</h2>
				{posts.map(post => <Post key={post.id} post={post} />)}
			</section>
		)
	}

	if(error) {
		return (
			<section id="posts" className={props.className}>
				<h2>Posts</h2>
				<p>Something went wrong while fetching posts!</p>
				<p>Please, try again later...</p>
			</section>
		)
	}

	return null;
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