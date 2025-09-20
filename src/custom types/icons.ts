export interface IconProps {
  name: string;
  className?: string; // className is optional
}

// Reusable Icon component for clarity

// Type definition for FaqItem props
export  interface FaqItemProps {
  question: string;
  children: React.ReactNode; // Type for any valid React child
}
