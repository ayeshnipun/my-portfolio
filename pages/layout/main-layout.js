import HomeSection from "../sections/home";
import SideBar from "./side-bar";
import Sider from "./sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <SideBar />

      <main className="flex-1">
        <HomeSection />
        {/* <div class="h-96 bg-amber-400 p-10">
          <h1 class="text-4xl">Top Content</h1>
        </div>
        <div class="h-96 bg-white p-10">
          <h1 class="text-4xl">Middle Content</h1>
        </div>
        <div class="h-96 bg-green-400 p-10">
          <h1 class="text-4xl">Middle Content</h1>
        </div>
        <div class="h-96 bg-indigo-400 p-10">
          <h1 class="text-4xl">Last Content</h1>
        </div> */}
      </main>
    </div>
  );
};

export default MainLayout;
