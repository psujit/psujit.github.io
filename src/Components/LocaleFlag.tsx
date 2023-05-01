import * as React from 'react'
import { Context } from '../Context'
export const LocaleFlag = (props: { country: string }) => {
  const { setLocale } = React.useContext(Context)
  const {country} = props
  const convertCountryToLocale = (country: string) => {
    switch (country) {
      case 'germany':
        return 'de'
        break
      case 'united-kingdom':
      default:
        return 'en'
        break
    }
  }
  const onLocaleChange = () => setLocale(convertCountryToLocale(country))

  return (
    <img
      className="profile-pic"
      src={`images/${country}-flag-medium.jpg`}
      alt="language"
      onClick={onLocaleChange}
    />
  )
}
