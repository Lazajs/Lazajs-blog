import { useRouter } from 'next/router'
import { FILTERS } from 'constants/default'
import i18n from 'i18n/index.json'

type Key = keyof typeof FILTERS
type Name = keyof typeof i18n

export default function useI18n (name: Name) {
  const { locale } = useRouter()
  const wantedTextList = i18n[name]
  const localeLanguage = locale as Key
  const value = wantedTextList[localeLanguage]
  return value as any
}
