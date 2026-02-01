<template>
  <div class="rounded-2xl border bg-white p-5">
    <div class="font-semibold text-lg">Randevular</div>
    <div class="text-sm text-slate-600 mt-2">
      MVP: liste görünümü. (Sonra: takvim + kuaför sütunları)
    </div>

    <div class="mt-4 space-y-2">
      <div class="border rounded-xl p-3">
        <div class="font-medium">10:00 — Ahmet</div>
        <div class="text-sm text-slate-600">Saç Kesim — Müşteri: Ali</div>
      </div>
      <div class="border rounded-xl p-3">
        <div class="font-medium">10:30 — Mehmet</div>
        <div class="text-sm text-slate-600">Sakal — Müşteri: Ayşe</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })
</script>
