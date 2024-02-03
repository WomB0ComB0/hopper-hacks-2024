import React from 'react';

export const PrimitiveArticle = React.forwardRef<HTMLElement, PrimitiveSemanticProps<HTMLElement>>(
  ({ as: ElementComponent = 'article', children, ...props }, ref) => {
    return React.createElement(ElementComponent as React.ComponentType<any>, { ...props, ref }, children);
  }
);
PrimitiveArticle.displayName = 'Article';

export const PrimitiveFooter = React.forwardRef<HTMLElement, PrimitiveSemanticProps<HTMLElement>>(
  ({ as: ElementComponent = 'footer', children, ...props }, ref) => {
    return React.createElement(ElementComponent as React.ComponentType<any>, { ...props, ref }, children);
  }
);
PrimitiveFooter.displayName = 'Footer';

export const PrimitiveHeader = React.forwardRef<HTMLElement, PrimitiveSemanticProps<HTMLElement>>(
  ({ as: ElementComponent = 'header', children, ...props }, ref) => {
    return React.createElement(ElementComponent as React.ComponentType<any>, { ...props, ref }, children);
  }
);
PrimitiveHeader.displayName = 'Header';

export const PrimitiveMain = React.forwardRef<HTMLElement, PrimitiveSemanticProps<HTMLElement>>(
  ({ as: ElementComponent = 'main', children, ...props }, ref) => {
    return React.createElement(ElementComponent as React.ComponentType<any>, { ...props, ref }, children);
  }
);
PrimitiveMain.displayName = 'Main';

export const PrimitiveSection = React.forwardRef<HTMLElement, PrimitiveSemanticProps<HTMLElement>>(
  ({ as: ElementComponent = 'section', children, ...props }, ref) => {
    return React.createElement(ElementComponent as React.ComponentType<any>, { ...props, ref }, children);
  }
);
PrimitiveSection.displayName = 'Section';

export const PrimitiveNav = React.forwardRef<HTMLElement, PrimitiveSemanticProps<HTMLElement>>(
  ({ as: ElementComponent = 'nav', children, ...props }, ref) => {
    return React.createElement(ElementComponent as React.ComponentType<any>, { ...props, ref }, children);
  }
);
PrimitiveNav.displayName = 'Nav';

export const PrimitivePicture = React.forwardRef<HTMLElement, PrimitiveSemanticProps<HTMLElement>>(
  ({ as: ElementComponent = 'picture', children, ...props }, ref) => {
    return React.createElement(ElementComponent as React.ComponentType<any>, { ...props, ref }, children);
  }
);
PrimitivePicture.displayName = 'Picture';

export const PrimitiveDiv = React.forwardRef<HTMLElement, PrimitiveSemanticProps<HTMLElement>>(
  ({ as: ElementComponent = 'div', children, ...props }, ref) => {
    return React.createElement(ElementComponent as React.ComponentType<any>, { ...props, ref }, children);
  }
);
PrimitiveDiv.displayName = 'Div';
