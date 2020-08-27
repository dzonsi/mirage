import React from "react";
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';

import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

function Status(props) {

	return (
		<div className={props.className}>
			
		</div>
	)

}

Status.propTypes = {
	
}

export const StatusStyled = styled(Status)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`