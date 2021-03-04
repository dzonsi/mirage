import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import { minWidth } from '../../theme/mixins/minWidth';

import { DefaultButton as Button } from '../shared/DefaultButton';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { SingleUserOptionsStyled as Options } from './SingleUserOptions';
import { OptionsOverlayStyled as Overlay } from '../shared/OptionsOverlay';

function SingleUserMore(props) {

	const [show, setShow] = useState(false);
	const btn = useRef(null);

	const getBtn = () => btn;

	const firstUpdate = useRef(true);

	useEffect(() => {

    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if(show) {
    	btn.current.setAttribute('aria-expanded', true);
    } else {
    	btn.current.focus();
    	btn.current.removeAttribute('aria-expanded');
    }
  }, [show]);

	return (
		<div className={props.className}>
			<Button
				id="more"
				className="more"
				ref={btn} padding="0 9px"
				onClick={() => setShow(!show)}
				title="User options"
				aria-label="User options"
				aria-haspopup="true"
				aria-controls="user-options"
			>
				<Icon icon={['fas', 'ellipsis-v']} />
			</Button>
			{show && <Options show={show} setShow={setShow} getBtn={getBtn} /> }
			{show && <Overlay />}
		</div>
	)

}

export const SingleUserMoreStyled = styled(SingleUserMore)`
	position: relative;

	${minWidth.xs`
		font-size: 1.3rem;

		& .more {
			padding: 0 12px;
			transition: margin .2s linear;

			&:active {
				padding: 0 12px;
			}
		}

	`}

	${minWidth.sm`

		& .more {
			margin-right: 50px;
		}

	`}

	${minWidth.md`
		font-size: 1.5rem;

		& .more {
			padding: 0 13px;
			margin-right: 100px;

			&:active {
				padding: 0 13px;
			}
		}

	`}

`