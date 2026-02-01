<template>
  <div class="flex flex-wrap gap-2">
    <button
      class="px-3 py-2 text-sm rounded-full border"
      :class="store.category === 'all' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white hover:bg-slate-100'"
      @click="setCat('all')"
    >
      Tümü
    </button>

    <button
      v-for="c in store.CATEGORIES"
      :key="c.key"
      class="px-3 py-2 text-sm rounded-full border bg-white hover:bg-slate-100"
      :class="store.category === c.key ? 'bg-slate-900 text-white border-slate-900' : ''"
      @click="setCat(c.key)"
    >
      {{ c.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDiscoverStore } from '@/stores/discover'
import type { BusinessCategory } from '@/types'

const store = useDiscoverStore()

function setCat(v: BusinessCategory | 'all') {
  store.category = v
  store.fetchBusinesses()
}
</script>
