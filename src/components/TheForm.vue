<template>
	<form class="flex flex-col gap-5 xl:gap-6">
		<CustomInput
			v-model.trim="form.firstValue"
			:disabled="disabledInput"
		>
			Валюта 1
		</CustomInput>
		<CustomInput
			v-model.trim="form.secondValue"
			:disabled="disabledInput"
		>
			Валюта 2
		</CustomInput>
		<CustomInput
			v-model.trim="form.count"
			type="number"
			:disabled="disabledInput"
			:min="0"
		>
			Количество
		</CustomInput>

		<CardItem class="flex items-center gap-5 md:p-6 xl:p-7 xl:gap-[28px] 2xl:p-8">
			<InformationIcon class="h-10 w-10 xl:w-12 xl:h-12 2xl:w-[52px] 2xl:h-[52px]" />
			<p class="text-primary text-16 font-bold xl:text-20 2xl:text-24">
				Итого: {{ result }}
			</p>
		</CardItem>
	</form>
</template>

<script>
import RatesMixin from '../mixins/ratesMixin.vue';
import CustomInput from '../components/CustomInput.vue';

export default {
	components: {
		CustomInput,
	},

	mixins: [RatesMixin],

	data: () => ({
		form: {
			firstValue: "",
			secondValue: "",
			count: 0
		}
	}),

	computed: {
		disabledInput() {
			return this.rates.length === 0
		},

		result () {
			const firstValue = this.form.firstValue
			const secondValue = this.form.secondValue
			const count = this.form.count

			
			if(firstValue && secondValue && count) {
				const foundedFirstValue = this.searchItem(firstValue)
				const foundedSecondValue = this.searchItem(secondValue)

				if(foundedFirstValue.length && foundedSecondValue.length) {
					const сoeff = this.calculateCost(foundedFirstValue[0]) - this.calculateCost(foundedSecondValue[0])

					return Math.abs(сoeff * count)
				}

				return "Не валидные значения"
			}

			return "..."
		}
	},

	watch: {
		form: {
			handler({ firstValue, secondValue, count}) {
				if(firstValue && secondValue && count) {
					const foundedFirstValue = this.searchItem(firstValue)
					const foundedSecondValue = this.searchItem(secondValue)

					if(foundedFirstValue.length && foundedSecondValue.length) {
						const сoeff = this.calculateCost(foundedFirstValue[0]) - this.calculateCost(foundedSecondValue[0])

						return Math.abs(сoeff * count)
					}

					return "Не валидные значения"
				}

				return "..."
			},
			deep: true
		}
	},

	methods: {
		searchItem (text) {
			return this.rates.filter(({ Name, NumCode }) => Name === text || NumCode === text)
		},

		calculateCost (item) {
			return item.Value / item.Nominal
		}		
	}
}
</script>
