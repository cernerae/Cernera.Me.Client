import logo from '../../assets/brand/logo_nobackground.svg';
import './OceanPanel.css';

export default function OceanPanel() {
  return (
    <div className="ocean-panel">
      <svg
        viewBox="0 0 600 480"
        xmlns="http://www.w3.org/2000/svg"
        className="ocean-svg"
        preserveAspectRatio="xMinYMid slice"
      >
        <defs>
          <filter id="bandBlur" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        {/* Sand base */}
        <rect width="600" height="480" fill="#FFF3DC" />

        {/* Band fills in a blurred group — softens the color transitions between bands */}
        <g filter="url(#bandBlur)">
          <path fill="#CCF3F6" d="M 85,0 C 148,85 40,310 88,480 L 600,480 L 600,0 Z" />
          <path fill="#A0E8ED" d="M 183,0 C 155,170 212,305 178,480 L 600,480 L 600,0 Z" />
          <path fill="#6DD8DF" d="M 268,0 C 300,130 248,385 263,480 L 600,480 L 600,0 Z" />
          <path fill="#42C8D0" d="M 352,0 C 392,95 318,252 358,345 C 374,402 344,455 350,480 L 600,480 L 600,0 Z" />
          <path fill="#22B5BE" d="M 432,0 C 406,195 448,338 424,480 L 600,480 L 600,0 Z" />
          <path fill="#2AACB8" d="M 504,0 C 548,75 494,265 510,480 L 600,480 L 600,0 Z" />
          <path fill="#1A8F97" d="M 570,0 C 592,175 554,348 572,480 L 600,480 L 600,0 Z" />
        </g>

        {/* Crisp wave strokes on top — drawn after blur so they stay sharp */}
        <path fill="none" stroke="white" strokeWidth="2" opacity="0.22" d="M 183,0 C 155,170 212,305 178,480" />
        <path fill="none" stroke="white" strokeWidth="2" opacity="0.18" d="M 268,0 C 300,130 248,385 263,480" />
        <path fill="none" stroke="white" strokeWidth="2" opacity="0.15" d="M 352,0 C 392,95 318,252 358,345 C 374,402 344,455 350,480" />
        <path fill="none" stroke="white" strokeWidth="2" opacity="0.12" d="M 432,0 C 406,195 448,338 424,480" />

        {/* Shoreline */}
        <path fill="none" stroke="#1A8F97" strokeWidth="1.5" d="M 85,0 C 148,85 40,310 88,480" />
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
