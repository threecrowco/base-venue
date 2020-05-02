<template>
    <div>
        <topbar />
        <header class="header bg-gray-200 py-6 px-8 hidden lg:flex justify-between items-center">
            <h2>Base - Venue</h2>
            <nav class="space-x-12">
                <g-link to="/">Home</g-link>
                <g-link to="/about/">About</g-link>
                <g-link to="/menu/">Menu</g-link>
                <g-link to="/events/">Events</g-link>
                <g-link to="/contact/">Contact</g-link>
            </nav>
        </header>
        <header class="flex flex-col lg:hidden">
            <div class="flex justify-between items-center">
                <h2>Base - Venue (mobile)</h2>
                <button @click="toggle">Menu</button>
            </div>
        </header>
        <slide-down :active="active" class="active-ease" :duration="500">
            <nav class="flex flex-col divide-y">
                <g-link class="py-3" to="/">Home</g-link>
                <g-link class="py-3" to="/about/">About</g-link>
                <g-link class="py-3" to="/menu/">Menu</g-link>
                <g-link class="py-3" to="/events/">Events</g-link>
                <g-link class="py-3" to="/contact/">Contact</g-link>
                <div class="flex justify-evenly items-center py-3">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                </div>
            </nav>
        </slide-down>
    </div>
</template>

<script>
import Topbar from '@/components/layout/Topbar.vue'
import $ from 'jquery'
export default {
    name: 'SiteHeader',
    components: {
        Topbar
    },
    data() {
        return {
            active: false
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
        }
    },
    mounted() {
        // $(document).on('scroll', function() {
        //     if ($(document).scrollTop() > 80) {
        //         $('.header').addClass('shrink')
        //     } else {
        //         $('.header').removeClass('shrink')
        //     }
        // })
    }
}
</script>
<style>
/* .header {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 80px;
    transition: all 0.5s ease-in-out;
}

.shrink {
    height: 64px;
} */
</style>
