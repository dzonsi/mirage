import React from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { capitalize } from '../../functions/functions';


function SectionNavLink(props) {

	const { to, iconName, iconPrefix } = props;

	return (
		<section className={props.className}>
			<div className="capsule">
				<NavLink to={to} className="overlay-link" aria-hidden="true" tabIndex="-1">&nbsp;</NavLink>
				<div className="content">
					<div className="image"></div>
					<div className="info">
						<h2 className="heading">{capitalize(to)}</h2>
						<p className="description">{props.children}</p>
						<NavLink to={to} className="link">See all {to}</NavLink>
					</div>
				</div>
			</div>
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

	flex: 0 0 100%;
	margin-bottom: 1rem;

	& .capsule {
		background-color: ${({ theme }) => theme.name === 'light' ? '#fff' : theme.delta };
		border-radius: 15px;
		position: relative;
		overflow: hidden;

		&:hover {

			& .link {
				background-size: 4px 50px;
				border-radius: 4px;
			}

		}
	}

	& .overlay-link {
		border-radius: 15px;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 2;
	}

	& .content {
		padding: 50px 20px;
	}

	& .image {

	}

	& .info {

	}

	& .heading {
		position: relative;
		font-weight: 700;

		&::after {
			content: "";
			display: block;
			width: 60px;
			height: 8px;
			background-color: ${({ theme, color }) => theme[color] };
			margin: .8rem 0;
		}
	}

	& .description {
		font-size: .8rem;
		font-weight: 700;
		color: ${({ theme }) => theme.name === 'light' ? theme.beta : theme.beta };
	}

	& .link {
		display: inline-block;
		font-weight: 700;
		color: ${({ theme }) => theme.alpha };
		padding: .2rem .5rem;
		border-radius: 0px;
		background:
     linear-gradient(
       to bottom, ${({ theme, color }) => theme[color] } 0%,
       ${({ theme, color }) => theme[color] } 100%
     );
  	background-position: 0 100%;
  	background-repeat: repeat-x;
  	background-size: 4px 4px;
  	text-decoration: none;
  	transition: background-size .2s, border-radius .2s;
	}

`