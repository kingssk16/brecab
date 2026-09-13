# BRECAB

Ny svensk webbplats för maskin- och markentreprenad i Boden, byggd med Next.js App Router, TypeScript och React. Egen design med Brecabs befintliga maskinbilder. Den tidigare versionen finns kvar i Git-historiken.

## Utveckling

`npm ci`, därefter `npm run dev`. `npm run build` skapar produktionsbygget. `npm run typecheck` kontrollerar TypeScript.

## Innehåll

Företagsuppgifter, alla ursprungliga tjänster och fullständig kvalitets- och miljöpolicy är hämtade från brecab.se (startsida, arbetsomr-den, kontakta-oss, kvalit och milj), granskade 2026-09-12. Stavning och disposition har moderniserats; landsting benämns regioner. Kompletterande tjänster från användarens bildöversikt: hyvling, vinterredskap och transport. Inga osäkrade telefonnummer, adresser, omdömen, certifieringar eller projektreferenser har lagts till.

Tjänsternas texter och bildval finns i `lib/brecab-content.ts`. Bilderna kommer från användarens befintliga `public/projects`-bibliotek; de används som tjänsteillustrationer, inte som påståenden om dokumenterade referensprojekt. Befintlig Vercel-design har inte använts som designreferens.

## Kontakt

Kontaktformuläret öppnar ett färdigt e-postutkast till info@brecab.se. Besökaren skickar själv i sitt e-postprogram. Kopiering och visning av utkast fungerar som alternativ. Webbplatsen lagrar eller skickar inga formulärdata till en server. Inga analys- eller marknadsföringskakor används.

Kontaktflödet har tre steg: uppdrag, kontaktuppgifter och granskning. Valda tjänster skickas från tjänsteöversikten via validerade URL-parametrar. Personuppgifter stannar i sidans React-tillstånd och lagras inte i webbläsarlagring. Tjänsteöversikten har sökning som fungerar med eller utan svenska diakritiska tecken, kategorifilter och kort-/listläge.

## Grafisk identitet

Den officiella loggan är användarens oförändrade PNG i `public/brecab-official-logo.png`. Transparenta marginaler döljs med CSS. Primärfärgen `#39579A` är avläst från loggan. Ljusare blått används mot mörka bakgrunder för läsbarhet.

## Publicering

Använd det befintliga Vercel-projektet `brecab`. Kontrollera länkningen med `vercel link --project brecab`, bygg och publicera med `vercel --prod`. Den kanoniska adressen är tills vidare https://brecab.vercel.app. När brecab.se kopplas till den nya sidan ändras metadataBase, sitemap och robots till den domänen.
