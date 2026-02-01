<template>
  <div class="rounded-2xl border bg-white">
    <div class="p-4 border-b flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
      <div class="font-medium">Araçlar</div>
      <div class="flex gap-2 text-sm">
        <input v-model="from" type="date" class="border rounded-lg px-3 py-2" />
        <input v-model="to" type="date" class="border rounded-lg px-3 py-2" />
        <button class="px-3 py-2 rounded-lg bg-slate-900 text-white" @click="$emit('search', { from, to })">
          Müsaitlik Ara
        </button>
      </div>
    </div>

    <div class="p-4 grid md:grid-cols-2 gap-4">
      <div v-for="v in vehicles" :key="v.id" class="border rounded-2xl p-4">
        <div class="flex items-start justify-between">
          <div>
            <div class="font-medium">{{ v.name }}</div>
            <div class="text-sm text-slate-600 mt-1">{{ v.dailyPrice }} {{ v.currency || 'TRY' }} / gün</div>
          </div>
          <div class="text-xs px-2 py-1 rounded-full"
               :class="v.available ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'">
            {{ v.available ? 'Müsait' : 'Dolu' }}
          </div>
        </div>
        <button class="mt-4 w-full px-4 py-2 rounded-xl border hover:bg-slate-50">
          Rezervasyon Talebi (MVP)
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Vehicle } from '@/types'
defineProps<{ vehicles: Vehicle[] }>()
defineEmits<{ (e: 'search', payload: { from: string; to: string }): void }>()
const from = ref('')
const to = ref('')
</script>
