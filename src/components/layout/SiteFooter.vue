<template>
    <div>
        <footer class="hidden lg:flex">
            <div class="max-w-screen-xl mx-auto">
                <p>&copy;{{ currentYear() }} {{ $static.metadata.siteName }}. All rights reserved.</p>
            </div>
        </footer>
        <footer class="flex lg:hidden">
            <div class="max-w-screen-xl mx-auto">
                <p>&copy;{{ currentYear() }} {{ $static.metadata.siteName }}. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'SiteFooter',
    methods: {
        currentYear() {
            return new Date().getFullYear()
        }
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
