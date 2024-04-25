export const useDefaultHead = () => {
  const config = useRuntimeConfig()
  const i18n = useI18n()
  const i18nHead = useLocaleHead({ addSeoAttributes: true })

  const defaultTitle = i18n.t('footer.title') ?? 'Рибниця'
  const titleConfig = config.public.title ? config.public.title : defaultTitle
  const head = computed(() => ({
    title: titleConfig,
    titleTemplate: (title?: string) => (title !== titleConfig ? `${title} | ${titleConfig}` : title),
    htmlAttrs: i18nHead.value.htmlAttrs,
    meta: [
      ...(i18nHead.value.meta || []),
      { hid: 'og:site_name', name: 'og:site_name', content: defaultTitle },
      { hid: 'description', name: 'description', content: config.public.description },
      { hid: 'og:description', name: 'og:description', content: config.public.description },
      { hid: 'twitter:image', name: 'twitter:image', content: '/main-seo.webp' },
      { hid: 'og:image', property: 'og:image', content: '/main-seo.webp' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Rybnytsia, Rybnitsia, rybnytsia, Рыбница, Рибниця, рибниця, риба, опт, рыба, купить, fish, Fish, buy',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/small-logo.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
      },
      ...(i18nHead.value.link ?? []),
    ],
  }))

  return { head }
}
