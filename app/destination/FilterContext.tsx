'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface FilterState {
  continent: string
  country: string
}

const initialState: FilterState = {
  continent: '',
  country: ''
}

export const FilterContext = createContext<{
  filters: FilterState
  setContinent: (continent: string) => void
  setCountry: (country: string) => void
  clearFilters: () => void
}>({
  filters: initialState,
  setContinent: () => {},
  setCountry: () => {},
  clearFilters: () => {}
})

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(initialState)

  const setContinent = (continent: string) => {
    setFilters(prev => ({ ...prev, continent, country: '' }))
  }

  const setCountry = (country: string) => {
    setFilters(prev => ({ ...prev, country }))
  }

  const clearFilters = () => setFilters(initialState)

  return (
    <FilterContext.Provider value={{ filters, setContinent, setCountry, clearFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilters = () => useContext(FilterContext)