import React from 'react';

export interface IBreadcrumbsItem {
  href: string;
  label: React.ReactNode;
}

export interface IBreadcrumbsProps {
  items: IBreadcrumbsItem[];
  onLabelClick: (item: IBreadcrumbsItem) => void;
}
