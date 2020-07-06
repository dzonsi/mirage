import React from 'react';
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';


function Loading(props) {


	return (
		<div className={props.className}>
			<Icon icon={['fas', 'spinner']} size="3x" spin />
		</div>
	)
}

export const LoadingStyled = styled(Loading)`
	width: 100%;
	height: calc(100vh - 88px);
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.zeta};
`