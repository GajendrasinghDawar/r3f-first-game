import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "r3f-1-app",
  description: "first react three fibre game",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  h-screen`}>{children}</body>
    </html>
  )
}
