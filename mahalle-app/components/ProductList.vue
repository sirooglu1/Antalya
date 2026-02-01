<template>
  <div class="rounded-2xl border bg-white">
    <div class="p-4 border-b flex items-center justify-between">
      <div class="font-medium">Ürünler / Fiyatlar</div>
      <div class="text-xs text-slate-500">Güncellik: {{ lastUpdated }}</div>
    </div>

    <div class="p-4 overflow-auto">
      <table class="w-full text-sm">
        <thead class="text-left text-slate-500">
          <tr>
            <th class="py-2">Ürün</th>
            <th class="py-2">Fiyat</th>
            <th class="py-2">Birim</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="it in items" :key="it.id" class="border-t">
            <td class="py-2">{{ it.name }}</td>
            <td class="py-2 font-medium">{{ it.price }} {{ it.currency || 'TRY' }}</td>
            <td class="py-2 text-slate-600">{{ it.unit || '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogItem } from '@/types'
const props = defineProps<{ items: CatalogItem[] }>()
const lastUpdated = computed(() => {
  const d = props.items?.[0]?.updatedAt
  if (!d) return '-'
  return new Date(d).toLocaleString()
})
</script>
