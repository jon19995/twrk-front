<template>
	<CardItem
		tag="article"
		style="height: fit-content;"
	>
		<h2 class="text-13 text-primary uppercase mb-6 font-medium xl:mb-8 xl:text-15 2xl:text-18 2xl:mb-10">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:
		</h2>
		<div class="flex flex-wrap justify-between gap-6 md:gap-5 md:flex-nowrap xl:gap-6 2xl:gap-8">
			<CustomList
				class="text-13 gap-4 leading-4 xl:text-14 xl:w-1/2 2xl:text-18 2xl:gap-5 2xl:leading-5"
			>
				<li>incididunt ut labore et dolore magna aliqua</li>
				<li>incididunt ut labore et</li>
				<li>incididunt ut labore et dolore</li>
				<li>labore et dolore</li>
				<li>incididunt ut</li>
				<li>incididunt ut labore et dolore</li>
				<li>incididunt ut labore</li>
			</CustomList>

			<div class="grid gap-2 grid-cols-4 md:grid-cols-1 xl:gap-2.5 xl:grid-cols-2 xl:w-1/2 2xl:gap-4 2xl:h-[306px]">
				<div class="rounded-4 rounded-tr-16 rounded-bl-16 overflow-hidden h-11 md:h-14">
					<img
						class="w-full h-full"
						src="../assets/images/img-1.jpg"
						alt="img-1"
					>
				</div>
				<div class="rounded-4 rounded-tl-16 rounded-br-16 overflow-hidden h-11 xl:rounded-tr-32 xl:h-auto md:h-14">
					<img
						class="w-full h-full"
						src="../assets/images/img-2.jpg"
						alt="img-2"
					>
				</div>
				<div class="rounded-4 rounded-tr-16 rounded-bl-16 overflow-hidden h-11 xl:rounded-bl-32 xl:h-auto md:h-14">
					<img
						class="w-full h-full"
						src="../assets/images/img-3.jpg"
						alt="img-3"
					>
				</div>
				<div class="rounded-4 rounded-tl-16 rounded-br-16 overflow-hidden  h-11 xl:h-auto xl:h-auto md:h-14">
					<img
						class="w-full h-full"
						src="../assets/images/img-4.png"
						alt="img-4"
					>
				</div>
			</div>
		</div>
	</CardItem>
</template>

<script>
import CustomList from '../components/CustomList.vue';
import CardItem from './WrapperContent.vue';

export default {
	components: {
		CardItem,
		CustomList,
	},
}
</script>