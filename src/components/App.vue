<template>
	<div class="app-ctnr">
		<ul>
			<li v-for="(ingredient, i) in ingredients">{{ingredient}} ({{ i }})</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ingredients: ['meat', 'fruit', 'cookies'],
			persons: [
				{name: 'Max', age: 27, color: 'red'},
				{name: 'Anna', age: 'unknown', color: 'blue'}
			]
		}
	},
	computed: {

	}
}
</script>
