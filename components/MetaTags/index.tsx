import { ReactNode } from 'react'
import Head from 'next/head'
import GoogleTags from 'components/GoogleTags'

export default function MetaTags ({ children }: {children: ReactNode}) {
  return (
    <>
      <Head>
        <meta name='title' property='og:title' content='Lazajs - Blog & About me'/>
        <meta name='type' property='og:type' content='website'/>
        <meta name='image' property='og:image' content='https://lh3.googleusercontent.com/x74s7Tr6ysiF8TYeILmiud3LYRX1giy2szZL4ICDqc6y191ClqSTU-fTXpdhSzC6stpLd21JppIjs3k6poi8jA096XgrcFHL-8wMKKqU69xHhj3QzdZGukD7QjtIXlD22ikNyYKgJIuLgef9k7dJixNhNHG05rDB5pdy5XO-zMnyALPvIUD11zxN1B45JI6wU9JSirjl2uVGXfyUohVtRPzJnXLqq0Vx5ixWkVr4Xi_uzIxstsgqGmOvtgZk5BAkB3Nx_7ve8FzpyKjFq-_rCWyqhWsdxN8A7aXu4TNEztzXWt55ZA6y3yV_3YVf-SNRi79agenGfvMyfXwNGZ_b4mtBpzOeXmKKC-bTvhrfavO9cxG9PQuP_otljiwHNwqKGcSl5CEoDqUpC4KQhF-SG1ad-owIfRsC7x9yTFLjxs613mdS08-l6VlpwZCI5u61uA0WyXCzgsKzCMKWtV8-cZ-P_e1aRG33t2H03v_ghcOgIXTUVU-pptWsBIm540xP8ZcASpP3uyZk9o_WSdfK0uwCvRC1Lz3571dez4THQ17qRXH2eCRvT3VdBZwf6brIG8F7NYKoGHiwWyASeD99ZMYoKJDUgzrvO7Csyi1BFA-0vGpZIrIqBe94jO4yuIIjfj0aq_P6CMga2qQkQXx-SiZhLvyTYEqKNtxy1upOKOWkoYDlYQL-FDLCtLQO5AOWSdWyULvLykYTmIhDEagEZWFJZBOMHhMrEdjgWfQhCbY7M3JR35FuSfmEubZzQU2bAm4nM42R3Qj6CS5c43wyULF5EKEKnfx7P3QGzB6l_oHnB8nB-YmurAq7H5drjPrb12NuuGPsa4zVou4WxFKq0__KP0cggKQxojm3Tn6gyQwja51s3qCtNtB_qgjNCoUnGueIJTpVGJ1Ck2eqkEBfsaj3bb7gTC3cNlzLsdMmyrCKFRYk8UqXAWixpzh0f1LqsBQfVdq5uU_O322hVh_3HJ_okkftw6cSx2Go7AnGZEw-zRlwvvf3rS-m5A=w1104-h668-no?authuser=0'/>
        <meta name='url' property='og:url' content='https://www.lazajs.com'/>
        <meta name='description' property='og:description' content='Read interesting development stories and know more about Lazaro!'/>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GoogleTags />
      {children}
    </>
  )
}
