export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-32 h-32">
        {/* DVD Disc */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/90 to-blue-400/90 animate-spin">
          {/* Inner Ring */}
          <div className="absolute w-[80px] h-[80px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        rounded-full border-2 border-white/30
                        before:content-[''] before:absolute before:inset-0 
                        before:rounded-full before:bg-gradient-to-tr 
                        before:from-white/20 before:to-transparent">
            {/* Center Hole */}
            <div className="absolute w-[30px] h-[30px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                          rounded-full bg-gradient-to-br from-white/30 to-white/10 
                          border border-white/40 backdrop-blur-md" />
          </div>
          
          {/* DVD Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/80 text-sm font-semibold tracking-wider animate-pulse">
              LOADING
            </span>
          </div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr 
                         from-transparent via-white/20 to-transparent 
                         animate-shine" />
        </div>
      </div>
    </div>
  )
} 