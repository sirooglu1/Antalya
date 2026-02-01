<template>
  <div v-if="!store.business" class="text-sm text-slate-500">Yükleniyor...</div>

  <div v-else class="space-y-4">
    <BusinessTabs :slug="slug" :modules="store.business.modules" />

    <div v-if="!store.hasModule('plans')" class="rounded-2xl border bg-white p-5">
      Bu işletmede plan modülü yok.
    </div>

    <PlanList v-else :plans="store.plans" />
  </div>
</template>

<script setup lang="ts">
import { useBusinessStore } from '@/stores/business'
import BusinessTabs from '@/components/BusinessTabs.vue'
import PlanList from '@/components/PlanList.vue'
const store = useBusinessStore()
const route = useRoute()
const slug = route.params.slug as string
onMounted(() => store.fetchBusiness(slug))
</script>
