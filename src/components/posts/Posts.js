import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchPosts } from '../../action-creators/postsCreators';
import { togglePostsOptions } from '../../action-creators/postsCreators';
import { fetchUsers } from '../../action-creators/usersCreators';
import PropTypes from 'prop-types';
import { minWidth } from '../../theme/mixins/minWidth';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import { StatusStyled as Status } from '../shared/Status';
import { LoadingStyled as Loading } from '../shared/Loading';
import { PostStyled as Post } from './Post';
import { PostsOptionsStyled as Options } from './PostsOptions';

function Posts(props) {

	const {
		posts,
		loading,
		error,
		showOptions,
		togglePostsOptions: toggle,
		users,
		usersLoading,
		usersError
	} = props;

	const [filter, setFilter] = useState('');

	const filteredPosts = posts
		.filter(post => post.title.toLowerCase()
			.includes(filter.toLowerCase()) || post.body.toLowerCase()
				.includes(filter.toLowerCase()));

	const getUser = id => users.filter(user => user.id === id)[0];

	useEffect(() => {
		if(!posts.length) {
			props.fetchPosts();
		}
		if(!users.length) {
			props.fetchUsers();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if(loading || usersLoading) {
		return (
			<Loading />
		)
	}

	if(posts.length) {
		return (
			<section id="posts" className={props.className}>
				<Status
					type="Posts"
					options={<Options filter={filter} setFilter={setFilter} />}
					showOptions={showOptions}
					toggleUsersOptions={toggle}
				/>
				<TransitionGroup className="posts-container">
					{filteredPosts.map(post => (
						<CSSTransition key={post.id} timeout={300} classNames="post">
							<Post post={post} user={getUser(post.userId)} />
						</CSSTransition>
					))}
				</TransitionGroup>
			</section>
		)
	}

	if(error || usersError) {
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
	error: PropTypes.any,
	showOptions: PropTypes.bool.isRequired,
	users: PropTypes.array.isRequired,
	usersLoading: PropTypes.bool.isRequired,
	usersError: PropTypes.any
}

const mapStateToProps = state => ({
	posts: state.postsReducer.posts,
	loading: state.postsReducer.loading,
	error: state.postsReducer.error,
	showOptions: state.postsReducer.postsOptions,
	users: state.usersReducer.users,
	usersLoading: state.usersReducer.loading,
	usersError: state.usersReducer.error
});

const mapDispatchToProps = {
	fetchPosts,
	togglePostsOptions,
	fetchUsers
}

const PostsConnected = connect(mapStateToProps, mapDispatchToProps) (Posts);

export const PostsStyled = styled(PostsConnected)`

	& .posts-container {
		margin: 20px 20px 0px 20px;

		${minWidth.md`
			max-width: 952px;
			margin: 20px auto 0;
		`}
	}

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