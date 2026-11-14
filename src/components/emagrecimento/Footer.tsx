const Footer = () => (
  <footer className="px-6 py-12 md:px-12 border-t border-border/60">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-heading text-lg text-foreground">Dra. Isabella Tovar</p>
          <p className="text-sm text-muted-foreground font-body">MÉDICA | CRM: 27286 GO</p>
          <p className="text-sm text-muted-foreground font-body">Emagrecimento com saúde, disposição e beleza</p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground font-body">
            Contato: (62) 9609-3076
          </p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/40 text-center">
        <p className="text-xs text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
          Aviso: Este site tem caráter informativo e não substitui uma consulta médica. Os resultados podem variar de acordo com as características individuais de cada paciente. Nenhum tratamento garante resultados específicos. Agende uma consulta para avaliação personalizada.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
