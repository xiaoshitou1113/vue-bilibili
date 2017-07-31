import Vue from 'vue';
import Router from 'vue-router';
import index from '../components/index.vue';
import pageBox from '../views/pageBox.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/main'
    },
    {
      path:'/main',
      redirect:'/main/index',
      component:pageBox,
      children:[
        {
          path:"index",
          component:index
        }
      ]
    },
    {
      path: '*',
      redirect: '/main/index'
    }
  ]
})
