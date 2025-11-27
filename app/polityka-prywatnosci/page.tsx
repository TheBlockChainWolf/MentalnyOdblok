import Link from "next/link"
import Footer from "@/components/footer"

export const metadata = {
  title: "Polityka Prywatności - Mentalny Start",
  description: "Polityka Prywatności strony Mentalny Start",
}

export default function PrivacyPolicy() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8">
            ← Powrót do strony głównej
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Polityka Prywatności</h1>
          <p className="text-slate-400 text-sm mb-8">Data ostatniej aktualizacji: 27.11.2025</p>

          <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
            <p>
              Szanujemy Twoją prywatność. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób zbieramy,
              wykorzystujemy i chronimy Twoje dane osobowe podczas korzystania ze strony internetowej działającej pod
              adresem mentalnystart.pl
            </p>

            <section>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">§1. Administrator Danych Osobowych</h2>
              <p>
                Administratorem Twoich danych osobowych jest: Adrian Turoń, zamieszkały przy: Kłoczowskiego 31 82-300,
                Elbląg. Kontakt z Administratorem jest możliwy drogą elektroniczną pod adresem e-mail:{" "}
                <a href="mailto:kontakt@mentalnystart.pl" className="text-blue-400 hover:text-blue-300">
                  kontakt@mentalnystart.pl
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">§2. Cele i Podstawy Przetwarzania Danych</h2>
              <p>Przetwarzamy Twoje dane osobowe w następujących celach:</p>
              <ul className="list-disc list-inside space-y-3 mt-3">
                <li>
                  <strong>Realizacja zamówienia (umowy sprzedaży):</strong> W przypadku zakupu produktu cyfrowego
                  (Workbooka), Twoje dane (głównie adres e-mail) są niezbędne do dostarczenia zakupionej treści.
                  Podstawą prawną jest niezbędność do wykonania umowy (art. 6 ust. 1 lit. b RODO).
                </li>
                <li>
                  <strong>Obsługa zapytań i reklamacji:</strong> Jeśli skontaktujesz się z nami mailowo. Podstawą jest
                  nasz prawnie uzasadniony interes polegający na komunikacji z użytkownikami (art. 6 ust. 1 lit. f
                  RODO).
                </li>
                <li>
                  <strong>Cele analityczne i marketingowe (w tym pliki cookies):</strong> Analiza ruchu na stronie oraz
                  prowadzenie działań marketingowych (np. reklamy na Facebooku) przy użyciu narzędzi zewnętrznych.
                  Podstawą jest Twoja zgoda wyrażona poprzez ustawienia przeglądarki lub baner cookies (art. 6 ust. 1
                  lit. a RODO) oraz nasz prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">§3. Odbiorcy Danych</h2>
              <p>
                Twoje dane mogą być przekazywane podmiotom trzecim, które wspierają nas w prowadzeniu Serwisu (tzw.
                procesorzy danych). Są to:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-3">
                <li>
                  <strong>Operator płatności i platforma sprzedażowa:</strong> Naffy (naffy sp. z o.o.) – w celu
                  procesowania transakcji i dostarczenia produktu.
                </li>
                <li>
                  <strong>Dostawca hostingu:</strong> Vercel Inc. – w celu utrzymania strony internetowej.
                </li>
                <li>
                  <strong>Dostawcy narzędzi analitycznych i marketingowych:</strong> Meta Platforms Ireland Ltd.
                  (Facebook Pixel) – w celu analizy skuteczności reklam i remarketingu.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">§4. Pliki Cookies i Narzędzia Śledzące</h2>
              <p>
                Serwis wykorzystuje pliki cookies (ciasteczka), czyli niewielkie informacje tekstowe, przechowywane na
                Twoim urządzeniu końcowym (np. komputerze, smartfonie).
              </p>
              <p className="mt-3">Stosujemy cookies w celach:</p>
              <ul className="list-disc list-inside space-y-3 mt-3">
                <li>
                  <strong>Niezbędnych:</strong> do prawidłowego działania strony.
                </li>
                <li>
                  <strong>Analitycznych i Marketingowych:</strong> korzystamy z Piksela Facebooka (Meta Pixel).
                  Narzędzie to pozwala nam mierzyć skuteczność reklam na Facebooku i Instagramie oraz wyświetlać nasze
                  reklamy osobom, które odwiedziły wcześniej Serwis. Wiąże się to z wykorzystaniem plików cookies firmy
                  Meta Platforms.
                </li>
              </ul>
              <p className="mt-3">
                Masz możliwość ograniczenia lub wyłączenia dostępu plików cookies do swojego urządzenia w ustawieniach
                przeglądarki internetowej. Pamiętaj jednak, że może to wpłynąć na niektóre funkcjonalności Serwisu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">§5. Twoje Prawa</h2>
              <p>Zgodnie z RODO przysługuje Ci prawo do:</p>
              <ul className="list-disc list-inside space-y-3 mt-3">
                <li>Dostępu do swoich danych oraz otrzymania ich kopii.</li>
                <li>Sprostowania (poprawiania) swoich danych.</li>
                <li>Usunięcia danych (jeśli nie ma innych prawnych podstaw do ich przetwarzania).</li>
                <li>Ograniczenia przetwarzania danych.</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania danych.</li>
                <li>Przenoszenia danych.</li>
                <li>Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
              </ul>
              <p className="mt-3">
                W celu realizacji swoich praw skontaktuj się z Administratorem pod adresem e-mail wskazanym w §1.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
