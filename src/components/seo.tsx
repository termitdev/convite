import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  jsonLd?: object;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  jsonLd,
}: SEOProps) => {
  const siteUrl = "https://convite.publiquenaliterare.com.br";
  const fullUrl = `${siteUrl}${canonicalUrl}`;

  return (
    <Helmet>
      {/* SEO básico */}
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

      {/* Dados estruturados */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;