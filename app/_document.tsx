import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" as="image" href="/multi-basket-1.png" />
        <link rel="preload" as="image" href="/multi-basket-2.png" />
        <link rel="preload" as="image" href="/multi-basket-1.png" />
        <link rel="preload" as="image" href="/multi-basket-1.png" />
        <link rel="preload" as="image" href="/multi-basket-1.png" />
        <link rel="preload" as="image" href="/multi-basket-1.png" />
        <link rel="preload" as="image" href="/multi-basket-1.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}