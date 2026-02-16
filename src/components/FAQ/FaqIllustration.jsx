const FaqIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto">
    <circle cx="100" cy="80" r="50" fill="#fde047" />
    <path d="M75 120 Q100 150 125 120" stroke="#fde047" strokeWidth="20" fill="none" />
    <rect x="85" y="145" width="30" height="15" rx="5" fill="#1e293b" />
    <path d="M85 165 Q100 175 115 165" stroke="#1e293b" strokeWidth="10" fill="none" />
    <text x="100" y="95" fontSize="40" textAnchor="middle" fill="white" fontWeight="bold">?</text>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <line
        key={deg}
        x1="100"
        y1="80"
        x2={100 + 70 * Math.cos(deg * Math.PI / 180)}
        y2={80 + 70 * Math.sin(deg * Math.PI / 180)}
        stroke="#fde047"
        strokeWidth="6"
        strokeDasharray="10 20"
      />
    ))}
  </svg>
);

export default FaqIllustration;
