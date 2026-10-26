export default async () => {
  return new Response(
    JSON.stringify({
      ranking: [],
      headline: "EN ATTENTE DES RÉSULTATS OFFICIELS",
      latest: "AUCUNE ANNONCE VÉRIFIÉE",
      status: "test"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
      }
    }
  );
};
