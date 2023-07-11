'use client'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

export default function useSidebarDimensions() {
  const isOpen = useSelector((state: RootState) => state.siderbar.isOpen)

  // Calculate width based on whether sidebar is open or not
  const width = isOpen ? 'calc(100% - 300px)' : 'calc(100% - 80px)'
  const transitionDuration = '0.4s' // ajuste esses valores conforme necessário
  const isDelay = isOpen ? '0s' : '.6s'

  return { width, transitionDuration, isDelay }
}
