<template>
    <div class="antialiased flex flex-col justify-between min-h-screen">
        <site-header />
        <div class="flex-grow">
            <slot />
        </div>
        <site-footer class="bg-gray-200 py-6" />
    </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
export default {
    components: {
        SiteHeader,
        SiteFooter
    }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
* a {
    transition: color 0.5s ease;
}
button:focus {
    @apply outline-none;
}
</style>
