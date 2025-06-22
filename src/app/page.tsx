import Hero from '@/sections/Hero';
import Showcase from '@/sections/Showcase';
import Features from '@/sections/Features';
import SubscriptionForm from '@/sections/SubscriptionForm';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Features />
      <SubscriptionForm />
      <Footer />
      <ScrollToTop />
    </>
  );
}
