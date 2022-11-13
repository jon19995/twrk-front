export const state = () => ({
	rates: []
})

export const mutations = {
	setRates(state, rates) {
		state.rates = rates
	}
}

export const actions = {
	async getRates({ commit }){
		const data = (await this.$axios("https://www.cbr-xml-daily.ru/daily_json.js")).data

		if (data && data.Valute) {
			commit("setRates", Object.values(data.Valute))
		}
	}
}

export const getters = {
	rates: s => s.rates
}