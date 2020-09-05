import React, { useRef } from "react";
import styled from 'styled-components';
import { useCloseOutside } from '../../hooks/useCloseOutside';
import { connect } from "react-redux";

import { SORT_ID } from '../../actions/actionTypes';
import { SORT_ASC } from '../../actions/actionTypes';
import { SORT_DESC } from '../../actions/actionTypes';

import { sortBy } from '../../action-creators/usersCreators';

import PropTypes from 'prop-types';

import { optionsFadeIn } from '../../style/animations/optionsFadeIn';
import { DefaultButton as Button } from '../shared/DefaultButton';

function AllUsersOptions(props) {

	const btn = props.getBtn();
	const close = props.toggleOptions;

	const element = useRef(null);
	useCloseOutside(element, btn, close);

	const { sortBy, order } = props;

	function sort(ev) {
		sortBy(ev.target.value);
		// close();
	}

	return (
		<div className={props.className} ref={element}>
			<h3>Users options</h3>
			<div>
				<label htmlFor="sort">Sort by:</label>
				<select id="sort" value={order} onChange={sort}>
					<option value={SORT_ID}>Id</option>
					<option value={SORT_ASC}>Asc</option>
					<option value={SORT_DESC}>Desc</option>
				</select>
			</div>
			<div>
				<Button padding="1rem"><span>Add new</span></Button>
				<Button padding="1rem"><span>Delete</span></Button>
			</div>
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

export const AllUsersOptionsStyled = styled(AllUsersOptionsConnected)`
	position: absolute;
	top: 0;
	right: 100%;
	z-index: 9;
	width: 200px;
	height: 200px;
	text-align: center;
	color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
	background-color: ${({ theme }) => theme.name === 'light' ? theme.gamma : theme.beta};
	border-radius: 20px;
	animation: ${optionsFadeIn} .2s forwards;

	& button {
		display: block;
	}

	& div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& div:nth-child(2) {
		flex-direction: column;
	}

	& label {
		margin: 0;
	}

`