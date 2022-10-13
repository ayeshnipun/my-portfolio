import HomeSection from "../sections/home";
import Sider from "./sidebar";

const MainLayout = () => {
  return (
    <div class="flex flex-no-wrap">
      <Sider />
      <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        <HomeSection />
      </div>
    </div>
  );
};

export default MainLayout;
