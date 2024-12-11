import './globals.css'
import { Righteous } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const righteous = Righteous({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Boozy Truths - Where Deep Thoughts Meet Deep Drinks',
  description: 'Join our hilariously inebriated journey through life\'s big questions. Warning: May cause uncontrollable laughter and mild confusion.',
  icons: {
    icon: [
      {
        url: '/boozytrush-logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/boozytrush-logo.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: {
      url: '/boozytrush-logo.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

