<template>
	<CardItem
		:tag="tag"
		class="bg-gray"
	>
		<slot name="icon" />
		<h2 class="text-primary uppercase font-bold text-18 mb-3 xl:mb-3 xl:text-20 2xl:mb-4">
			{{ code }}
		</h2>
		<h3 class="text-14 mb-9 xl:mb-10 xl:text-16">
			{{ name }}
		</h3>
		<CustomList
			class="text-14 font-medium space-y-3 xl:text-16"
		>
			<li>Номинал: {{ nominal }}</li>
			<li>Курс: {{ value }}</li>
		</CustomList>
	</CardItem>
</template>

<script>
import CustomList from "../components/CustomList.vue";
import CardItem from "../components/WrapperContent.vue"

export default {	
	components: {
		CardItem,
		CustomList,
	},

	props: {
		code: {
			type: String,
			default: "0",
			require: true,
		},
		name: {
			type: String,
			default: "emty",
			require: true,
		},
		nominal: {
			type: Number,
			default: 1,
			require: true,
		},
		value: {
			type: Number,
			default: 0,
			require: true,
		},
		tag: {
			type: String,
			default: "div"
		}
	},
}
</script>
