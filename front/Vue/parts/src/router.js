import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import ChartView from "@/views/ChartView"

const router = new VueRouter({
  mode:"history",
  routes: [
    {
      path:"/",
      component:ChartView
    }
  ],
})

export default router
