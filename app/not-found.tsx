import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="empty-page">
      <h1>HÄR VAR DET TOMT.</h1>
      <p>Sidan du letar efter finns inte. Vi hjälper dig att hitta rätt.</p>
      <Link className="button button-brand" href="/tjanster">
        Se våra tjänster
      </Link>
    </main>
  );
}
