<template>
    <default-layout>
        <hero-section class="bg-blue-500" />
        <section-header />
    </default-layout>
</template>

<script>
    import HeroSection from '@/components/modules/HeroSection.vue'
    import SectionHeader from '@/components/layout/SectionHeader.vue'
    export default {
        name: 'Index',
        components: {
            HeroSection,
            SectionHeader,
        },
        metaInfo: {
            title: 'Homepage',
        },
    }
</script>
