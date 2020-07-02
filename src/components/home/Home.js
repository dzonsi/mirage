import React from 'react';
import styled from 'styled-components';
//import { minWidth } from '../../../theme/mixins/minWidth';

import Users from './Users';

function Home(props) {
	return (
		<div>
			<h2>Home component</h2>
			<Users />
		</div>
	)
}

export const HomeStyled = styled(Home)`
	
`