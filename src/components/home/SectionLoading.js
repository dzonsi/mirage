import React from 'react';
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';


function SectionLoading(props) {
	return (
		<div className={props.className}>
			<Icon icon={['fas', 'spinner']} size="3x" spin />
		</div>
	)
}

export const SectionLoadingStyled = styled(SectionLoading)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	color: ${({ theme }) => theme.zeta};
`