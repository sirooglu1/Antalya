<template>
  <div v-if="store.loading" class="text-sm text-slate-500">Yükleniyor...</div>

  <div v-else-if="!store.business" class="text-sm text-slate-500">İşletme bulunamadı.</div>

  <div v-else class="space-y-4">
    <div class="rounded-2xl border bg-white p-5">
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <div>
          <div class="text-2xl font-semibold">{{ store.business.name }}</div>
          <div class="text-sm text-slate-600 mt-1">{{ store.business.address }}</div>
          <div class="text-sm text-slate-600 mt-2">{{ store.business.description }}</div>
          <div class="mt-3 flex flex-wrap gap-2">
            <span v-for="m in store.business.modules" :key="m" class="text-xs px-2 py-1 rounded-full bg-slate-100">
              {{ m }}
            </span>
          </div>
        </div>

        <div class="text-xs px-2 py-1 rounded-full w-fit"
             :class="store.business.isOpen ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'">
          {{ store.business.isOpen ? 'Açık' : 'Kapalı' }}
        </div>
      </div>
    </div>

    <BusinessTabs :slug="slug" :modules="store.business.modules" />

    <div class="rounded-2xl border bg-white p-5">
      <div class="font-medium">Hakkında</div>
      <div class="text-sm text-slate-700 mt-2">
        Bu alan işletme açıklaması, çalışma saatleri, iletişim vb. için.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBusinessStore } from '@/stores/business'
import BusinessTabs from '@/components/BusinessTabs.vue'
const store = useBusinessStore()
const route = useRoute()
const slug = route.params.slug as string
onMounted(() => store.fetchBusiness(slug))
</script>
