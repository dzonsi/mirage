import React from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';


function SectionNavLink(props) {

	const { to, iconName, iconPrefix } = props;

	const capitalize = text => {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	return (
		<section className={props.className}>
			<NavLink to={to}>
				<h2>
					<Icon icon={[iconPrefix, iconName]} />
					<span>{capitalize(to)}</span>
				</h2>
			</NavLink>
		</section>
	)

}

SectionNavLink.propTypes = {
	to: PropTypes.string.isRequired,
	iconName: PropTypes.string.isRequired,
	iconPrefix: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
}

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const SectionNavLinkStyled = styled(SectionNavLink)`

	margin: 10px;

	& a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 106px;
			height: 106px;
			font-weight: 700;
			text-align: center;
			text-decoration: none;
			color: #fff;
			color: ${({ theme }) => props => theme.name === 'light' ? theme.beta : hex2rgba(theme[props.color], 0.8)};
			background-color: ${({ theme }) => theme.name === 'light' ? 'rgba(0, 0, 0, 0.05)' : null };
			border-radius: 15px;
			border: ${({ theme }) => props => theme.name === 'light' ? null : `3px solid ${theme.gamma}`};
			transition: all .1s linear;

			&:hover {
				color: ${({ theme }) => props => theme.name === 'light' ? hex2rgba(theme[props.color], 1) : hex2rgba(theme[props.color], 0.8)};
				background-color: ${({ theme }) => theme.name === 'light' ? 'rgba(0, 0, 0, 0.1)' : null };
				border-color: ${({ theme }) => props => theme.name === 'light' ? null : hex2rgba(theme[props.color], 0.8)};
				box-shadow: ${({ theme }) => theme.name === 'light' ? '2px 2px 10px 0 rgba(0, 0, 0, 0.4);' : null };

				& h2 {
					${minWidth.md`
						${({ theme }) => theme.name === 'light' ? 'transform: scale(1.05);' : null }
					`}
				}
			}

			${minWidth.sm`
				width: 126px;
				height: 126px;
			`}

			${minWidth.md`
				width: 156px;
				height: 156px;
				border-radius: 50%;
				border-width: 5px;
			`}

			& h2 {
				margin: 0;
				font-size: 1rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				transition: transform .1s linear;

				${minWidth.md`
					font-size: 1.2rem;
				`}

			}

			& span {
				display: block;
				font-weight: 700;
			}

			& svg {
				display: block;
				font-size: 1.5rem;
				margin-bottom: 5px;
			}

	}

`