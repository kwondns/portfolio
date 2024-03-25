/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_BUCKET_URL: string;
  readonly VITE_SUPABASE_KEY: string;
  readonly VITE_NOTION_KEY: string;
  readonly VITE_NOTION_DB: string;
  readonly VITE_API_SERVER_URL: string;
  readonly VITE_IMAGE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
