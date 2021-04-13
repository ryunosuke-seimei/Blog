import { Bar } from 'vue-chartjs'
import chartjsPluginAnnotation from 'chartjs-plugin-annotation'

export default {
 extends: Bar,
 props: ["chartData", "options"],
 mounted() {
    this.addPlugin([chartjsPluginAnnotation])
    this.renderChart(this.chartData, this.options)
 }
}