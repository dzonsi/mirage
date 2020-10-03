import React, { useRef, cloneElement } from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { toggleUsersOptions } from '../../action-creators/usersCreators';
//import { minWidth } from '../../../theme/mixins/minWidth';

import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

function Status(props) {

	const type = props.type;
	const Options = props.options;
	const showOptions = props.showOptions;
	const toggleOptions = props.toggleUsersOptions;
	const history = useHistory();
	const goBack = history.goBack;

	const btn = useRef(null);

	const getBtn = () => {
		return btn;
	}

	return (
		<div className={props.className}>
			<div>
				{type && <h2>{type}</h2>}
				<Button padding="0 5px" onClick={goBack}>
					<Icon icon={['fas', 'arrow-left']} />
				</Button>
			</div>
			<div>
				<Button padding="0 9px" onClick={toggleOptions} ref={btn}>
					<Icon icon={['fas', 'ellipsis-v']} />
				</Button>
				{showOptions && cloneElement(Options, { getBtn: getBtn, toggleOptions: toggleOptions })}
			</div>
		</div>
	)

}

Status.propTypes = {
	type: PropTypes.string,
	options: PropTypes.object.isRequired,
	showOptions: PropTypes.bool.isRequired,
	toggleUsersOptions: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	showOptions: state.usersReducer.usersOptions
});

const mapDispatchToProps = {
	toggleUsersOptions
}

export const StatusConnected = connect(mapStateToProps, mapDispatchToProps) (Status);

export const StatusConnectedStyled = styled(StatusConnected)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 20px;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&:first-child {
			& button  {
				order: 1;
			}
		}
	}

	& > div:nth-child(2) {
		position: relative;
	}

	& button {
		transition: all .1s linear;

		&:hover {
			color: ${({ theme }) => theme.zeta};
		}
	}

	& h2 {
		margin: 0 0 0 8px;
		order: 2;
	}

`