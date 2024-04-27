export const useUtils = () => {
  const i18n = useI18n()

  const formatPrice = (price: number, perKg: boolean) => {
    return i18n.t(perKg ? 'generic.pricePerKg' : 'generic.pricePerItem', { p: price.toFixed(2) })
  }

  return { formatPrice }
}
