import React from "react";
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

function ItemsContainer(props) {

	return (
		<ul className={props.className}>
			{props.children}
		</ul>
	)

}

export const ItemsContainerStyled = styled(ItemsContainer)`
	display: flex;
	justify-content: space-between;
	overflow: hidden;
	padding: 0.5rem;

	${minWidth.xs`
		justify-content: center;
		padding: 1rem 0;
	`}

	${({ show }) => show === 'all' ? `
		flex-wrap: wrap;
		justify-content: center;
		margin: 20px 20px 20px calc(20px + 2rem);

		@media screen and (min-width: 992px) {
			max-width: 952px;
			padding-left: 2rem;
			margin: 0 auto;
		}

	` : null};
`