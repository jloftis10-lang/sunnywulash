/// <reference types="astro/client" />

interface Window {
  gtag?: (...args: unknown[]) => void;
}

interface ImportMetaEnv {
  readonly PUBLIC_GA4_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
