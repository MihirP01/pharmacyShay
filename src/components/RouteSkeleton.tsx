export function RouteSkeleton() {
  return (
    <main className="route-skeleton" aria-live="polite" aria-busy="true">
      <div className="route-skeleton-head shimmer" />
      <div className="route-skeleton-grid">
        <div className="route-skeleton-card shimmer" />
        <div className="route-skeleton-card shimmer" />
        <div className="route-skeleton-card shimmer" />
      </div>
      <div className="route-skeleton-lines">
        <div className="route-skeleton-line shimmer" />
        <div className="route-skeleton-line shimmer" />
        <div className="route-skeleton-line short shimmer" />
      </div>
    </main>
  );
}

