import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <title>Приглашение 17.06.2023</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/32.png" />
        <link rel="icon" href="img/favicon/32.svg" type="image/svg+xml" />
        <link rel="manifest" href="manifest.webmanifest" />

        <meta property="og:title" content="Приглашение | Wedding-day" />
        <meta property="og:image" content="https://svadba170623.ru/img/micro.jpg" />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="1330" />
        <meta property="og:url" content="https://svadba170623.ru" />
        <meta property="og:site_name" content="Приглашаем вас на нашу свадьбу. Будем радоваться вместе с вами в наш счастливый день! Ждем вас 17 июня!" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
