<template>
  <div v-if="!store.business" class="text-sm text-slate-500">Yükleniyor...</div>

  <div v-else class="space-y-4">
    <BusinessTabs :slug="slug" :modules="store.business.modules" />

    <div v-if="!store.hasModule('catalog')" class="rounded-2xl border bg-white p-5">
      Bu işletmede ürün/fiyat modülü yok.
    </div>

    <ProductList v-else :items="store.catalog" />
  </div>
</template>

<script setup lang="ts">
import { useBusinessStore } from '@/stores/business'
import BusinessTabs from '@/components/BusinessTabs.vue'
import ProductList from '@/components/ProductList.vue'
const store = useBusinessStore()
const route = useRoute()
const slug = route.params.slug as string
onMounted(() => store.fetchBusiness(slug))
</script>
