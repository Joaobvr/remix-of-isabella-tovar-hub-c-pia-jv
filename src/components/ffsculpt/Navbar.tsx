const scrollToForm = () => {
  if (typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Lead");
  }
  document.getElementById("pre-avaliacao")?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-brand"
      style={{
        background: "rgba(250, 247, 244, 0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="container-wide flex items-center justify-between py-4 px-6">
        <a href="#" className="font-display text-xl tracking-tight text-primary-ink">
          Dra. Isabella <span className="italic text-rose-brand">Tovar</span>
        </a>
        <button onClick={scrollToForm} className="btn-nav">
          Pré-avaliação
        </button>
      </div>
    </nav>
  );
};

export default Navbar;