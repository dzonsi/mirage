import React from 'react';
import styled from 'styled-components';

import { VoiceStyled as Voice } from './Voice';
import { TextStyled as Text } from './Text';

function Search(props) {
	return (
		<div className={props.className}>
			<Text />
			<Voice />
		</div>
	)
}

export const SearchStyled = styled(Search)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
`