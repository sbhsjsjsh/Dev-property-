import Image from 'next/image';
import { MapPin, BedDouble, Bath, SquareSquare, Search, PhoneCall, Mail, Building, TrendingUp, ShieldCheck, ChevronRight } from 'lucide-react';

const featuredProperties = [
  {
    id: 1,
    title: "Sea-Facing Luxury Apartment",
    location: "Bandra West, Mumbai",
    price: "₹ 5.5 Cr",
    beds: 3,
    baths: 3,
    sqft: 1850,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    tag: "Premium"
  },
  {
    id: 2,
    title: "Modern Minimalist Studio",
    location: "Andheri East, Mumbai",
    price: "₹ 1.2 Cr",
    beds: 1,
    baths: 1,
    sqft: 650,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
    tag: "Available"
  },
  {
    id: 3,
    title: "Skyline View Penthouse",
    location: "Worli, Mumbai",
    price: "₹ 15.0 Cr",
    beds: 4,
    baths: 5,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    tag: "Exclusive"
  },
  {
    id: 4,
    title: "Family Apartment Complex",
    location: "Powai, Mumbai",
    price: "₹ 3.4 Cr",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
    tag: "New Launch"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-2xl text-blue-900 flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 overflow-hidden shrink-0">
              <Image src="https://i.ibb.co/DgQVm6FW/437666332-1781579564025583.jpg" alt="Dev Properties Logo" width={40} height={40} className="object-cover w-full h-full" referrerPolicy="no-referrer" />
            </div>
            Dev Properties
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-600">
            <a href="#" className="text-blue-900 transition-colors">Home</a>
            <a href="#properties" className="hover:text-blue-900 transition-colors">Properties</a>
            <a href="#about" className="hover:text-blue-900 transition-colors">About Us</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-950 flex-none pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Penthouse View"
            fill
            className="object-cover opacity-50 scale-105 animate-in fade-in zoom-in duration-1000"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/95" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center mt-12 mb-20">
          <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6 mt-4 shadow-xl">
            Premium Real Estate in Mumbai
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight mb-8 drop-shadow-2xl">
            Elevate Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Living Standard</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 drop-shadow-md font-light leading-relaxed">
            Discover handpicked, exclusive properties in Mumbai&apos;s most prestigious neighborhoods. Where luxury meets legacy.
          </p>

          {/* Search Box */}
          <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl p-3 border border-white/20 rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row gap-3 text-left">
            <div className="flex-1 flex items-center px-5 py-4 md:py-3 bg-white/70 md:bg-white/80 rounded-2xl md:rounded-l-full md:rounded-r-none transition-colors hover:bg-white duration-300 group">
              <MapPin className="text-blue-600 w-5 h-5 mr-3 shrink-0 group-focus-within:text-blue-800 transition-colors" />
              <input 
                type="text" 
                placeholder="Search by neighborhood (e.g. Bandra West)" 
                className="w-full focus:outline-none text-slate-900 placeholder-slate-500 text-sm md:text-base bg-transparent font-medium" 
              />
            </div>
            <div className="flex-1 flex items-center px-5 py-4 md:py-3 bg-white/70 md:bg-white/80 rounded-2xl md:rounded-none transition-colors hover:bg-white duration-300 group border-t md:border-t-0 md:border-l border-white/30 md:border-slate-200">
              <Building className="text-blue-600 w-5 h-5 mr-3 shrink-0" />
              <select className="w-full focus:outline-none text-slate-900 bg-transparent flex-1 cursor-pointer text-sm md:text-base appearance-none font-medium">
                <option value="">Any Property Type</option>
                <option value="apartment">Luxury Apartment</option>
                <option value="penthouse">Penthouse</option>
                <option value="villa">Sea-Facing Villa</option>
                <option value="commercial">Commercial Space</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white rounded-2xl md:rounded-r-full md:rounded-l-none px-8 py-4 md:py-0 font-medium hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 shrink-0 md:min-w-[160px]">
              <Search className="w-5 h-5" />
              Find
            </button>
          </div>
        </div>
      </header>

      {/* Featured Properties */}
      <section id="properties" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Featured Properties</h2>
            <p className="text-slate-600 text-lg">Curated exclusively for our premium clientele. Discover the finest homes across Mumbai&apos;s best neighborhoods.</p>
          </div>
          <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-1 group">
            View All Listings <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={property.image} 
                  alt={property.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm uppercase tracking-wider">
                  {property.tag}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-blue-900 font-display mb-2">{property.price}</h3>
                <h4 className="text-lg font-semibold text-slate-900 mb-1 leading-tight line-clamp-1">{property.title}</h4>
                <p className="text-slate-500 text-sm flex items-center gap-1.5 mb-6">
                  <MapPin className="w-4 h-4 shrink-0" /> {property.location}
                </p>
                <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-100 text-slate-600 text-sm font-medium">
                  <div className="flex items-center gap-1.5" title="Bedrooms">
                    <BedDouble className="w-4 h-4 text-slate-400" />
                    <span>{property.beds} Bed</span>
                  </div>
                  <div className="flex items-center gap-1.5" title="Bathrooms">
                    <Bath className="w-4 h-4 text-slate-400" />
                    <span>{property.baths} Bath</span>
                  </div>
                  <div className="flex items-center gap-1.5" title="Square Feet">
                    <SquareSquare className="w-4 h-4 text-slate-400" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 rounded-l-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-900/10 rounded-r-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose Dev Properties?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">With over a decade of experience in Mumbai&apos;s real estate market, we bring unmatched expertise and transparency to your property search.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-slate-300">
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">100% Verified Listings</h3>
              <p className="leading-relaxed">Every property we list goes through a rigorous legal and structural verification process to ensure zero disputes.</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Market Expertise</h3>
              <p className="leading-relaxed">Deep understanding of micro-markets across Mumbai, from South Bombay heritage homes to the Western Suburbs.</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <PhoneCall className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">End-to-End Support</h3>
              <p className="leading-relaxed">From initial viewing and negotiation, down to the final paperwork and registration, we handle everything.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-400 pt-24 pb-10 border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20 lg:mb-24 relative">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="font-display font-bold text-3xl text-white flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30 overflow-hidden shrink-0">
                  <Image src="https://i.ibb.co/DgQVm6FW/437666332-1781579564025583.jpg" alt="Dev Properties Logo" width={40} height={40} className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                </div>
                Dev Properties
              </div>
              <p className="mb-12 leading-relaxed text-slate-400 text-lg max-w-md">
                Your premier real estate consultancy in Mumbai. Specializing in luxury residential and commercial properties across the city&apos;s most coveted neighborhoods.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="text-white font-semibold mb-6 flex items-center gap-2 tracking-wide uppercase text-xs">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" /> Quick Links
                </h4>
                <ul className="space-y-4 flex flex-col font-medium">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Properties for Sale</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Properties for Rent</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">New Projects</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Market Reports</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-6 flex items-center gap-2 tracking-wide uppercase text-xs">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" /> Locations
                </h4>
                <ul className="space-y-4 flex flex-col font-medium">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Bandra & Khar</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Juhu & Vile Parle</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Andheri East & West</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">South Mumbai</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 lg:-mt-12 group">
            <div className="bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-500 group-hover:border-slate-700">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-blue-500/20" />
               <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-indigo-500/20" />
               
               <h3 className="text-3xl font-display font-bold text-white mb-3 relative z-10">Register Your Interest</h3>
               <p className="text-slate-400 mb-8 relative z-10 text-sm sm:text-base">Leave your details and our property experts will reach out to you with exclusive private listings.</p>
               
               <form className="space-y-5 relative z-10">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                   <div className="space-y-1.5 focus-within:text-blue-400 transition-colors">
                     <label className="text-xs font-semibold uppercase tracking-wider block">First Name</label>
                     <input type="text" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600 font-medium" placeholder="John" />
                   </div>
                   <div className="space-y-1.5 focus-within:text-blue-400 transition-colors">
                     <label className="text-xs font-semibold uppercase tracking-wider block">Last Name</label>
                     <input type="text" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600 font-medium" placeholder="Doe" />
                   </div>
                 </div>
                 
                 <div className="space-y-1.5 focus-within:text-blue-400 transition-colors">
                   <label className="text-xs font-semibold uppercase tracking-wider block">Email Address</label>
                   <input type="email" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600 font-medium" placeholder="john@example.com" />
                 </div>
                 
                 <div className="space-y-1.5 focus-within:text-blue-400 transition-colors">
                   <label className="text-xs font-semibold uppercase tracking-wider block">What are you looking for?</label>
                   <select className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer font-medium">
                     <option>I&apos;m looking to buy</option>
                     <option>I&apos;m looking to rent</option>
                     <option>I&apos;m looking to sell</option>
                     <option>Just exploring</option>
                   </select>
                 </div>
                 
                 <button type="button" className="w-full bg-white text-slate-950 font-bold text-lg rounded-xl px-4 py-4 hover:bg-slate-200 transition-all mt-4 flex items-center justify-center gap-2 group/btn shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                   Request Callback <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                 </button>
               </form>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 py-8 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dev Properties Mumbai. All rights reserved.</p>
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
