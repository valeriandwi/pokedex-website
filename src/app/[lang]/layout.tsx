import type { Metadata } from "next";
import "../globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { i18n, Locale } from "../../../i18n.config";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import MainLayout from "../layouts";

export const metadata: Metadata = {
  title: "Pokemon",
  description: "Pokemon",
};

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const messages = await getMessages();

  return (
    <html lang={params.lang}>
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider options={{ key: "css" }}>
            <NextIntlClientProvider messages={messages}>
              <MainLayout>{children}</MainLayout>
            </NextIntlClientProvider>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
