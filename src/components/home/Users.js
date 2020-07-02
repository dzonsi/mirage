import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from '../../action-creators/usersCreators';

class Users extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchUsers());
	}

	render() {
		const { loading, users, error } = this.props;
		if(loading) {
			return <h2>Loading...</h2>
		}
		if(users.length) {
			return (
				<ul>
					{users.map(user => <li key={user.id}>{user.name}</li>)}
				</ul>
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