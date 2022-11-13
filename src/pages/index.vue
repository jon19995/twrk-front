<template>
	<div class="container">
		<main>
			<h1 class="text-primary text-20 my-5 md:text-26 xl:my-8 2xl:text-34 2xl:my-9">
				Валютный калькулятор
			</h1>

			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:gap-10">
				<TheForm />
				<TheAside />
			</div>
		</main>

		<TheFooter />
	</div>
</template>

<script>
import TheAside from '../components/TheAside.vue';
import TheForm from '../components/TheForm.vue'
import TheFooter from '../components/footers/TheFooter.vue'

export default {
	components: {
		TheForm,
		TheAside,
		TheFooter,
	},
}
</script>
