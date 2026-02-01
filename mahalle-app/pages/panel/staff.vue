<template>
  <div class="rounded-2xl border bg-white p-5">
    <div class="flex items-center justify-between">
      <div class="font-semibold text-lg">Çalışanlar</div>
      <button class="px-3 py-2 rounded-xl border" @click="add">Kuaför Ekle</button>
    </div>
    <div class="text-sm text-slate-600 mt-2">MVP: liste + ekleme (demo)</div>

    <ul class="mt-4 space-y-2">
      <li v-for="n in staff" :key="n" class="border rounded-xl p-3 flex justify-between">
        <span>{{ n }}</span>
        <button class="text-sm px-3 py-1 rounded-lg hover:bg-slate-100">Düzenle</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })
const staff = ref<string[]>(['Ahmet', 'Mehmet'])
function add() {
  const name = prompt('Kuaför adı?')
  if (name) staff.value.push(name)
}
</script>
