import React, { DetailedHTMLProps, HTMLAttributes, useLayoutEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { SelectOpenDown } from 'alif-icon-kit-react';

import { IAccordionProps } from './AccordionTypes';
import './AccordionStyles.scss';

const Accordion = React.forwardRef<HTMLDivElement, IAccordionProps>((props, ref) => {
  const {
    className,
    color,
    ariaLabel,
    content,
    header,
    contentMarginTop = 0,
    isOpen,
    onChange,
  } = props;

  const [open, setOpen] = useState(isOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const collapseSection = (element: HTMLDivElement, open: boolean) => {
    const sectionHeight = element.scrollHeight;

    element.style.height = (open ? sectionHeight : 0) + 'px';
  };

  const handleClick = () => {
    setOpen(!open);
    onChange && onChange(!open);

    if (contentRef.current) {
      collapseSection(contentRef.current, !open);
    }
  };

  const handleEnterPress = (
    ev: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  ) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      setOpen(!open);
      onChange && onChange(!open);

      if (contentRef.current) {
        collapseSection(contentRef.current, !open);
      }
    }
  };

  useLayoutEffect(() => {
    const value = typeof isOpen === 'boolean' ? isOpen : false;

    if (contentRef.current) {
      collapseSection(contentRef.current, value);
    }
    setOpen(value);
  }, [isOpen]);

  return (
    <div
      className={clsx({
        ['Accordion']: true,
        [className || '']: !!className,
      })}
    >
      <div
        ref={ref}
        tabIndex={0}
        className="Accordion-heading"
        role="button"
        aria-expanded="true"
        aria-label={ariaLabel}
        onClick={handleClick}
        onKeyDown={handleEnterPress}
      >
        <div style={{ color: color }} className="Accordion-heading-label">
          {header}
        </div>
        <div
          className={clsx({
            ['Accordion-heading-arrow']: true,
            ['Accordion-heading-arrow-up']: open,
          })}
        >
          <SelectOpenDown width="24" height="24" color={color} />
        </div>
      </div>
      <div
        style={{ marginTop: contentMarginTop }}
        ref={contentRef}
        className={clsx({
          ['Accordion-details']: true,
          ['Accordion-details-open']: open,
        })}
      >
        {content}
      </div>
    </div>
  );
});

Accordion.displayName = 'Accordion';

export { Accordion };
