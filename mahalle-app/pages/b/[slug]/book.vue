<template>
  <div v-if="!store.business" class="text-sm text-slate-500">Yükleniyor...</div>

  <div v-else class="space-y-4">
    <BusinessTabs :slug="slug" :modules="store.business.modules" />

    <div v-if="!store.hasModule('appointments')" class="rounded-2xl border bg-white p-5">
      Bu işletmede randevu modülü yok.
    </div>

    <BookingWizard v-else :services="store.services" :staff="store.staff" />
  </div>
</template>

<script setup lang="ts">
import { useBusinessStore } from '@/stores/business'
import BusinessTabs from '@/components/BusinessTabs.vue'
import BookingWizard from '@/components/BookingWizard.vue'
const store = useBusinessStore()
const route = useRoute()
const slug = route.params.slug as string
onMounted(() => store.fetchBusiness(slug))
</script>
