<template>
  <div class="rounded-2xl border bg-white p-4">
    <div class="font-medium">Randevu Al (MVP)</div>
    <div class="text-sm text-slate-600 mt-1">Hizmet → Kuaför → Saat (demo)</div>

    <div class="mt-4 grid md:grid-cols-3 gap-3">
      <div class="border rounded-xl p-3">
        <div class="text-xs text-slate-500">Hizmet</div>
        <select v-model="serviceId" class="mt-1 w-full border rounded-lg px-3 py-2 text-sm">
          <option value="" disabled>Seç</option>
          <option v-for="s in services" :key="s.id" :value="s.id">
            {{ s.name }} ({{ s.durationMin }} dk, {{ s.price }} TRY)
          </option>
        </select>
      </div>

      <div class="border rounded-xl p-3">
        <div class="text-xs text-slate-500">Kuaför</div>
        <select v-model="staffId" class="mt-1 w-full border rounded-lg px-3 py-2 text-sm">
          <option value="any">Fark etmez (İlk müsait)</option>
          <option v-for="st in staff" :key="st.id" :value="st.id">{{ st.name }}</option>
        </select>
      </div>

      <div class="border rounded-xl p-3">
        <div class="text-xs text-slate-500">Saat</div>
        <select v-model="slot" class="mt-1 w-full border rounded-lg px-3 py-2 text-sm">
          <option value="" disabled>Seç</option>
          <option v-for="t in slots" :key="t" :value="t">{{ t }}</option>
        </select>
      </div>
    </div>

    <button class="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white disabled:opacity-40"
            :disabled="!serviceId || !slot"
            @click="book">
      Randevu Oluştur (demo)
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Service, Staff } from '@/types'
defineProps<{ services: Service[]; staff: Staff[] }>()
const serviceId = ref('')
const staffId = ref<'any' | string>('any')
const slot = ref('')
const slots = computed(() => ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30'])
function book() {
  alert(`Demo randevu: service=${serviceId.value}, staff=${staffId.value}, time=${slot.value}`)
}
</script>
