<template>
	<component
		:is="tag"
		class="bg-secondary rounded-16 p-5 xl:p-6 2xl:p-8"
	>
		<slot />
	</component>
</template>

<script>
export default {	
	props: {
		tag: {
			default: "div",
			type: String
		}
	}
}
</script>