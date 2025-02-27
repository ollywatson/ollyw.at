import Footer from '@/components/footer';
import Profile from '../components/profile';
import RecentWorkSection from '@/components/recentwork';
import GlowIcon from '@/components/glowicon';
import FadeIn from '@/components/fadein';

export default function Home() {
  return (
    <main>
      <FadeIn>
        <div className="max-w-[600px] z-10 mx-auto mt-[120px] px-5">
          <GlowIcon />
        </div>
        <div className="relative max-w-[600px] z-10 mx-auto mt-10">
          <Profile />
          <RecentWorkSection />
        </div>
        <div className="z-10 relative">
          <Footer />
        </div>
      </FadeIn>
    </main>
  );
}
