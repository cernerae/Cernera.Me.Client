import './DemoBadge.css';

interface DemoBadgeProps {
  currentSiteUrl: string;
}

export default function DemoBadge({ currentSiteUrl }: DemoBadgeProps) {
  return (
    <a
      href={currentSiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="demo-badge"
    >
      <span className="demo-badge__label">Design Preview</span>
      <span className="demo-badge__link">View current site →</span>
    </a>
  );
}
