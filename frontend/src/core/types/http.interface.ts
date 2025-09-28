export interface ErrorModel {
    code: number;
    message: string;
}

export interface ApiResponseWithMetadata<T> {
  data: T[];
  metadata: Metadata;
}

interface Metadata {
  page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
}