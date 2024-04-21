export const useLocale = () => {
  const i18n = useI18n()

  const currentLocale = computed(() => i18n.locale.value as 'en' | 'ua')

  const setLocale = (value: 'en' | 'ua') => {
    i18n.locale.value = value
  }

  return { currentLocale, setLocale }
}
