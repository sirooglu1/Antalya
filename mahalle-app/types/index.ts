export type BusinessModule = 'appointments' | 'catalog' | 'plans' | 'vehicles'

export type BusinessCategory =
  | 'barber'
  | 'grocery'
  | 'market'
  | 'fitness'
  | 'car_rental'
  | 'jewelry'
  | 'other'

export type Business = {
  id: string
  slug: string
  name: string
  category: BusinessCategory
  neighborhoodId: string
  address?: string
  phone?: string
  isOpen?: boolean
  modules: BusinessModule[]
  coverUrl?: string
  description?: string
}

export type CatalogItem = {
  id: string
  name: string
  price: number
  currency?: string
  unit?: string
  updatedAt?: string
  imageUrl?: string
}

export type Plan = {
  id: string
  name: string
  price: number
  period: 'monthly' | 'quarterly' | 'yearly'
  features?: string[]
}

export type Vehicle = {
  id: string
  name: string
  dailyPrice: number
  currency?: string
  available?: boolean
  imageUrl?: string
}

export type Service = {
  id: string
  name: string
  durationMin: number
  price: number
}

export type Staff = {
  id: string
  name: string
}
