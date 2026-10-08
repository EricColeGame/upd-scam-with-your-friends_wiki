export const NAVIGATION_CONFIG = [] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => (item as unknown as { isContentType?: boolean }).isContentType).map((item) => (item as unknown as { path: string }).path.replace(/^\//, ""));
