import React from "react";
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';

import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

function Status(props) {
	const type = props.type;
	const Options = props.options;

	return (
		<div className={props.className}>
			<div>
				<Button onClick={() => {console.log('Go back')}}>
					<Icon icon={['fas', 'arrow-left']} />
				</Button>
				{type && <h2>{type}</h2>}
			</div>
			<div>
				<Button onClick={props.toggle}>
					{!props.show ?
						<Icon icon={['fas', 'ellipsis-v']} /> :
						<Icon icon={['fas', 'window-close']} />
					}
				</Button>
				{props.show && Options}
			</div>
		</div>
	)

}

Status.propTypes = {
	type: PropTypes.string,
	toggle: PropTypes.func.isRequired
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

	& div:nth-child(2) {
		position: relative;
	}

	& button {
		padding: 0 5px;
		transition: all .1s linear;

		&:hover {
			color: ${({ theme }) => theme.zeta};
		}

		&:active {
			padding: 0 5px;
		}
	}

	& h2 {
		margin: 0 0 0 8px;
	}

	& > button {
		position: relative;
		padding: 0 9px;

		&:active {
			padding: 0 9px;
		}

	}

`