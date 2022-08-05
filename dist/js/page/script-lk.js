const compGraph = {
	props: {
		arrgraphparam: Object,
	},

	data() {
		return {
			lineColor: this.arrgraphparam.movement === "up" ? "#58BD7D" : this.arrgraphparam.movement === "down" ? "#FF0508" : "#58BD7D",
			topColor: this.arrgraphparam.movement === "up" ? "#45B36B" : this.arrgraphparam.movement === "down" ? "#FF0508" : "#45B36B",
			bottomColor: this.arrgraphparam.movement === "up" ? "rgba(69, 179, 107, 0)" : this.arrgraphparam.movement === "down" ? "rgba(255, 5, 8, 0)" : "rgba(69, 179, 107, 0)",
		};
	},

	mounted() {
		this.initGraph();
	},

	methods: {
		initGraph() {
			const chart = LightweightCharts.createChart(this.$refs.chart, {
				priceScale: {
					visible: false,
					borderVisible: false,
					scaleMargins: {
						top: 0.2,
						bottom: 0.25,
					},
				},
				timeScale: {
					visible: false,
					borderVisible: false,
					barSpacing: 18,
				},
				layout: {
					backgroundColor: "#fff",
					textColor: "#fff",
				},
				grid: {
					horzLines: {
						color: "#ffffff",
					},
					vertLines: {
						color: "#ffffff",
					},
				},
				crosshair: {
					horzLines: {
						labelVisible: false,
					},
					vertLine: {
						labelVisible: false,
					},
				},
			});
			const lineSeries = chart.addAreaSeries({
				color: this.lineColor,
				lineColor: this.lineColor,
				topColor: this.topColor,
				bottomColor: this.bottomColor,
				lineWidth: 1,
			});
			lineSeries.setData(this.arrgraphparam.arrValue);
		},
	},

	template: `
        <div ref="chart" class="field-rates__graph">

        </div>
    `,
};

const compFilter = {
	props: {
		objfilter: Object,
	},

	data() {
		return {
			showFilter: false,
		};
	},

	methods: {
		toggleList() {
			this.showFilter = !this.showFilter;
		},

		dropdown(e) {
			let el = this.$el;
			let target = e.target;
			if (el !== target && !el.contains(target)) {
				this.showFilter = false;
			}
		},
	},

	created() {
		document.addEventListener("click", this.dropdown);
	},

	destroyed() {
		document.removeEventListener("click", this.dropdown);
	},

	template: `
        <div class="block-rates__filter-item filter">
            <div class="filter__current" v-on:click="toggleList">{{ objfilter.currentFilter }}</div>
            <div class="filter__list" v-if="showFilter">
                <div v-for="(el, i) in objfilter.listFilter" :key="i" :class="{ active: el.isActive }" class="filter__item">{{ el.nameFilter }}</div>
            </div>
        </div>
    `,
};

const compBlockRates = {
	props: {
		objrate: Object,
	},

	data() {
		return {};
	},

	methods: {},

	components: {
		"comp-graph": compGraph,
		"comp-filter": compFilter,
	},

	template: `
        <div class="block-rates">
            <div class="container">
            <div class="block-rates__wrap">

                <div class="block-rates__group">
                <div class="block-rates__left">
                    <h2 class="block-rates__title title-h2">{{ objrate.blockRatesTitle }}</h2>
                </div>

                <div class="block-rates__right">
                    <div class="block-rates__sort">
                        <div v-for="(item, index) in objrate.blockRatesSort" :key="index" class="block-rates__sort-item sort" :class="{ active: item.isActive }">{{ item.nameSort }}</div>
                    </div>

                    <div class="block-rates__filter">
                        <comp-filter v-for="(item, index) in objrate.blockRatesFilter" :objfilter="item" :key="index"></comp-filter>
                    </div>  
                </div>
                </div>

                <div class="block-rates__table table-rates">
                <div class="table-rates__row">
                    <div class="table-rates__column">
                    <div class="table-rates__caption">
                        <div class="table-rates__title">Разделы</div>

                        <div class="table-rates__sect">
                        </div>
                    </div>

                    <div class="table-rates__category-list">
                    
                        <div v-for="(item, index) in objrate.blockRatesCategory" :key="index" class="table-rates__category-item" :class="{ active : item.isActive }">
                            <span class="table-rates__category-item-name">{{ item.nameCategory }}</span>
                            <span class="table-rates__category-item-value">{{ item.value }}</span>
                        </div>

                    </div>

                    </div>

                    <div class="table-rates__column">
                    <div class="table-rates__caption">
                        <div class="table-rates__title">Наименование</div>
                        <div class="table-rates__title">Новости</div>
                        <div class="table-rates__title">Стоимость</div>
                        <div class="table-rates__title">Изменения</div>
                        <div class="table-rates__title">График 1д.</div>
                    </div>

                    <div class="table-rates__list">
                        <div v-for="(item, index) in objrate.blockRatesItem" :key="index" class="table-rates__item field-rates">

                            <div class="field-rates__row">
                                <div class="field-rates__column" data-content="Наименование">
                                <div class="field-rates__logo">
                                    <img :src="item.itemlogoSrc">
                                </div>
                                <div class="field-rates__group">
                                    <div class="field-rates__name">{{ item.itemName }}</div>
                                    <div class="field-rates__sign">{{ item.itemSign }}</div>
                                </div>
                                </div>

                                <div class="field-rates__column" data-content="Новости">
                                <div class="field-rates__name" :class="{ '--null': item.itemValueNews === 0 }">{{ item.itemValueNews }} новостей</div>
                                </div>

                                <div class="field-rates__column" data-content="Стоимость">
                                <div class="field-rates__name">{{ item.itemValuePrice }} ₽</div>
                                </div>

                                <div class="field-rates__column" data-content="Изменения">
                                <div class="field-rates__group">
                                    <div class="field-rates__price" :class="{ '--green' : item.itemValuePriceDynamic.movement == 'up', '--red' : item.itemValuePriceDynamic.movement == 'down'}">
                                        {{ item.itemValuePriceDynamic.movement == 'up'? '+' : item.itemValuePriceDynamic.movement == 'down'? '-' : '' }}{{ item.itemValuePriceDynamic.percent }} %
                                    </div>

                                    <div class="field-rates__price" :class="{ '--green' : item.itemValuePriceDynamic.movement == 'up', '--red' : item.itemValuePriceDynamic.movement == 'down'}">
                                        {{ item.itemValuePriceDynamic.movement == 'up'? '+' : item.itemValuePriceDynamic.movement == 'down'? '-' : '' }}{{ item.itemValuePriceDynamic.currency }} ₽
                                    </div>
                                </div>
                                </div>

                                <div class="field-rates__column" data-content="График 1д.">
                                    <comp-graph :arrgraphparam="item.itemGraphValue"></comp-graph>

                                    <div class="field-rates__add"></div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
    `,
};

const rates = Vue.createApp({
	data() {
		return {
			isLoading: false,
			rates: null,
		};
	},

	async created() {
		await fetch("https://wesma-agency.github.io/moex/js/dataJson/rates.json", {
			method: "GET",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				this.rates = data;

				this.isLoading = true;
			});
	},

	components: {
		"comp-block-rates": compBlockRates,
	},
});

rates.mount(".rates");
