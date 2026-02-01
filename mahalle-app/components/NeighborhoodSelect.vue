<template>
  <select
    v-model="store.neighborhoodId"
    class="text-sm border rounded-lg px-3 py-2 bg-white"
    @change="store.fetchBusinesses()"
  >
    <option value="mah-1">Örnek Mahalle</option>
    <option value="mah-2">Diğer Mahalle</option>
  </select>
</template>

<script setup lang="ts">
import { useDiscoverStore } from '@/stores/discover'
const store = useDiscoverStore()
</script>
