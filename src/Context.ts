import * as React from 'react'

interface LocaleContext  {locale: string, setLocale: (locale: string) => void}
export const Context = React.createContext<LocaleContext>({
  locale: navigator.language.substring(0,2),
  setLocale: locale => {/**/}
})
