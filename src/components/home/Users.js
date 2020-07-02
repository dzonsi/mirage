import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchUsers } from '../../action-creators/usersCreators';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

class Users extends React.Component {

	componentDidMount() {
		if(!this.props.users.length) {
			this.props.dispatch(fetchUsers());
		}
	}

	render() {

		const { loading, users, error } = this.props;
		const style = {
			textAlign: 'center'
		}
		const navStyle = {
			display: 'block',
			textAlign: 'center'
		}

		if(loading) {
			return (
				<div style={style}>
					<Icon icon={['fas', 'spinner']} size="3x" spin />
				</div>
			)
		}
		if(users.length) {
			return (
				<div>
					<NavLink to="/users" style={navStyle}>
						<Icon icon={['fas', 'users']} size="3x" />
						<h2>Users ({users.length})</h2>
						<p>Show all</p>
					</NavLink>
				</div>
			)
		}
		if(error) {
			return (
				<h2>Something went wrong!</h2>
			)
		}
		return (
			<h2>Users component</h2>
		)
	}

}

const mapStateToProps = state => ({
	users: state.usersReducer.users,
	loading: state.usersReducer.loading,
	error: state.usersReducer.error
});

export default connect(mapStateToProps) (Users);