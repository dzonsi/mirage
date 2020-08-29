import React from "react";
import styled from 'styled-components';

function AllUsersOptions(props) {

	return (
		<h3 className={props.className}>Users options</h3>
	)

}

export const AllUsersOptionsStyled = styled(AllUsersOptions)`
	position: absolute;
	top: 100%;
	right: 0;
`