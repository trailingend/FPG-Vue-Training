<template>
	<div class="app-ctnr">
		<nav class="nav-ctnr">
			<div class="nav-logo-ctnr">
				<img src="images/logo.svg" class="nav-logo"/>
			</div>
			<ul class="nav-social-ctnr">
				<li class="nav-social-ctnr">FB</li>
				<li class="nav-social-ctnr">TW</li>
				<li class="nav-social-ctnr">IN</li>
			</ul>
		</nav>
		<div class="inner-ctnr">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { mapGetter, mapActions } from 'vuex';

export default {
	data() {
		return {
		}
	},
	components: {
		// 'person': Person,
		// 'trait' : Trait,
	}
}
</script>
