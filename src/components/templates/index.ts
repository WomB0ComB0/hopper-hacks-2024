import { lazy } from 'react';
export * from './primitives';

export const Main = lazy(() => import("@/components/templates/semantics").then(m => ({
  default: m.Main
})));
export const Section = lazy(() => import("@/components/templates/semantics").then(m => ({
  default: m.Section
})));
export const Header = lazy(() => import("@/components/templates/semantics").then(m => ({
  default: m.Header
})));
export const Article = lazy(() => import("@/components/templates/semantics").then(m => ({
  default: m.Article
})));
export const Picture = lazy(() => import("@/components/templates/semantics").then(m => ({
  default: m.Picture
})));
export const Footer = lazy(() => import("@/components/templates/semantics").then(m => ({
  default: m.Footer
})));
export const Nav = lazy(() => import("@/components/templates/semantics").then(m => ({
  default: m.Nav
})));
