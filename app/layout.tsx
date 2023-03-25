import './styles/globals.css'

export const metadata = {
  title: 'Pet One',
  description: 'My Pet One Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
