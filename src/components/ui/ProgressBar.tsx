interface ProgressBarProps {
  value: number;
  max: number;
  showLabel?: boolean;
  className?: string;
  labelClassName?: string;
}

const ProgressBar = ({
  value,
  max,
  showLabel = true,
  className = "",
  labelClassName = "",
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-500 transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className={`text-sm text-gray-600 ${labelClassName}`}>
          {percentage.toFixed(0)}% funded
        </div>
      )}
    </div>
  );
};

export default ProgressBar;