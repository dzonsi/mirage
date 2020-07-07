import React from "react";
import styled from 'styled-components';

function ItemsContainer(props) {

	return (
		<div className={props.className}>
			{props.children}
		</div>
	)

}

export const ItemsContainerStyled = styled(ItemsContainer)`
	display: flex;
	overflow: hidden;
`