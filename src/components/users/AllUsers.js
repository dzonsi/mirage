import React from "react";
import styled from 'styled-components';

import { StatusConnectedStyled as Status } from '../shared/Status';
import { AllUsersOptionsStyled as Options } from './AllUsersOptions';
import { AllUsersBodyStyled as AllUsersBody } from './AllUsersBody';

function AllUsers(props) {

	return (
		<section className={props.className}>
			<Status
				type="Users"
				options={<Options />}
			/>
			<AllUsersBody />
		</section>
	)

}

export const AllUsersStyled = styled(AllUsers)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;

	&.page-enter {
		opacity: 0.5;
		transform: translateX(-100%);
	}
	&.page-enter-active {
		opacity: 1;
		transform: translateX(0);
		transition: all .3s linear;
	}

	&.page-exit {
		opacity: 1;
		transform: translateX(0);
	}
	&.page-exit-active {
		opacity: 0.5;
		transform: translateX(-100%);
		transition: all .3s linear;
	}
`