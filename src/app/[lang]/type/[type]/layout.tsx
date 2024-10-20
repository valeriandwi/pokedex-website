import MainLayout from "@/app/layouts";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      <section id="pokemon-types">{children}</section>
    </MainLayout>
  );
}
