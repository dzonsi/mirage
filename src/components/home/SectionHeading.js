import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { minWidth } from '../../theme/mixins/minWidth';

function SectionHeading(props) {

	const { to } = props;

	const capitalize = text => {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	return (
		<NavLink to={to} className={props.className}>
			<h2>{capitalize(to)}</h2>
			<Icon icon={['fas', 'arrow-right']}  />
		</NavLink>
	)

}

SectionHeading.propTypes = {
	to: PropTypes.string.isRequired,
}

export const SectionHeadingStyled = styled(SectionHeading)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 0 1rem;

	${minWidth.xs`
		justify-content: center;
	`}

	${minWidth.md`
		margin: 0 0 2rem;
	`}

	&:hover {
		& h2 {
			color: ${({ theme }) => theme.zeta};
		}

		& svg {
			color: ${({ theme }) => theme.zeta};
		}
	}

	& h2 {
		font-size: 1.4rem;
		color: ${({ theme }) => theme.alpha};
		margin: 0;

		${minWidth.xs`
			font-size: 1.6rem;
			font-weight: 700;
			color: ${({ theme }) => theme.beta};
		`}

		${minWidth.md`
			font-size: 2rem;
		`}

	}

	& svg {
		color: ${({ theme }) => theme.beta};

		${minWidth.xs`
			display: none;
		`}
	}
`