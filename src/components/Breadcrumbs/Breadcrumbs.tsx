import React, { Fragment, isValidElement } from 'react';
import { RightNext } from 'alif-icon-kit-react';
import clsx from 'clsx';

import { IBreadcrumbsItem, IBreadcrumbsProps } from './BreadcrumbsTypes';

import './BreadcrumbsStyles.scss';

export const Breadcrumbs = (props: IBreadcrumbsProps) => {
  const { items, onLabelClick } = props;

  const handleLabelClick = (item: IBreadcrumbsItem, isCurrent?: boolean) => {
    if (isCurrent) {
      return;
    }

    onLabelClick && onLabelClick(item);
  };

  return (
    <nav aria-label="Breadcrumb" className="Breadcrumbs">
      <ol className="Breadcrumbs-list">
        {items.map((item, index) => {
          const isCurrent = items.length - 1 === index;

          return (
            <Fragment key={item.key}>
              <li
                aria-current={isCurrent ? 'page' : undefined}
                className={clsx({
                  'Breadcrumbs-item': true,
                  'Breadcrumbs-item-current': isCurrent,
                })}
              >
                {isValidElement(item.label) ? (
                  item.label
                ) : (
                  <button
                    onClick={() => handleLabelClick(item, isCurrent)}
                    aria-label={item.label as string}
                    className="Breadcrumbs-button"
                  >
                    {item.label}
                  </button>
                )}
              </li>

              {!isCurrent && (
                <div aria-hidden="true" className="Breadcrumbs-separator">
                  <RightNext height="16" width="16" />
                </div>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
