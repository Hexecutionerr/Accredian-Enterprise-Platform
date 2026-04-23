import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Process", href: "#process" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Want to Learn More Banner */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="relative z-10 mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to transform your enterprise?</h3>
            <p className="text-blue-100 text-lg">Partner with us for Next-Gen Expertise.</p>
          </div>
          <button className="relative z-10 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
            Contact Us
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-black text-white tracking-tight">
              Accredian<span className="text-blue-500">.</span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Empowering enterprises with cutting-edge learning solutions. 
              Cultivate a high-performance team with Accredian.
            </p>
            <div className="text-slate-400 space-y-2 text-sm mt-4">
              <p>Email: <a href="mailto:enterprise@accredian.com" className="text-blue-400 hover:text-blue-300">enterprise@accredian.com</a></p>
              <p>Location: Gurugram, India</p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6">Programs</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Data Science</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Product Management</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-blue-500 transition-colors">AI & ML</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Corporate</h4>
              <ul className="space-y-4">
                <li><Link href="#features" className="text-slate-400 hover:text-blue-500 transition-colors">The Accredian Edge</Link></li>
                <li><Link href="#process" className="text-slate-400 hover:text-blue-500 transition-colors">How It Works</Link></li>
                <li><Link href="#clients" className="text-slate-400 hover:text-blue-500 transition-colors">Our Clients</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-slate-400 hover:text-blue-500 transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0 text-sm text-slate-500">
          <p>© {currentYear} Accredian. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>India</span>
            <span>United States</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
