export const groups = [
  { id: "mark", title: "Mark & anläggning", label: "Mark & anläggning" },
  { id: "vinter", title: "Vinterunderhåll", label: "Vinter" },
  { id: "skotsel", title: "Yttre skötsel", label: "Yttre skötsel" },
  { id: "transport", title: "Transport", label: "Transport" },
];
export const services = [
  {
    slug: "markanlaggning",
    title: "Markanläggning",
    group: "mark",
    image: "markanlaggning-hjullastare.png",
    alt: "Hjullastare som arbetar med marken intill ett flerbostadshus",
    intro: "Från befintlig mark till en utemiljö som fungerar i vardagen.",
    detail:
      "Vi hjälper till med markarbeten för både små och stora uppdrag. Arbetets omfattning planeras utifrån platsen och hur ytan ska användas. Gräsytor, grusytor, utgrävningar och anslutande anläggningsarbeten kan ingå i ett samlat åtagande.",
    prompt:
      "Berätta var arbetet ska utföras, ungefär hur stor ytan är och vad du vill använda den till.",
  },
  {
    slug: "garageinfarter",
    title: "Garageinfarter",
    group: "mark",
    image: "markanlaggning.png",
    alt: "Grävmaskin som förbereder marken vid en infart",
    intro: "En genomtänkt infart börjar med arbetet under ytan.",
    detail:
      "Vi utför ombyggnad och urgrävning av garageinfarter. Tillsammans går vi igenom hur infarten ska användas och vilka förutsättningar som finns, så att arbetet kan planeras från utgrävning till färdig yta.",
    prompt:
      "Beskriv infartens storlek, nuvarande underlag och hur du vill förändra den.",
  },
  {
    slug: "dranering",
    title: "Dränering",
    group: "mark",
    image: "dranering.png",
    alt: "Dräneringsarbete längs en husgrund",
    intro:
      "Markarbeten runt fastigheten, planerade efter platsens förutsättningar.",
    detail:
      "Vi utför dräneringar samt utgrävningar och isoleringsarbeten. Varje fastighet har sina egna förutsättningar. Vi går igenom behovet med dig och diskuterar arbetets omfattning innan vi kommer överens om uppdraget.",
    prompt:
      "Beskriv fastigheten, åtkomligheten runt huset och vad du behöver hjälp med.",
  },
  {
    slug: "utgravning-isolering",
    title: "Utgrävning & isolering",
    group: "mark",
    image: "uppfart.png",
    alt: "Grävmaskin vid utgrävning intill en byggnad",
    intro: "Marken förbereds för nästa steg i ditt projekt.",
    detail:
      "Vi hjälper till med utgrävningar och isoleringar som en del av våra mark- och anläggningsarbeten. Uppdraget planeras med hänsyn till befintliga byggnader, markens användning och de förutsättningar som finns på platsen.",
    prompt:
      "Berätta vad som ska grävas ut eller isoleras och om arbetet ingår i ett större projekt.",
  },
  {
    slug: "grasytor",
    title: "Gräsytor",
    group: "mark",
    image: "grasklippning.png",
    alt: "En grön gräsyta intill en trädgård",
    intro: "Gröna ytor för gårdar, fastigheter och gemensamma utemiljöer.",
    detail:
      "Vi utför markarbeten för gräsytor. Oavsett om ytan tillhör en privat tomt, en fastighet eller en gemensam utemiljö diskuterar vi vilka förberedelser som behövs och hur arbetet ska utföras.",
    prompt: "Ange ungefärlig storlek och berätta hur marken ser ut idag.",
  },
  {
    slug: "grusytor",
    title: "Grusytor",
    group: "mark",
    image: "grusytor.png",
    alt: "Grusad infart mellan gröna häckar",
    intro: "Praktiska ytor för infarter, gångar och gårdsplaner.",
    detail:
      "Vi hjälper till med anläggning och markarbeten för grusytor. Vi går igenom hur ytan ska användas och vad som behövs för att skapa en lösning som passar dina behov.",
    prompt:
      "Berätta vilken typ av yta det gäller och om den ska användas av gående eller fordon.",
  },
  {
    slug: "plattlaggning-kantsten",
    title: "Plattläggning & kantsten",
    group: "mark",
    image: "plattlaggning.png",
    alt: "Stenlagd uppfart med trappor och stödmurar framför ett hus",
    intro: "Tydliga avslut och ytor som knyter ihop utemiljön.",
    detail:
      "Plattläggning och kantstensläggning ingår i våra tjänster. Vi hjälper dig att diskutera utförandet för gångar, uppfarter och andra markytor, både som enskilt uppdrag och som del av ett större anläggningsarbete.",
    prompt:
      "Beskriv ytan och om du har önskemål om plattor, kantsten eller utformning.",
  },
  {
    slug: "lekplatsbyggnationer",
    title: "Lekplatsbyggnationer",
    group: "mark",
    image: "lekplatsbyggnationer.png",
    alt: "Markarbete vid en lekplats",
    intro: "Mark- och anläggningsarbeten för platser där barn ska leka.",
    detail:
      "Vi utför lekplatsbyggnationer och tillhörande markarbeten. Arbetets omfattning, utformning och förutsättningar går vi igenom tillsammans med beställaren innan uppdraget påbörjas.",
    prompt:
      "Berätta om platsen, vilka arbeten som planeras och om det finns ett färdigt underlag.",
  },
  {
    slug: "snoplogning",
    title: "Snöplogning & snöskottning",
    group: "vinter",
    image: "snow-road.jpeg",
    alt: "Hjullastare röjer en snötäckt väg",
    intro: "Framkomliga ytor när vintern tar plats.",
    detail:
      "Vi hjälper till med snöplogning och snöskottning. I vårt entreprenadåtagande ansvarar vi för att arbetet sköts enligt det vi har kommit överens om, så att du som kund vet vem som tar hand om vinterunderhållet.",
    prompt:
      "Berätta vilka ytor som ska snöröjas, var de ligger och om du söker återkommande hjälp.",
  },
  {
    slug: "halkbekampning",
    title: "Halkbekämpning & sandning",
    group: "vinter",
    image: "halkbekampning.png",
    alt: "Hjullastare vid en fastighet vintertid",
    intro: "Hjälp med halkiga gångvägar, gårdar och andra vinterytor.",
    detail:
      "Vi utför halkbekämpning och sandning. Uppdraget anpassas till de ytor som ska skötas och det underhåll vi kommer överens om. Vi ser vinterentreprenaden som ett helhetsåtagande där ansvar och omfattning ska vara tydliga.",
    prompt:
      "Beskriv vilka ytor det gäller och om sandning ska samordnas med snöröjning.",
  },
  {
    slug: "snotransport",
    title: "Snötransport",
    group: "vinter",
    image: "sno-transport.png",
    alt: "Hjullastare som lastar snö",
    intro: "När snön behöver flyttas för att ge plats åt vardagen.",
    detail:
      "Vi hjälper till med snötransport när upplag och snöhögar behöver tas om hand. Tillsammans går vi igenom åtkomst, omfattning och hur arbetet kan samordnas med övrig snöröjning.",
    prompt:
      "Beskriv var snön finns, ungefärlig mängd och hur platsen kan nås med maskin.",
  },
  {
    slug: "hyvling",
    title: "Hyvling",
    group: "vinter",
    image: "hyvling.png",
    alt: "Hjullastare med snöblad på en vinterväg",
    intro: "Bearbetning av vinterytor med packad snö och ojämnheter.",
    detail:
      "Hyvling kan vara en del av vinterunderhållet. Kontakta oss för att diskutera underlaget, de aktuella förhållandena och vilken insats som passar ytan.",
    prompt: "Berätta vilken yta det gäller och hur underlaget ser ut.",
  },
  {
    slug: "vinterredskap",
    title: "Vinterredskap",
    group: "vinter",
    image: "blade-cabin.jpeg",
    alt: "Utsikt från maskinhytt över ett snöblad och en vinterväg",
    intro: "Maskin och redskap som en del av vinterarbetet.",
    detail:
      "Olika vinterytor kräver olika arbetssätt. Berätta om ditt uppdrag så diskuterar vi maskininsatsen och vilka redskap som passar arbetet.",
    prompt:
      "Beskriv arbetet och eventuella förutsättningar som smala passager eller stora öppna ytor.",
  },
  {
    slug: "grasklippning",
    title: "Gräsklippning",
    group: "skotsel",
    image: "grasklippning.png",
    alt: "Åkgräsklippare intill en klippt gräsyta",
    intro: "Välskötta grönytor under den gröna delen av året.",
    detail:
      "Vi utför gräsklippning åt privatpersoner, företag, bostadsrättsföreningar och offentlig verksamhet. Arbetet planeras efter ytornas storlek, åtkomlighet och den skötsel som vi kommer överens om.",
    prompt:
      "Ange ungefärlig yta, var den ligger och hur ofta du behöver hjälp.",
  },
  {
    slug: "sopning",
    title: "Sopning",
    group: "skotsel",
    image: "sopning.png",
    alt: "Hjullastare med sopredskap framför en byggnad",
    intro: "Rena och välordnade ytor, från vårstädning till löpande skötsel.",
    detail:
      "Sopning ingår i våra tjänster för yttre skötsel. Vi hjälper dig med exempelvis sand och grus på ytor efter vintern. Kontakta oss så går vi igenom omfattning och tidpunkt.",
    prompt:
      "Berätta om ytornas storlek och vilken typ av underlag som ska sopas.",
  },
  {
    slug: "transport",
    title: "Transport",
    group: "transport",
    image: "transport.png",
    alt: "Lastbil för transport",
    intro: "Transporthjälp i samband med ditt mark- eller maskinuppdrag.",
    detail:
      "Behöver något transporteras i samband med arbetet? Kontakta oss och beskriv materialet, mängden och sträckan, så diskuterar vi förutsättningarna och hur vi kan hjälpa till.",
    prompt:
      "Ange vad som ska transporteras, ungefärlig mängd samt hämtnings- och leveransplats.",
  },
];
