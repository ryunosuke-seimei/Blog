import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントを読み込む
import Title from '@/views/Title'
import Item from '@/views/Item'
import All from '@/views/All'
// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)
// VueRouterインスタンスを生成する
const router = new VueRouter({
  mode:"history",
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path:"/",
      component: Title
    },
    {
      path: '/item',
      component: Item
    },
    {
      path: '/all',
      component: All
    }
  ],
  // base: "/demo/vue-sample/"
})
// 生成したVueRouterインスタンスをエクスポート
export default router
