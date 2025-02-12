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
    </main>
  );
}
