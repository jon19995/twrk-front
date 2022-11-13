<template>
	<component
		:is="tag"
		:class="$style.customList"
		class="flex flex-col text-text-main"
	>
		<slot />
	</component>
</template>

<script>
export default {
	props: {
		tag: {
			default: "ul",
			type: String
		}
	}
}
</script>


<style lang="scss" module>
.customList > li {
	position: relative;
	padding-left: 16px;
	&::before {
		content: "";
		height: 8px;
		width: 8px;
		position: absolute;
		left: 0;
		top: calc(50% - 5px);
		border: 2px solid #E02025;
		border-radius: 50%;
		display: block;
	}
}

@media screen and (min-width: 1280px) {
	.customList > li {
		padding-left: 22px;
		&::before {		
			height: 10px;
			width: 10px;
		}
	}
}
</style>