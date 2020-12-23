<template>
	<div class="auth-card">
		<div class="auth-card__header">
			Login
		</div>
		<div class="auth-card__body">
			
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
				<div class="text-right">
					<button class="btn btn-primary" type="submit">
						Send
					</button>
				</div>
			</form>

		</div>
	</div>
</template>

<script>
import './auth.scss';
export default {
	
}
</script>