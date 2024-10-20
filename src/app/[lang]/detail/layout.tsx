import MainLayout from "@/app/layouts";

export default function DetailPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      <section id="detail-page">{children}</section>
    </MainLayout>
  );
}
