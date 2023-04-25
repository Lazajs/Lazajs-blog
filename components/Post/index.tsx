import Link from 'next/link'
import { useRouter } from 'next/router'
import { PostData } from 'types'
import Category from './Category'
import { useMemo } from 'react'
import { Card, Text, Grid, Button, Spacer } from '@nextui-org/react'
import { colors, fonts } from 'constants/default'

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
            <Button size='lg' css={{ fontSize: '$2xl', fontFamily: fonts.primary, bg: colors.react }}>
              <Link href='/[slug]' as={`/${slug}`} style={{ color: colors.text, textDecoration: 'none' }}>Read</Link>
          </Button>
        </Card.Footer>
      </Card>
    </>
  )
}
