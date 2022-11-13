<template>
	<label
		for="firstCurrency"
		class="text-14 text-primary flex flex-col 2xl:text-16"
	>
		<slot />
		<input
			id="firstCurrency"
			:type="type"
			:value="value"
			class="text-12 mt-2 py-3 px-4 border-solid rounded-4 border border-[#DFDFDF] xl:py-3.5 xl:px-5 2xl:text-14"
			placeholder="Введите название или код"
			:disabled="disabled"
			@input="handleInput"
		>
	</label>
</template>

<script>
export default {
	props: {
		value: {
			type: [ String, Number ],
			default: "",
			require: true
		},
		type: {
			type: String,
			default: "text"
		},
		min: {
			type: Number,
			default: 0
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		handleInput(e) {
			this.$emit("input", e.target.value)
		}
	}
}
</script>
