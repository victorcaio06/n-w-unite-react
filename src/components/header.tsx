import LogoPassIn from '../assets/logo-pass-in.svg';

export function Header() {
  return (
    <header className="flex items-center  gap-5 py-2">
      <img src={LogoPassIn} alt="logo NLW Unite" />

      <nav className="flex items-center  gap-5">
        <a className="font-medium text-sm text-zinc-300 " href="">
          Eventos
        </a>
        <a className="font-medium text-sm" href="">
          Participantes
        </a>
      </nav>
    </header>
  );
}
