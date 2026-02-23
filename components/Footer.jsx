export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>&copy; {year} AgenturAutomate</span>

        <div className="footer-links">
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
      </div>
      <div className="container">
  ...
</div>
    </footer>
  );
}
