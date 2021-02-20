import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchUsers } from '../../action-creators/usersCreators';
import { fetchPosts } from '../../action-creators/postsCreators';
import { togglePostsOptions } from '../../action-creators/postsCreators';
import { changePostsFilter } from '../../action-creators/postsCreators';

import PropTypes from 'prop-types';
import { minWidth } from '../../theme/mixins/minWidth';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { LoadingStyled as Loading } from '../shared/Loading';
import { PostStyled as Post } from './Post';

function PostsBody(props) {

	const {
		posts,
		loading,
		error,
		postsFilter,
		changePostsFilter,
		users,
		usersLoading,
		usersError,
		fetchPosts,
		fetchUsers
	} = props;


	const filteredPosts = posts
		.filter(post => post.title.toLowerCase()
			.includes(postsFilter.toLowerCase()) || post.body.toLowerCase()
				.includes(postsFilter.toLowerCase()));

	const getUser = id => users.filter(user => user.id === id)[0];

	useEffect(() => {
		if(!posts.length) {
			fetchPosts();
		}
		if(!users.length) {
			fetchUsers();
		}
		// reset filter to empty string when coomponent will unmount
		return () => {
			changePostsFilter('');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if(loading || usersLoading) {
		return (
			<Loading />
		)
	}
	if(posts.length && users.length) {
		return (
			<TransitionGroup className={props.className}>
				{filteredPosts.map(post => (
					<CSSTransition key={post.id} timeout={300} classNames="post">
						<Post post={post} user={getUser(post.userId)} />
					</CSSTransition>
				))}
			</TransitionGroup>
		)
	}
	if(error || usersError) {
		return (
			<section id="posts" className={props.className}>
				<h2>Posts</h2>
				<p>Something went wrong while fetching data!</p>
				<p>Please, try again later...</p>
			</section>
		)
	}

	return null;

}

PostsBody.propTypes = {
	posts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.any,
	postsFilter: PropTypes.string.isRequired,
	users: PropTypes.array.isRequired,
	usersLoading: PropTypes.bool.isRequired,
	usersError: PropTypes.any,
	fetchPosts: PropTypes.func.isRequired,
	changePostsFilter: PropTypes.func.isRequired,
	fetchUsers: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	posts: state.postsReducer.posts,
	loading: state.postsReducer.loading,
	error: state.postsReducer.error,
	postsFilter: state.postsReducer.postsFilter,
	users: state.usersReducer.users,
	usersLoading: state.usersReducer.loading,
	usersError: state.usersReducer.error
});

const mapDispatchToProps = {
	fetchPosts,
	changePostsFilter,
	fetchUsers
}

const PostsBodyConnected = connect(mapStateToProps, mapDispatchToProps) (PostsBody);

export const PostsBodyStyled = styled(PostsBodyConnected)`

	margin: 20px 20px 0px 20px;

	${minWidth.md`
		max-width: 952px;
		margin: 20px auto 0;
	`}

	& .post-enter {
	  opacity: 0;
	  transform: scale(0.9);
	}

 	& .post-enter-active {
	  opacity: 1;
	  transform: scale(1);
	  transition: all 300ms ease-in;
	}

	& .post-exit {
	  opacity: 1;
	  transform: scale(1);
	}

	& .post-exit-active {
	  opacity: 0;
	  transform: scale(0.9);
	  transition: all 300ms ease-in;
	}

`