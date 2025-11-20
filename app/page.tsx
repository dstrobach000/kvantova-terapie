"use client";

import { useEffect, useRef, useState } from "react";
import GlowButton from "../components/GlowButton";
import GlowPill from "../components/GlowPill";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pb-20 sm:pb-10">
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-20 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
          <div className="relative isolate flex items-center" style={{ width: '3.5rem', height: '1.75rem' }}>
            {/* Left dot - White */}
            <div className="relative h-7 w-7">
              <span className="absolute inset-0 -m-1.5 rounded-full bg-white blur-lg opacity-50 animate-dot-glow-left pointer-events-none" />
              <span className="relative inline-block h-7 w-7 rounded-full bg-white/90 shadow-lg shadow-white/40 animate-dot-pulse-left" />
            </div>
            {/* Right dot - Blue */}
            <div className="relative h-7 w-7 -ml-3.5">
              <span className="absolute inset-0 -m-1.5 rounded-full bg-sky-400 blur-lg opacity-50 animate-dot-glow-right pointer-events-none" />
              <span className="relative inline-block h-7 w-7 rounded-full bg-sky-500/90 shadow-lg shadow-sky-500/40 animate-dot-pulse-right" />
            </div>
          </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wide uppercase text-slate-200">
                Buněčné kvantové léčení
              </span>
              <span className="text-[11px] text-slate-400">Renata Sasová · Brno</span>
            </div>
          </div>

          <nav className="hidden items-center gap-5 text-[13px] text-slate-300 sm:flex">
            <a href="#metoda" className="hover:text-sky-300">
              Metoda
            </a>
            <a href="#prubeh" className="hover:text-sky-300">
              Průběh
            </a>
            <a href="#omne" className="hover:text-sky-300">
              O mně
            </a>
            <GlowButton
              link="#objednat"
              className="px-4 py-1.5 text-[12px]"
              smallGlow={true}
            >
              Objednat termín
            </GlowButton>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="metoda" className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
            Buněčné kvantové léčení · CRQH · Brno
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
            Buněčné kvantové léčení (CRQH) – cesta k rovnováze těla, mysli a duše
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-300">
            Buněčné kvantové léčení (Cellular Quantum Healing – CRQH) je moderní terapeutická metoda,
            která spojuje vědecké poznatky s holistickým přístupem. Pomáhá obnovit rovnováhu těla,
            mysli a duše, odstranit hluboko uložený stres a umožňuje tělu přirozeně se uzdravit.
            Metoda využívá principy kvantové fyziky, vyšší rezonance a frekvencí lásky, odpuštění a
            vděčnosti. Tím umožňuje tělu i mysli uvolnit stresové smyčky, emoční otisky a epigenetické
            vlivy, které blokují životní energii.
          </p>
          <button className="mt-6 text-sm font-medium text-sky-300 underline-offset-4 hover:underline">
            Více o kvantovém léčení (odkaz na celý text)
          </button>
        </div>
      </section>

      {/* VIDEO 1 */}
      <VideoSection videoSrc="/video/video1.mp4" />

      {/* JAK CRQH FUNGUJE */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Jak CRQH funguje</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Metoda působí na tělo pomocí kombinace reaktivního svalového testu, vědomé komunikace a
            jemných doteků v určitých energetických bodech. Proces probíhá v několika krocích:
          </p>
          <ol className="mt-6 space-y-3 text-sm leading-relaxed text-slate-300 list-decimal list-inside">
            <li>
              <span className="font-semibold">Lokalizace stresu a bloků</span> – identifikace největší
              zátěže v těle pomocí svalového testu.
            </li>
            <li>
              <span className="font-semibold">Vyrovnání nervového systému</span> – návrat mozku z režimu
              přežití do přirozené rovnováhy.
            </li>
            <li>
              <span className="font-semibold">Uvolnění stresových vzpomínek</span> – práce s kvantovými
              principy rezonance, frekvencí lásky a odpuštění.
            </li>
            <li>
              <span className="font-semibold">Restart podvědomí a buněčné paměti</span> – návrat do
              přítomného okamžiku, kde se přirozené uzdravování odehrává.
            </li>
            <li>
              <span className="font-semibold">Obnovení buněčné komunikace</span> – propojení duše s tělem
              a aktivace samoléčivých procesů.
            </li>
          </ol>
        </div>
      </section>

      {/* VIDEO 2 */}
      <VideoSection videoSrc="/video/video2.mp4" />

      {/* PRŮBĚH OŠETŘENÍ */}
      <section id="prubeh" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Průběh ošetření</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Ošetření trvá přibližně 2 hodiny. Je příjemné, klidné a bezbolestné. Klient leží na lehátku
            v pohodlném oblečení. Pomocí svalového testu se určí oblasti největšího stresu, které se
            následně harmonizují. Na konci se ověřuje, že tělo již na žádný stres nereaguje.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Po ošetření se může krátce objevit únava, citové uvolnění nebo mírné fyzické projevy – to je
            přirozená součást ozdravného procesu. Výsledkem je pocit lehkosti, klidu a čisté mysli.
            Efekt je trvalý – stres se nevrací, protože byl odstraněn z buněčné paměti.
          </p>
        </div>
      </section>

      {/* VIDEO 3 */}
      <VideoSection videoSrc="/video/video3.mp4" />

      {/* S ČÍM MŮŽE POMOCI */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">S čím může buněčné kvantové léčení pomoci</h2>
          <div className="mt-6 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap">
            <GlowPill className="text-xs px-3 py-1.5">neplodnost a následky ztrát či neúspěšných pokusů o početí</GlowPill>
            <GlowPill className="text-xs px-3 py-1.5">odstranění převzatých vzorců chování z rodové linie</GlowPill>
            <GlowPill className="text-xs px-3 py-1.5">léčení manipulace, zneužívání a nízkého sebevědomí</GlowPill>
            <GlowPill className="text-xs px-3 py-1.5">strach ze selhání, bloky v seberealizaci a hojnosti</GlowPill>
            <GlowPill className="text-xs px-3 py-1.5">psychosomatické obtíže a opakované bolesti těla</GlowPill>
            <GlowPill className="text-xs px-3 py-1.5">úzkosti, deprese, panické ataky, pocity viny</GlowPill>
            <GlowPill className="text-xs px-3 py-1.5">strach ze změny, nemožnost posunout se dál</GlowPill>
            <GlowPill className="text-xs px-3 py-1.5">uvolnění psychických a fyzických bloků</GlowPill>
            <GlowPill className="text-xs px-3 py-1.5">téma sebelásky, sebehodnoty a sebeúcty</GlowPill>
            <GlowPill className="text-xs px-3 py-1.5">závislosti a sebepoškozování</GlowPill>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Nemusíte o svých problémech mluvit, pokud se necítíte komfortně – stačí, že na ně během
            terapie myslíte.
          </p>
        </div>
      </section>

      {/* VIDEO 4 */}
      <VideoSection videoSrc="/video/video4.mp4" />

      {/* O MNĚ */}
      <section id="omne" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">O mně</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Jmenuji se Renata Sasová a lidem pomáhám s jejich životními i zdravotními obtížemi od roku
            2010. Vždy mě zajímalo, proč se nám některé situace opakují a proč se někdy cítíme
            zaseknutí. Odpovědí je naše podvědomí – to, čemu věříme a co jsme převzali z okolí, si do
            života stále přitahujeme.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Terapie mi ukázaly, že skutečné uzdravení přichází, když přijmeme minulost, přestaneme klást
            odpor a dovolíme energii volně proudit. V roce 2023 jsem absolvovala výcvik buněčného
            kvantového léčení u amerického lékaře, který mi dal pevné základy pro práci s tělem na
            úrovni DNA a buněčné paměti.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Dnes kombinuji systém CRQH s vlastní intuicí a mnohaletou praxí. Během ošetření často
            přicházejí konkrétní informace pro daného klienta, které přirozeně podporují léčivý proces.
            Mám v tuto práci naprostou důvěru – léčebný proces vedu tak dlouho, dokud svalový test
            neukazuje úplnou rovnováhu.
          </p>
          <button className="mt-6 text-sm font-medium text-sky-300 underline-offset-4 hover:underline">
            Více o mně (odkaz na celý text)
          </button>
        </div>
      </section>

      {/* PRAKTICKÉ INFORMACE / OBJEDNÁVKY */}
      <section
        id="objednat"
        className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/80 via-slate-900 to-slate-950 border-y border-slate-800"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold">Praktické informace</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3 text-sm leading-relaxed text-slate-300">
            <div>
              <h3 className="text-sm font-semibold text-slate-100">Provozovna</h3>
              <p className="mt-2">
                Božetěchova 102b
                <br />
                612 00 Brno – Královo Pole
                <br />
                (zvonek 68, tlačítko „zvoneček" vpravo dole, 6. patro)
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">Objednávky</h3>
              <p className="mt-2">
                <a
                  href="mailto:renata@kvantovaterapiebrno.cz"
                  className="font-medium text-sky-300 hover:underline underline-offset-4"
                >
                  renata@kvantovaterapiebrno.cz
                </a>
                <br />
                Tel.:{" "}
                <a
                  href="tel:+420739445520"
                  className="font-medium text-sky-300 hover:underline underline-offset-4"
                >
                  +420 739 445 520
                </a>
                <br />
                IČO: 74597906
              </p>
              <p className="mt-3 text-xs text-slate-400">
                Objednat se můžete telefonicky nebo SMS zprávou. Pokud hovor nemohu přijmout, ozvu se vám
                zpět co nejdříve.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">Ceník</h3>
              <p className="mt-2">
                3 000 Kč za jedno sezení (cca 2 hodiny)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECENZE */}
      <section className="pt-8 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Recenze</h2>

          <Testimonial>
            Na kvantové léčení jsem šla na doporučení kamarádky. S jinými alternativními metodami jsem
            neměla zkušenost, dříve jsem navštěvovala klinickou psycholožku. Už po dvou ošetřeních se
            cítím jistější, stabilnější a více ve svém těle. Také jsem mnohem klidnější – situace, které
            mě dříve dokázaly úplně rozhodit, zvládám teď s větší lehkostí. Renata je velmi laskavá,
            lidská a empatická. V její přítomnosti se cítím bezpečně a je vidět, že ví, co dělá.
          </Testimonial>

          <Testimonial>
            Díky metodě kvantového léčení se mi podařilo zbavit se strachů a úzkostí, které mě provázely
            od dětství, i s nimi spojených zdravotních problémů. Po letech marného hledání příčiny svých
            potíží jsem za tuto metodu nesmírně vděčná.
          </Testimonial>

          <Testimonial>
            Kvantové léčení mi bez přehánění zachránilo život. Vždycky jsem byla citlivá a vnímavá,
            trpěla jsem úzkostmi a vážnými psychickými problémy. Vyzkoušela jsem různé terapie – od
            klasické psychologie přes metodu RUŠ až po EFT – ale nic mi nepomohlo tolik jako kvantové
            léčení. Oceňuji, že tato metoda jde do hloubky a pracuje s pravou příčinou traumatu, ne jen s
            povrchem. Dříve jsem byla extrémně emotivní a často ve stresu, dnes jsem klidná, vyrovnaná a
            lidé kolem mě se často ptají, jak jsem to dokázala. Sama na sobě pozoruji obrovskou změnu –
            věci, které mě dřív rozhazovaly, už se mě téměř nedotýkají. Celková kvalita mého života se
            výrazně zlepšila. Vřele doporučuji.
          </Testimonial>
        </div>
      </section>

      {/* STICKY CTA BAR */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-800/80 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex flex-col sm:flex-row max-w-5xl items-center sm:items-center justify-center sm:justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col text-[11px] text-slate-400 text-center sm:text-left">
            <span>Chcete termín nebo se na něco zeptat?</span>
            <span>Ozvěte se a domluvíme společné setkání v Brně.</span>
          </div>
          <div className="flex flex-1 sm:flex-none items-center justify-center sm:justify-end gap-3">
            {/* Mobile: Objednat termín button */}
            <GlowButton
              link="#objednat"
              className="sm:hidden text-xs px-5 py-2"
              smallGlow={true}
            >
              Objednat termín
            </GlowButton>
            {/* Desktop: Zavolat button */}
            <GlowButton
              link="tel:+420739445520"
              className="!hidden sm:!inline-flex text-xs px-5 py-2"
              smallGlow={true}
            >
              Zavolat · 739 445 520
            </GlowButton>
          </div>
        </div>
      </div>
    </main>
  );
}

/** VIDEO COMPONENT */
function VideoSection({ videoSrc }: { videoSrc: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set video properties to prevent any UI immediately
      video.controls = false;
      video.disablePictureInPicture = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      
      // Set loading priority
      video.setAttribute('preload', 'auto');
      
      // Function to start playing
      const startPlaying = () => {
        if (video.paused) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                // Silently handle autoplay restrictions
                console.log("Autoplay prevented:", error);
              });
          }
        }
      };
      
      // Track when video is actually playing
      const handlePlaying = () => {
        setIsPlaying(true);
      };
      
      // Track when video starts (fired when playback actually begins)
      const handlePlay = () => {
        // Small delay to ensure video is actually showing frames
        setTimeout(() => setIsPlaying(true), 100);
      };
      
      video.addEventListener('playing', handlePlaying);
      video.addEventListener('play', handlePlay);
      
      // Try to play at multiple stages of loading
      const tryPlay = () => {
        startPlaying();
      };
      
      // Force load immediately
      video.load();
      
      // Try immediately
      setTimeout(tryPlay, 0);
      
      // Try when metadata is loaded (fastest)
      video.addEventListener('loadedmetadata', tryPlay, { once: true });
      
      // Try when data is loaded
      video.addEventListener('loadeddata', tryPlay, { once: true });
      
      // Try when video can play
      video.addEventListener('canplay', tryPlay, { once: true });
      
      // Try when video can play through
      video.addEventListener('canplaythrough', tryPlay, { once: true });
      
      // Also check periodically if video is ready
      const checkInterval = setInterval(() => {
        if (video.readyState >= 2 && video.paused) {
          tryPlay();
        }
        if (video.readyState >= 3 && !video.paused) {
          setIsPlaying(true);
          clearInterval(checkInterval);
        }
      }, 25);
      
      // Ensure video stays playing if it gets paused
      const handlePause = () => {
        if (video.paused) {
          video.play().catch(() => {});
        }
      };
      
      video.addEventListener('pause', handlePause);
      
      // Global click handler to start videos (for autoplay restrictions)
      const handleGlobalClick = () => {
        if (video.paused) {
          startPlaying();
        }
      };
      
      // Add click listener to document (only once, will be cleaned up)
      document.addEventListener('click', handleGlobalClick, { once: true });
      
      return () => {
        clearInterval(checkInterval);
        document.removeEventListener('click', handleGlobalClick);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('playing', handlePlaying);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('loadedmetadata', tryPlay);
        video.removeEventListener('loadeddata', tryPlay);
        video.removeEventListener('canplay', tryPlay);
        video.removeEventListener('canplaythrough', tryPlay);
      };
    }
  }, []);

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden rounded-3xl border border-slate-600 bg-slate-900" 
          style={{ aspectRatio: '16/10', minHeight: '300px' }}
        >
          {/* Cover overlay that completely hides video until playing */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 bg-slate-900"
              style={{ 
                width: '100%', 
                height: '100%',
                zIndex: 10000,
                pointerEvents: 'none'
              }}
            />
          )}
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            className="block w-full h-full object-cover video-no-controls"
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              transform: 'scale(1.2)',
              objectPosition: 'center',
              pointerEvents: 'none',
              display: isPlaying ? 'block' : 'none',
              opacity: isPlaying ? 1 : 0,
              visibility: isPlaying ? 'visible' : 'hidden',
              transition: 'opacity 0.3s ease-in',
              // Force hide any browser UI
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          />
        </div>
      </div>
    </section>
  );
}

/** VIDEO PLACEHOLDER COMPONENT */
function VideoPlaceholder({ label }: { label: string }) {
  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-dashed border-slate-600 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 px-6 py-16 sm:py-20">
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.35em] text-slate-200 text-center">
            {label}
          </span>
        </div>
      </div>
    </section>
  );
}

/** TESTIMONIAL COMPONENT */
function Testimonial({ children }: { children: React.ReactNode }) {
  return (
    <figure className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
      <blockquote className="text-sm leading-relaxed text-slate-200">„{children}“</blockquote>
    </figure>
  );
}
