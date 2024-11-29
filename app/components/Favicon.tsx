export default function Favicon() {
  return (
    <>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* For older browsers */}
      <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
      
      {/* For Safari pinned tabs */}
      <link rel="mask-icon" href="/favicon/android-chrome-512x512.png" color="#5bbad5" />
      
      {/* For Microsoft */}
      <meta name="msapplication-TileImage" content="/favicon/android-chrome-192x192.png" />
      <meta name="msapplication-TileColor" content="#ffffff" />
    </>
  )
} 