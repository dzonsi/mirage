import React, { useRef, useEffect, cloneElement } from "react";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { minWidth } from '../../theme/mixins/minWidth';

import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { OptionsOverlayStyled as Overlay } from '../shared/OptionsOverlay';

import PropTypes from 'prop-types';

function Status(props) {

	const {
		type,
		options: Options,
		showOptions: show,
		toggleOptions: toggle
	} = props;

	const { goBack } = useHistory();

	const btn = useRef(null);

	const getBtn = () => btn;

	const firstUpdate = useRef(true);

	useEffect(() => {

    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if(!show) btn.current.focus();
  }, [show]);

	return (
		<div className={props.className}>
			<div className="heading">
				{type && <h2 className="title">{type}</h2>}
				<Button className="back" padding="0 5px" onClick={goBack}>
					<Icon icon={['fas', 'arrow-left']} />
				</Button>
			</div>
			<div className="options">
				<Button className="options-btn" padding="0 9px" onClick={toggle} ref={btn}>
					<Icon icon={['fas', 'ellipsis-v']} />
				</Button>
				{show && cloneElement(Options, { getBtn, show, toggle })}
				{show && <Overlay />}
			</div>
		</div>
	)

}

Status.propTypes = {
	type: PropTypes.string,
	options: PropTypes.object.isRequired,
	showOptions: PropTypes.bool.isRequired,
	toggleOptions: PropTypes.func.isRequired,
}

export const StatusStyled = styled(Status)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 20px;
	max-width: 952px;
	position: sticky;
	top: 88px;
	z-index: 7;

	${minWidth.md`
		margin: auto;
	`}

	& .heading, & .options {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& .heading {

		& .title {
			margin: 0 0 0 8px;
			order: 2;
		}

		& .back  {
			order: 1;

			${minWidth.xs`
				display: none;
			`}

		}

	}

	& .options {
		position: relative;
		transition: font-size .2s linear;

		${minWidth.xs`
			font-size: 1.3rem;
		`}
	}

	& .back, & .options-btn {
		transition: all .1s linear;

		&:hover {
			color: ${({ theme }) => theme.zeta};
		}
	}

`