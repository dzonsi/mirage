import React from 'react';
import styled from 'styled-components';

function Header(props) {
	return (
		<header className={props.className}>
			{props.children}
		</header>
	)
}

export const HeaderStyled = styled(Header)`
`