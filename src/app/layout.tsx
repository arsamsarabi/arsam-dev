import type { Metadata } from "next";
import "~/styles/globals.css";
import { Providers } from "~/components/Providers";

export const metadata: Metadata = {
  title: "Arsam Sarabi",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
