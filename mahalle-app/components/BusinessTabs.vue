<template>
  <div class="border-b mb-4">
    <div class="flex gap-2 overflow-auto">
      <NuxtLink :to="`/b/${slug}`" class="px-3 py-2 text-sm rounded-t-lg"
        :class="isActive(`/b/${slug}`) ? active : inactive">Hakkında</NuxtLink>

      <NuxtLink v-if="modules.includes('appointments')" :to="`/b/${slug}/book`" class="px-3 py-2 text-sm rounded-t-lg"
        :class="isActive(`/b/${slug}/book`) ? active : inactive">Randevu</NuxtLink>

      <NuxtLink v-if="modules.includes('catalog')" :to="`/b/${slug}/products`" class="px-3 py-2 text-sm rounded-t-lg"
        :class="isActive(`/b/${slug}/products`) ? active : inactive">Ürünler</NuxtLink>

      <NuxtLink v-if="modules.includes('plans')" :to="`/b/${slug}/plans`" class="px-3 py-2 text-sm rounded-t-lg"
        :class="isActive(`/b/${slug}/plans`) ? active : inactive">Planlar</NuxtLink>

      <NuxtLink v-if="modules.includes('vehicles')" :to="`/b/${slug}/vehicles`" class="px-3 py-2 text-sm rounded-t-lg"
        :class="isActive(`/b/${slug}/vehicles`) ? active : inactive">Araçlar</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BusinessModule } from '@/types'
defineProps<{ slug: string; modules: BusinessModule[] }>()
const route = useRoute()
const active = 'bg-white border-x border-t border-slate-200'
const inactive = 'bg-slate-100 hover:bg-slate-200'
function isActive(path: string) {
  return route.path === path
}
</script>
