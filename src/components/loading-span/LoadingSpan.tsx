import clsx from "clsx";

interface LoadingSpanProps {
  size?: string;
}

const LoadingSpan = ({ size = "md" }: LoadingSpanProps) => {
  return <span className={clsx(`loading loading-dots loading-${size}`)}></span>;
};

export default LoadingSpan;
