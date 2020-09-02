import React, { useRef } from "react";
import styled, { keyframes } from 'styled-components';
import { useCloseOutside } from '../../hooks/useCloseOutside';
import { connect } from "react-redux";

import { SORT_ID } from '../../actions/actionTypes';
import { SORT_ASC } from '../../actions/actionTypes';
import { SORT_DESC } from '../../actions/actionTypes';

import { sortBy } from '../../action-creators/usersCreators';

import PropTypes from 'prop-types';

function AllUsersOptions(props) {

	const btn = props.getBtn();
	const close = props.toggleOptions;

	const element = useRef(null);
	useCloseOutside(element, btn, close);

	const { sortBy, order } = props;

	function sort(ev) {
		sortBy(ev.target.value);
		close();
	}

	return (
		<div className={props.className} ref={element}>
			<h3>Users options</h3>
			<select value={order} onChange={sort}>
				<option value={SORT_ID}>Id</option>
				<option value={SORT_ASC}>Asc</option>
				<option value={SORT_DESC}>Desc</option>
			</select>
		</div>
	)

}

AllUsersOptions.propsTypes = {
	getBtn: PropTypes.func.isRequired,
	toggleOptions: PropTypes.func.isRequired,
	order: PropTypes.string.isRequired,
	sortBy: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	order: state.usersReducer.order
});

const mapDispatchToProps = {
	sortBy
}

const AllUsersOptionsConnected = connect(mapStateToProps, mapDispatchToProps)(AllUsersOptions);

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