import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const token = useCookie<string | null>('auth_token')
  const role = useCookie<string | null>('role') // 'customer' | 'owner' | 'admin'

  function loginFake(nextRole: 'customer' | 'owner') {
    token.value = 'demo-token'
    role.value = nextRole
  }

  function logout() {
    token.value = null
    role.value = null
  }

  return { token, role, loginFake, logout }
})
