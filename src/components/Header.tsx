import NavItem from "./NavItem";
import ImageComponent from "./ImageComponent";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-12 border-b-2 border-[var(--light-grayish-blue)]">
      <div className="flex items-center gap-16">
        <ImageComponent
          src="/images/logo.svg"
          alt="Snekars logo"
          width={138}
          height={20}
        />
        <nav>
          <ul className="flex items-center gap-10">
            <NavItem text="Collections" />
            <NavItem text="Men" />
            <NavItem text="Women" />
            <NavItem text="About" />
            <NavItem text="Contact" />
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-12">
        <ImageComponent
          src="/images/icon-cart.svg"
          alt="Cart icon"
          width={25}
          height={25}
        />
        <ImageComponent
          src="/images/image-avatar.png"
          alt="User avatar"
          width={50}
          height={50}
        />
      </div>
    </header>
  );
}
