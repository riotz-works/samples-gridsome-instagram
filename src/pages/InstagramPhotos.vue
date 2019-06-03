<template>
  <Layout>

    <h1>Instagram Photos</h1>
    <span v-for="edge in $page.photos.edges" :key="edge.node.id">
      <a :href="'https://instagram.com/p/' + edge.node.shortcode" target="_blank" rel="noopener">
        <g-image :src="edge.node.display_url" :alt="'Instagram Photo: ' + edge.node.edge_media_to_caption.edges[0].node.text" class="photo" />
      </a>
    </span>

  </Layout>
</template>

<page-query>
query {
  photos: allInstagramPhoto {
    edges {
      node {
        id
        shortcode
        display_url
        edge_media_to_caption {
          edges {
            node {
              text
            }
          }
        }
      }
    }
  }
}
</page-query>

<style>
.photo {
  width: 144px;
  margin: 0 4px;
}
</style>
