import React from "react";
import { Breadcrumbs } from '../../../src';
import { IBreadcrumbsItem } from "../../../src/components/Breadcrumbs/BreadcrumbsTypes";


export const BreadcrumbsApp: React.FC = () => {

  const handleClick = (item: IBreadcrumbsItem) => {
    console.log(item);

    window.location.href = item.href;
  }

  

  return (
    <Breadcrumbs
      onLabelClick={handleClick}
      items={[
        {
          href: '/',
          label: <a href="https://alifshop.tj">Home</a>,
        },
        {
          href: '/react/components',
          label: 'Components',
        },
        {
          href: '/test',
          label: 'Breadcrumbs',
        },
      ]}
    />
  );
};