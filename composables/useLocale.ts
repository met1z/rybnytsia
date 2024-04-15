import { RYB_LOCALE, TWO_WEEK_IN_SEC } from '~/common/constants'

export const useLocale = () => {
  const i18n = useI18n()

  const currentLocale = computed(
    () => (useCookie(RYB_LOCALE).value ? useCookie(RYB_LOCALE).value : 'en') as 'en' | 'ua',
  )

  const trySetLocaleFromCookie = () => {
    const locale = useCookie(RYB_LOCALE).value
    if (locale) i18n.locale.value = locale
    else {
      const cookieLocale = useCookie(RYB_LOCALE, { maxAge: TWO_WEEK_IN_SEC })
      cookieLocale.value = i18n.locale.value
    }
  }

  const setLocale = (value: 'en' | 'ua') => {
    i18n.locale.value = value
    useCookie(RYB_LOCALE).value = value
  }

  return { currentLocale, trySetLocaleFromCookie, setLocale }
}
