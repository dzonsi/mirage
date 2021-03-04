import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import { useCloseOutside } from '../../hooks/useCloseOutside';
import { useCloseEsc } from '../../hooks/useCloseEsc';
import { useManageFocus } from '../../hooks/useManageFocus';

import { SORT_ID } from '../../actions/actionTypes';
import { SORT_ASC } from '../../actions/actionTypes';
import { SORT_DESC } from '../../actions/actionTypes';

import { sortBy } from '../../action-creators/usersCreators';

import PropTypes from 'prop-types';

import { minWidth } from '../../theme/mixins/minWidth';

import { optionsFadeIn } from '../../style/animations/optionsFadeIn';
import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

function AllUsersOptions(props) {

	const btn = props.getBtn();
	const {
		show,
		toggle,
		sortBy,
		order
	} = props;

	const element = useRef(null);
	const select = useRef(null);
	const last = useRef(null);

	useCloseOutside(element, btn, toggle);
	useCloseEsc(show, toggle);
	useManageFocus(show, select, last);

	function sort(e) {
		sortBy(e.target.value);
		// toggle();
	}

	return (
		<div className={props.className} ref={element}>
			<div className="sort-container">
				<label htmlFor="sort">Sort by:</label>
				<select id="sort" value={order} onChange={sort} ref={select}>
					<option value={SORT_ID}>Id</option>
					<option value={SORT_ASC}>Asc</option>
					<option value={SORT_DESC}>Desc</option>
				</select>
			</div>
			<hr className="separator"/>
			<div className="link-container">
				<Button className="link" padding=".2rem .0rem .2rem">
					<Icon icon={['fas', 'user-plus']} fixedWidth />
					<span className="text">Add new</span>
				</Button>
				<Button className="link" padding=".2rem .0rem .2rem" ref={last}>
					<Icon icon={['fas', 'user-slash']} fixedWidth />
					<span className="text">Delete&nbsp;user(s)</span>
				</Button>
			</div>
		</div>
	)

}

AllUsersOptions.propTypes = {
	getBtn: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired,
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
	font-size: 0.8rem;
	min-width: 160px;
	color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
	background-color: ${({ theme }) => theme.name === 'light' ? theme.delta : theme.gamma};
	border-radius: 20px;
	padding 0.5rem 1rem;
	animation: ${optionsFadeIn} .2s forwards;

	${
		minWidth.xs`
			font-size: 1rem;
			min-width: 200px;
		`
	}

	.separator {
		width: 100%;
		background-color: ${({ theme }) => theme.beta};
		margin: 1rem 0 0.4rem;
		opacity: 0.5;

		${
			minWidth.xs`
				margin: 1.2rem 0 0.4rem;
			`
		}
	}

	& label {
		display: block;
		font-weight: 700;
		color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.alpha};
		text-align: center;
		margin: .3rem 0 .6rem;
	}

	& select {
		display: block;
		width: 100%;
		max-width: 100%;
		font-size: 0.8rem;
		font-weight: 700;
		padding: .4rem 1.1rem .3rem .6rem;
		border-color: ${({ theme }) => theme.name === 'light' ? theme.gamma : theme.gamma};
		border-radius: 0.5rem;
		margin: 0;
		appearance: none;
		background-color: ${({ theme }) => theme.name === 'light' ? theme.delta : theme.beta};
		background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%230d9970%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: right .7em top 50%;
    background-size: .65em auto;
    transition: background-color .1s linear;

    ${
			minWidth.xs`
				font-size: 1rem;
			`
		}

    &::-ms-expand {
    	display: none;
    }

    &:hover {
    	cursor: pointer;
    	background-color: ${({ theme }) => theme.name === 'light' ? theme.epsilon : theme.alpha};
    	border-color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.epsilon};
    }

    &:focus {
    	border-color: ${({ theme }) => theme.eta};
    }

    & option {
    	font-weight: 700;
    }

	}

	& .link-container {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	& .link {
		font-weight: 700;
		padding: .2rem 0;
		color: ${({ theme }) => theme.name === 'light' ? theme.gamma : theme.beta};
		background-color: transparent;
		border: none;
		margin: 0.3rem;
		transition: all .1s linear;
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			color: ${({ theme }) => theme.alpha};
		}

		&:active {
			color: ${({ theme }) => theme.zeta};
			transition: none;
		}

		& .text {
			display: inline-block;
			margin-left: 15px;
			flex: 1;
			text-align: left;
		}

	}

`