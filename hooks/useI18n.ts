import { useRouter } from 'next/router'
import i18n from 'i18n/index.json'

type JSONRaw = typeof i18n
type Name = keyof JSONRaw
type Language = keyof JSONRaw[Name]

export default function useI18n<N extends Name> (name: N): JSONRaw[N][Language] {
  const { locale } = useRouter()
  const JSONFile: JSONRaw = i18n
  const wantedTextList = JSONFile[name]
  const value = wantedTextList[locale as Language]
  return value
}
