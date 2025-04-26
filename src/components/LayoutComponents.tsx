import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white rounded-md ${sizeClasses[size]} ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export const Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <h1 className={`text-2xl font-bold mb-4 ${className}`} {...props}>
      {children}
    </h1>
  );
};

export const Text: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <p className={`mb-4 ${className}`} {...props}>
      {children}
    </p>
  );
};

export const Content: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`max-w-4xl mx-auto p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const LinkComponent: React.FC<React.ComponentProps<typeof Link>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <Link className={`text-blue-500 hover:underline ${className}`} {...props}>
      {children}
    </Link>
  );
};
