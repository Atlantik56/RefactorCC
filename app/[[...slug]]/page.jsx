import { notFound } from 'next/navigation';
import SitePage from '../../src/SitePage.jsx';
import { pages, pathToPage } from '../../src/pageContent.js';

export const dynamicParams = false;

function pathFromParams(params = {}) {
  const slug = params.slug || [];
  return slug.length ? `/${slug.join('/')}` : '/';
}

function slugFromPath(path) {
  return path === '/' ? [] : path.replace(/^\//, '').split('/');
}

function pageForParams(params) {
  const pageKey = pathToPage[pathFromParams(params)];
  return pageKey ? pages[pageKey] : null;
}

export function generateStaticParams() {
  return Object.keys(pathToPage).map((path) => ({
    slug: slugFromPath(path),
  }));
}

export async function generateMetadata({ params }) {
  const page = pageForParams(await params);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.ogTitle,
      description: page.ogDescription,
      type: 'website',
    },
  };
}

export default async function Page({ params }) {
  const page = pageForParams(await params);
  if (!page) notFound();

  return <SitePage page={page} />;
}
