const Footer = () => (
  <footer className="bg-charcoal px-6 md:px-12 py-10">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <div className="font-serif text-base text-cream tracking-wider">
          Dra. Isabella <span className="text-primary">Tovar</span>
        </div>
        <p className="text-[0.68rem] text-cream/80 mt-1">MÉDICA | CRM: 27286 GO</p>
      </div>
      <p className="text-[0.72rem] text-cream/80 text-center max-w-xs">
        Os tratamentos são definidos após avaliação médica individual.
      </p>
      <div className="text-[0.68rem] text-cream/75 tracking-wider">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
