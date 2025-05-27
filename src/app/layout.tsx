import './globals.css'
import type { Metadata } from 'next'
import SmoothScrollProvider from '@/components/animation/SmoothScrollProvider'
import CustomCursor from '@/components/animation/CustomCursor'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'BVYTE Solutions | Empowering Your Vision with Innovative IT Solutions',
  description: 'At BVYTE Solutions, we build next-gen digital products that transform businesses. From scalable software to smart systems — your idea, our code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen overflow-x-hidden">
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
