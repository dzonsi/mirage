import styled from 'styled-components';

import { minWidth } from '../../theme/mixins/minWidth';

export const NavContent = styled.div`
	${({ theme }) => theme.name === 'light' ?
		`background-color: ${theme.epsilon};
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
		` :
		`background-color: ${theme.gamma};`
	}
	border-radius: 6px;
	margin: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	${
		minWidth.md`
			margin: 20px auto;
			max-width: 952px;
		`
	}
`