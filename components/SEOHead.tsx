
import React, { useEffect } from 'react';
import { SEOData } from '../types';

interface SEOHeadProps {
  data: SEOData;
}

const SEOHead: React.FC<SEOHeadProps> = ({ data }) => {
  useEffect(() => {
    document.title = data.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', data.description);
  }, [data]);

  return null;
};

export default SEOHead;
