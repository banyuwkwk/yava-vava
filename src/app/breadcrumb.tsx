// components/Breadcrumb.tsx
import React from 'react';
import Link from 'next/link';

interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  paths: Crumb[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <div className="text-sm text-gray-500 mb-4 font-poppins">
      {paths.map((crumb, index) => (
        <span key={index}>
          <Link href={crumb.href} className="hover:underline hover:text-gray-700">
            {crumb.label}
          </Link>
          {index < paths.length - 1 && ' / '}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
