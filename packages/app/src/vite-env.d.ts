/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_NAME: string;
  readonly VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
