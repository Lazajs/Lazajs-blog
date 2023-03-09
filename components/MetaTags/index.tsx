import { ReactNode } from 'react'
import Head from 'next/head'
import GoogleTags from 'components/GoogleTags'

export default function MetaTags ({ children }: {children: ReactNode}) {
  return (
    <>
      <Head>
        <meta name='title' property='og:title' content='Lazajs - Blog & About me'/>
        <meta name='type' property='og:type' content='website'/>
        <meta name='image' property='og:image' content='https://lh3.googleusercontent.com/ql9m7IwRuJ3hPVz-I9thxz2c3Tr-fvrSOG-tWI8G6h3fqPgQ_A0W488ubr_5TOLson-5wcDF8kYTMIdQYjcKwNxBnZvtkLeQ_VeHLUC8TLmGH9j_2jx2ayl2U2Eq_-zD21WnmT1j8257rLoVtl58ZL3MHFOhnoBMfPW9pHZnWZZKC4g2HQL4214RgCfu91YeuEpHeS6fi2vvIK7N3iSoOjhS7pSMUKQ1wlvD5WKTfMWQB5M8A0T9qYj5wUHnSj94weWbBjtloKzlJ5AMUmWut5zOHGjgf4OgbPeUjWsbarLeb7TntIR0kJ5G0H2OWpN4_gOGoegjIi7Ma_V9F37tfijUmZCJk1ztJ4-uSJIJfedZ56U62fkF7ZL2lhRhYff-ZCp-9QpnXW4mz7lOx00t1p5a8RKtKpW9aLFfIa9ITeOL9eYrRIV7lCpelcmv8_imCR1cfNIrrWRRvFfKCS0KSDK4rRlarDcU0F4SB1rxcqCJuBYnqNBX9TIC9hvYFvRMQn5jHc6b4YVk01U8y4JJa0hYWsLTMR9BzPvsXXHU1Zi01wt5noQxGTppahMnDBCIAh_abTK0FU5v7T5_yPxv55rkloYOvsw8fuR3HsUcsWCtLVlwAeMQs6Tx5FzYUODy2Gn3EBjwOP86b-5-lN9Y1tANH0cgEAW4iYcOZu0eHBdwNPdyDLBgjVbjNK-C78jeKXChdDw5FluOJY2ZISsQ9dbDzIGhsapRr4AffXkAWpHEtxF5BX8VbE-U6n2Wc1IsjO0mkSPdE1V3BXRwYWRVyVHtYK5WnsI_sCpa5L5LnRynKitSJO9GDqGpOJsLLxGbD-eowkTo0np95GTxSFPlN-gUktRHtE9xS84ymsts9qngEpWLXPh534CdlUE_1v7kg7QWTECGvCughG83khWtj31KzPGZODQVYKSLskSoBIvQsbN_3ZtJNx9_sHBXB1QbYzs2fJBMgG77c50YpA3huRaDB3SjfXM9aaLB234Ts_c0ULENogPhz6iQ=w1084-h715-no?authuser=2'/>
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
