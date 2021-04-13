<template>
    <div id="chart">
        <child></child>
        <child-1 :chartData="chartData"></child-1>
        <child-2 :chartData="chartItems" :options="chartOptions"/>
    </div>
</template>

<script>
import Child from "../components/ChartView/Child"
import Child1 from "../components/ChartView/Child1"
import Child2 from "../components/ChartView/Child2"
export default {
    name:"ChartView",
    components:{
        Child,
        Child1,
        Child2
    },
    data () {
      return {
        chartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
            label: 'Sample1',
            data: [28, 20, 30, 40, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            }
        ]
        },
        chartItems: {
            labels: ["12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月"],
            datasets: [{
            label: "月ごとの点数",
            data: [95, 70, 80, 65, 69, 80, 100, 100, 72, 81, 45, 70],
            backgroundColor: 'lightblue'
            }]
        },
        chartOptions: {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    display: true,
                    // X軸グリッド非表示
                    gridLines: {
                        display:false
                    }
                }],
                // Y軸
                yAxes: [{
                    display: true,
                    position: 'right',
                    ticks: {
                        // 0から始まる
                        beginAtZero: true,
                        // 最大5目盛
                        maxTicksLimit: 5,
                    },
                }]
            },
            annotation: {
                annotations: [{
                    type: 'line', // 線を描画
                    id: 'hLine',
                    mode: 'horizontal', // 線を水平に引く
                    scaleID: 'y-axis-0',
                    value: 70, // 基準となる数値
                    borderWidth: 10, // 基準線の太さ
                    borderColor: 'red'  // 基準線の色
                }]
            },
        }

      // 後程オプションを記述
      }
    },
}
</script>