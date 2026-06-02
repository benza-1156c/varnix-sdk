import { SplitterPanelProps } from 'reka-ui';
declare var __VLS_8: {
    isCollapsed: boolean;
    isExpanded: boolean;
    collapse: () => void;
    expand: () => void;
    resize: (size: number) => void;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import('vue').DefineComponent<SplitterPanelProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    resize: (size: number, prevSize: number | undefined) => any;
    collapse: () => any;
    expand: () => any;
}, string, import('vue').PublicProps, Readonly<SplitterPanelProps> & Readonly<{
    onResize?: ((size: number, prevSize: number | undefined) => any) | undefined;
    onCollapse?: (() => any) | undefined;
    onExpand?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
