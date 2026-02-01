<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <header class="border-b bg-white">
      <div class="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <NuxtLink to="/" class="font-semibold text-lg">Mahalle</NuxtLink>

        <div class="ml-auto flex items-center gap-2">
          <NeighborhoodSelect />
          <NuxtLink to="/appointments" class="text-sm px-3 py-2 rounded-lg hover:bg-slate-100">Randevularım</NuxtLink>
          <NuxtLink to="/inbox" class="text-sm px-3 py-2 rounded-lg hover:bg-slate-100">Mesajlar</NuxtLink>
          <NuxtLink to="/panel" class="text-sm px-3 py-2 rounded-lg hover:bg-slate-100">Panel</NuxtLink>
          <NuxtLink to="/auth" class="text-sm px-3 py-2 rounded-lg bg-slate-900 text-white">Giriş</NuxtLink>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-4 py-6">
      <slot />
    </main>

    <footer class="border-t bg-white">
      <div class="mx-auto max-w-6xl px-4 py-4 text-xs text-slate-500">
        © Mahalle — MVP
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import NeighborhoodSelect from '@/components/NeighborhoodSelect.vue'
</script>
