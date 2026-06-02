import { VariantProps } from 'class-variance-authority';
export { default as Tabs } from './Tabs.vue';
export { default as TabsContent } from './TabsContent.vue';
export { default as TabsList } from './TabsList.vue';
export { default as TabsTrigger } from './TabsTrigger.vue';
export declare const tabsListVariants: (props?: ({
    variant?: "default" | "line" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TabsListVariants = VariantProps<typeof tabsListVariants>;
