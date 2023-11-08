import React from 'react';

export interface IBreadcrumbsItem {
  key: string | number;
  href: string;
  label: React.ReactNode | string;
}

export interface IBreadcrumbsProps {
  items: IBreadcrumbsItem[];
  onLabelClick?: (item: IBreadcrumbsItem) => void;
}
