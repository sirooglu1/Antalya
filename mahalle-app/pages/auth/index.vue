<template>
  <div class="max-w-md mx-auto">
    <div class="rounded-2xl border bg-white p-6">
      <div class="text-xl font-semibold">Giriş</div>
      <div class="text-sm text-slate-600 mt-1">MVP: demo giriş</div>

      <div class="mt-4 grid grid-cols-2 gap-2">
        <button class="px-4 py-2 rounded-xl bg-slate-900 text-white" @click="login('customer')">
          Bireysel
        </button>
        <button class="px-4 py-2 rounded-xl border" @click="login('owner')">
          İşletme Sahibi
        </button>
      </div>

      <button class="mt-4 w-full px-4 py-2 rounded-xl border" @click="logout">Çıkış</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
function login(role: 'customer' | 'owner') {
  auth.loginFake(role)
  navigateTo(role === 'owner' ? '/panel' : '/')
}
function logout() {
  auth.logout()
  navigateTo('/')
}
</script>
