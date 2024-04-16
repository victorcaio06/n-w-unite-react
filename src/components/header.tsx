import LogoPassIn from '../assets/logo-pass-in.svg';
import { NavLink } from './nav-link';

export function Header() {
  return (
    <header className="flex items-center  gap-5 py-2">
      <img src={LogoPassIn} alt="logo NLW Unite" />

      <nav className="flex items-center  gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </header>
  );
}
