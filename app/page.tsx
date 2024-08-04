import HeroSection from "./_comps/app/landing-comps/hero-section/hero-section.comp";
import AppHeader from "./_comps/shared/app-header/app-header.comp";

export default function Home() {
  return (
    <>
      <AppHeader />
      <main className="page">
        <HeroSection />
        <div className="container lg mx-auto"></div>
      </main>
    </>
  );
}
