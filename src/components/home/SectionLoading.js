import React from 'react';
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';
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
	height: 209px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	color: ${({ theme }) => theme.zeta};

	${minWidth.xs`
		height: 257px;
	`}

	${minWidth.sm`
		height: 277px;
	`}

	${minWidth.md`
		height: 349px;
	`}

`