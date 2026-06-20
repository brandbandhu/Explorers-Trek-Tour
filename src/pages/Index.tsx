import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedTreks from "@/components/home/FeaturedTreks";
import AtlasSection from "@/components/home/AtlasSection";
import GlobalSearchBar from "@/components/GlobalSearchBar";
import { AwardsSection, OffersAdminSection, SocialProofSection, StatsSection } from "@/components/home/PremiumSections";

const Index = () => {
  return (
    <Layout showGlobalSearch={false}>
      <HeroSection />
      <GlobalSearchBar reserveTop={false} />
      <StatsSection />
      <FeaturedTreks />
      <CategoriesSection />
      <AwardsSection />
      <SocialProofSection />
      <AtlasSection />
      <OffersAdminSection />
    </Layout>
  );
};

export default Index;
