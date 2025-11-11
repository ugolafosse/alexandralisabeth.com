import localFont from 'next/font/local'

export const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  variable: '--font-sans',
  display: 'swap',
  weight: '200 900',
})

export const ebGaramond = localFont({
  src: [
    {
      path: '../fonts/EBGaramond-VariableFont_wght.woff2',
      style: 'normal',
      weight: '400 800',
    },
    {
      path: '../fonts/EBGaramond-Italic-VariableFont_wght.woff2',
      style: 'italic',
      weight: '400 800',
    },
  ],
  variable: '--font-display',
  display: 'swap',
})
