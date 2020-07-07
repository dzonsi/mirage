import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

function SectionHeading(props) {

	const { to } = props;

	const capitalize = text => {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	return (
		<NavLink to={to} className={props.className}>
			<h2>{capitalize(to)}</h2>
			<Icon icon={['fas', 'arrow-right']} />
		</NavLink>
	)

}

export const SectionHeadingStyled = styled(SectionHeading)`

`