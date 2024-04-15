export const useDefaultHead = () => {
  const config = useRuntimeConfig()
  const i18nHead = useLocaleHead({ addSeoAttributes: true })

  const defaultTitle = 'Rybnytsia'
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
      { hid: 'twitter:image', name: 'twitter:image', content: '/main-seo.jpeg' },
      { hid: 'og:image', property: 'og:image', content: '/main-seo.jpeg' },
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
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap',
      },
      ...(i18nHead.value.link ?? []),
    ],
  }))

  return { head }
}
