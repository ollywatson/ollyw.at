import Profile from '../components/profile';
import RecentWorkSectionAlt from '@/components/recentwork-alt';

export default function Home() {
  return (
    <main>
      <div className="relative max-w-2xl z-10 mx-auto mt-[130px]">
        <Profile />
        <RecentWorkSectionAlt />
        <RecentWorkSectionAlt />
      </div>
      <div className="fixed inset-0 z-0 bg-dot-pattern bg-13px h-full w-full"></div>
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-white to-transparent"></div>

    </main>
  );
}
