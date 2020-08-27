import React from "react";
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';

import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

function Status(props) {
	const type = props.type;

	return (
		<div className={props.className}>
			<div>
				<Button onClick={() => {console.log('Go back')}}>
					<Icon icon={['fas', 'arrow-left']} />
				</Button>
				{type && <h2>{type}</h2>}
			</div>
			<Button onClick={() => {console.log('Options')}}>
				<Icon icon={['fas', 'ellipsis-v']} />
			</Button>
		</div>
	)

}

Status.propTypes = {
	type: PropTypes.string
}

export const StatusStyled = styled(Status)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 20px;

	& div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& button {
		padding: 0 5px;
		transition: all .1s linear;

		&:hover {
			color: ${({ theme }) => theme.zeta};
			transform: scale(1.2);
		}

		&:active {
			padding: 0 5px;
		}
	}

	& h2 {
		margin: 0 0 0 8px;
	}

	& > button {
		padding: 0 9px;

		&:active {
			padding: 0 9px;
		}
	}

`