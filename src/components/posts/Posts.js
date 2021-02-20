import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

import { togglePostsOptions } from '../../action-creators/postsCreators';
import { changePostsFilter } from '../../action-creators/postsCreators';
import PropTypes from 'prop-types';

import { StatusStyled as Status } from '../shared/Status';
import { PostsBodyStyled as PostsBody } from './PostsBody';
import { PostsOptionsStyled as Options } from './PostsOptions';

function Posts(props) {

	const {
		showOptions,
		togglePostsOptions,
		postsFilter,
		changePostsFilter,
	} = props;

	return (
		<section id="posts" className={props.className}>
			<Status
				type="Posts"
				options={<Options filter={postsFilter} setFilter={changePostsFilter} />}
				showOptions={showOptions}
				toggleOptions={togglePostsOptions}
			/>
			<PostsBody />
		</section>
	)

}

Posts.propTypes = {
	showOptions: PropTypes.bool.isRequired,
	togglePostsOptions: PropTypes.func.isRequired,
	postsFilter: PropTypes.string.isRequired,
	changePostsFilter: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	showOptions: state.postsReducer.postsOptions,
	postsFilter: state.postsReducer.postsFilter,
});

const mapDispatchToProps = {
	togglePostsOptions,
	changePostsFilter,
}

const PostsConnected = connect(mapStateToProps, mapDispatchToProps) (Posts);

export const PostsStyled = styled(PostsConnected)`

`