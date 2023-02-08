import { useRouter } from 'next/router'
import i18n from 'i18n/index.json'

type JSONRaw = typeof i18n
type Name = keyof JSONRaw
type Language = keyof JSONRaw[Name]
type Selection = JSONRaw[Name]
type Property = Pick<Selection, Language>
type PropertyValues = Property[Language]

export default function useI18n (name: Name) {
  const { locale } = useRouter()

  const JSONFile: JSONRaw = i18n
  const wantedTextList = JSONFile[name]
  const localeLanguage = locale as Language
  const value = wantedTextList[localeLanguage]
  return value as PropertyValues
}
