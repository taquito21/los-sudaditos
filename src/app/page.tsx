import Image from "next/image";

const WA_GENERAL =
  "https://wa.me/526563283783?text=%C2%A1Hola%20Los%20Sudaditos!%20Quiero%20hacer%20un%20pedido%20de%20tacos%20al%20vapor%20%F0%9F%8C%AE";

const GUISOS = [
  {
    emoji: "🫘",
    nombre: "Frijol",
    cta: "Pedir frijol",
    wa: "https://wa.me/526563283783?text=%C2%A1Hola%20Los%20Sudaditos!%20Quiero%20una%20orden%20de%204%20tacos%20de%20FRIJOL%20(%2445)%20%F0%9F%AB%98",
  },
  {
    emoji: "🥓",
    nombre: "Chicharrón",
    cta: "Pedir chicharrón",
    wa: "https://wa.me/526563283783?text=%C2%A1Hola%20Los%20Sudaditos!%20Quiero%20una%20orden%20de%204%20tacos%20de%20CHICHARR%C3%93N%20(%2445)%20%F0%9F%A5%93",
  },
  {
    emoji: "🥩",
    nombre: "Picadillo",
    cta: "Pedir picadillo",
    wa: "https://wa.me/526563283783?text=%C2%A1Hola%20Los%20Sudaditos!%20Quiero%20una%20orden%20de%204%20tacos%20de%20PICADILLO%20(%2445)%20%F0%9F%A5%A9",
  },
];

const PASOS = [
  {
    titulo: "Escríbenos",
    desc: "Mándanos WhatsApp con tu orden y tus guisos.",
  },
  {
    titulo: "Pásate a la esquina",
    desc: "Te esperamos afuerita del Superette, Durango y Santiago Troncoso.",
  },
  {
    titulo: "A comer",
    desc: "Recoges tus tacos calientitos y a disfrutar.",
  },
];

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12 2C7.9 2 4.5 5.4 4.5 9.5c0 5.3 7.5 12.5 7.5 12.5s7.5-7.2 7.5-12.5C19.5 5.4 16.1 2 12 2zm0 10.2a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 448 512" aria-hidden="true" className={className}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

function Titulo({
  children,
  claro = false,
}: {
  children: React.ReactNode;
  claro?: boolean;
}) {
  return (
    <h2
      className={`text-center font-bebas text-[clamp(2rem,7vw,3.2rem)] leading-none tracking-wide ${
        claro ? "text-white" : "text-rojo"
      }`}
    >
      {children}
      <span
        className={`mx-auto mt-3 block h-[5px] w-[70px] rounded ${
          claro ? "bg-amarillo" : "bg-verde-lima"
        }`}
      />
    </h2>
  );
}

