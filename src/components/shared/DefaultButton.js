import styled from 'styled-components';

export const DefaultButton = styled.button`
	color: inherit;
	background-color: transparent;
	padding: ${({ padding }) => padding ? `${padding}px` : 0};
	border: none;

	&:active {
		padding: ${({ padding }) => padding ? `${padding}px` : 0};
	}
`