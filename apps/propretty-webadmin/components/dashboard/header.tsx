import NavBreadcrumb from "../nav-breadcrumb";
import SearchBox from "../search-box";
import MobileSidebar from "./mobile-sidebar";
import ProfileMenu from "./profile-menu";

export default function Header() {
  return (
    <header className="w-full flex h-14 items-center justify-between gap-4 border-b bg-background px-4 py-2 sm:h-auto sm:px-6">
      <MobileSidebar />
      <NavBreadcrumb />
      <div className="flex gap-4">
        <SearchBox />
        <ProfileMenu />
      </div>
    </header>
  );
}
