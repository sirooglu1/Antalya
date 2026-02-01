<template>
  <div class="space-y-4">
    <div class="rounded-2xl border bg-white p-5">
      <div class="text-xl font-semibold">İşletme Paneli</div>
      <div class="text-sm text-slate-600 mt-1">MVP: sayfa iskeleti</div>

      <div class="mt-4 grid md:grid-cols-3 gap-3">
        <NuxtLink to="/panel/business" class="border rounded-xl p-4 hover:bg-slate-50">İşletme Bilgileri</NuxtLink>
        <NuxtLink to="/panel/services" class="border rounded-xl p-4 hover:bg-slate-50">Hizmetler (Berber)</NuxtLink>
        <NuxtLink to="/panel/staff" class="border rounded-xl p-4 hover:bg-slate-50">Çalışanlar</NuxtLink>
        <NuxtLink to="/panel/appointments" class="border rounded-xl p-4 hover:bg-slate-50">Randevular</NuxtLink>
        <NuxtLink to="/panel/catalog" class="border rounded-xl p-4 hover:bg-slate-50">Ürün/Katalog</NuxtLink>
        <NuxtLink to="/panel/plans" class="border rounded-xl p-4 hover:bg-slate-50">Planlar</NuxtLink>
        <NuxtLink to="/panel/vehicles" class="border rounded-xl p-4 hover:bg-slate-50">Araçlar</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })
</script>