export default function Home() {
  return (
    <main>
      {/* Franja tricolor */}
      <div className="flex h-2" aria-hidden="true">
        <span className="flex-1 bg-verde" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-rojo" />
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden px-5 pb-14 pt-8 text-center [background:radial-gradient(circle_at_20%_8%,rgba(255,199,44,.38),transparent_45%),radial-gradient(circle_at_85%_92%,rgba(30,138,60,.28),transparent_42%),linear-gradient(160deg,#E11C22_0%,#A01018_100%)]">
        <div
          className="absolute inset-0 animate-drift opacity-50 [background-image:radial-gradient(rgba(255,255,255,.13)_2px,transparent_2px)] [background-size:26px_26px]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="mb-6 inline-block -rotate-2 rounded-full bg-amarillo px-4 py-2 font-archivo text-xs tracking-[.11em] text-rojo-hondo shadow-[0_4px_0_rgba(0,0,0,.2)]">
            🌮 LA ESQUINA DEL SUPERETTE · CD. JUÁREZ
          </span>

          <Image
            src="/logo-sudaditos.png"
            alt="Tacos al Vapor · Los Sudaditos"
            width={780}
            height={593}
            priority
            className="mx-auto mb-3 h-auto w-full max-w-[400px] animate-flota drop-shadow-[0_10px_22px_rgba(0,0,0,.4)]"
          />

          {/* Vapor animado */}
          <div className="my-5 flex h-9 items-end justify-center gap-3.5" aria-hidden="true">
            {[0, 0.4, 0.8, 1.2, 1.6].map((delay) => (
              <i
                key={delay}
                className="block h-2 w-2 animate-sube rounded-full bg-white/85"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </div>

          <p className="mt-1.5 text-[clamp(1rem,3.6vw,1.28rem)] font-semibold text-white [text-shadow:0_2px_4px_rgba(0,0,0,.35)]">
            Calientitos, sudaditos y bien servidos.
            <br />
            Hechos al momento en tu esquina de siempre.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3.5">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-8 py-4 font-archivo text-white shadow-[0_6px_0_#128C3E,0_12px_24px_rgba(0,0,0,.3)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_0_#128C3E,0_16px_28px_rgba(0,0,0,.35)] active:translate-y-1"
            >
              <WhatsAppIcon className="h-5 w-5 fill-white" />
              Pedir por WhatsApp
            </a>
            <a
              href="#ubicacion"
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-archivo text-rojo-hondo shadow-[0_6px_0_rgba(0,0,0,.25)] transition hover:-translate-y-0.5 active:translate-y-1"
            >
              📍 ¿Dónde estamos?
            </a>
          </div>
        </div>
      </header>

      {/* Banda de precio */}
      <div className="bg-amarillo px-5 py-6 text-center">
        <strong className="block font-bebas text-[clamp(1.8rem,7vw,2.8rem)] tracking-wide text-rojo-hondo">
          ORDEN DE 4 TACOS · $45
        </strong>
        <span className="font-semibold text-tinta">
          El mismo precio en cualquier guiso. Sin sorpresas.
        </span>
      </div>

      {/* Guisos */}
      <section id="menu" className="px-5 py-14">
        <div className="mx-auto max-w-[820px]">
          <Titulo>Nuestros Guisos</Titulo>
          <p className="mx-auto mb-10 mt-2 max-w-[560px] text-center text-[1.08rem] leading-relaxed text-[#5a4a38]">
            Tres clásicos que nunca fallan. Todos al vapor, en tortilla
            suavecita y con su salsa al gusto.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {GUISOS.map((g) => (
              <div
                key={g.nombre}
                className="flex flex-col rounded-[20px] border-[3px] border-tinta bg-papel px-3.5 pb-5 pt-6 text-center shadow-[6px_6px_0_rgba(0,0,0,.12)] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_#8BC53F]"
              >
                <span className="mb-2.5 block text-[2.6rem]" aria-hidden="true">
                  {g.emoji}
                </span>
                <h3 className="flex-1 font-bebas text-[1.7rem] tracking-wide text-verde-hoja">
                  {g.nombre}
                </h3>
                <a
                  href={g.wa}
                  target="_blank"
                  rel="noopener"
                  className="mx-auto mt-3.5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-3.5 py-2 text-sm font-bold text-white shadow-[0_4px_0_#128C3E] transition hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-white" />
                  {g.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Así de fácil */}
      <section className="bg-verde-hoja px-5 py-14 text-white">
        <div className="mx-auto max-w-[820px]">
          <Titulo claro>Así de fácil</Titulo>
          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PASOS.map((paso, i) => (
              <div key={paso.titulo} className="text-center">
                <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-amarillo font-archivo text-[1.4rem] leading-[56px] text-rojo-hondo shadow-[0_5px_0_rgba(0,0,0,.25)]">
                  {i + 1}
                </div>
                <h4 className="mb-1 text-lg font-bold">{paso.titulo}</h4>
                <p className="text-[.92rem] leading-snug opacity-90">
                  {paso.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section id="ubicacion" className="px-5 py-14">
        <div className="mx-auto max-w-[820px]">
          <Titulo>Dónde encontrarnos</Titulo>
          <div className="mx-auto mt-10 max-w-[560px] rounded-[22px] border-[3px] border-dashed border-rojo bg-papel px-6 py-8 text-center shadow-[0_12px_30px_rgba(0,0,0,.1)]">
            <div className="text-[2.6rem]" aria-hidden="true">
              📍
            </div>
            <h3 className="my-2 font-bebas text-[1.9rem] text-tinta">
              Esquina del Superette
            </h3>
            <p className="text-[1.1rem] font-semibold text-rojo-hondo">
              Calle Durango y Santiago Troncoso
            </p>
            <p className="mt-1.5 text-[#6b5b48]">
              Ciudad Juárez, Chihuahua · Justo en la esquina, no tiene pierde.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=31.63361,-106.37885"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-[#1A73E8] px-5 py-3 font-bold text-white shadow-[0_5px_0_#0F4FA8] transition hover:-translate-y-0.5 hover:shadow-[0_7px_0_#0F4FA8] active:translate-y-1"
              >
                <PinIcon />
                Google Maps
              </a>
              <a
                href="https://maps.apple.com/?ll=31.63361,-106.37885&q=Tacos%20al%20Vapor%20Los%20Sudaditos"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-3 font-bold text-white shadow-[0_5px_0_#000] transition hover:-translate-y-0.5 hover:shadow-[0_7px_0_#000] active:translate-y-1"
              >
                <PinIcon />
                Apple Maps
              </a>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-[.95rem] font-semibold text-white">
              <WhatsAppIcon className="h-4 w-4 fill-white" />
              🕒 Pregúntanos el horario por WhatsApp
            </span>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[linear-gradient(160deg,#1E8A3C_0%,#0F6B2E_100%)] px-5 py-14 text-center text-white">
        <div className="mx-auto max-w-[820px]">
          <Titulo claro>¿Ya te dio hambre?</Titulo>
          <p className="mb-7 mt-4 text-[1.1rem] opacity-95">
            Aparta tu orden y pásate. Los sudaditos te están esperando.
          </p>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-8 py-4 font-archivo text-white shadow-[0_6px_0_#128C3E,0_12px_24px_rgba(0,0,0,.3)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_0_#128C3E,0_16px_28px_rgba(0,0,0,.35)] active:translate-y-1"
          >
            <WhatsAppIcon className="h-5 w-5 fill-white" />
            Pedir ahora por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tinta px-5 py-8 text-center text-sm text-[#e9dcc8]">
        <p className="font-bebas text-xl tracking-wider text-amarillo">
          TACOS AL VAPOR · LOS SUDADITOS
        </p>
        <p>Cd. Juárez, Chih. · Orden de 4 tacos $45 · WhatsApp 656 328 3783</p>
        <p className="mt-2.5 opacity-70">
          Sitio hecho por{" "}
          <a href="#" className="font-semibold text-verde-lima">
            MachinnoX
          </a>
        </p>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href={WA_GENERAL}
        target="_blank"
        rel="noopener"
        aria-label="Pedir por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-[62px] w-[62px] animate-pulso items-center justify-center rounded-full bg-whatsapp shadow-[0_6px_20px_rgba(0,0,0,.35)]"
      >
        <WhatsAppIcon className="h-[34px] w-[34px] fill-white" />
      </a>
    </main>
  );
}
