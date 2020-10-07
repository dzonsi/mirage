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
	justify-content: space-evenly;

	${minWidth.md`
		margin: 0 20px;
	`}

	${({ show }) => show === 'all' ? `
		flex-wrap: wrap;
		margin: 20px 20px 0px 20px;
		justify-content: center;

		@media screen and (min-width: 992px) {
			max-width: 952px;
			margin: 20px auto 0;
		}

	` : null

	};

`