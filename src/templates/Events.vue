<template>
    <default-layout>
        <section class="flex items-center justify-center text-center bg-gray-300 h-80">
            <h2 class="text-4xl font-semibold">Upcoming Events</h2>
        </section>
        <section class="grid max-w-6xl grid-cols-3 gap-8 py-12 mx-auto">
            <div class="col-span-1" v-for="{ node } in $page.events.edges" :key="node.id">
                <div class="aspect-ratio-square">
                    <img
                        class="absolute inset-0 object-cover w-full h-full"
                        :src="node.coverImage.file.url"
                        :alt="node.title"
                    />
                </div>
                <div class="p-4">
                    <div>
                        <g-link :to="`/event/${node.slug}`">{{ node.title }}</g-link>
                    </div>
                    <div>{{ prettyDate(node.date) }}</div>
                    <div>{{ node.description | truncate(45) }}</div>
                </div>
            </div>
            <div v-if="!$page.events.edges.length">Sorry there are no upcoming events.</div>
        </section>
    </default-layout>
</template>

<script>
import moment from 'moment'
import Vue2Filters from 'vue2-filters'
export default {
    mixins: [Vue2Filters.mixin],
    methods: {
        prettyDate(date) {
            return moment(date).format('MMM DD YYYY')
        }
    }
}
</script>

<page-query>
query ($now: Date!) {
  events: allContentfulEvent (
    sortBy: "date"
    order: DESC
    filter: {
      date: {
        gte: $now
      }
    }
  ) {
    edges {
      node {
        slug
        id
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
  }
}
</page-query>
