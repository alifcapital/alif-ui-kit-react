'use client';

import React from 'react';
import clsx from 'clsx';

import { ITypography } from './TypographyTypes';
import './TypographyStyles.scss';
import { TYPOGRAPHY_VARIANT } from './TypographyConstants';

const Typography = React.forwardRef<HTMLDivElement, ITypography>((props, ref) => {
  const { variant = TYPOGRAPHY_VARIANT.BodyNormal, children, className, ...restProps } = props;

  return (
    <div
      {...restProps}
      ref={ref}
      className={clsx({
        ['Typography']: true,
        ['Typography-display_1']: variant === TYPOGRAPHY_VARIANT.DisplayOne,
        ['Typography-display_2']: variant === TYPOGRAPHY_VARIANT.DisplayTwo,
        ['Typography-heading_1']: variant === TYPOGRAPHY_VARIANT.HeadingOne,
        ['Typography-heading_2']: variant === TYPOGRAPHY_VARIANT.HeadingTwo,
        ['Typography-heading_2-medium']: variant === TYPOGRAPHY_VARIANT.HeadingTwoMedium,
        ['Typography-heading_3']: variant === TYPOGRAPHY_VARIANT.HeadingThree,
        ['Typography-heading_3-medium']: variant === TYPOGRAPHY_VARIANT.HeadingThreeMedium,
        ['Typography-heading-regular']: variant === TYPOGRAPHY_VARIANT.HeadingRegular,
        ['Typography-heading-subtitle']: variant === TYPOGRAPHY_VARIANT.HeadingSubtitle,
        ['Typography-heading-subtitle-medium']:
          variant === TYPOGRAPHY_VARIANT.HeadingSubtitleMedium,
        ['Typography-heading-small']: variant === TYPOGRAPHY_VARIANT.HeadingSmall,
        ['Typography-body-big']: variant === TYPOGRAPHY_VARIANT.BodyBig,
        ['Typography-body-normal']: variant === TYPOGRAPHY_VARIANT.BodyNormal,
        ['Typography-body-small']: variant === TYPOGRAPHY_VARIANT.BodySmall,
        ['Typography-body-paragraph']: variant === TYPOGRAPHY_VARIANT.BodyParagraph,
        ['Typography-caption']: variant === TYPOGRAPHY_VARIANT.Caption,
        ['Typography-all-captions']: variant === TYPOGRAPHY_VARIANT.AllCaptions,
        [className || '']: !!className,
      })}
    >
      {children}
    </div>
  );
});

Typography.displayName = 'Typography';

export { Typography };
