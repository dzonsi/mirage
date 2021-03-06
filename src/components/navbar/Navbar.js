import React from 'react';
import { NavContainer } from './NavContainer';
import { NavContent } from './NavContent';
import { SideNavToggleConnected as SideNavToggle } from './SideNavToggle';
import { SearchStyled as Search } from './search/Search';
import { UserInfoConnected as UserInfo } from './user/UserInfo';
import { SideNavConnected as SideNav } from './side-nav/SideNav';
import { OverlayStyled as Overlay } from './Overlay';

// action from redux
import { connect } from 'react-redux';
import { toggleUserInfo } from '../../action-creators/navbarCreators';


function Navbar(props) {
	return (
		<NavContainer aria-label="Main">
			<NavContent>
				<SideNavToggle />
				<Search />
				<UserInfo />
				<SideNav />
				<Overlay
					show={props.userInfoShow}
					toggle={props.toggleUserInfo}
				/>
			</NavContent>
		</NavContainer>
	);
}

const mapStateToProps = state => {
  return {
    ...state.navbarReducer
  }
}

const mapDispatchToProps = {
	toggleUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);