import MainLayout from "@/app/layouts";

export default function HomePageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  console.log(params);
  return <MainLayout>{children}</MainLayout>;
}
