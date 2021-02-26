import React from "react";
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

import PropTypes from 'prop-types';

function UserBody(props) {

	const { user } = props;

	if(user) {
		return (
			<div className={props.className}>
				<div>
					<p><span className="u-s-n">Email: </span>{user.email}</p>
					<p><span className="u-s-n">Phone: </span>{user.phone}</p>
					<p><span className="u-s-n">Website: </span>{user.website}</p>
					<p><span className="u-s-n">Company: </span>{user.company.name}</p>
				</div>
			</div>
		)
	}

	if(!user) {
		return (
			<h2>Something went wrong while fetching user!</h2>
		)
	}

}

UserBody.propTypes = {
	user: PropTypes.object.isRequired
}

export const UserBodyStyled = styled(UserBody)`
	margin: 10px;
	transition: margin .2s linear;

	${minWidth.xs`
		margin: 10px 10px 10px 125px;
	`}

	${minWidth.sm`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0 0 50%;
		margin: 0;
		position: relative;
		transition-property: none;

		&::after {
			content: "";
			display: block;
			width: 6px;
			height: 168px;
			background-color: ${({ theme }) => theme.eta};
			opacity: 0.5;			
			position: absolute;
			right: -3px;
			bottom: -20px;

		}

	`}

	${minWidth.md`
		&::after {
			height: 184px;
		}
	`}

	& p {
		font-size: 0.8rem;
		margin: 0 0 0.5rem 0;
		font-weight: 700;

		${minWidth.xs`
			font-size: 1rem;
		`}	

		${minWidth.md`
			font-size: 1.2rem;
		`}

	}

	& span {
		font-weight: 400;
		color: ${({ theme }) => theme.name === 'light' ? theme.alpha : theme.beta};
	}

`