import { VariantProps } from 'class-variance-authority';
export { default as Avatar } from './Avatar.vue';
export { default as AvatarBadge } from './AvatarBadge.vue';
export { default as AvatarFallback } from './AvatarFallback.vue';
export { default as AvatarGroup } from './AvatarGroup.vue';
export { default as AvatarGroupCount } from './AvatarGroupCount.vue';
export { default as AvatarImage } from './AvatarImage.vue';
export declare const avatarVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type AvatarVariants = VariantProps<typeof avatarVariants>;
