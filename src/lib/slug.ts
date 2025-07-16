export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const slugToTitle = (slug: string): string => {
  return slug.replace(/-/g, ' ');
};