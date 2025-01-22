import { createApp } from "vue"
import './style.css'
import App from "./App.vue"
import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import ProductSearch from "./components/ProductSearch.vue"
import ProductDetail from "./components/ProductDetail.vue"
import NotFound from "./components/NotFound.vue"

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Home,
            props: {
                title: "Home Page"
            }
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/products/search',
            component: ProductSearch,
            name: 'product-search',
            props: route => {{product: route.query.product}}
        },
        {
            path: '/products/search/:keyword',
            redirect: to => {
                return {name: 'product-search', query: {product: to.params.keyword}}
            }
        },
        {
            path: '/products/:id(\\d+)?',
            component: ProductDetail,
            sensitive: false,
            props: true
        },
        {
            path: '/users',
            component: () => import('./components/User.vue'),
            children: [
                {
                    path: '',
                    name: 'user',
                    components: {
                        default: () => import('./components/UserProfile.vue'),
                        header: () => import('./components/UserHeader.vue')
                    }
                },
                {
                    path: "profile",
                    name: 'user-profile',
                    components: {
                        default: () => import('./components/UserProfile.vue'),
                        header: () => import('./components/UserHeader.vue')
                    }
                },
                {
                    path: 'order',
                    name: 'user-order',
                    components: {
                        default: () => import('./components/UserOrder.vue'),
                        header: () => import('./components/UserHeader.vue'),
                        footer: () => import('./components/UserOrderFooter.vue')
                    }
                },
                {
                    path: 'wishlist',
                    name: 'user-wishlist',
                    components: {
                        default: () => import('./components/UserWishlist.vue'),
                        header: () => import('./components/UserHeader.vue'),
                        footer: () => import('./components/UserWishlistFooter.vue')
                    }
                },
            ]
        },
        {
            path: '/:notfound*',
            component: NotFound,
            beforeEnter: (to, from, next) => {
                console.log(`Not Found ${to.fullPath}`)
                next()
            }
        }
    ],
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
    console.log(`before Navigation to ${to.fullPath} from ${from.fullPath}`)
    next()
})

router.afterEach((to, from) => {
    console.log(`after Navigation to ${to.fullPath} from ${from.fullPath}`)
})

createApp(App).use(router).mount('#app')