import Link from "next/link"
import Footer from "@/components/footer"

export const metadata = {
  title: "Regulamin - Mentalny Start",
  description: "Regulamin Sprzedaży Produktów Cyfrowych",
}

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8">
            ← Powrót do strony głównej
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Regulamin Sprzedaży Produktów Cyfrowych</h1>
          <p className="text-slate-400 text-sm mb-8">Ważny od dnia: 27.11.2025</p>

          <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
            <p>
              Niniejszy Regulamin określa zasady sprzedaży treści cyfrowych (e-booków/workbooków) za pośrednictwem
              strony internetowej mentalnystart.pl.
            </p>

            <section>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">§1. Postanowienia Ogólne i Dane Sprzedawcy</h2>
              <p>
                Właścicielem serwisu i Sprzedawcą jest: Adrian Turoń, zamieszkały przy: Kłoczowskiego 31 82-300 Elbląg
                (dalej "Sprzedawca"). Sprzedaż prowadzona jest w ramach działalności nierejestrowanej.
              </p>
              <p className="mt-3">
                Kontakt ze Sprzedawcą:{" "}
                <a href="mailto:kontakt@mentalnystart.pl" className="text-blue-400 hover:text-blue-300">
                  kontakt@mentalnystart.pl
                </a>
                .
              </p>
              <p className="mt-3">
                Regulamin skierowany jest do konsumentów oraz przedsiębiorców dokonujących zakupu w Serwisie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">§2. Przedmiot Sprzedaży</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Przedmiotem sprzedaży są treści cyfrowe (Produkty), w szczególności workbook w formacie PDF pt.
                  "Mentalny Start".
                </li>
                <li>Produkty są wolne od wad fizycznych i prawnych.</li>
                <li>
                  Ceny podane na stronie są cenami brutto (zawierają wszystkie należne podatki) i są wyrażone w złotych
                  polskich (PLN).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">§3. Proces Składania Zamówienia i Dostawa</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Zakup Produktu następuje poprzez kliknięcie przycisku "Kup teraz" (lub równoważnego) na stronie
                  mentalnystart.pl, co powoduje przekierowanie do zewnętrznej platformy sprzedażowej i płatniczej Naffy,
                  obsługiwanej przez naffy sp. z o.o.
                </li>
                <li>
                  Klient dokonuje płatności za pomocą metod udostępnionych przez platformę Naffy (np. BLIK, karta
                  płatnicza, szybki przelew).
                </li>
                <li>Umowa sprzedaży zostaje zawarta z chwilą skutecznego dokonania płatności przez Klienta.</li>
                <li>
                  <strong>Dostawa:</strong> Produkt cyfrowy jest dostarczany niezwłocznie po zaksięgowaniu wpłaty, drogą
                  elektroniczną, na adres e-mail podany przez Klienta podczas składania zamówienia. Dostawa polega na
                  przesłaniu linku umożliwiającego pobranie pliku PDF. Dostawa jest darmowa.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">§4. Prawo Odstąpienia od Umowy (Ważne!)</h2>
              <p>
                Konsumentowi co do zasady przysługuje prawo do odstąpienia od umowy zawartej na odległość w terminie 14
                dni bez podania przyczyny.
              </p>
              <p className="mt-3 font-semibold">WYJĄTEK DOTYCZĄCY TREŚCI CYFROWYCH:</p>
              <p className="mt-3">
                Zgodnie z art. 38 pkt 13 Ustawy o prawach konsumenta, prawo odstąpienia od umowy zawartej poza lokalem
                przedsiębiorstwa lub na odległość nie przysługuje konsumentowi w odniesieniu do umów o dostarczanie
                treści cyfrowych, które nie są zapisane na nośniku materialnym (np. plik PDF pobierany z internetu),
                jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą konsumenta przed upływem terminu do
                odstąpienia od umowy i po poinformowaniu go przez przedsiębiorcę o utracie prawa odstąpienia od umowy.
              </p>
              <p className="mt-3">
                Dokonując zakupu i pobierając plik, Klient wyraża zgodę na dostarczenie treści cyfrowej przed upływem
                terminu do odstąpienia od umowy i przyjmuje do wiadomości utratę prawa do odstąpienia od umowy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">§5. Reklamacje</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>Sprzedawca ma obowiązek dostarczyć Produkt zgodny z umową.</li>
                <li>
                  W przypadku stwierdzenia wad Produktu (np. uszkodzony plik, brak możliwości pobrania), Klient może
                  złożyć reklamację drogą elektroniczną na adres e-mail Sprzedawcy.
                </li>
                <li>Reklamacja powinna zawierać dane Klienta, opis problemu oraz żądanie Klienta.</li>
                <li>Sprzedawca ustosunkuje się do reklamacji w terminie 14 dni od jej otrzymania.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mt-8 mb-4">§6. Wymagania Techniczne</h2>
              <p>Do dokonania zakupu i korzystania z Produktu niezbędne są:</p>
              <ul className="list-disc list-inside space-y-3 mt-3">
                <li>Urządzenie z dostępem do Internetu.</li>
                <li>Aktywny adres e-mail.</li>
                <li>Standardowa przeglądarka internetowa.</li>
                <li>
                  Oprogramowanie umożliwiające otwieranie plików w formacie PDF (np. darmowy Adobe Acrobat Reader).
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
