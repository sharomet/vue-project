<template>
	<div>
		dasboard
		<ul>
			<li
				v-for="user in users"
				:key="user.id">
				{{ user.first_name }}
			</li>
		</ul>
	</div>
</template>

<script>
import { usersMock } from '../../mock/users'
//import fetchUsers from '../../mock/index'

export default {
	/*data() {
		return {
			users: usersData
		}
	}*/
	setup() {
		const users = usersMock;
		return {
			users
		}
	}
}
</script>