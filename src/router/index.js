import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue'),
    props: {
      productos: [
        {
          title: "Desayunos",
          description: "Contamos con los mejores desayunos de la zona y para gente muy buena",
          image: "https://i.blogs.es/6eef82/desayuno-bandeja/450_1000.jpg",
          price: "$200.000",
          amount: "Para 3 personas"
        },
        {
          title: "Almuerzos",
          description: "Estos son almurzos traidos de Marte, cosechados por marcianos",
          image: "https://img.freepik.com/foto-gratis/composicion-deliciosa-comida-brasilena-alto-angulo_23-2148739223.jpg",
          price: "$400.000",
          amount: "Para 5 personas"
        },
        {
          title: "Dulces",
          description: "Estos son dulces traidos directamente de transilvania, inspeccionados por el mismisimo dracula",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BlCqw-guZCcOypiAffksVX0bjv-mQc7sjA&s",
          price: "$640.000",
          amount: "Para 10 personas"
        },
        {
          title: "Bebidas",
          description: "bebidas hechas con aguas de los manantiales de la luna y gasificadas con gas ultra pero mega ultra especial (TopSecret).",
          image: "https://images.lider.cl/wmtcl?source=url[file:/productos/595223aa.jpg]&sink",
          price: "$740.000",
          amount: "Para 1 personas"
        },
      ]
    }

  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
