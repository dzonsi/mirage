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

export const SectionNavLinkStyled = styled(SectionNavLink)`

`