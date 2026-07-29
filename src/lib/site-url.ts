export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000"
  );
}
