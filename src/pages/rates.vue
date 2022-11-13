<template>
	<div class="container">
		<main>
			<h1 class="text-primary text-20  my-5 md:text-26 xl:my-8 xl:text-26 2xl:text-34 2xl:my-9">
				Курс рубля
			</h1>

			<h2 v-if="loading">
				Loading...
			</h2>
			
			<ul
				v-else
				class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 md:grid-cols-3 xl:gap-8"
			>
				<CurrencyCard
					v-for="(value, i) in rates"
					:key="value['ID']"
					tag="li"
					:code="value.CharCode"
					:name="value.Name"
					:nominal="value.Nominal"
					:value="value.Value"
				>
					<template #icon>
						<MoneyIcon
							class="mb-5 md:w-[52px] md:h-[52px] xl:w-14 xl:h-14 xl:mb-6 2xl:w-[72px] 2xl:h-[72px] 2xl:mb-8"
							:color="i % 2 ? '#E02025' : '#0F4471'"
						/>
					</template>
				</CurrencyCard>
			</ul>
		</main>

		<FooterMin />
	</div>
</template>

<script>
import MoneyIcon from "../components/icons/MoneyIcon.vue"
import RatesMixin from "../mixins/ratesMixin.vue"
import FooterMin from "../components/footers/FooterMin.vue";
import CurrencyCard from "../components/CurrencyCard.vue";

export default {	
	components: {
		MoneyIcon,
		FooterMin,
		CurrencyCard,
	},

	mixins: [RatesMixin],
}
</script>
