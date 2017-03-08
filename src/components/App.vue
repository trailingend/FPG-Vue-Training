<template>
	<div class="app-ctnr">
		<h1>Select Person from below</h1>
		<div class="inner-ctnr">
			<router-view></router-view>
			<person></person>
		</div>
	</div>
</template>

<script>
import { mapGetter, mapActions } from 'vuex';
import Person from './Person.vue';


export default {
	data() {
		return {
		}
	},
	components: {
		'person': Person,
	}
}
</script>
