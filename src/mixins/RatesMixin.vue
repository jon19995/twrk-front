<script>
export default {
	data: () => ({
		loading: false
	}),

	async fetch({store}) {
		const isRates = store.getters["rates/rates"].length
        
		if(!isRates) {
			this.loading = true

			await store.dispatch("rates/getRates").finally(() => this.loading = false)
		}
	},

	computed: {
		rates () {
			return this.$store.getters["rates/rates"]
		}
	},
}
</script>
