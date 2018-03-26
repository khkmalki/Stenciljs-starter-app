/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';

import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';

import {
  AppHome as AppHome
} from './components/app-home/app-home';

declare global {
  interface HTMLAppHomeElement extends AppHome, HTMLStencilElement {
  }
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-home": JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}


import {
  AppProfile as AppProfile
} from './components/app-profile/app-profile';

declare global {
  interface HTMLAppProfileElement extends AppProfile, HTMLStencilElement {
  }
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    "app-profile": HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    "app-profile": HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-profile": JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  MyApp as MyApp
} from './components/my-app/my-app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
