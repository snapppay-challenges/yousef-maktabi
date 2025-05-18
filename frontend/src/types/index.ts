export type PaginatedResponse<T> = {
  meta: {
    skipped: number;
    limit: number;
    total: number;
    criteria: Record<string, unknown>;
  };
  items: T[];
};
