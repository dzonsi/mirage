import React from 'react';
import styled from 'styled-components';

import { minWidth } from '../../theme/mixins/minWidth';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { DefaultButton as Button } from '../shared/DefaultButton';

// redux
import { connect } from 'react-redux';
import { toggleSideNav } from '../../action-creators/actionCreators';

import PropTypes from 'prop-types';

function SideNavToggle(props) {

	const { toggleSideNav: toggle } = props;

	return (
		<Button
			className={props.className}
			onClick={toggle}
			title="Open side navigation"
		>
			<Icon icon={['fas', 'bars']} />
		</Button>
	)
}

SideNavToggle.propTypes = {
	toggleSideNav: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
	toggleSideNav
}

const SideNavToggleStyled = styled(SideNavToggle)`
	font-size: 1rem;
	color: ${({ theme }) => theme.name === 'light' ?
		theme.alpha :
		theme.beta
	};
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin: 0 1rem 0 0.6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: font-size .2s linear;

	&:hover {
		color: ${({ theme }) => theme.name === 'light' ?
		theme.beta :
		theme.alpha
		};
	}

	&:active {
		color: ${({ theme }) => theme.zeta};
	}

	${minWidth.md`
		font-size: 1.5rem;
	`}
`

export const SideNavToggleConnected = connect(null, mapDispatchToProps) (SideNavToggleStyled);