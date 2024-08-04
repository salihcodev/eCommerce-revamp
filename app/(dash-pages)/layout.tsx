export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>dash header</header>
      {children}
    </section>
  );
}
