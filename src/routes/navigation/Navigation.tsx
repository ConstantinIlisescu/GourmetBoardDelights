import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import NavLinksMobile from "@/components/NavLinksMobile";

const Navigation = () => {
  return (
    <header className=" py-3  backdrop-blur">
      <div className="mx-auto w-full max-w-screen-2xl px-4">
        <div className="flex justify-between">
          <Logo />
          <NavLinks />
          <NavLinksMobile />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
