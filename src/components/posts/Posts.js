import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchPosts } from '../../action-creators/postsCreators';
import PropTypes from 'prop-types';
import { minWidth } from '../../theme/mixins/minWidth';

import { StatusStyled as Status } from '../shared/Status';
import { LoadingStyled as Loading } from '../shared/Loading';
import { PostStyled as Post } from './Post';
import { PostsOptionsStyled as Options } from './PostsOptions';

function Posts(props) {

	const { posts, loading, error } = props;

	const [showOptions, toggleOptions] = useState(false);

	const [filter, setFilter] = useState('');

	const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()) || post.body.toLowerCase().includes(filter.toLowerCase()));

	const toggle = () => {
		toggleOptions(!showOptions);
	}

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
				<Status
					type="Posts"
					options={<Options filter={filter} setFilter={setFilter} />}
					showOptions={showOptions}
					toggleUsersOptions={toggle}
				/>
				<div className="posts-container">
					{filteredPosts.map(post => <Post key={post.id} post={post} />)}
				</div>
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

	& .posts-container {
		margin: 20px 20px 0px 20px;

		${minWidth.md`
			max-width: 952px;
			margin: 20px auto 0;
		`}
	}

`