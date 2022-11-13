<template>
	<CardItem
		tag="footer"
		class="p-6 mt-5 mb-[141px] bg-gray grid grid-cols-1 gap-5 md:flex md:items-center xl:p-7 xl:mt-8 xl:gap-6 2xl:p-8 2xl:gap-7"
	>
		<InformationIcon
			color="#0F4471"
			class="w-10 h-10 xl:w-12 xl:h-12 2xl:w-[52px] 2xl:h-[52px]"
		/>
		<h2 class="text-primary font-medium text-18 xl:text-20">
			Телефон: <a href="tel:+78008889028">8 (800) 888-90-28</a>, email: <a href="mailto: info@example.ru">info@example.ru.</a>
		</h2>
	</CardItem>
</template>

<script>
import InformationIcon from "../icons/InformationIcon.vue"
import CardItem from "../WrapperContent.vue"

export default {	
	components: {
		CardItem,
		InformationIcon,
	},
}
</script>
