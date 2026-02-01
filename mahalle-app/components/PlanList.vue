<template>
  <div class="grid md:grid-cols-2 gap-4">
    <div v-for="p in plans" :key="p.id" class="rounded-2xl border bg-white p-4">
      <div class="font-medium">{{ p.name }}</div>
      <div class="text-2xl font-semibold mt-2">{{ p.price }} TRY</div>
      <div class="text-xs text-slate-500 mt-1">{{ periodLabel(p.period) }}</div>

      <ul v-if="p.features?.length" class="mt-3 text-sm text-slate-700 list-disc pl-5">
        <li v-for="f in p.features" :key="f">{{ f }}</li>
      </ul>

      <button class="mt-4 w-full px-4 py-2 rounded-xl bg-slate-900 text-white">
        Başvuru / Satın Al (MVP)
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Plan } from '@/types'
defineProps<{ plans: Plan[] }>()
function periodLabel(p: Plan['period']) {
  if (p === 'monthly') return 'Aylık'
  if (p === 'quarterly') return '3 Aylık'
  return 'Yıllık'
}
</script>
