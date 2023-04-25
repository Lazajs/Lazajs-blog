import Link from 'next/link'
import { useRouter } from 'next/router'
import { PostData } from 'types'
import Category from './Category'
import { useMemo } from 'react'
import { Card, Text, Grid, Spacer, Link as TextLink } from '@nextui-org/react'
import { colors } from 'constants/default'

type Props = {
  data: PostData
}

export default function Post ({ data }: Props) {
  const { slug, date, title, category, description } = data
  const { locale } = useRouter()
  const shownDate = useMemo(() => new Intl.DateTimeFormat(locale, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(date)), [date, locale])

  return (
      <>
      <Card css={{ p: '$6', mw: '370px', bg: colors.secondary }}>
        <Card.Header>
          <Category type={category} />
          <Spacer x={1}/>
          <Grid.Container css={{ pl: '$6' }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: '$xs', color: colors.text }}>
               {title}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: '$accents8' }}>{shownDate}</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: '$2' }}>
          <Text css={{ color: colors.text }}>
            {description}
          </Text>
        </Card.Body>
        <Card.Footer>
          <Link href='/[slug]' as={`/${slug}`}>
            <TextLink block color='primary' style={{ cursor: 'pointer', fontSize: '1.8', paddingLeft: '1rem', paddingRight: '1rem' }}>Read</TextLink>
          </Link>
        </Card.Footer>
      </Card>
      <style jsx>{`
        button a {
          color: ${colors.text};
          text-decoration: none;
          height: 100%;
          width: 100%;

        }
      `}</style>
    </>
  )
}
