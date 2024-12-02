export type ComponentType = {
  name: string;
  description: string;
  isResizable?: boolean;
  componentBadges?: ComponentBadgeSlug[];
  isIframed?: boolean;
  rerenderButton?: boolean;
  inspiration?: string;
  inspirationLink?: string;
  sizePreview?: ComponentHeightType;
  slug: string;
  variantList: VariantType[];
};
