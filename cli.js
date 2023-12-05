import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the name for your new component: ', (componentName) => {
  const componentsDirectory = './src/components/';
  const componentPath = `${componentsDirectory}${componentName}`;

  const componentContent = `import React from 'react';
import { I${componentName}Props } from './${componentName}Types';
import './${componentName}Styles.scss';

export const ${componentName} = (props: I${componentName}Props) => {
  return null; 
};
`;

  const testContent = `import React from 'react';
import { ${componentName} } from '../${componentName}';
import { render } from '@testing-library/react';
  
describe('${componentName}', () => {
  test('should render', () => {
    const { container } = render(<${componentName} />);
    expect(container).toMatchSnapshot();
  });
});
`;

  const typesContent = `export type I${componentName}Props = {};\n`;
  const stylesContent = `.${componentName} {\n  \n};\n`;
  const indexContent = `export { ${componentName} } from './${componentName}';\n`;

  fs.mkdir(componentPath, { recursive: true }, (err) => {
    if (err) {
      console.error('Error creating component:', err);
      rl.close();
      return;
    }

    const filesToCreate = [
      `${componentName}.tsx`,
      `${componentName}Types.ts`,
      `${componentName}Constants.ts`,
      `${componentName}Styles.scss`,
      'index.ts',
      'test',
    ];

    filesToCreate.forEach((file) => {
      const filePath = `${componentPath}/${file}`;

      switch (file) {
        case `${componentName}.tsx`:
          fs.writeFileSync(filePath, componentContent);
          break;
        case `${componentName}Types.ts`:
          fs.writeFileSync(filePath, typesContent);
          break;
        case `${componentName}Constants.ts`:
          fs.writeFileSync(filePath, '');
          break;
        case `${componentName}Styles.scss`:
          fs.writeFileSync(filePath, stylesContent);
          break;
        case 'index.ts':
          fs.writeFileSync(filePath, indexContent);
          break;
        case 'test':
          fs.mkdirSync(filePath);
          fs.writeFileSync(`${filePath}/${componentName}.test.tsx`, testContent);
          break;
        default:
          fs.writeFileSync(filePath, '');
          break;
      }
    });

    console.log(`Component "${componentName}" created successfully at ${componentPath}`);
    rl.close();
  });
});
