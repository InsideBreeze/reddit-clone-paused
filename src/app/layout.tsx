'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import Navbar from './nav'
import theme from '../chakra/theme'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            <main>{children}</main>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
