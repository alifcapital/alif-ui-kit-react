import React from 'react';
import { render } from '@testing-library/react';

import { Text } from '../Text';

describe('Text', () => {
  const textValue = 'Hello World!';

  it('should have text value', () => {
    const { getByText } = render(<Text>{textValue}</Text>);
    expect(getByText(textValue).innerHTML).toBe(textValue);
  });

  it('should have be bold', () => {
    const { container } = render(<Text bold>{textValue}</Text>);

    expect(container.getElementsByClassName('Text-bold').length).toBe(1);
  });

  it('should have underline class', () => {
    const { container } = render(<Text underline>{textValue}</Text>);

    expect(container.getElementsByClassName('Text-underline').length).toBe(1);
  });

  it('should have uppercase class', () => {
    const { container } = render(<Text uppercase> {textValue}</Text>);

    expect(container.getElementsByClassName('Text-uppercase').length).toBe(1);
  });

  it('should have pass custom classname', () => {
    const customClassName = 'customClassName';
    const { container } = render(<Text className={customClassName}> {textValue}</Text>);

    expect(container.getElementsByClassName(customClassName).length).toBe(1);
  });
});
