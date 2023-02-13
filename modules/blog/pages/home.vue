<template>
  <div>
    hello world trololo
    <a @click="goToRoute">Go to blog</a>
    <div>{{ data }}</div>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter()
// const app = useLoadingIndicator()
// console.log(app)
const { data } = await useFetch('/api/word')
onMounted(() => {
  nextTick(() => {
    // setTimeout(() => this.$nuxt.$loading.start(), 2000)
    // setTimeout(() => app.$loading.finish(), 7000)
  })
})
function goToRoute () {
  router.push({
    name: 'blog-page',
    params: { id: 12312 }
  })
}
</script>
