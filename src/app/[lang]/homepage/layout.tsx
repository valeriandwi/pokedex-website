import MainLayout from "@/app/layouts";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
