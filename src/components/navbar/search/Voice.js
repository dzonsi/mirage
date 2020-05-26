import React from 'react';
import styled from 'styled-components';
import { minWidth } from '../../../theme/mixins/minWidth';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { DefaultButton as Button } from '../../shared/DefaultButton';


function Voice(props) {
	return (
		<Button className={props.className} title="Voice search...">
			<Icon icon={['fas', 'microphone']} />
		</Button>
	)
}

export const VoiceStyled = styled(Voice)`
	color: ${({ theme }) => theme.name === 'light' ?
		theme.alpha :
		theme.beta
	};
	padding: 4px 10.5px;
	transition: font-size .2s linear;

	&:hover {
		color: ${({ theme }) => theme.name === 'light' ?
		theme.beta :
		theme.alpha
		};
	}

	&:active {
		color: ${({ theme }) => theme.zeta};
		padding: 4px 10.5px;
	}

	${minWidth.md`
		font-size: 1.3rem;
		padding: 0.4px 8.85px;

		&:active {
			padding: 0.4px 8.85px;
		}
	`}
`