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

`