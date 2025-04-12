export const AddIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="13" width="4.7" height="30" rx="2.35" className={className} />
      <rect
        y="18"
        width="4.7"
        height="30"
        rx="2.35"
        transform="rotate(-90 0 18)"
        className={className}
      />
    </svg>
  );
};
