import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  jsonLd?: object;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage,
  twitterCard = "summary_large_image",
  jsonLd,
}: SEOProps) => {
  const siteUrl = "https://convite.publiquenaliterare.com.br";
  const fullUrl = `${siteUrl}${canonicalUrl}`;

  const fullImageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${siteUrl}${ogImage}`
    : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="author"
        content="Literare Books International"
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="googlebot"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={fullUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content={ogType}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={fullUrl}
      />

      <meta
        property="og:site_name"
        content="Literare Books International"
      />

      <meta
        property="og:locale"
        content="pt_BR"
      />

      {fullImageUrl && (
        <>
          <meta
            property="og:image"
            content={fullImageUrl}
          />

          <meta
            property="og:image:alt"
            content={title}
          />
        </>
      )}

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content={twitterCard}
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      {fullImageUrl && (
        <>
          <meta
            name="twitter:image"
            content={fullImageUrl}
          />

          <meta
            name="twitter:image:alt"
            content={title}
          />
        </>
      )}

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
