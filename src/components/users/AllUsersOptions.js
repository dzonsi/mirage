import React, { useRef } from "react";
import styled, { keyframes } from 'styled-components';
import { useCloseOutside } from '../../hooks/useCloseOutside';
import { connect } from "react-redux";

import { sortById } from '../../action-creators/usersCreators';
import { sortByAsc } from '../../action-creators/usersCreators';
import { sortByDesc } from '../../action-creators/usersCreators';

import PropTypes from 'prop-types';

function AllUsersOptions(props) {

	const btn = props.getBtn();
	const close = props.toggleOptions;

	const element = useRef(null);
	useCloseOutside(element, btn, close);

	const { sortById, sortByAsc, sortByDesc } = props;

	return (
		<div className={props.className} ref={element}>
			<h3>Users options</h3>
			<button onClick={sortById}>Id</button>
			<button onClick={sortByAsc}>Asc</button>
			<button onClick={sortByDesc}>Desc</button>
		</div>
	)

}

AllUsersOptions.propsTypes = {
	getBtn: PropTypes.func.isRequired,
	toggleOptions: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
	sortById,
	sortByAsc,
	sortByDesc
}

const AllUsersOptionsConnected = connect(null, mapDispatchToProps)(AllUsersOptions);

const animation = keyframes`
	0% { top: 100%; right: 200%; opacity: 0.3; }
	100% { top: 0; right: 100%; opacity: 1; }
`

export const AllUsersOptionsStyled = styled(AllUsersOptionsConnected)`
	position: absolute;
	top: 100%;
	right: 100%;
	background-color: ${({ theme }) => theme.gamma};
	opacity: 0.3;
	transition: all .2s;
	animation-name: ${animation};
	animation-duration: .2s;
	animation-fill-mode: forwards;
`