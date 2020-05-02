<template>
    <slide-down :active="topbarActive" class="active-ease" :duration="500">
        <div class="bg-blue-500 text-white py-2 relative">
            <p>
                This is an announcement. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque sequi beatae dicta assumenda
                sit.
            </p>
            <button @click="toggleTopbar" class="absolute top-0 right-0">X</button>
        </div>
    </slide-down>
</template>

<script>
export default {
    name: 'Topbar',
    data() {
        return {
            topbarActive: true
        }
    },
    methods: {
        toggleTopbar() {
            this.topbarActive = !this.topbarActive
        }
    }
}
</script>
