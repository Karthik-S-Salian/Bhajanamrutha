
export default function jsonLDGenerator(title: string, url: string | URL) {
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${title}",
      "url": "${url}"
      }
    </script>`;
}