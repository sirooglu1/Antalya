import { defineStore } from 'pinia'
import type { Business, CatalogItem, Plan, Vehicle, Service, Staff } from '@/types'

export const useBusinessStore = defineStore('business', () => {
  const business = ref<Business | null>(null)
  const loading = ref(false)

  const catalog = ref<CatalogItem[]>([])
  const plans = ref<Plan[]>([])
  const vehicles = ref<Vehicle[]>([])
  const services = ref<Service[]>([])
  const staff = ref<Staff[]>([])

  async function fetchBusiness(slug: string) {
    loading.value = true
    try {
      business.value = demoBusiness(slug)
      catalog.value = demoCatalog(slug)
      plans.value = demoPlans(slug)
      vehicles.value = demoVehicles(slug)
      services.value = demoServices(slug)
      staff.value = demoStaff(slug)
    } finally {
      loading.value = false
    }
  }

  function hasModule(m: string) {
    return business.value?.modules?.includes(m as any) ?? false
  }

  return { business, loading, catalog, plans, vehicles, services, staff, fetchBusiness, hasModule }
})

function demoBusiness(slug: string): Business {
  const map: Record<string, Business> = {
    'usta-berber': { id: '1', slug, name: 'Usta Berber', category: 'barber', neighborhoodId: 'mah-1', modules: ['appointments'], isOpen: true, address: 'Mahalle Cd. 12', description: 'Klasik & modern kesim.' },
    'yesil-manav': { id: '2', slug, name: 'Yeşil Manav', category: 'grocery', neighborhoodId: 'mah-1', modules: ['catalog'], isOpen: true, address: 'Sokak 5', description: 'Günlük taze.' },
    'komsu-bakkal': { id: '3', slug, name: 'Komşu Bakkal', category: 'market', neighborhoodId: 'mah-1', modules: ['catalog'], isOpen: false, address: 'Çarşı 2', description: 'Mahallenin bakkalı.' },
    fitlife: { id: '4', slug, name: 'FitLife Gym', category: 'fitness', neighborhoodId: 'mah-1', modules: ['plans'], isOpen: true, address: 'Bulvar 18', description: 'Aylık/yıllık planlar.' },
    rentgo: { id: '5', slug, name: 'RentGo', category: 'car_rental', neighborhoodId: 'mah-1', modules: ['vehicles'], isOpen: true, address: 'Sanayi 1', description: 'Günlük araç kiralama.' },
    'inci-taki': { id: '6', slug, name: 'İnci Takı', category: 'jewelry', neighborhoodId: 'mah-1', modules: ['catalog'], isOpen: true, address: 'Pasaj 7', description: 'Küpe/kolye/bileklik.' },
  }
  return map[slug] || { id: 'x', slug, name: 'İşletme', category: 'other', neighborhoodId: 'mah-1', modules: ['catalog'], isOpen: true }
}

function demoCatalog(slug: string) {
  if (slug === 'inci-taki') {
    return [
      { id: 'c1', name: 'Altın Kaplama Küpe', price: 499, currency: 'TRY', updatedAt: new Date().toISOString() },
      { id: 'c2', name: 'İnci Kolye', price: 899, currency: 'TRY', updatedAt: new Date().toISOString() },
    ]
  }
  return [
    { id: 'p1', name: 'Domates', price: 35, currency: 'TRY', unit: 'kg', updatedAt: new Date().toISOString() },
    { id: 'p2', name: 'Muz', price: 55, currency: 'TRY', unit: 'kg', updatedAt: new Date().toISOString() },
    { id: 'p3', name: 'Süt', price: 38, currency: 'TRY', unit: 'adet', updatedAt: new Date().toISOString() },
  ]
}

function demoPlans(slug: string) {
  if (slug !== 'fitlife') return []
  return [
    { id: 'pl1', name: 'Aylık', price: 1200, period: 'monthly', features: ['Sınırsız giriş', 'Duş'] },
    { id: 'pl2', name: 'Yıllık', price: 9900, period: 'yearly', features: ['Sınırsız giriş', 'PT indirimi'] },
  ]
}

function demoVehicles(slug: string) {
  if (slug !== 'rentgo') return []
  return [
    { id: 'v1', name: 'Fiat Egea (Ekonomi)', dailyPrice: 1800, currency: 'TRY', available: true },
    { id: 'v2', name: 'Renault Clio (Ekonomi)', dailyPrice: 1700, currency: 'TRY', available: false },
  ]
}

function demoServices(slug: string) {
  if (slug !== 'usta-berber') return []
  return [
    { id: 's1', name: 'Saç Kesim', durationMin: 30, price: 350 },
    { id: 's2', name: 'Sakal', durationMin: 15, price: 200 },
    { id: 's3', name: 'Saç + Sakal', durationMin: 45, price: 500 },
  ]
}

function demoStaff(slug: string) {
  if (slug !== 'usta-berber') return []
  return [
    { id: 'st1', name: 'Ahmet' },
    { id: 'st2', name: 'Mehmet' },
  ]
}
