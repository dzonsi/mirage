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
			<div>
				<label htmlFor="sort">Sort by:</label>
				<select id="sort" value={order} onChange={sort}>
					<option value={SORT_ID}>Id</option>
					<option value={SORT_ASC}>Asc</option>
					<option value={SORT_DESC}>Desc</option>
				</select>
			</div>
			<hr />
			<div>
				<Button padding=".6rem .8rem .6rem">Add new</Button>
				<Button padding=".6rem .8rem .6rem">Delete</Button>
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
	font-size: 1rem;
	width: 200px;
	text-align: center;
	color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
	background-color: ${({ theme }) => theme.name === 'light' ? theme.delta : theme.gamma};
	border-radius: 20px;
	padding: 1rem;
	animation: ${optionsFadeIn} .2s forwards;

	& div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	& label {
		font-weight: 700;
		color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.beta};
	}

	& select {
		display: block;
		width: 100%;
		max-width: 100%;
		font-size: 1rem;
		font-weight: 700;
		padding: .6rem 1.4rem .5rem .8rem;
		border-color: ${({ theme }) => theme.name === 'light' ? theme.gamma : theme.gamma};
		border-radius: 0.5rem;
		margin: 0;
		appearance: none;
		background-color: ${({ theme }) => theme.name === 'light' ? theme.delta : theme.beta};
		background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%230d9970%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: right .7em top 50%;
    background-size: .65em auto;

    &::-ms-expand {
    	display: none;
    }

    &:hover {
    	cursor: pointer;
    	border-color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
    }

    &:focus {
    	border-color: ${({ theme }) => theme.eta};
    }

    & option {
    	font-weight: 700;
    }

	}

	& button {
		font-weight: 700;
		border-radius: 0.5rem;
		margin: 0 0 0.5rem;
		opacity: 0.7;
		width: 100%;

		&:first-child {
			background-color: ${({ theme }) => theme.zeta};
		}

		&:nth-child(2) {
			background-color: ${({ theme }) => theme.eta};
		}

		&:hover {
			color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
			opacity: 1;
		}
	}

	& hr {
		border-top-color: rgba(0, 0, 0, .3);
	}

`