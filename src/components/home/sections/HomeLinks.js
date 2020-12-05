import React from "react";
import styled from 'styled-components';

import { minWidth } from '../../../theme/mixins/minWidth';

import { SectionHeadingStyled as Heading } from '../SectionHeading';
import { SectionNavLinkStyled as SectionNavLink } from '../SectionNavLink';

function HomeLinks(props) {

		return (
			<div className={props.className}>
				<Heading to="resources" />
				<div className="links-container">
					<SectionNavLink to="posts" iconName="pencil-alt" iconPrefix="fas" color="iota" />
					<SectionNavLink to="comments" iconName="comments" iconPrefix="fas" color="kappa" />
					<SectionNavLink to="todos" iconName="check-double" iconPrefix="fas" color="lambda" />
					<SectionNavLink to="photos" iconName="images" iconPrefix="fas" color="mu" />
				</div>
			</div>
		)

}

export const HomeLinksStyled = styled(HomeLinks)`

	${minWidth.md`
		margin-top: 50px;
	`}

	.links-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

`