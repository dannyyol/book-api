require('./bootstrap');

// import VueRouter from 'vue-router';


window.Vue = require('vue');

window.Fire = new Vue();


import VueRouter from 'vue-router'
Vue.use(VueRouter);

import swal from 'sweetalert2';
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast;

Vue.component('table-component', require('./components/TableComponent.vue').default);


let routes = [

    { path: '/', name: 'home', component: require('./components/Index.vue').default },
    { path: '/book/edit/:id', name: 'edit', component: require('./components/Edit.vue').default },
    { path: '/book/create', name: 'create', component: require('./components/Create.vue').default },
    { path: '/book/:id', name: 'detail', component: require('./components/Detail.vue').default },
    { path: '/external-books/', name: 'external', component: require('./components/ExternalBook.vue').default },
]


const router = new VueRouter({
    routes,
    mode: 'history'
})

const app = new Vue({
    el: '#app',
    router
});