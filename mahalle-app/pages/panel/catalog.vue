<template>
  <div class="rounded-2xl border bg-white p-5">
    <div class="font-semibold text-lg">Ürün / Katalog</div>
    <div class="text-sm text-slate-600 mt-2">
      Manav/Bakkal/Takı aynı modül: ürün ekle + fiyat güncelle.
    </div>

    <button class="mt-4 px-3 py-2 rounded-xl border" @click="add">Ürün Ekle</button>

    <div class="mt-4 overflow-auto">
      <table class="w-full text-sm">
        <thead class="text-left text-slate-500">
          <tr><th class="py-2">Ürün</th><th>Fiyat</th><th>Birim</th></tr>
        </thead>
        <tbody>
          <tr v-for="it in items" :key="it.name" class="border-t">
            <td class="py-2">{{ it.name }}</td>
            <td class="py-2">{{ it.price }}</td>
            <td class="py-2">{{ it.unit }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })
const items = ref([{ name: 'Domates', price: 35, unit: 'kg' }])
function add() {
  const name = prompt('Ürün adı?')
  if (!name) return
  const price = Number(prompt('Fiyat?') || '0')
  const unit = prompt('Birim? (kg/adet)') || '-'
  items.value.push({ name, price, unit })
}
</script>
