import './globals.css'

export const metadata = {
  title: 'SnapRec - Professional Screen Recording for Windows',
  description: 'Capture your screen with ease. Screen recording, screenshots, GIF creation, webcam overlay, and more. Free and powerful screen recorder for Windows.',
  keywords: 'screen recorder, screenshot, windows, GIF recorder, webcam overlay, screen capture, free screen recorder',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'SnapRec - Professional Screen Recording for Windows',
    description: 'Capture your screen with ease. Screen recording, screenshots, GIF creation, and more.',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
