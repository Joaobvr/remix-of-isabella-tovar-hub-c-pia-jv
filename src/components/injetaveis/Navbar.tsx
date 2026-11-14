import { Button } from "@/components/injetaveis/Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/90 backdrop-blur-xl">
      <div className="font-serif text-lg font-medium tracking-wider text-foreground">
        Dra. Isabella <span className="text-primary">Tovar</span>
      </div>
      <Button variant="sage" size="lg" className="px-8" asChild>
        <a href="https://wa.me/556296093076" target="_top" onClick={() => (window as any).fbq?.('track', 'Contact')}>
          Agendar Avaliação
        </a>
      </Button>
    </nav>
  );
};

export default Navbar;
