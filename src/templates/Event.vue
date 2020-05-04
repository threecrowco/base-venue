<template>
    <default-layout>
        <div>{{ $page.event.title }}</div>
    </default-layout>
</template>

<script>
export default {}
</script>
<page-query>
query Event($path: String!) {
    event: contentfulEvent(path: $path) {
        id
        slug
        title
        date
        description
        ticketLink
        coverImage {
            file {
                url
            }
        }
    }
}
</page-query>