"use client";

import Image from "next/image";
import GlowButton from "../components/GlowButton";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-700 pb-20 sm:pb-10" style={{ backgroundColor: '#fefcf1' }}>
      <header className="sticky top-0 z-20 border-b border-slate-200/50 bg-[#fefcf1]/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
          <div className="relative isolate flex items-center" style={{ width: '3.5rem', height: '1.75rem' }}>
            <div className="relative h-7 w-7">
              <span className="absolute inset-0 -m-1.5 rounded-full blur-lg opacity-50 animate-dot-glow-left pointer-events-none" style={{ backgroundColor: '#c4b5c7' }} />
              <span className="relative inline-block h-7 w-7 rounded-full shadow-lg animate-dot-pulse-left" style={{ backgroundColor: '#c4b5c7' }} />
            </div>
            <div className="relative h-7 w-7 -ml-3.5">
              <span className="absolute inset-0 -m-1.5 rounded-full blur-lg opacity-50 animate-dot-glow-right pointer-events-none" style={{ backgroundColor: '#88798a' }} />
              <span className="relative inline-block h-7 w-7 rounded-full shadow-lg animate-dot-pulse-right" style={{ backgroundColor: '#88798a' }} />
            </div>
          </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wide uppercase text-slate-700">
                Buněčné kvantové léčení
              </span>
              <span className="text-[11px] text-slate-500">Renata Sasová · Brno</span>
            </div>
          </div>

          <nav className="hidden items-center gap-5 text-[13px] text-slate-600 sm:flex">
            <a href="#metoda" className="hover:text-[#88798a]">
              Metoda
            </a>
            <a href="#prubeh" className="hover:text-[#88798a]">
              Průběh
            </a>
            <a href="#omne" className="hover:text-[#88798a]">
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

      <div 
        className="relative"
        style={{
          backgroundImage: 'url(/images/image1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #fefcf1 0%, transparent 15%, transparent 85%, #fefcf1 100%)',
            zIndex: 1
          }}
        />
        <div className="relative" style={{ backgroundColor: 'rgba(254, 252, 241, 0.65)', zIndex: 2 }}>
          <section id="metoda" className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                Buněčné kvantové léčení · CRQH · Brno
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight text-slate-800">
                Buněčné kvantové léčení (CRQH) – cesta k rovnováze těla, mysli a duše
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Buněčné kvantové léčení (Cellular Quantum Healing – CRQH) je moderní terapeutická metoda,
                která spojuje vědecké poznatky s holistickým přístupem. Pomáhá obnovit rovnováhu těla,
                mysli a duše, odstranit hluboko uložený stres a umožňuje tělu přirozeně se uzdravit.
                Metoda využívá principy kvantové fyziky, vyšší rezonance a frekvencí lásky, odpuštění a
                vděčnosti. Tím umožňuje tělu i mysli uvolnit stresové smyčky, emoční otisky a epigenetické
                vlivy, které blokují životní energii.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div 
        className="relative"
        style={{
          backgroundImage: 'url(/images/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #fefcf1 0%, transparent 15%, transparent 85%, #fefcf1 100%)',
            zIndex: 1
          }}
        />
        <div className="relative" style={{ backgroundColor: 'rgba(254, 252, 241, 0.65)', zIndex: 2 }}>
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-semibold text-slate-800">Jak CRQH funguje</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Metoda působí na tělo pomocí kombinace reaktivního svalového testu, vědomé komunikace a
                jemných doteků v určitých energetických bodech. Proces probíhá v několika krocích:
              </p>
              <ol className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600 list-decimal list-inside">
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

          <section id="prubeh" className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-semibold text-slate-800">Průběh ošetření</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Ošetření trvá přibližně 2 hodiny. Je příjemné, klidné a bezbolestné. Klient leží na lehátku
                v pohodlném oblečení. Pomocí svalového testu se určí oblasti největšího stresu, které se
                následně harmonizují. Na konci se ověřuje, že tělo již na žádný stres nereaguje.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Po ošetření se může krátce objevit únava, citové uvolnění nebo mírné fyzické projevy – to je
                přirozená součást ozdravného procesu. Výsledkem je pocit lehkosti, klidu a čisté mysli.
                Efekt je trvalý – stres se nevrací, protože byl odstraněn z buněčné paměti.
              </p>
            </div>
          </section>
        </div>
      </div>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-800">S čím může buněčné kvantové léčení pomoci</h2>
          <ol className="mt-6 space-y-2 list-decimal list-inside text-base leading-relaxed text-slate-600">
            <li>neplodnost a následky ztrát či neúspěšných pokusů o početí</li>
            <li>odstranění převzatých vzorců chování z rodové linie</li>
            <li>léčení manipulace, zneužívání a nízkého sebevědomí</li>
            <li>strach ze selhání, bloky v seberealizaci a hojnosti</li>
            <li>psychosomatické obtíže a opakované bolesti těla</li>
            <li>úzkosti, deprese, panické ataky, pocity viny</li>
            <li>strach ze změny, nemožnost posunout se dál</li>
            <li>uvolnění psychických a fyzických bloků</li>
            <li>téma sebelásky, sebehodnoty a sebeúcty</li>
            <li>závislosti a sebepoškozování</li>
          </ol>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Nemusíte o svých problémech mluvit, pokud se necítíte komfortně – stačí, že na ně během
            terapie myslíte.
          </p>
        </div>
      </section>

      <div 
        className="relative"
        style={{
          backgroundImage: 'url(/images/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #fefcf1 0%, transparent 15%, transparent 85%, #fefcf1 100%)',
            zIndex: 1
          }}
        />
        <div className="relative" style={{ backgroundColor: 'rgba(254, 252, 241, 0.65)', zIndex: 2 }}>
          <section id="omne" className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-semibold text-slate-800">O mně</h2>
              <div className="mt-6 flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-full sm:w-40">
                  <Image
                    src="/images/foto.jpg"
                    alt="Renata Sasová"
                    width={160}
                    height={160}
                    className="rounded-2xl object-cover w-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-base leading-relaxed text-slate-600">
                Jmenuji se Renata Sasová a lidem pomáhám s jejich životními i zdravotními obtížemi od roku
                2010. Vždy mě zajímalo, proč se nám některé situace opakují a proč se někdy cítíme
                zaseknutí. Odpovědí je naše podvědomí – to, čemu věříme a co jsme převzali z okolí, si do
                života stále přitahujeme.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Terapie mi ukázaly, že skutečné uzdravení přichází, když přijmeme minulost, přestaneme klást
                odpor a dovolíme energii volně proudit. V roce 2023 jsem absolvovala výcvik buněčného
                kvantového léčení u amerického lékaře, který mi dal pevné základy pro práci s tělem na
                úrovni DNA a buněčné paměti.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Dnes kombinuji systém CRQH s vlastní intuicí a mnohaletou praxí. Během ošetření často
                přicházejí konkrétní informace pro daného klienta, které přirozeně podporují léčivý proces.
                Mám v tuto práci naprostou důvěru – léčebný proces vedu tak dlouho, dokud svalový test
                neukazuje úplnou rovnováhu.
              </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section
        id="objednat"
        className="py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200/50"
        style={{ backgroundColor: '#fefcf1' }}
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-800">Praktické informace</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3 text-sm leading-relaxed text-slate-600">
            <div>
              <h3 className="text-sm font-semibold text-slate-800">Provozovna</h3>
              <p className="mt-2">
                Božetěchova 102b
                <br />
                612 00 Brno – Královo Pole
                <br />
                (zvonek 68, tlačítko &ldquo;zvoneček&rdquo; vpravo dole, 6. patro)
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-800">Objednávky</h3>
              <p className="mt-2">
                <a
                  href="mailto:renata@kvantovaterapiebrno.cz"
                  className="font-medium text-[#88798a] hover:underline underline-offset-4"
                  >
                  renata@kvantovaterapiebrno.cz
                </a>
                <br />
                Tel.:{" "}
                <a
                  href="tel:+420739445520"
                  className="font-medium text-[#88798a] hover:underline underline-offset-4"
                >
                  739 445 520
                </a>
                <br />
                IČO: 74597906
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Objednat se můžete telefonicky nebo SMS zprávou. Pokud hovor nemohu přijmout, ozvu se vám
                zpět co nejdříve.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-800">Ceník</h3>
              <p className="mt-2">
                3 000 Kč za jedno sezení (cca 2 hodiny)
                <br />
                Je možné si objednat i dárkový poukaz.
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/poukaz.png"
              alt="Dárkový poukaz"
              width={600}
              height={400}
              className="rounded-lg object-contain max-w-full"
            />
          </div>
        </div>
      </section>

      <section className="pt-8 pb-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(196, 181, 199, 0.1)' }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-800">Recenze</h2>

          <Testimonial author="Hana Štěpánková">
            Na kvantové léčení jsem šla na doporučení kamarádky. S jinými alternativními metodami jsem
            neměla zkušenost, dříve jsem navštěvovala klinickou psycholožku. Už po dvou ošetřeních se
            cítím jistější, stabilnější a více ve svém těle. Také jsem mnohem klidnější – situace, které
            mě dříve dokázaly úplně rozhodit, zvládám teď s větší lehkostí. Renata je velmi laskavá,
            lidská a empatická. V její přítomnosti se cítím bezpečně a je vidět, že ví, co dělá.
          </Testimonial>

          <Testimonial author="Daniela Staňková">
            Díky metodě kvantového léčení se mi podařilo zbavit se strachů a úzkostí, které mě provázely
            od dětství, i s nimi spojených zdravotních problémů. Po letech marného hledání příčiny svých
            potíží jsem za tuto metodu nesmírně vděčná.
          </Testimonial>

          <Testimonial author="Tereza Šotnarová">
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

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200/50 backdrop-blur" style={{ backgroundColor: 'rgba(254, 252, 241, 0.95)' }}>
        <div className="mx-auto flex flex-col sm:flex-row max-w-5xl items-center sm:items-center justify-center sm:justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col text-[11px] text-slate-600 text-center sm:text-left">
            <span>Chcete termín nebo se na něco zeptat?</span>
            <span>Ozvěte se a domluvíme společné setkání v Brně.</span>
          </div>
          <div className="flex flex-1 sm:flex-none items-center justify-center sm:justify-end gap-3">
            <GlowButton
              link="#objednat"
              className="sm:hidden text-xs px-5 py-2"
              smallGlow={true}
            >
              Objednat termín
            </GlowButton>
            <GlowButton
              link="tel:+420739445520"
              className="hidden sm:inline-flex text-xs px-5 py-2"
              smallGlow={true}
            >
              Zavolat · 739 44 55 20
            </GlowButton>
          </div>
        </div>
      </div>
    </main>
  );
}

function ImageSection({ imageSrc }: { imageSrc: string }) {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div 
          className="relative w-full overflow-hidden rounded-3xl border border-slate-200" 
          style={{ aspectRatio: '16/10', minHeight: '300px', backgroundColor: '#fefcf1' }}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonial({ children, author }: { children: React.ReactNode; author?: string }) {
  return (
    <figure className="mt-6 rounded-2xl border border-slate-200 p-5 sm:p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <blockquote className="text-sm leading-relaxed text-slate-700">&bdquo;{children}&ldquo;</blockquote>
      {author && (
        <figcaption className="mt-3 text-xs font-medium text-slate-600">— {author}</figcaption>
      )}
    </figure>
  );
}
