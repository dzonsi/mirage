import React from "react";
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

function ItemsContainer(props) {

	return (
		<div className={props.className}>
			{props.children}
		</div>
	)

}

export const ItemsContainerStyled = styled(ItemsContainer)`
	display: flex;
	justify-content: space-between;
	overflow: hidden;

	${minWidth.xs`
		justify-content: center;
	`}
`