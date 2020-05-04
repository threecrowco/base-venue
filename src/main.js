// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import VueAnime from 'vue-animejs'
import Vue2Filters from 'vue2-filters'
import Overdrive from 'vue-overdrive'
import SlideUpDown from 'vue-slide-up-down'

import VueVideoSection from 'vue-video-section'
import 'vue-video-section/dist/vue-video-section.css'

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('default-layout', DefaultLayout)
    Vue.component('slide-down', SlideUpDown)
    Vue.component('video-section', VueVideoSection)
    Vue.use(VueAnime)
    Vue.use(Vue2Filters)
    Vue.use(Overdrive)
}
