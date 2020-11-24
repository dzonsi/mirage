import React from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';


function SectionNavLink(props) {

	const { to, iconName, iconPrefix, color } = props;

	const capitalize = text => {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	return (
		<section className={props.className}>
			<NavLink to={to}>
				<h2>
					<span>{capitalize(to)}</span>
					<Icon icon={[iconPrefix, iconName]} />
				</h2>
			</NavLink>
		</section>
	)

}

SectionNavLink.propTypes = {
	to: PropTypes.string.isRequired,
}

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const SectionNavLinkStyled = styled(SectionNavLink)`

	margin: 5px;

	& a {
			display: block;
			font-weight: 700;
			text-align: center;
			text-decoration: none;
			color: #fff;
			background-color: ${({ theme }) => props => hex2rgba(theme[props.color], 0.7)};
			padding: 1rem;
			border-radius: 15px;

			& h2 {
				margin: 0;
			}

			& span {
				opacity: 1;
				font-weight: 700;
			}

			& svg {
				display: none;
			}
	}

`