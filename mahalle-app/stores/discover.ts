import { defineStore } from 'pinia'
import type { Business, BusinessCategory } from '@/types'

const CATEGORIES: { key: BusinessCategory; label: string }[] = [
  { key: 'barber', label: 'Berber' },
  { key: 'grocery', label: 'Manav' },
  { key: 'market', label: 'Bakkal' },
  { key: 'fitness', label: 'Fitness' },
  { key: 'car_rental', label: 'Araç Kiralama' },
  { key: 'jewelry', label: 'Takı' },
  { key: 'other', label: 'Diğer' },
]

export const useDiscoverStore = defineStore('discover', () => {
  const neighborhoodId = ref('mah-1')
  const category = ref<BusinessCategory | 'all'>('all')
  const q = ref('')
  const businesses = ref<Business[]>([])
  const loading = ref(false)

  async function fetchBusinesses() {
    loading.value = true
    try {
      businesses.value = demoBusinesses(neighborhoodId.value)
    } finally {
      loading.value = false
    }
  }

  const filtered = computed(() => {
    return businesses.value.filter((b) => {
      const catOk = category.value === 'all' ? true : b.category === category.value
      const qOk = q.value.trim() ? b.name.toLowerCase().includes(q.value.toLowerCase()) : true
      return catOk && qOk
    })
  })

  return { neighborhoodId, category, q, businesses, filtered, loading, fetchBusinesses, CATEGORIES }
})

function demoBusinesses(neighborhoodId: string): Business[] {
  return [
    { id: '1', slug: 'usta-berber', name: 'Usta Berber', category: 'barber', neighborhoodId, modules: ['appointments'], isOpen: true, address: 'Mahalle Cd. 12' },
    { id: '2', slug: 'yesil-manav', name: 'Yeşil Manav', category: 'grocery', neighborhoodId, modules: ['catalog'], isOpen: true, address: 'Sokak 5' },
    { id: '3', slug: 'komsu-bakkal', name: 'Komşu Bakkal', category: 'market', neighborhoodId, modules: ['catalog'], isOpen: false, address: 'Çarşı 2' },
    { id: '4', slug: 'fitlife', name: 'FitLife Gym', category: 'fitness', neighborhoodId, modules: ['plans'], isOpen: true, address: 'Bulvar 18' },
    { id: '5', slug: 'rentgo', name: 'RentGo', category: 'car_rental', neighborhoodId, modules: ['vehicles'], isOpen: true, address: 'Sanayi 1' },
    { id: '6', slug: 'inci-taki', name: 'İnci Takı', category: 'jewelry', neighborhoodId, modules: ['catalog'], isOpen: true, address: 'Pasaj 7' },
  ]
}
