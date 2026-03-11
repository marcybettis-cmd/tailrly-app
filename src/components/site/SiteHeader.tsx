export default function SiteHeader() {
  return (
    <header className="border-b p-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <span className="font-bold">Tailrly</span>
        <nav className="flex gap-4 text-sm">
          <a href="/">Home</a>
          <a href="/designers">Designers</a>
          <a href="/login">Login</a>
        </nav>
      </div>
    </header>
  );
}

