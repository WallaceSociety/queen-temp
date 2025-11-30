export interface ImageGenerationRequest {
  prompt: string;
  aspectRatio?: string;
}

export interface GeneratedImageState {
  url: string | null;
  loading: boolean;
  error: string | null;
}
