import { lazy, Suspense } from 'react';
import { useClientSlug } from './router/useClientSlug';

/**
 * Client registry — add one entry per client folder.
 * The key must match:
 *   - the folder name under src/clients/
 *   - the subdomain slug (e.g. "example-client" → example-client.yourdomain.com)
 */
const clients: Record<string, React.LazyExoticComponent<() => React.ReactElement>> = {
  'example-client': lazy(() => import('./clients/example-client/pages/home/Home')),
  'neptune': lazy(() => import('./clients/neptune_wine_liquors/pages/home/Home')),
};

export default function App() {
  const slug = useClientSlug();
  const Page = clients[slug];

  if (!slug || !Page) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
        <h2>No client matched</h2>
        <p>
          In development, append <code>?client=&lt;slug&gt;</code> to the URL.
        </p>
        <p>
          Available slugs: <strong>{Object.keys(clients).join(', ')}</strong>
        </p>
      </div>
    );
  }

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}
