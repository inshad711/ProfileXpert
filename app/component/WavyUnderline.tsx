const WavyUnderline = ({
    color = "177, 59, 255",
    className = "",
    idSuffix = "1", // default fallback to avoid duplicate id
}) => {
    const gradientId = `underline-gradient-${idSuffix}`;

    return (
        <svg
            className={`absolute left-0 -bottom-3 w-full h-[14px] pointer-events-none ${className}`}
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
        >
            <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={`rgba(${color}, 0)`} />
                    <stop offset="10%" stopColor={`rgba(${color}, 0.8)`} />
                    <stop offset="50%" stopColor={`rgba(${color}, 1)`} />
                    <stop offset="90%" stopColor={`rgba(${color}, 0.8)`} />
                    <stop offset="100%" stopColor={`rgba(${color}, 0)`} />
                </linearGradient>
            </defs>
            <path
                d="M0,8 C30,2 70,2 100,8"
                stroke={`url(#${gradientId})`}
                strokeWidth="2"
                fill="none"
            />
        </svg>
    );
};

export default WavyUnderline;