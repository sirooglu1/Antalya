type ApiClient = ReturnType<typeof $fetch.create>

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const token = useCookie<string | null>('auth_token')

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      if (!options.headers) options.headers = {}
      if (token.value) {
        ;(options.headers as any).Authorization = `Bearer ${token.value}`
      }
    },
  })

  return { provide: { api } }
})

declare module '#app' {
  interface NuxtApp {
    $api: ApiClient
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $api: ApiClient
  }
}
