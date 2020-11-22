import React from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

var globalTo = null;
var globalColor = 'alpha';

function SectionNavLink(props) {

	const { to, iconName, iconPrefix, color } = props;
	globalTo = to;
	globalColor = color;


	const capitalize = text => {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	return (
		<section className={props.className}>
			<NavLink to={to} className={to}>
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

	& a {
			display: block;
			text-decoration: none;
			background-color: ${({theme}) => hex2rgba(theme[globalColor], 0.8)};
			padding: 1rem;
			border-radius: 15px;
			text-align: center;

			& h2 {
				margin: 0;
			}

			& span {
				color: #fff;
				opacity: 1;
			}
	}

`