<template>
  <section>
    <p>Blog post with the id: {{ currentRoute.params.id }} {{ t('message') }}</p>
    <p>Hello {{ t('hello') }}</p>
    <p>Hello 2{{ t('hello2') }}</p>
    <div v-for="item in usersData" :key="item.slug">
      <p>{{ item.title }}</p>
      <img :src="item.image">
    </div>
    <p>
      {{ pending }}
    </p>
    <BlogPost :blog="blog" />
    <span>Current value from blogStore: {{ blogStore.value }}</span>
    <button @click="refreshUsers">
      refresh
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { useBlog } from '../composables/useBlog'
import BlogPost from '../components/BlogPost.vue'
import { useBlogStore } from '../store/store'

export interface Mountains {
  slug: string;
  image: string;
  title: string
}

const { currentRoute } = useRouter()

const { t } = useI18n({ useScope: 'local' })
const usersData:Ref<Mountains[]> = ref([])
// const items = computed(() => Array.isArray(usersData.value) ? usersData.value : [])
const { data, pending, refresh } = await useApiRequest<Mountains[]>('mountains', 'Wow! My super request finished')
usersData.value = data.value ?? []
const { blog } = useBlog()
const blogStore = useBlogStore()
watch(data, (newVal: Mountains[] | null) => {
  usersData.value = newVal ?? []
})
async function refreshUsers () {
  await refresh()
}
</script>

<script lang="ts">
export default {
  name: 'PageBlogId',
  inheritAttrs: false
}
</script>
<!-- local locale example -->
<i18n lang="json">
  {
    "en": {
      "hello2": "have a nice day!"
    },
    "fr": {
      "hello2": "bonjour!"
    }
  }
  </i18n>
<!-- shared example -->
<i18n lang="json" locale="en" src="../locales/en.json"></i18n>
<i18n lang="json" locale="fr" src="../locales/fr.json"></i18n>
