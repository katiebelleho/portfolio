import CustomCursor from "@/components/custom-cursor";
import HomeFooter from "@/components/home-footer";
import HomeLanding from "@/components/home-landing";

export default function Home() {
  return (
    <div className="home-page bg-white">
      <CustomCursor />
      <HomeLanding />
      <HomeFooter />
    </div>
  );
}
