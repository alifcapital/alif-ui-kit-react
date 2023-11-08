import React from "react";
import { Breadcrumbs } from '../../../src';
import { IBreadcrumbsItem } from "../../../src/components/Breadcrumbs/BreadcrumbsTypes";


const defaultItems = [
  {
    key: 1,
    href: '/',
    label: 'Home',
  },
  {
    key: 2,
    href: '/react/components',
    label: 'Components',
  },
  {
    key: 3,
    href: '/test',
    label: 'Breadcrumbs',
  },
];

const nodeItems = [
  {
    key: 1,
    href: '/',
    label: <a href="https://alifshop.tj">Home</a>,
  },
  {
    key: 2,
    href: '/react/components',
    label: <a href="https://alifshop.tj">Components</a>,
  },
  {
    key: 3,
    href: '/test',
    label: <a href="https://alifshop.tj">Breadcrumbs</a>,
  },
];

export const BreadcrumbsApp: React.FC = () => {

  const handleClick = (item: IBreadcrumbsItem) => {
    console.log(item);

  }

  

  return (
    <Breadcrumbs
      onLabelClick={handleClick}
      items={nodeItems}
    />
  );
};