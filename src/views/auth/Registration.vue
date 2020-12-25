<template>
	<div class="card auth-card">
		<div class="card-header">
			Registration
		</div>
		<div class="card-body">
			<form>
				<div class="form-group">
					<label for="name">
						Name
					</label>
					<input type="text" id="name" class="form-control">
				</div>
				<div class="form-group">
					<label for="email">
						Email
					</label>
					<input type="email" id="email" class="form-control">
				</div>
				<div class="form-group">
					<label for="password">
						Password
					</label>
					<input type="password" id="password" class="form-control">
				</div>
				<div class="form-group">
					<label for="confirmPassword">
						Confirm Password
					</label>
					<input type="password" name="confirm_password" id="confirmPassword" class="form-control">
				</div>
				<div class="text-right">
					<router-link :to="{ name: 'login' }">
						Login
					</router-link>
					<button class="btn btn-primary ml-2" type="submit">
						Send
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {}
</script>
