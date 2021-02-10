import React, { useRef } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { minWidth } from '../../theme/mixins/minWidth';
import { useCloseOutside } from '../../hooks/useCloseOutside';

import { optionsFadeIn } from '../../style/animations/optionsFadeIn';

function PostsOptions(props) {

	const btn = props.getBtn();
	const close = props.toggleOptions;
	const element = useRef(null);
	useCloseOutside(element, btn, close);
	const { filter, setFilter } = props;

	return (
		<div className={props.className} ref={element}>
			<input type="text" placeholder="Filter posts" value={filter} onInput={e => setFilter(e.target.value)} />
		</div>
	)
}

PostsOptions.propTypes = {
	getBtn: PropTypes.func.isRequired,
	toggleOptions: PropTypes.func.isRequired
}

export const PostsOptionsStyled = styled(PostsOptions)`
	position: absolute;
	top: 0;
	right: 100%;
	z-index: 9;
	font-size: 0.8rem;
	min-width: 160px;
	color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
	background-color: ${({ theme }) => theme.name === 'light' ? theme.delta : theme.gamma};
	border-radius: 20px;
	padding 0.5rem 1rem;
	animation: ${optionsFadeIn} .2s forwards;

`