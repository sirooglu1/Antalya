<template>
  <div v-if="!store.business" class="text-sm text-slate-500">Yükleniyor...</div>

  <div v-else class="space-y-4">
    <BusinessTabs :slug="slug" :modules="store.business.modules" />

    <div v-if="!store.hasModule('vehicles')" class="rounded-2xl border bg-white p-5">
      Bu işletmede araç modülü yok.
    </div>

    <VehicleList v-else :vehicles="store.vehicles" @search="onSearch" />
  </div>
</template>

<script setup lang="ts">
import { useBusinessStore } from '@/stores/business'
import BusinessTabs from '@/components/BusinessTabs.vue'
import VehicleList from '@/components/VehicleList.vue'
const store = useBusinessStore()
const route = useRoute()
const slug = route.params.slug as string
onMounted(() => store.fetchBusiness(slug))
function onSearch(payload: { from: string; to: string }) {
  alert(`Demo search: ${payload.from} - ${payload.to}`)
}
</script>
