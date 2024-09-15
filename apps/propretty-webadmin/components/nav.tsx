import { HTMLProps } from "react";
import NavItem, { NavItemProps } from "./nav-item";

export default function Nav({
  items,
  ...rest
}: { items: NavItemProps[] } & HTMLProps<HTMLElement>) {
  return (
    <nav {...rest}>
      {items.map((m) => (
        <NavItem
          key={m.path}
          path={m.path}
          icon={m.icon}
          show={m.show}
          tooltip={m.tooltip}
        >
          {m.children}
        </NavItem>
      ))}
    </nav>
  );
}
