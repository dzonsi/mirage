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
					<SectionNavLink to="posts" iconName="pencil-alt" iconPrefix="fas" color="iota">A piece of writing, image, or other item of content published online, typically on a blog or social media website or application.</SectionNavLink>
					<SectionNavLink to="comments" iconName="comments" iconPrefix="fas" color="kappa">A verbal or written remark expressing an opinion or reaction.</SectionNavLink>
					<SectionNavLink to="todos" iconName="check-double" iconPrefix="fas" color="lambda">A task yet to be done or an item on a to-do list.</SectionNavLink>
					<SectionNavLink to="photos" iconName="images" iconPrefix="fas" color="mu">The process or art of producing images of objects on sensitized surfaces by the chemical action of light.</SectionNavLink>
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