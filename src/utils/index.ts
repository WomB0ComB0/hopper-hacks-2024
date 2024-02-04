import { Metadata, Viewport } from "next"

export async function constructMetadata({
  image = '/assets/images/logo.png',
  icons = '/assets/svgs/logo.svg',
  description = 'A web application designed to offer support and assistance to individuals dealing with depression. The platform serves as a safe space for people experiencing emotional distress, providing resources, connecting users with empathetic individuals, and facilitating support to navigate emotional challenges. The aim is to establish a supportive online community that fosters open communication and encourages seeking help for mental health issues.',
  title = 'HelpLine',
  noIndex = false,
}: MetadataProps = {}): Promise<Metadata> {
  return {
    title: {
      default: title,
      template: `${title} - %s`,
    },
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [image],
      creator: '@OdnisMike',
    },
    icons: [
      {
        url: icons,
        href: icons,
      }
    ],
    themeColor: '#F1F8FF',
    manifest: '/pwa/manifest.json',
    metadataBase: new URL('https://hopper-hacks-2024.vercel.app/'),
    other: { 
      currentYear: new Date().getFullYear(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

export async function constructViewport(): Promise<Viewport> {
  return {
    width: 'device-width',
    height: 'device-height',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
  }
}