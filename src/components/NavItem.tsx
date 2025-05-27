import { NavItemProps } from "@/types/NavItemProps";

export default function NavItem({ text }: NavItemProps) {
  return (
    <li className="text-[var(--dark-grayish-blue)] cursor-pointer ease duration-300 hover:text-[var(--very-dark-blue)]">
      {text}
    </li>
  );
}
