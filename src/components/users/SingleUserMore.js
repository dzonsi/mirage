import React, { useState, useRef } from "react";
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { SingleUserOptionsStyled as Options } from './SingleUserOptions';

function SingleUserMore(props) {

	const [show, setShow] = useState(false);
	const btn = useRef(null);

	const getBtn = () => {
		return btn;
	}

	return (
		<div className={props.className}>
			<Button ref={btn} padding="0 9px" onClick={() => setShow(!show)} title="More options">
				<Icon icon={['fas', 'ellipsis-v']} />
			</Button>
			{show && <Options show={show} setShow={setShow} getBtn={getBtn} /> }
		</div>
	)

}

export const SingleUserMoreStyled = styled(SingleUserMore)`
	position: relative;

	${minWidth.xs`
		font-size: 1.3rem;

		& button {
			padding: 0 12px;
			transition: margin .2s linear;

			&:active {
				padding: 0 12px;
			}
		}

	`}

	${minWidth.sm`

		& button {
			margin-right: 50px;
		}

	`}

	${minWidth.md`
		font-size: 1.5rem;

		& button {
			padding: 0 13px;
			margin-right: 100px;

			&:active {
				padding: 0 13px;
			}
		}

	`}

`