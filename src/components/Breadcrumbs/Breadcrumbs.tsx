import React from 'react';
import { RightNext } from 'alif-icon-kit-react';
import { IBreadcrumbsItem, IBreadcrumbsProps } from './BreadcrumbsTypes';
import './BreadcrumbsStyles.scss';
import clsx from 'clsx';

export const Breadcrumbs = (props: IBreadcrumbsProps) => {
  const { items, onLabelClick } = props;

  const handleLabelClick = (item: IBreadcrumbsItem) => {
    onLabelClick && onLabelClick(item);
    console.log('Вы нажали на: ', item);
  };

  return (
    <nav aria-label="Breadcrumb" className="Breadcrumbs">
      <ol className="Breadcrumbs-list">
        {items.map((item, index) => {
          const isCurrent = items.length - 1 === index;

          return (
            <li className="Breadcrumbs-item" key={index}>
              <div
                onClick={isCurrent ? undefined : () => handleLabelClick(item)}
                aria-current={isCurrent ? 'page' : undefined}
                className={clsx({
                  'Breadcrumbs-label': true,
                  'Breadcrumbs-label-current': isCurrent,
                })}
              >
                {item.label}
              </div>

              {!isCurrent && (
                <div aria-hidden="true" className="Breadcrumbs-separator">
                  <RightNext height="16" width="16" />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
