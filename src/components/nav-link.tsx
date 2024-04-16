import { ComponentProps } from 'react';

interface NavLinkProps extends ComponentProps<'a'> {
  children: React.ReactNode;
  href: string;
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm" href={props.href}>
      {props.children}
    </a>
  );
}
