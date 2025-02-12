import Footer from '@/components/footer';
import Profile from '../components/profile';
import RecentWorkSection from '@/components/recentwork';

export default function Home() {
  return (
    <main>
      <div className="relative max-w-2xl z-10 mx-auto mt-[130px]">
        <Profile />
        <RecentWorkSection />
      </div>
      <div className="z-10 relative">
        <Footer />
      </div>
      <div className="fixed inset-0 z-0 bg-dot-pattern bg-13px h-full w-full"></div>
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-white to-transparent"></div>

    </main>
  );
}
