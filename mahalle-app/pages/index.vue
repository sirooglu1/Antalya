<template>
  <div class="space-y-4">
    <div class="rounded-2xl border bg-white p-4">
      <div class="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div>
          <div class="text-lg font-semibold">Mahallendeki Esnaflar</div>
          <div class="text-sm text-slate-600">Kategori seç, işletmeye gir, ihtiyacını yap.</div>
        </div>

        <input v-model="store.q" @input="store.fetchBusinesses()"
               placeholder="Ara: Usta Berber, Manav..."
               class="border rounded-xl px-4 py-2 w-full md:w-96" />
      </div>

      <div class="mt-3">
        <CategoryChips />
      </div>
    </div>

    <div v-if="store.loading" class="text-sm text-slate-500">Yükleniyor...</div>

    <div class="grid md:grid-cols-2 gap-4">
      <BusinessCard v-for="b in store.filtered" :key="b.id" :b="b" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDiscoverStore } from '@/stores/discover'
import CategoryChips from '@/components/CategoryChips.vue'
import BusinessCard from '@/components/BusinessCard.vue'
const store = useDiscoverStore()
onMounted(() => store.fetchBusinesses())
</script>
