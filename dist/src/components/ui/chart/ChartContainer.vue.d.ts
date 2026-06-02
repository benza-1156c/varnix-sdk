import { HTMLAttributes } from 'vue';
import { ChartConfig } from '.';
declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: __VLS_WithSlots<import('vue').DefineComponent<{
    id?: HTMLAttributes["id"];
    class?: HTMLAttributes["class"];
    config: ChartConfig;
    cursor?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    id?: HTMLAttributes["id"];
    class?: HTMLAttributes["class"];
    config: ChartConfig;
    cursor?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, {
    default: {
        id: string;
        config: ChartConfig;
    };
}>;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
