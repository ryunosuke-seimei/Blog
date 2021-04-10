<template>
    <div id="chart">
        <child></child>
        <child></child>
    </div>
</template>

<script>
import Child from "../components/Child"

export default {
    name:"ChartView",
    components:{
        Child
    }
}
</script>