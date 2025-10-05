import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Webrizen - Building Intelligence Into Everything",
    template: "%s | Webrizen"
  },
  description: "Technology that transcends boundaries — digital, biological, and cosmic. Accelerating human evolution through intelligent systems.",
  keywords: ["AI", "quantum computing", "robotics", "energy", "future technology", "intergalactic"],
  authors: [{ name: "Webrizen" }],
  creator: "Webrizen",
  publisher: "Webrizen",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webrizen.com",
    siteName: "Webrizen",
    title: "Webrizen - Building Intelligence Into Everything",
    description: "Technology that transcends boundaries — digital, biological, and cosmic.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webrizen",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Webrizen - Building Intelligence Into Everything",
    description: "Technology that transcends boundaries — digital, biological, and cosmic.",
    images: ["/og-image.jpg"],
    creator: "@webrizen",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage.className} antialiased`} suppressHydrationWarning>
          {children}
      </body>
    </html>
  );
}