/**
 * Normalizes text into a clean URL-friendly slug.
 * e.g. "Anillo Solitario Diamante Real" -> "anillo-solitario-diamante-real"
 */
export function slugify(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
}

/**
 * Returns the product slug or generates one from name/id.
 */
export function getProductSlug(product) {
  if (!product) return '';
  if (product.slug) return product.slug;
  return slugify(product.name || product.id);
}

/**
 * Searches for a product matching a given slug across trends and catalog.
 */
export function findProductBySlug(productsData, slug) {
  if (!slug || !productsData) return null;
  const normalizedSlug = slug.toLowerCase();

  const allProducts = [
    ...(productsData.tendencias || []),
    ...Object.values(productsData.catalog || {}).flat()
  ];

  return (
    allProducts.find(
      (p) =>
        getProductSlug(p) === normalizedSlug ||
        (p.id && p.id.toLowerCase() === normalizedSlug)
    ) || null
  );
}
