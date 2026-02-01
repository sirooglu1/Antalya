<template>
  <NuxtLink :to="`/b/${b.slug}`" class="block rounded-2xl border bg-white p-4 hover:shadow-sm">
    <div class="flex items-start justify-between gap-3">
      <div>
        <div class="font-medium">{{ b.name }}</div>
        <div class="text-xs text-slate-500 mt-1">{{ b.address || 'Adres yok' }}</div>
        <div class="mt-2 flex flex-wrap gap-1">
          <span v-for="m in b.modules" :key="m" class="text-xs px-2 py-1 rounded-full bg-slate-100">
            {{ label(m) }}
          </span>
        </div>
      </div>

      <div class="text-xs px-2 py-1 rounded-full"
           :class="b.isOpen ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'">
        {{ b.isOpen ? 'Açık' : 'Kapalı' }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Business, BusinessModule } from '@/types'
defineProps<{ b: Business }>()

function label(m: BusinessModule) {
  if (m === 'appointments') return 'Randevu'
  if (m === 'catalog') return 'Fiyat/Ürün'
  if (m === 'plans') return 'Planlar'
  if (m === 'vehicles') return 'Araçlar'
  return m
}
</script>
