<template>
	<CardItem
		tag="footer"
		class="leading-[1.2] py-6 px-4 flex flex-col gap-8 rounded-none mx-[-16px] mt-5 md:rounded-16 md:mt-6 md:mx-0 md:p-7 md:flex-row xl:mt-10 xl:p-10 xl:gap-[120px] xl:mb-20 2xl:mb-36 2xl:p-12"
	>
		<div class="w-full text-center md:w-1/2 md:text-left">
			<h2 class="text-18 text-primary mb-1 font-medium xl:text-30 xl:mb-3 2xl:text-36 2xl:mb-4">
				Нужна помощь? Мы поможем! Просто свяжитесь с нами.
			</h2>
			<p class="text-10 text-text-main text-base 2xl:text-16 xl:text-13">
				Наши специалисты с радостью ответят на все ваши вопросы и дадут профессиональную консультацию по товарам.
			</p>
		</div>

		<div class="w-full flex justify-between items-center flex-col gap-3 md:w-1/2 xl:gap-4">
			<a
				class="text-24 text-primary font-medium xl:text-40 2xl:text-52"
				href="tel:+78008889028"
			>8 (800) 888-90-28</a>
			<p class="text-12 uppercase text-base xl:text-18 2xl:text-24">
				или
			</p>
			<a
				class="text-20 text-primary xl:text-24 2xl:text-32"
				href="mailto: info@example.ru"
			>info@example.ru</a>
		</div>
	</CardItem>
</template>

<script>
import CardItem from '../WrapperContent.vue';

export default {
	components: {
		CardItem,
	},
}
</script>
