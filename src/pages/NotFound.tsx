import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <SEO
        title="Page Not Found - ProInvest"
        description="The page you're looking for doesn't exist."
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#17242C] via-[#10605A] to-[#004953]">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-white mb-4">404</h1>
          <p className="text-2xl text-gray-300 mb-8">Page not found</p>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00B88A] text-white rounded-xl font-semibold hover:bg-[#00a37d] transition-colors duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
