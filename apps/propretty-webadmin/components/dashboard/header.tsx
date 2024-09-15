import NavBreadcrumb from "../nav-breadcrumb";
import SearchBox from "../search-box";
import NavHamburger from "./nav-hamburger";
import ProfileMenu from "./profile-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <NavHamburger />
      <NavBreadcrumb />
      <SearchBox />
      <ProfileMenu />
    </header>
  );
}
