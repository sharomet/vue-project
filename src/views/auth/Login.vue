<template>
	<div class="card auth-card">
		<div class="card-header">
			Login
		</div>
		<div class="card-body">
			<form>
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
				<div class="form-row align-items-center">
					<div class="col-sm-6">
						<div class="custom-control custom-checkbox">
							<input type="checkbox" name="remember" class="custom-control-input" id="remember">
							<label class="custom-control-label" for="remember">
								Remember me
							</label>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="text-right">
							<router-link :to="{ name: 'registration' }">
								Registration
							</router-link>
							<button class="btn btn-primary ml-2" type="submit">
								Send
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {}
</script>