function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-sm mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-bold text-lg">FOSSEE</p>
          <p className="text-blue-300">IIT Bombay — Free & Open Source Software for Education</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1 text-blue-300">
          <a href="https://fossee.in" className="hover:text-white">fossee.in</a>
          <p>info@fossee.in</p>
          <p>© 2024 FOSSEE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;