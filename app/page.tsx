import {
  Globe2,
  Home,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Plane,
  Ship,
  Truck,
  Warehouse,
} from 'lucide-react';

const galleryItems = [
  { title: 'Packing', icon: PackageCheck, className: 'packing' },
  { title: 'Road Freight', icon: Truck, className: 'road' },
  { title: 'Air Cargo', icon: Plane, className: 'air' },
  { title: 'Warehousing', icon: Warehouse, className: 'warehouse' },
  { title: 'Relocation', icon: Home, className: 'relocation' },
  { title: 'Sea Freight', icon: Ship, className: 'sea' },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="menu-button" type="button" aria-label="Open navigation">
          <Menu size={34} strokeWidth={3} />
        </button>

        <div className="brand-lockup" aria-label="ATG Shipping LLC">
          <div className="brand-mark">
            <Globe2 className="brand-globe" size={28} />
            <Truck size={72} strokeWidth={2.4} />
          </div>
          <div>
            <p className="brand-name">ATG Shipping LLC</p>
            <p className="brand-tagline">We deliver promises</p>
          </div>
        </div>
      </header>

      <section className="hero-panel">
        <div className="overlay" />
        <div className="content">
          <section className="services" aria-labelledby="services-title">
            <h1 id="services-title">LTL</h1>
            <p>Customs &amp; Handling Clearance</p>
          </section>

          <section className="section" aria-labelledby="contacts-title">
            <h2 id="contacts-title">Contacts</h2>
            <div className="accent-line" />

            <div className="contact-list">
              <div className="contact-row">
                <MapPin aria-hidden="true" />
                <p>
                  OFFICE NO. 05-106, Owned By Muftah Group Investment Workers LLC-Al
                  Khabaisi DUBAI - UAE
                </p>
              </div>
              <div className="contact-row">
                <Mail aria-hidden="true" />
                <a href="mailto:Operations@Atgshipping.Ae">Operations@Atgshipping.Ae</a>
              </div>
              <div className="contact-row">
                <Phone aria-hidden="true" />
                <a href="tel:+97148925797">+971 4 892 5797</a>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="gallery-title">
            <h2 id="gallery-title">Gallery</h2>
            <div className="accent-line" />

            <div className="gallery-grid">
              {galleryItems.map(({ title, icon: Icon, className }) => (
                <article className={`gallery-card ${className}`} key={title}>
                  <Icon size={48} strokeWidth={1.8} />
                  <span>{title}</span>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
