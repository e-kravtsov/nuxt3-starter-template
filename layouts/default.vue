<template>
  <v-app :theme="theme">
    <v-app-bar
      app
      extended
    >
      <v-app-bar-nav-icon />
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer />

      <v-btn icon @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-menu>
        <template #activator="{ props }">
          <v-btn icon="mdi-translate" v-bind="props" />
        </template>

        <v-list>
          <v-list-item
            v-for="item in availableLocales"
            :key="item.code"
            :active="item.code===locale"
            @click="changeLocale(item.code)"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon @click="goToRoute('index')">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template #extension>
        <v-tabs v-model="currentRouteName" hide-slider color="deep-purple-accent-4">
          <v-tab value="index" @click="goToRoute('index')">
            Home
          </v-tab>
          <v-tab value="blogPage" @click="goToRoute('blogPage', {id:'123'})">
            About
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { LocaleObject } from 'vue-i18n-routing'
const theme = ref('light')
const currentRouteName = ref('')
const { goToRoute } = useLocaleRouter()
const route = useRoute()
const { locale, locales } = useI18n()

function isLocaleObject (locale:LocaleObject|string):locale is LocaleObject {
  return (locale as LocaleObject).code !== undefined
}
const availableLocales = computed(():LocaleObject[] => {
  return (locales.value as LocaleObject[]).filter((i:LocaleObject): i is LocaleObject => isLocaleObject(i))
})

function toggleTheme () { theme.value = theme.value === 'dark' ? 'light' : 'dark' }

function changeLocale (localeCode: string) {
  useRouter().push({ name: currentRouteName.value + '___' + localeCode, params: route.params })
}

watch(() => route.name, (newValue) => {
  currentRouteName.value = newValue?.toString().slice(0, -5) ?? 'index'
})
onMounted(() => {
  currentRouteName.value = route.name?.toString().slice(0, -5) ?? 'index'
})
</script>
