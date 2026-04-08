import logo from '../../assets/brand/logo_nobackground.svg';
import './OceanPanel.css';

export default function OceanPanel() {
  return (
    <div className="ocean-panel">
      <svg
        viewBox="0 0 600 480"
        xmlns="http://www.w3.org/2000/svg"
        className="ocean-svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Sand base */}
        <rect width="600" height="480" fill="#FFF3DC" />

        {/* Solid color bands stacked right-to-left: lightest fills widest, darkest fills rightmost strip */}
        <path fill="#CCF3F6" d="M 90,0 C 145,160 38,320 90,480 L 600,480 L 600,0 Z" />
        <path fill="#A0E8ED" d="M 172,0 C 227,160 120,320 172,480 L 600,480 L 600,0 Z" />
        <path fill="#6DD8DF" d="M 256,0 C 311,160 202,320 256,480 L 600,480 L 600,0 Z" />
        <path fill="#42C8D0" d="M 340,0 C 395,160 286,320 340,480 L 600,480 L 600,0 Z" />
        <path fill="#22B5BE" d="M 424,0 C 479,160 370,320 424,480 L 600,480 L 600,0 Z" />
        <path fill="#0F8E9A" d="M 506,0 C 561,160 452,320 506,480 L 600,480 L 600,0 Z" />
        <path fill="#0B606A" d="M 570,0 C 612,160 528,320 570,480 L 600,480 L 600,0 Z" />

        {/* Thin darker line at the water–sand boundary */}
        <path fill="none" stroke="#1A8F97" strokeWidth="1.5" d="M 90,0 C 145,160 38,320 90,480" />
      </svg>

      {/* Logo floating on the water */}
      <div className="ocean-logo-wrap">
        <div className="ocean-logo-disc">
          <img src={logo} alt="Poppy's Ice Cream" className="ocean-logo" />
        </div>
      </div>
    </div>
  );
}
