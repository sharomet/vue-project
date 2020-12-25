import users from './data/users.json'

const fetch = (mockData, time = 0) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockData)
		}, time)
	})
}

export default {
	fetchUsers() {
		return fetch(users, 2000)
	}
}