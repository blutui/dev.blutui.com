export function slugify(input: string): string {
  // Make lowercase and trim...
  let slug = input.toLowerCase().trim()

  // Remove accents...
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // Replace invalid characters with spaces...
  slug = slug.replace(/[^a-z0-9\s-]/g, '').trim()

  // Replace multiple spaces or hyphens with a single hyphen...
  slug = slug.replace(/[\s-]+/g, '-')

  return slug
}
