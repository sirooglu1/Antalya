<template>
  <div class="rounded-2xl border bg-white p-5 max-w-2xl">
    <div class="font-semibold text-lg">İşletme Bilgileri</div>
    <div class="grid gap-3 mt-4">
      <input class="border rounded-xl px-4 py-2" placeholder="İşletme adı" />
      <input class="border rounded-xl px-4 py-2" placeholder="Telefon" />
      <input class="border rounded-xl px-4 py-2" placeholder="Adres" />
      <textarea class="border rounded-xl px-4 py-2" rows="3" placeholder="Açıklama"></textarea>
      <button class="px-4 py-2 rounded-xl bg-slate-900 text-white">Kaydet (MVP)</button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })
</script>
