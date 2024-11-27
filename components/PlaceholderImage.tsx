interface PlaceholderImageProps {
    title: string;
  }
  
  export default function PlaceholderImage({ title }: PlaceholderImageProps) {
    return (
      <div className="w-full h-full relative bg-[#1F2937] rounded-lg">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 300 450" 
          preserveAspectRatio="xMidYMid meet" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <rect x="75" y="150" width="150" height="150" rx="10" stroke="#6B7280" strokeWidth="4" strokeDasharray="8 8"/>
          <path d="M150 200V250M125 225H175" stroke="#6B7280" strokeWidth="4" strokeLinecap="round"/>
          <text x="150" y="350" textAnchor="middle" fill="#6B7280" fontFamily="system-ui" fontSize="16">No Image Available</text>
          <text x="150" y="380" textAnchor="middle" fill="#9CA3AF" fontFamily="system-ui" fontSize="14" fontWeight="bold">
            {title}
          </text>
        </svg>
      </div>
    )
  } 