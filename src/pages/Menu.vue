<template>
    <default-layout>
        <section class="flex items-center justify-center text-center bg-gray-300 h-80">
            <h2 class="text-4xl font-semibold">Our Menu</h2>
        </section>
        <section>
            <div
                class="max-w-4xl py-12 mx-auto text-center"
                v-for="{ node } in $page.sections.edges"
                :key="node.id"
            >
                <h3 class="text-2xl font-semibold">{{ node.title }}</h3>
                <p class="mb-8 text-xs italic">{{ node.description }}</p>
                <div class="grid grid-cols-2 gap-16 text-left">
                    <div class="my-4" v-for="{ node } in node.belongsTo.edges" :key="node.id">
                        <div class="flex items-baseline justify-between">
                            <div class="text-lg font-semibold">{{ node.title }}</div>
                            <div class="flex-grow mx-2 border-b"></div>
                            <div>{{ node.price }}</div>
                        </div>
                        <div class="mt-1 text-xs italic">{{ node.description }}</div>
                    </div>
                </div>
            </div>
        </section>
    </default-layout>
</template>

<script>
export default {}
</script>
<page-query>
query {
 sections: allContentfulMenuSection(
    sortBy: "sortOrder"
    order: ASC
  ) {
    edges {
      node {
        sortOrder
        id
        title
        description
        belongsTo (
          sortBy: "createdAt"
          order: ASC
        ) {
          edges {
            node {
             	... on ContentfulMenuItem {
                id
                title
                description
                price
              }
            }
          }
        }
      }
    }
  }
}
</page-query>
