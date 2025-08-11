import './globals.css'

export const metadata = {
  title: 'Jeu de Multiplication Magique',
  description: 'Jeu éducatif de multiplication avec nombres relatifs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}