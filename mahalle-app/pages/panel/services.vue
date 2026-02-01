<template>
  <div class="rounded-2xl border bg-white p-5">
    <div class="flex items-center justify-between">
      <div class="font-semibold text-lg">Hizmetler (Berber)</div>
      <button class="px-3 py-2 rounded-xl border" @click="add">Hizmet Ekle</button>
    </div>

    <ul class="mt-4 space-y-2">
      <li v-for="s in services" :key="s" class="border rounded-xl p-3 flex justify-between">
        <span>{{ s }}</span>
        <button class="text-sm px-3 py-1 rounded-lg hover:bg-slate-100">Düzenle</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })
const services = ref<string[]>(['Saç Kesim (30dk)', 'Sakal (15dk)'])
function add() {
  const name = prompt('Hizmet adı?')
  if (name) services.value.push(name)
}
</script>
