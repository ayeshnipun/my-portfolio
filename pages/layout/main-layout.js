import HomeSection from "../sections/home";
import Sider from "./sidebar";

const MainLayout = () => {
  return (
    <div class="flex flex-no-wrap">
      <Sider />
      <div class="container md:w-4/5 w-11/12">
        <HomeSection />
      </div>
    </div>
  );
};

export default MainLayout;
