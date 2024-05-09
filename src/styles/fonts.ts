import font from 'next/font/local'

export const Sensation = font({
  src: [
    {
      path: './fonts/sansation/Sansation-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/sansation/Sansation-Regular.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './fonts/sansation/Sansation-Italic.ttf',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: './fonts/sansation/Sansation-Bold.ttf',
      weight: 'bold',
      style: 'normal',
    },
  ],
  variable: '--font-sensation',
})

export const Montserrat = font({
  src: [
    {
      path: './fonts/montserrat/Montserrat-Thin.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/montserrat/Montserrat-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/montserrat/Montserrat-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/montserrat/Montserrat-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat',
})

export const Daniel = font({
  src: [
    {
      path: './fonts/daniel/Daniel-Regular.otf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './fonts/daniel/Daniel-Bold.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/daniel/Daniel-Black.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-daniel',
})
