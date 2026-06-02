import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createSSRApp as o, createTextVNode as s, createVNode as c, defineComponent as l, guardReactiveProps as u, inject as d, isRef as f, mergeProps as p, normalizeClass as m, normalizeProps as h, normalizeStyle as g, onMounted as _, onUnmounted as v, openBlock as y, provide as b, reactive as ee, ref as x, renderList as S, renderSlot as C, resolveDynamicComponent as te, toDisplayString as w, toRaw as ne, toRefs as re, toValue as ie, unref as T, vModelSelect as ae, vModelText as oe, watch as se, withCtx as E, withDirectives as ce } from "vue";
import { createInjectionState as le, createReusableTemplate as ue, defaultDocument as de, reactiveOmit as D, useCurrentElement as fe, useEventListener as pe, useMediaQuery as me, useVModel as O } from "@vueuse/core";
import { AccordionContent as he, AccordionHeader as ge, AccordionItem as _e, AccordionRoot as ve, AccordionTrigger as ye, AlertDialogAction as be, AlertDialogCancel as xe, AlertDialogContent as Se, AlertDialogDescription as Ce, AlertDialogOverlay as we, AlertDialogPortal as Te, AlertDialogRoot as Ee, AlertDialogTitle as De, AlertDialogTrigger as Oe, AspectRatio as ke, AvatarFallback as Ae, AvatarImage as je, AvatarRoot as Me, CalendarCell as Ne, CalendarCellTrigger as Pe, CalendarGrid as Fe, CalendarGridBody as Ie, CalendarGridHead as Le, CalendarGridRow as Re, CalendarHeadCell as ze, CalendarHeader as Be, CalendarHeading as Ve, CalendarNext as He, CalendarPrev as Ue, CalendarRoot as We, CheckboxIndicator as Ge, CheckboxRoot as Ke, CollapsibleContent as qe, CollapsibleRoot as Je, CollapsibleTrigger as Ye, ComboboxAnchor as Xe, ComboboxContent as Ze, ComboboxEmpty as Qe, ComboboxGroup as $e, ComboboxInput as et, ComboboxItem as tt, ComboboxItemIndicator as nt, ComboboxLabel as rt, ComboboxPortal as it, ComboboxRoot as at, ComboboxSeparator as ot, ComboboxTrigger as st, ComboboxViewport as ct, ContextMenuCheckboxItem as lt, ContextMenuContent as ut, ContextMenuGroup as dt, ContextMenuItem as ft, ContextMenuItemIndicator as pt, ContextMenuLabel as mt, ContextMenuPortal as ht, ContextMenuRadioGroup as gt, ContextMenuRadioItem as _t, ContextMenuRoot as vt, ContextMenuSeparator as yt, ContextMenuSub as bt, ContextMenuSubContent as xt, ContextMenuSubTrigger as St, ContextMenuTrigger as Ct, DialogClose as k, DialogContent as wt, DialogDescription as Tt, DialogOverlay as Et, DialogPortal as Dt, DialogRoot as Ot, DialogTitle as kt, DialogTrigger as At, DropdownMenuCheckboxItem as jt, DropdownMenuContent as Mt, DropdownMenuGroup as Nt, DropdownMenuItem as Pt, DropdownMenuItemIndicator as Ft, DropdownMenuLabel as It, DropdownMenuPortal as Lt, DropdownMenuRadioGroup as Rt, DropdownMenuRadioItem as zt, DropdownMenuRoot as Bt, DropdownMenuSeparator as Vt, DropdownMenuSub as Ht, DropdownMenuSubContent as Ut, DropdownMenuSubTrigger as Wt, DropdownMenuTrigger as Gt, HoverCardContent as Kt, HoverCardPortal as qt, HoverCardRoot as Jt, HoverCardTrigger as Yt, Label as Xt, ListboxContent as Zt, ListboxFilter as Qt, ListboxGroup as $t, ListboxGroupLabel as en, ListboxItem as tn, ListboxRoot as nn, MenubarCheckboxItem as rn, MenubarContent as an, MenubarGroup as on, MenubarItem as sn, MenubarItemIndicator as cn, MenubarLabel as ln, MenubarMenu as un, MenubarPortal as dn, MenubarRadioGroup as fn, MenubarRadioItem as pn, MenubarRoot as mn, MenubarSeparator as hn, MenubarSub as gn, MenubarSubContent as _n, MenubarSubTrigger as vn, MenubarTrigger as yn, NavigationMenuContent as bn, NavigationMenuIndicator as xn, NavigationMenuItem as Sn, NavigationMenuLink as Cn, NavigationMenuList as wn, NavigationMenuRoot as Tn, NavigationMenuTrigger as En, NavigationMenuViewport as Dn, NumberFieldDecrement as On, NumberFieldIncrement as kn, NumberFieldInput as An, NumberFieldRoot as jn, PaginationEllipsis as Mn, PaginationFirst as Nn, PaginationLast as Pn, PaginationList as Fn, PaginationListItem as In, PaginationNext as Ln, PaginationPrev as Rn, PaginationRoot as zn, PinInputInput as Bn, PinInputRoot as Vn, PopoverAnchor as Hn, PopoverContent as Un, PopoverPortal as Wn, PopoverRoot as Gn, PopoverTrigger as Kn, Primitive as A, ProgressIndicator as qn, ProgressRoot as Jn, RadioGroupIndicator as Yn, RadioGroupItem as Xn, RadioGroupRoot as Zn, RangeCalendarCell as Qn, RangeCalendarCellTrigger as $n, RangeCalendarGrid as er, RangeCalendarGridBody as tr, RangeCalendarGridHead as nr, RangeCalendarGridRow as rr, RangeCalendarHeadCell as ir, RangeCalendarHeader as ar, RangeCalendarHeading as or, RangeCalendarNext as sr, RangeCalendarPrev as cr, RangeCalendarRoot as lr, ScrollAreaCorner as ur, ScrollAreaRoot as dr, ScrollAreaScrollbar as fr, ScrollAreaThumb as pr, ScrollAreaViewport as mr, SelectContent as hr, SelectGroup as gr, SelectIcon as _r, SelectItem as vr, SelectItemIndicator as yr, SelectItemText as br, SelectLabel as xr, SelectPortal as Sr, SelectRoot as Cr, SelectScrollDownButton as wr, SelectScrollUpButton as Tr, SelectSeparator as Er, SelectTrigger as Dr, SelectValue as Or, SelectViewport as kr, Separator as Ar, SliderRange as jr, SliderRoot as Mr, SliderThumb as Nr, SliderTrack as Pr, Slot as Fr, SplitterGroup as Ir, SplitterPanel as Lr, SplitterResizeHandle as Rr, StepperDescription as zr, StepperIndicator as Br, StepperItem as Vr, StepperRoot as Hr, StepperSeparator as Ur, StepperTitle as Wr, StepperTrigger as Gr, SwitchRoot as Kr, SwitchThumb as qr, TabsContent as Jr, TabsList as Yr, TabsRoot as Xr, TabsTrigger as Zr, TagsInputInput as Qr, TagsInputItem as $r, TagsInputItemDelete as ei, TagsInputItemText as ti, TagsInputRoot as ni, Toggle as ri, ToggleGroupItem as ii, ToggleGroupRoot as ai, TooltipArrow as oi, TooltipContent as si, TooltipPortal as ci, TooltipProvider as li, TooltipRoot as ui, TooltipTrigger as di, createContext as fi, useDateFormatter as pi, useFilter as mi, useForwardExpose as hi, useForwardProps as j, useForwardPropsEmits as M, useId as gi } from "reka-ui";
import { clsx as _i } from "clsx";
import { twMerge as vi } from "tailwind-merge";
import { CheckIcon as N, ChevronDownIcon as P, ChevronLeftIcon as yi, ChevronRightIcon as F, ChevronUpIcon as bi, ChevronsLeftIcon as xi, ChevronsRightIcon as Si, CircleCheckIcon as Ci, CircleIcon as wi, InfoIcon as Ti, Loader2Icon as Ei, MinusIcon as Di, MoreHorizontalIcon as Oi, OctagonXIcon as ki, PanelLeftIcon as Ai, PlusIcon as ji, SearchIcon as Mi, TriangleAlertIcon as Ni, XIcon as I } from "@lucide/vue";
import { cva as L } from "class-variance-authority";
import Pi from "embla-carousel-vue";
import { DrawerClose as Fi, DrawerContent as Ii, DrawerDescription as Li, DrawerOverlay as Ri, DrawerPortal as zi, DrawerRoot as Bi, DrawerTitle as Vi, DrawerTrigger as Hi } from "vaul-vue";
import { ErrorMessage as Ui, FieldContextKey as Wi } from "vee-validate";
import { OTPInput as Gi, useVueOTPContext as Ki } from "vue-input-otp";
import { Toaster as qi } from "vue-sonner";
import { print as Ji } from "graphql";
import { renderToString as Yi } from "@vue/server-renderer";
//#region src/lib/utils.ts
function R(...e) {
	return vi(_i(e));
}
//#endregion
//#region src/components/ui/accordion/Accordion.vue
var Xi = /* @__PURE__ */ l({
	__name: "Accordion",
	props: {
		collapsible: { type: Boolean },
		disabled: { type: Boolean },
		dir: {},
		orientation: {},
		unmountOnHide: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		type: {},
		modelValue: {},
		defaultValue: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(ve), p({ "data-slot": "accordion" }, T(a), { class: T(R)("flex w-full flex-col", r.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Zi = /* @__PURE__ */ l({
	__name: "AccordionContent",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(he), p({ "data-slot": "accordion-content" }, T(r), { class: "data-open:animate-accordion-down data-closed:animate-accordion-up text-sm overflow-hidden" }), {
			default: E(() => [a("div", { class: m(T(R)("pt-0 pb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", t.class)) }, [C(e.$slots, "default")], 2)]),
			_: 3
		}, 16));
	}
}), Qi = /* @__PURE__ */ l({
	__name: "AccordionItem",
	props: {
		disabled: { type: Boolean },
		value: {},
		unmountOnHide: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(_e), p({ "data-slot": "accordion-item" }, T(r), { class: T(R)("not-last:border-b", t.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), $i = /* @__PURE__ */ l({
	__name: "AccordionTrigger",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(ge), { class: "flex" }, {
			default: E(() => [c(T(ye), p({ "data-slot": "accordion-trigger" }, T(r), { class: T(R)("focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground rounded-md py-4 text-left text-sm font-medium hover:underline focus-visible:ring-3 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50", t.class) }), {
				default: E(() => [C(e.$slots, "default"), C(e.$slots, "icon", {}, () => [c(T(P), {
					"data-slot": "accordion-trigger-icon",
					class: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
				}), c(T(bi), {
					"data-slot": "accordion-trigger-icon",
					class: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
				})])]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), ea = /* @__PURE__ */ l({
	__name: "Alert",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: {}
	},
	setup(e) {
		let t = e;
		return (n, r) => (y(), i("div", {
			"data-slot": "alert",
			class: m(T(R)(T(ia)({ variant: e.variant }), t.class)),
			role: "alert"
		}, [C(n.$slots, "default")], 2));
	}
}), ta = /* @__PURE__ */ l({
	__name: "AlertAction",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "alert-action",
			class: m(T(R)("absolute top-2.5 right-3", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), na = /* @__PURE__ */ l({
	__name: "AlertDescription",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "alert-description",
			class: m(T(R)("text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), ra = /* @__PURE__ */ l({
	__name: "AlertTitle",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "alert-title",
			class: m(T(R)("font-medium group-has-[>svg]/alert:col-start-2 cn-font-heading [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), ia = L("grid gap-0.5 rounded-lg border px-4 py-3 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*=size-])]:size-4 group/alert relative w-full", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
	} },
	defaultVariants: { variant: "default" }
}), aa = /* @__PURE__ */ l({
	__name: "AlertDialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(Ee), p({ "data-slot": "alert-dialog" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), z = /* @__PURE__ */ l({
	__name: "Button",
	props: {
		variant: {},
		size: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		asChild: { type: Boolean },
		as: { default: "button" }
	},
	setup(e) {
		let t = e;
		return (r, i) => (y(), n(T(A), {
			"data-slot": "button",
			"data-variant": e.variant,
			"data-size": e.size,
			as: e.as,
			"as-child": e.asChild,
			class: m(T(R)(T(B)({
				variant: e.variant,
				size: e.size
			}), t.class))
		}, {
			default: E(() => [C(r.$slots, "default")]),
			_: 3
		}, 8, [
			"data-variant",
			"data-size",
			"as",
			"as-child",
			"class"
		]));
	}
}), B = L("focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 active:not-aria-[haspopup]:translate-y-px [&_svg:not([class*=size-])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
			destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*=size-])]:size-3",
			sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
			lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-9",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*=size-])]:size-3",
			"icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), oa = /* @__PURE__ */ l({
	__name: "AlertDialogAction",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: { default: "default" },
		size: { default: "default" }
	},
	setup(e) {
		let t = e, r = D(t, "class", "variant", "size");
		return (i, a) => (y(), n(T(be), p({ "data-slot": "alert-dialog-action" }, T(r), { class: T(R)("", T(B)({
			variant: e.variant,
			size: e.size
		}), t.class) }), {
			default: E(() => [C(i.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), sa = /* @__PURE__ */ l({
	__name: "AlertDialogCancel",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: { default: "outline" },
		size: { default: "default" }
	},
	setup(e) {
		let t = e, r = D(t, "class", "variant", "size");
		return (i, a) => (y(), n(T(xe), p({ "data-slot": "alert-dialog-cancel" }, T(r), { class: T(R)("", T(B)({
			variant: e.variant,
			size: e.size
		}), t.class) }), {
			default: E(() => [C(i.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), ca = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "AlertDialogContent",
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: { default: "default" }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class", "size"), i);
		return (t, i) => (y(), n(T(Te), null, {
			default: E(() => [c(T(we), {
				"data-slot": "alert-dialog-overlay",
				class: "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50"
			}), c(T(Se), p({
				"data-slot": "alert-dialog-content",
				"data-size": e.size
			}, {
				...t.$attrs,
				...T(a)
			}, { class: T(R)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-popover text-popover-foreground ring-foreground/10 gap-6 rounded-xl p-6 ring-1 duration-100 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-lg group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none", r.class) }), {
				default: E(() => [C(t.$slots, "default")]),
				_: 3
			}, 16, ["data-size", "class"])]),
			_: 3
		}));
	}
}), la = /* @__PURE__ */ l({
	__name: "AlertDialogDescription",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Ce), p({ "data-slot": "alert-dialog-description" }, T(r), { class: T(R)("text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), ua = /* @__PURE__ */ l({
	__name: "AlertDialogFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "alert-dialog-footer",
			class: m(T(R)("flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), da = /* @__PURE__ */ l({
	__name: "AlertDialogHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "alert-dialog-header",
			class: m(T(R)("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), fa = /* @__PURE__ */ l({
	__name: "AlertDialogMedia",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "alert-dialog-media",
			class: m(T(R)("bg-muted mb-2 inline-flex size-16 items-center justify-center rounded-md sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*=size-])]:size-8", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), pa = /* @__PURE__ */ l({
	__name: "AlertDialogTitle",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(De), p({ "data-slot": "alert-dialog-title" }, T(r), { class: T(R)("text-lg font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2 cn-font-heading", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), ma = /* @__PURE__ */ l({
	__name: "AlertDialogTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Oe), p({ "data-slot": "alert-dialog-trigger" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ha = /* @__PURE__ */ l({
	__name: "AspectRatio",
	props: {
		ratio: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(ke), p({ "data-slot": "aspect-ratio" }, t), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), ga = /* @__PURE__ */ l({
	__name: "Avatar",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: {}
	},
	setup(e) {
		let t = e;
		return (r, i) => (y(), n(T(Me), {
			"data-slot": "avatar",
			"data-size": e.size ?? "default",
			class: m(T(R)(T(Sa)({ size: e.size }), t.class))
		}, {
			default: E(() => [C(r.$slots, "default")]),
			_: 3
		}, 8, ["data-size", "class"]));
	}
}), _a = /* @__PURE__ */ l({
	__name: "AvatarBadge",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("span", {
			"data-slot": "avatar-badge",
			class: m(T(R)("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), va = /* @__PURE__ */ l({
	__name: "AvatarFallback",
	props: {
		delayMs: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Ae), p({ "data-slot": "avatar-fallback" }, T(r), { class: T(R)("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), ya = /* @__PURE__ */ l({
	__name: "AvatarGroup",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "avatar-group",
			class: m(T(R)("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), ba = /* @__PURE__ */ l({
	__name: "AvatarGroupCount",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "avatar-group-count",
			class: m(T(R)("bg-muted text-muted-foreground size-8 rounded-full text-sm group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 relative flex shrink-0 items-center justify-center ring-2 ring-background", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), xa = /* @__PURE__ */ l({
	__name: "AvatarImage",
	props: {
		src: {},
		referrerPolicy: {},
		crossOrigin: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(je), p({ "data-slot": "avatar-image" }, t, { class: "rounded-full aspect-square size-full object-cover" }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Sa = L("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten", {
	variants: { size: {
		sm: "",
		default: "",
		lg: ""
	} },
	defaultVariants: { size: "default" }
}), Ca = /* @__PURE__ */ l({
	__name: "Badge",
	props: {
		asChild: { type: Boolean },
		as: {},
		variant: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (i, a) => (y(), n(T(A), p({
			"data-slot": "badge",
			"data-variant": e.variant,
			class: T(R)(T(wa)({ variant: e.variant }), t.class)
		}, T(r)), {
			default: E(() => [C(i.$slots, "default")]),
			_: 3
		}, 16, ["data-variant", "class"]));
	}
}), wa = L("h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
}), Ta = /* @__PURE__ */ l({
	__name: "Breadcrumb",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("nav", {
			"aria-label": "breadcrumb",
			"data-slot": "breadcrumb",
			class: m(T(R)("", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Ea = /* @__PURE__ */ l({
	__name: "BreadcrumbEllipsis",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("span", {
			"data-slot": "breadcrumb-ellipsis",
			role: "presentation",
			"aria-hidden": "true",
			class: m(T(R)("size-5 [&>svg]:size-4 flex items-center justify-center", t.class))
		}, [C(e.$slots, "default", {}, () => [c(T(Oi))]), n[0] ||= a("span", { class: "sr-only" }, "More", -1)], 2));
	}
}), Da = /* @__PURE__ */ l({
	__name: "BreadcrumbItem",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("li", {
			"data-slot": "breadcrumb-item",
			class: m(T(R)("gap-1.5 inline-flex items-center", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Oa = /* @__PURE__ */ l({
	__name: "BreadcrumbLink",
	props: {
		asChild: { type: Boolean },
		as: { default: "a" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (r, i) => (y(), n(T(A), {
			"data-slot": "breadcrumb-link",
			as: e.as,
			"as-child": e.asChild,
			class: m(T(R)("hover:text-foreground transition-colors", t.class))
		}, {
			default: E(() => [C(r.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class"
		]));
	}
}), ka = /* @__PURE__ */ l({
	__name: "BreadcrumbList",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("ol", {
			"data-slot": "breadcrumb-list",
			class: m(T(R)("text-muted-foreground gap-1.5 text-sm sm:gap-2.5 flex flex-wrap items-center wrap-break-word", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Aa = /* @__PURE__ */ l({
	__name: "BreadcrumbPage",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("span", {
			"data-slot": "breadcrumb-page",
			role: "link",
			"aria-disabled": "true",
			"aria-current": "page",
			class: m(T(R)("text-foreground font-normal", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), ja = /* @__PURE__ */ l({
	__name: "BreadcrumbSeparator",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("li", {
			"data-slot": "breadcrumb-separator",
			role: "presentation",
			"aria-hidden": "true",
			class: m(T(R)("[&>svg]:size-3.5", t.class))
		}, [C(e.$slots, "default", {}, () => [c(T(F), { class: "cn-rtl-flip" })])], 2));
	}
}), Ma = ["data-orientation"], Na = /* @__PURE__ */ l({
	__name: "ButtonGroup",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		orientation: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			role: "group",
			"data-slot": "button-group",
			"data-orientation": t.orientation,
			class: m(T(R)(T(Ia)({ orientation: t.orientation }), t.class))
		}, [C(e.$slots, "default")], 10, Ma));
	}
}), V = /* @__PURE__ */ l({
	__name: "Separator",
	props: {
		orientation: { default: "horizontal" },
		decorative: {
			type: Boolean,
			default: !0
		},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Ar), p({ "data-slot": "separator" }, T(r), { class: T(R)("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch", t.class) }), null, 16, ["class"]));
	}
}), Pa = /* @__PURE__ */ l({
	__name: "ButtonGroupSeparator",
	props: {
		orientation: { default: "vertical" },
		decorative: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(V), p({ "data-slot": "button-group-separator" }, T(r), {
			orientation: t.orientation,
			class: T(R)("bg-input relative self-stretch data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto", t.class)
		}), null, 16, ["orientation", "class"]));
	}
}), Fa = /* @__PURE__ */ l({
	__name: "ButtonGroupText",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		orientation: {},
		asChild: { type: Boolean },
		as: { default: "div" }
	},
	setup(e) {
		let t = e;
		return (r, i) => (y(), n(T(A), {
			role: "group",
			"data-orientation": t.orientation,
			as: e.as,
			"as-child": e.asChild,
			class: m(T(R)("bg-muted gap-2 rounded-md border px-2.5 text-sm font-medium shadow-xs [&_svg:not([class*=size-])]:size-4 flex items-center [&_svg]:pointer-events-none", t.class))
		}, {
			default: E(() => [C(r.$slots, "default")]),
			_: 3
		}, 8, [
			"data-orientation",
			"as",
			"as-child",
			"class"
		]));
	}
}), Ia = L("has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1", {
	variants: { orientation: {
		horizontal: "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-md! [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
		vertical: "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-md! flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
	} },
	defaultVariants: { orientation: "horizontal" }
});
//#endregion
//#region node_modules/@internationalized/date/dist/private/utils.mjs
function La(e, t) {
	return e - t * Math.floor(e / t);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/GregorianCalendar.mjs
var Ra = 1721426;
function za(e, t, n, r) {
	t = Va(e, t);
	let i = t - 1, a = -2;
	return n <= 2 ? a = 0 : Ba(t) && (a = -1), Ra - 1 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function Ba(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Va(e, t) {
	return e === "BC" ? 1 - t : t;
}
function Ha(e) {
	let t = "AD";
	return e <= 0 && (t = "BC", e = 1 - e), [t, e];
}
var Ua = {
	standard: [
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	],
	leapyear: [
		31,
		29,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	]
}, H = class {
	fromJulianDay(e) {
		let t = e, n = t - Ra, r = Math.floor(n / 146097), i = La(n, 146097), a = Math.floor(i / 36524), o = La(i, 36524), s = Math.floor(o / 1461), c = La(o, 1461), l = Math.floor(c / 365), [u, d] = Ha(r * 400 + a * 100 + s * 4 + l + +(a !== 4 && l !== 4)), f = t - za(u, d, 1, 1), p = 2;
		t < za(u, d, 3, 1) ? p = 0 : Ba(d) && (p = 1);
		let m = Math.floor(((f + p) * 12 + 373) / 367);
		return new zo(u, d, m, t - za(u, d, m, 1) + 1);
	}
	toJulianDay(e) {
		return za(e.era, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		return Ua[Ba(e.year) ? "leapyear" : "standard"][e.month - 1];
	}
	getMonthsInYear(e) {
		return 12;
	}
	getDaysInYear(e) {
		return Ba(e.year) ? 366 : 365;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getYearsInEra(e) {
		return 9999;
	}
	getEras() {
		return ["BC", "AD"];
	}
	isInverseEra(e) {
		return e.era === "BC";
	}
	balanceDate(e) {
		e.year <= 0 && (e.era = e.era === "BC" ? "AD" : "BC", e.year = 1 - e.year);
	}
	constructor() {
		this.identifier = "gregory";
	}
};
//#endregion
//#region node_modules/@internationalized/date/dist/private/queries.mjs
function Wa(e, t) {
	return e.isEqual?.(t) ?? t.isEqual?.(e) ?? e.identifier === t.identifier;
}
function Ga(e) {
	return K(Date.now(), e);
}
function Ka(e) {
	return lo(Ga(e));
}
function qa(e, t) {
	return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function Ja(e, t) {
	return Ya(e) - Ya(t);
}
function Ya(e) {
	return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
var Xa = null, Za = !1;
function U() {
	return Xa ??= new Intl.DateTimeFormat().resolvedOptions().timeZone, Xa;
}
function Qa() {
	return Za;
}
function $a(e) {
	return e.subtract({ days: e.day - 1 });
}
function eo(e) {
	return $a(e.subtract({ months: e.month - 1 }));
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/conversion.mjs
function W(e) {
	return e = J(e, new H()), to(Va(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function to(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Date();
	return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime();
}
function no(e, t) {
	if (t === "UTC") return 0;
	if (e > 0 && t === U() && !Qa()) return new Date(e).getTimezoneOffset() * -6e4;
	let { year: n, month: r, day: i, hour: a, minute: o, second: s } = io(e, t);
	return to(n, r, i, a, o, s, 0) - Math.floor(e / 1e3) * 1e3;
}
var ro = /* @__PURE__ */ new Map();
function io(e, t) {
	let n = ro.get(t);
	n || (n = new Intl.DateTimeFormat("en-US", {
		timeZone: t,
		hour12: !1,
		era: "short",
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	}), ro.set(t, n));
	let r = n.formatToParts(new Date(e)), i = {};
	for (let e of r) e.type !== "literal" && (i[e.type] = e.value);
	return {
		year: i.era === "BC" || i.era === "B" ? -i.year + 1 : +i.year,
		month: +i.month,
		day: +i.day,
		hour: i.hour === "24" ? 0 : +i.hour,
		minute: +i.minute,
		second: +i.second
	};
}
var ao = 864e5;
function oo(e, t, n, r) {
	return (n === r ? [n] : [n, r]).filter((n) => so(e, t, n));
}
function so(e, t, n) {
	let r = io(n, t);
	return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function G(e, t, n = "compatible") {
	let r = q(e);
	if (t === "UTC") return W(r);
	if (t === U() && n === "compatible" && !Qa()) {
		r = J(r, new H());
		let e = /* @__PURE__ */ new Date(), t = Va(r.era, r.year);
		return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
	}
	let i = W(r), a = no(i - ao, t), o = no(i + ao, t), s = oo(r, t, i - a, i - o);
	if (s.length === 1) return s[0];
	if (s.length > 1) switch (n) {
		case "compatible":
		case "earlier": return s[0];
		case "later": return s[s.length - 1];
		case "reject": throw RangeError("Multiple possible absolute times found");
	}
	switch (n) {
		case "earlier": return Math.min(i - a, i - o);
		case "compatible":
		case "later": return Math.max(i - a, i - o);
		case "reject": throw RangeError("No such absolute time found");
	}
}
function co(e, t, n = "compatible") {
	return new Date(G(e, t, n));
}
function K(e, t) {
	let n = no(e, t), r = new Date(e + n), i = r.getUTCFullYear(), a = r.getUTCMonth() + 1, o = r.getUTCDate(), s = r.getUTCHours(), c = r.getUTCMinutes(), l = r.getUTCSeconds(), u = r.getUTCMilliseconds();
	return new Vo(i < 1 ? "BC" : "AD", i < 1 ? -i + 1 : i, a, o, t, n, s, c, l, u);
}
function lo(e) {
	return new zo(e.calendar, e.era, e.year, e.month, e.day);
}
function q(e, t) {
	let n = 0, r = 0, i = 0, a = 0;
	if ("timeZone" in e) ({hour: n, minute: r, second: i, millisecond: a} = e);
	else if ("hour" in e && !t) return e;
	return t && ({hour: n, minute: r, second: i, millisecond: a} = t), new Bo(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function J(e, t) {
	if (Wa(e.calendar, t)) return e;
	let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
	return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, X(r), r;
}
function uo(e, t, n) {
	return e instanceof Vo ? e.timeZone === t ? e : po(e, t) : K(G(e, t, n), t);
}
function fo(e) {
	let t = W(e) - e.offset;
	return new Date(t);
}
function po(e, t) {
	return J(K(W(e) - e.offset, t), e.calendar);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/manipulation.mjs
var Y = 36e5;
function mo(e, t) {
	let n = e.copy(), r = "hour" in n ? Eo(n, t) : 0;
	ho(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, go(n), vo(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, _o(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
	let i = n.calendar.getYearsInEra(n);
	if (n.year > i) {
		let e = n.calendar.isInverseEra?.(n);
		n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n);
	}
	n.month < 1 && (n.month = 1, n.day = 1);
	let a = n.calendar.getMonthsInYear(n);
	return n.month > a && (n.month = a, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function ho(e, t) {
	e.calendar.isInverseEra?.(e) && (t = -t), e.year += t;
}
function go(e) {
	for (; e.month < 1;) ho(e, -1), e.month += e.calendar.getMonthsInYear(e);
	let t = 0;
	for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, ho(e, 1);
}
function _o(e) {
	for (; e.day < 1;) e.month--, go(e), e.day += e.calendar.getDaysInMonth(e);
	for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, go(e);
}
function vo(e) {
	e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function X(e) {
	e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), vo(e);
}
function yo(e) {
	let t = {};
	for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
	return t;
}
function bo(e, t) {
	return mo(e, yo(t));
}
function xo(e, t) {
	let n = e.copy();
	return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), X(n), n;
}
function So(e, t) {
	let n = e.copy();
	return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), wo(n), n;
}
function Co(e) {
	e.second += Math.floor(e.millisecond / 1e3), e.millisecond = To(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = To(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = To(e.minute, 60);
	let t = Math.floor(e.hour / 24);
	return e.hour = To(e.hour, 24), t;
}
function wo(e) {
	e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function To(e, t) {
	let n = e % t;
	return n < 0 && (n += t), n;
}
function Eo(e, t) {
	return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, Co(e);
}
function Do(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "era": {
			let t = e.calendar.getEras(), a = t.indexOf(e.era);
			if (a < 0) throw Error("Invalid era: " + e.era);
			a = Z(a, n, 0, t.length - 1, r?.round), i.era = t[a], X(i);
			break;
		}
		case "year":
			i.calendar.isInverseEra?.(i) && (n = -n), i.year = Z(e.year, n, -Infinity, 9999, r?.round), i.year === -Infinity && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
			break;
		case "month":
			i.month = Z(e.month, n, 1, e.calendar.getMonthsInYear(e), r?.round);
			break;
		case "day":
			i.day = Z(e.day, n, 1, e.calendar.getDaysInMonth(e), r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return e.calendar.balanceDate && e.calendar.balanceDate(i), X(i), i;
}
function Oo(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "hour": {
			let t = e.hour, a = 0, o = 23;
			if (r?.hourCycle === 12) {
				let e = t >= 12;
				a = e ? 12 : 0, o = e ? 23 : 11;
			}
			i.hour = Z(t, n, a, o, r?.round);
			break;
		}
		case "minute":
			i.minute = Z(e.minute, n, 0, 59, r?.round);
			break;
		case "second":
			i.second = Z(e.second, n, 0, 59, r?.round);
			break;
		case "millisecond":
			i.millisecond = Z(e.millisecond, n, 0, 999, r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return i;
}
function Z(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function ko(e, t) {
	let n;
	return n = t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0 ? G(mo(q(e), {
		years: t.years,
		months: t.months,
		weeks: t.weeks,
		days: t.days
	}), e.timeZone) : W(e) - e.offset, n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5, J(K(n, e.timeZone), e.calendar);
}
function Ao(e, t) {
	return ko(e, yo(t));
}
function jo(e, t, n, r) {
	switch (t) {
		case "hour": {
			let t = 0, i = 23;
			if (r?.hourCycle === 12) {
				let n = e.hour >= 12;
				t = n ? 12 : 0, i = n ? 23 : 11;
			}
			let a = q(e), o = J(So(a, { hour: t }), new H()), s = [G(o, e.timeZone, "earlier"), G(o, e.timeZone, "later")].filter((t) => K(t, e.timeZone).day === o.day)[0], c = J(So(a, { hour: i }), new H()), l = [G(c, e.timeZone, "earlier"), G(c, e.timeZone, "later")].filter((t) => K(t, e.timeZone).day === c.day).pop(), u = W(e) - e.offset, d = Math.floor(u / Y), f = u % Y;
			return u = Z(d, n, Math.floor(s / Y), Math.floor(l / Y), r?.round) * Y + f, J(K(u, e.timeZone), e.calendar);
		}
		case "minute":
		case "second":
		case "millisecond": return Oo(e, t, n, r);
		case "era":
		case "year":
		case "month":
		case "day": return J(K(G(Do(q(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
		default: throw Error("Unsupported field " + t);
	}
}
function Mo(e, t, n) {
	let r = q(e), i = So(xo(r, t), t);
	return i.compare(r) === 0 ? e : J(K(G(i, e.timeZone, n), e.timeZone), e.calendar);
}
function No(e) {
	return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function Po(e) {
	let t = J(e, new H()), n;
	return n = t.era === "BC" ? t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : String(t.year).padStart(4, "0"), `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function Fo(e) {
	return `${Po(e)}T${No(e)}`;
}
function Io(e) {
	let t = Math.sign(e) < 0 ? "-" : "+";
	e = Math.abs(e);
	let n = Math.floor(e / 36e5), r = Math.floor(e % 36e5 / 6e4), i = Math.floor(e % 36e5 % 6e4 / 1e3), a = `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
	return i !== 0 && (a += `:${String(i).padStart(2, "0")}`), a;
}
function Lo(e) {
	return `${Fo(e)}${Io(e.offset)}[${e.timeZone}]`;
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/CalendarDate.mjs
function Ro(e) {
	let t = typeof e[0] == "object" ? e.shift() : new H(), n;
	if (typeof e[0] == "string") n = e.shift();
	else {
		let e = t.getEras();
		n = e[e.length - 1];
	}
	let r = e.shift(), i = e.shift(), a = e.shift();
	return [
		t,
		n,
		r,
		i,
		a
	];
}
var zo = class e {
	constructor(...e) {
		let [t, n, r, i, a] = Ro(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, X(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day) : new e(this.calendar, this.year, this.month, this.day);
	}
	add(e) {
		return mo(this, e);
	}
	subtract(e) {
		return bo(this, e);
	}
	set(e) {
		return xo(this, e);
	}
	cycle(e, t, n) {
		return Do(this, e, t, n);
	}
	toDate(e) {
		return co(this, e);
	}
	toString() {
		return Po(this);
	}
	compare(e) {
		return qa(this, e);
	}
}, Bo = class e {
	constructor(...e) {
		let [t, n, r, i, a] = Ro(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, X(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return mo(this, e);
	}
	subtract(e) {
		return bo(this, e);
	}
	set(e) {
		return xo(So(this, e), e);
	}
	cycle(e, t, n) {
		switch (e) {
			case "era":
			case "year":
			case "month":
			case "day": return Do(this, e, t, n);
			default: return Oo(this, e, t, n);
		}
	}
	toDate(e, t) {
		return co(this, e, t);
	}
	toString() {
		return Fo(this);
	}
	compare(e) {
		let t = qa(this, e);
		return t === 0 ? Ja(this, q(e)) : t;
	}
}, Vo = class e {
	constructor(...e) {
		let [t, n, r, i, a] = Ro(e), o = e.shift(), s = e.shift();
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.timeZone = o, this.offset = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, X(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return ko(this, e);
	}
	subtract(e) {
		return Ao(this, e);
	}
	set(e, t) {
		return Mo(this, e, t);
	}
	cycle(e, t, n) {
		return jo(this, e, t, n);
	}
	toDate() {
		return fo(this);
	}
	toString() {
		return Lo(this);
	}
	toAbsoluteString() {
		return this.toDate().toISOString();
	}
	compare(e) {
		return this.toDate().getTime() - uo(e, this.timeZone).toDate().getTime();
	}
};
//#endregion
//#region node_modules/reka-ui/dist/date/comparators.js
function Q(e, t = U()) {
	return Ho(e) ? e.toDate() : e.toDate(t);
}
function Ho(e) {
	return e instanceof Vo;
}
//#endregion
//#region node_modules/reka-ui/dist/date/calendar.js
function Uo(e) {
	let { dateObj: t, numberOfMonths: n = 1, pagedNavigation: r = !1 } = e;
	return n && r ? Array.from({ length: Math.floor(12 / n) }, (e, r) => $a(t.set({ month: r * n + 1 }))) : Array.from({ length: 12 }, (e, n) => $a(t.set({ month: n + 1 })));
}
function Wo({ start: e, end: t }) {
	let n = [];
	if (!e || !t) return n;
	let r = eo(e);
	for (; r.compare(t) <= 0;) n.push(r), r = eo(r.add({ years: 1 }));
	return n;
}
//#endregion
//#region src/components/ui/native-select/NativeSelect.vue?vue&type=script&setup=true&lang.ts
var Go = ["data-size"], Ko = ["data-size"], qo = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "NativeSelect",
	props: {
		modelValue: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = O(n, "modelValue", t, {
			passive: !0,
			defaultValue: ""
		}), o = D(n, "class", "size");
		return (e, t) => (y(), i("div", {
			class: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
			"data-slot": "native-select-wrapper",
			"data-size": n.size ?? "default"
		}, [ce(a("select", p({
			...e.$attrs,
			...T(o)
		}, {
			"onUpdate:modelValue": t[0] ||= (e) => f(r) ? r.value = e : null,
			"data-slot": "native-select",
			"data-size": n.size ?? "default",
			class: T(R)("border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent py-1 pr-8 pl-2.5 text-sm shadow-xs transition-[color,box-shadow] select-none focus-visible:ring-3 aria-invalid:ring-3 data-[size=sm]:h-8 outline-none disabled:pointer-events-none disabled:cursor-not-allowed", n.class)
		}), [C(e.$slots, "default")], 16, Ko), [[ae, T(r)]]), c(T(P), {
			class: "text-muted-foreground top-1/2 right-2.5 size-4 -translate-y-1/2 pointer-events-none absolute select-none",
			"aria-hidden": "true",
			"data-slot": "native-select-icon"
		})], 8, Go));
	}
}), Jo = /* @__PURE__ */ l({
	__name: "NativeSelectOptGroup",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("optgroup", {
			"data-slot": "native-select-optgroup",
			class: m(T(R)("bg-[Canvas] text-[CanvasText]", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Yo = /* @__PURE__ */ l({
	__name: "NativeSelectOption",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("option", {
			"data-slot": "native-select-option",
			class: m(T(R)("bg-[Canvas] text-[CanvasText]", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Xo = { class: "**:data-[slot=native-select-icon]:right-1" }, Zo = { class: "relative" }, Qo = { class: "absolute inset-0 flex h-full items-center text-sm pl-2 pointer-events-none" }, $o = { class: "**:data-[slot=native-select-icon]:right-1" }, es = { class: "relative" }, ts = { class: "absolute inset-0 flex h-full items-center text-sm pl-2 pointer-events-none" }, ns = { class: "flex items-center gap-1 absolute top-0 inset-x-0 justify-between" }, rs = {
	key: 0,
	class: "flex items-center justify-center gap-1"
}, is = {
	key: 1,
	class: "flex items-center justify-center gap-1"
}, as = {
	key: 2,
	class: "flex items-center justify-center gap-1"
}, os = { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, ss = /* @__PURE__ */ l({
	__name: "Calendar",
	props: {
		defaultValue: {},
		defaultPlaceholder: {},
		placeholder: {},
		pagedNavigation: { type: Boolean },
		preventDeselect: { type: Boolean },
		weekStartsOn: {},
		weekdayFormat: {},
		calendarLabel: {},
		fixedWeeks: { type: Boolean },
		maxValue: {},
		minValue: {},
		locale: {},
		numberOfMonths: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		initialFocus: { type: Boolean },
		isDateDisabled: {},
		isDateUnavailable: {},
		dir: {},
		nextPage: {},
		prevPage: {},
		modelValue: { default: void 0 },
		multiple: { type: Boolean },
		disableDaysOutsideCurrentView: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		layout: { default: void 0 },
		yearRange: {}
	},
	emits: ["update:modelValue", "update:placeholder"],
	setup(r, { emit: o }) {
		let l = r, u = o, d = D(l, "class", "layout", "placeholder"), m = O(l, "placeholder", u, {
			passive: !0,
			defaultValue: l.defaultPlaceholder ?? Ka(U())
		}), h = pi(l.locale ?? "en"), g = t(() => l.yearRange ?? Wo({
			start: l?.minValue ?? (ne(l.placeholder) ?? l.defaultPlaceholder ?? Ka(U())).cycle("year", -100),
			end: l?.maxValue ?? (ne(l.placeholder) ?? l.defaultPlaceholder ?? Ka(U())).cycle("year", 10)
		})), [_, v] = ue(), [b, ee] = ue(), x = M(d, u);
		return (t, o) => (y(), i(e, null, [
			c(T(_), null, {
				default: E(({ date: t }) => [a("div", Xo, [a("div", Zo, [a("div", Qo, w(T(h).custom(T(Q)(t), { month: "short" })), 1), c(T(qo), {
					class: "text-xs h-8 pr-6 pl-2 text-transparent relative",
					onChange: o[0] ||= (e) => {
						m.value = T(m).set({ month: Number(e?.target?.value) });
					}
				}, {
					default: E(() => [(y(!0), i(e, null, S(T(Uo)({ dateObj: t }), (e) => (y(), n(T(Yo), {
						key: e.toString(),
						value: e.month,
						selected: t.month === e.month
					}, {
						default: E(() => [s(w(T(h).custom(T(Q)(e), { month: "short" })), 1)]),
						_: 2
					}, 1032, ["value", "selected"]))), 128))]),
					_: 2
				}, 1024)])])]),
				_: 1
			}),
			c(T(b), null, {
				default: E(({ date: t }) => [a("div", $o, [a("div", es, [a("div", ts, w(T(h).custom(T(Q)(t), { year: "numeric" })), 1), c(T(qo), {
					class: "text-xs h-8 pr-6 pl-2 text-transparent relative",
					onChange: o[1] ||= (e) => {
						m.value = T(m).set({ year: Number(e?.target?.value) });
					}
				}, {
					default: E(() => [(y(!0), i(e, null, S(g.value, (e) => (y(), n(T(Yo), {
						key: e.toString(),
						value: e.year,
						selected: t.year === e.year
					}, {
						default: E(() => [s(w(T(h).custom(T(Q)(e), { year: "numeric" })), 1)]),
						_: 2
					}, 1032, ["value", "selected"]))), 128))]),
					_: 2
				}, 1024)])])]),
				_: 1
			}),
			c(T(We), p(T(x), {
				placeholder: T(m),
				"onUpdate:placeholder": o[2] ||= (e) => f(m) ? m.value = e : null,
				"data-slot": "calendar",
				class: T(R)("p-3 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(8)] group/calendar bg-background in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent", l.class)
			}), {
				default: E(({ grid: o, weekDays: l, date: u }) => [c(T(hs), { class: "pt-0" }, {
					default: E(() => [a("nav", ns, [c(T(vs), null, {
						default: E(() => [C(t.$slots, "calendar-prev-icon")]),
						_: 3
					}), c(T(_s), null, {
						default: E(() => [C(t.$slots, "calendar-next-icon")]),
						_: 3
					})]), C(t.$slots, "calendar-heading", {
						date: u,
						month: T(v),
						year: T(ee)
					}, () => [r.layout === "month-and-year" ? (y(), i("div", rs, [c(T(v), { date: u }, null, 8, ["date"]), c(T(ee), { date: u }, null, 8, ["date"])])) : r.layout === "month-only" ? (y(), i("div", is, [c(T(v), { date: u }, null, 8, ["date"]), s(" " + w(T(h).custom(T(Q)(u), { year: "numeric" })), 1)])) : r.layout === "year-only" ? (y(), i("div", as, [s(w(T(h).custom(T(Q)(u), { month: "short" })) + " ", 1), c(T(ee), { date: u }, null, 8, ["date"])])) : (y(), n(T(gs), { key: 3 }))])]),
					_: 2
				}, 1024), a("div", os, [(y(!0), i(e, null, S(o, (t) => (y(), n(T(us), { key: t.value.toString() }, {
					default: E(() => [c(T(fs), null, {
						default: E(() => [c(T(ps), null, {
							default: E(() => [(y(!0), i(e, null, S(l, (e) => (y(), n(T(ms), { key: e }, {
								default: E(() => [s(w(e), 1)]),
								_: 2
							}, 1024))), 128))]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024), c(T(ds), null, {
						default: E(() => [(y(!0), i(e, null, S(t.rows, (r, a) => (y(), n(T(ps), {
							key: `weekDate-${a}`,
							class: "mt-2 w-full"
						}, {
							default: E(() => [(y(!0), i(e, null, S(r, (e) => (y(), n(T(cs), {
								key: e.toString(),
								date: e
							}, {
								default: E(() => [c(T(ls), {
									day: e,
									month: t.value
								}, null, 8, ["day", "month"])]),
								_: 2
							}, 1032, ["date"]))), 128))]),
							_: 2
						}, 1024))), 128))]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024))), 128))])]),
				_: 3
			}, 16, ["placeholder", "class"])
		], 64));
	}
}), cs = /* @__PURE__ */ l({
	__name: "CalendarCell",
	props: {
		date: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Ne), p({
			"data-slot": "calendar-cell",
			class: T(R)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), ls = /* @__PURE__ */ l({
	__name: "CalendarCellTrigger",
	props: {
		day: {},
		month: {},
		asChild: { type: Boolean },
		as: { default: "button" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Pe), p({
			"data-slot": "calendar-cell-trigger",
			class: T(R)(T(B)({ variant: "ghost" }), "size-8 p-0 font-normal aria-selected:opacity-100 cursor-default", "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground", "data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground", "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50", "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through", "data-[outside-view]:text-muted-foreground", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), us = /* @__PURE__ */ l({
	__name: "CalendarGrid",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Fe), p({
			"data-slot": "calendar-grid",
			class: T(R)("w-full border-collapse space-x-1", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), ds = /* @__PURE__ */ l({
	__name: "CalendarGridBody",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Ie), p({ "data-slot": "calendar-grid-body" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), fs = /* @__PURE__ */ l({
	__name: "CalendarGridHead",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Le), p({ "data-slot": "calendar-grid-head" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ps = /* @__PURE__ */ l({
	__name: "CalendarGridRow",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Re), p({
			"data-slot": "calendar-grid-row",
			class: T(R)("flex", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), ms = /* @__PURE__ */ l({
	__name: "CalendarHeadCell",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(ze), p({
			"data-slot": "calendar-head-cell",
			class: T(R)("text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem]", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), hs = /* @__PURE__ */ l({
	__name: "CalendarHeader",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Be), p({
			"data-slot": "calendar-header",
			class: T(R)("flex justify-center pt-1 relative items-center w-full px-8", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), gs = /* @__PURE__ */ l({
	__name: "CalendarHeading",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Ve), p({
			"data-slot": "calendar-heading",
			class: T(R)("text-sm font-medium", t.class)
		}, T(r)), {
			default: E(({ headingValue: t }) => [C(e.$slots, "default", { headingValue: t }, () => [s(w(t), 1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), _s = /* @__PURE__ */ l({
	__name: "CalendarNextButton",
	props: {
		nextPage: { type: Function },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(He), p({
			"data-slot": "calendar-next-button",
			class: T(R)(T(B)({ variant: "outline" }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default", {}, () => [c(T(F), { class: "cn-rtl-flip size-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), vs = /* @__PURE__ */ l({
	__name: "CalendarPrevButton",
	props: {
		prevPage: { type: Function },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Ue), p({
			"data-slot": "calendar-prev-button",
			class: T(R)(T(B)({ variant: "outline" }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default", {}, () => [c(T(yi), { class: "cn-rtl-flip size-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), ys = ["data-size"], bs = /* @__PURE__ */ l({
	__name: "Card",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: { default: "default" }
	},
	setup(e) {
		let t = e;
		return (n, r) => (y(), i("div", {
			"data-slot": "card",
			"data-size": e.size,
			class: m(T(R)("ring-foreground/10 bg-card text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col", t.class))
		}, [C(n.$slots, "default")], 10, ys));
	}
}), xs = /* @__PURE__ */ l({
	__name: "CardAction",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "card-action",
			class: m(T(R)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Ss = /* @__PURE__ */ l({
	__name: "CardContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "card-content",
			class: m(T(R)("px-6 group-data-[size=sm]/card:px-4", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Cs = /* @__PURE__ */ l({
	__name: "CardDescription",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "card-description",
			class: m(T(R)("text-muted-foreground text-sm", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), ws = /* @__PURE__ */ l({
	__name: "CardFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "card-footer",
			class: m(T(R)("rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4 flex items-center", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Ts = /* @__PURE__ */ l({
	__name: "CardHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "card-header",
			class: m(T(R)("gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Es = /* @__PURE__ */ l({
	__name: "CardTitle",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "card-title",
			class: m(T(R)("text-base leading-normal font-medium group-data-[size=sm]/card:text-sm cn-font-heading", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), [Ds, Os] = le(({ opts: e, orientation: t, plugins: n }, r) => {
	let [i, a] = Pi({
		...e,
		axis: t === "horizontal" ? "x" : "y"
	}, n);
	function o() {
		a.value?.scrollPrev();
	}
	function s() {
		a.value?.scrollNext();
	}
	let c = x(!1), l = x(!1);
	function u(e) {
		c.value = e?.canScrollNext() || !1, l.value = e?.canScrollPrev() || !1;
	}
	return _(() => {
		a.value && (a.value?.on("init", u), a.value?.on("reInit", u), a.value?.on("select", u), r("init-api", a.value));
	}), {
		carouselRef: i,
		carouselApi: a,
		canScrollPrev: l,
		canScrollNext: c,
		scrollPrev: o,
		scrollNext: s,
		orientation: t
	};
});
function ks() {
	let e = Os();
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
//#endregion
//#region src/components/ui/carousel/Carousel.vue
var As = /* @__PURE__ */ l({
	__name: "Carousel",
	props: {
		opts: {},
		plugins: {},
		orientation: { default: "horizontal" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["init-api"],
	setup(e, { expose: t, emit: n }) {
		let r = e, { canScrollNext: a, canScrollPrev: o, carouselApi: s, carouselRef: c, orientation: l, scrollNext: u, scrollPrev: d } = Ds(r, n);
		t({
			canScrollNext: a,
			canScrollPrev: o,
			carouselApi: s,
			carouselRef: c,
			orientation: l,
			scrollNext: u,
			scrollPrev: d
		});
		function f(e) {
			let t = r.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", n = r.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
			if (e.key === t) {
				e.preventDefault(), d();
				return;
			}
			e.key === n && (e.preventDefault(), u());
		}
		return (e, t) => (y(), i("div", {
			"data-slot": "carousel",
			class: m(T(R)("relative", r.class)),
			role: "region",
			"aria-roledescription": "carousel",
			tabindex: "0",
			onKeydown: f
		}, [C(e.$slots, "default", {
			canScrollNext: T(a),
			canScrollPrev: T(o),
			carouselApi: T(s),
			carouselRef: T(c),
			orientation: T(l),
			scrollNext: T(u),
			scrollPrev: T(d)
		})], 34));
	}
}), js = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "CarouselContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { carouselRef: n, orientation: r } = ks();
		return (e, o) => (y(), i("div", {
			ref_key: "carouselRef",
			ref: n,
			"data-slot": "carousel-content",
			class: "overflow-hidden"
		}, [a("div", p({ class: T(R)("flex", T(r) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class) }, e.$attrs), [C(e.$slots, "default")], 16)], 512));
	}
}), Ms = /* @__PURE__ */ l({
	__name: "CarouselItem",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { orientation: n } = ks();
		return (e, r) => (y(), i("div", {
			"data-slot": "carousel-item",
			role: "group",
			"aria-roledescription": "slide",
			class: m(T(R)("min-w-0 shrink-0 grow-0 basis-full", T(n) === "horizontal" ? "pl-4" : "pt-4", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Ns = /* @__PURE__ */ l({
	__name: "CarouselNext",
	props: {
		variant: { default: "outline" },
		size: { default: "icon-sm" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, { orientation: r, canScrollNext: i, scrollNext: o } = ks();
		return (s, l) => (y(), n(T(z), {
			"data-slot": "carousel-next",
			disabled: !T(i),
			class: m(T(R)("rounded-full absolute touch-manipulation", T(r) === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", t.class)),
			variant: e.variant,
			size: e.size,
			onClick: T(o)
		}, {
			default: E(() => [C(s.$slots, "default", {}, () => [c(T(F), { class: "cn-rtl-flip" }), l[0] ||= a("span", { class: "sr-only" }, "Next slide", -1)])]),
			_: 3
		}, 8, [
			"disabled",
			"class",
			"variant",
			"size",
			"onClick"
		]));
	}
}), Ps = /* @__PURE__ */ l({
	__name: "CarouselPrevious",
	props: {
		variant: { default: "outline" },
		size: { default: "icon-sm" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, { orientation: r, canScrollPrev: i, scrollPrev: o } = ks();
		return (s, l) => (y(), n(T(z), {
			"data-slot": "carousel-previous",
			disabled: !T(i),
			class: m(T(R)("rounded-full absolute touch-manipulation", T(r) === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", t.class)),
			variant: e.variant,
			size: e.size,
			onClick: T(o)
		}, {
			default: E(() => [C(s.$slots, "default", {}, () => [c(T(yi), { class: "cn-rtl-flip" }), l[0] ||= a("span", { class: "sr-only" }, "Previous slide", -1)])]),
			_: 3
		}, 8, [
			"disabled",
			"class",
			"variant",
			"size",
			"onClick"
		]));
	}
}), Fs = /* @__PURE__ */ l({
	__name: "ChartStyle",
	props: { id: {} },
	setup(e) {
		let { config: i } = qs(), a = t(() => Object.entries(i.value).filter(([, e]) => e.theme || e.color));
		return (t, i) => a.value.length ? (y(), n(T(A), {
			key: 0,
			as: "style"
		}, {
			default: E(() => [s(w(Object.entries(T(Ks)).map(([t, n]) => `
${n} [data-chart=${e.id}] {
${a.value.map(([e, n]) => {
				let r = n.theme?.[t] || n.color;
				return r ? `  --color-${e}: ${r};` : null;
			}).join("\n")}
}
`).join("\n")), 1)]),
			_: 1
		})) : r("", !0);
	}
}), Is = ["data-chart"], Ls = /* @__PURE__ */ l({
	__name: "ChartContainer",
	props: {
		id: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		config: {},
		cursor: { type: Boolean }
	},
	setup(e) {
		let n = e, { config: r } = re(n), a = gi(), o = t(() => `chart-${n.id || a.replace(/:/g, "")}`);
		return Js({
			id: a,
			config: r
		}), (t, s) => (y(), i("div", {
			"data-slot": "chart",
			"data-chart": o.value,
			class: m(T(R)("cn-chart [&_.tick_text]:!fill-muted-foreground [&_.tick_line]:!stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex flex-col aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden [&_[data-vis-xy-container]]:h-full [&_[data-vis-single-container]]:h-full h-full [&_[data-vis-xy-container]]:w-full [&_[data-vis-single-container]]:w-full w-full ", n.class)),
			style: g({
				"--vis-tooltip-padding": "0px",
				"--vis-tooltip-background-color": "transparent",
				"--vis-tooltip-border-color": "transparent",
				"--vis-tooltip-text-color": "none",
				"--vis-tooltip-shadow-color": "none",
				"--vis-tooltip-backdrop-filter": "none",
				"--vis-crosshair-circle-stroke-color": "#0000",
				"--vis-crosshair-line-stroke-width": e.cursor ? "1px" : "0px",
				"--vis-font-family": "var(--font-sans)"
			})
		}, [C(t.$slots, "default", {
			id: T(a),
			config: T(r)
		}), c(Fs, { id: o.value }, null, 8, ["id"])], 14, Is));
	}
}), Rs = /* @__PURE__ */ l({
	__name: "ChartLegendContent",
	props: {
		hideIcon: { type: Boolean },
		nameKey: {},
		verticalAlign: { default: "bottom" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(a) {
		let o = a, { id: c, config: l } = qs(), u = t(() => Object.entries(l.value).map(([e, t]) => ({
			key: o.nameKey || e,
			itemConfig: l.value[e]
		}))), d = x("");
		return _(() => {
			d.value = `[data-chart="chart-${c}"]>[data-vis-xy-container]`;
		}), (t, c) => d.value ? (y(), i("div", {
			key: 0,
			class: m(T(R)("flex items-center justify-center gap-4", a.verticalAlign === "top" ? "pb-3" : "pt-3", o.class))
		}, [(y(!0), i(e, null, S(u.value, ({ key: e, itemConfig: t }) => (y(), i("div", {
			key: e,
			class: m(T(R)("[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"))
		}, [t?.icon ? (y(), n(te(t?.icon), { key: 0 })) : (y(), i("div", {
			key: 1,
			class: "h-2 w-2 shrink-0 rounded-[2px]",
			style: g({ backgroundColor: t?.color })
		}, null, 4)), s(" " + w(t?.label), 1)], 2))), 128))], 2)) : r("", !0);
	}
}), zs = {
	key: 0,
	class: "font-medium"
}, Bs = { class: "grid gap-1.5" }, Vs = { class: "grid gap-1.5" }, Hs = {
	key: 0,
	class: "font-medium"
}, Us = { class: "text-muted-foreground" }, Ws = {
	key: 0,
	class: "text-foreground font-mono font-medium tabular-nums"
}, Gs = /* @__PURE__ */ l({
	__name: "ChartTooltipContent",
	props: {
		hideLabel: { type: Boolean },
		hideIndicator: { type: Boolean },
		indicator: { default: "dot" },
		nameKey: {},
		labelKey: {},
		labelFormatter: {},
		payload: { default: () => ({}) },
		config: { default: () => ({}) },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		color: {},
		x: {}
	},
	setup(o) {
		let s = o, c = t(() => Object.entries(s.payload).map(([e, t]) => ({
			key: e,
			value: t,
			itemConfig: s.config[e],
			indicatorColor: s.config[e]?.color ?? s.payload.fill
		})).filter((e) => e.itemConfig)), l = t(() => Object.keys(s.payload).length === 1 && s.indicator !== "dot"), u = t(() => s.hideLabel ? null : s.labelFormatter && s.x !== void 0 ? s.labelFormatter(s.x) : s.labelKey ? s.config[s.labelKey]?.label || s.payload[s.labelKey] : s.x);
		return (t, d) => (y(), i("div", { class: m(T(R)("border-border/50 bg-background gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl grid min-w-32 items-start", s.class)) }, [C(t.$slots, "default", {}, () => [!l.value && u.value ? (y(), i("div", zs, w(u.value), 1)) : r("", !0), a("div", Bs, [(y(!0), i(e, null, S(c.value, ({ value: e, itemConfig: t, indicatorColor: s, key: c }) => (y(), i("div", {
			key: c,
			class: m(T(R)("[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5", o.indicator === "dot" && "items-center"))
		}, [t?.icon ? (y(), n(te(t.icon), { key: 0 })) : o.hideIndicator ? r("", !0) : (y(), i("div", {
			key: 1,
			class: m(T(R)("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
				"h-2.5 w-2.5": o.indicator === "dot",
				"w-1": o.indicator === "line",
				"w-0 border-[1.5px] border-dashed bg-transparent": o.indicator === "dashed",
				"my-0.5": l.value && o.indicator === "dashed"
			})),
			style: g({
				"--color-bg": s,
				"--color-border": s
			})
		}, null, 6)), a("div", { class: m(T(R)("flex flex-1 justify-between leading-none", l.value ? "items-end" : "items-center")) }, [a("div", Vs, [l.value ? (y(), i("div", Hs, w(u.value), 1)) : r("", !0), a("span", Us, w(t?.label || e), 1)]), e ? (y(), i("span", Ws, w(e.toLocaleString()), 1)) : r("", !0)], 2)], 2))), 128))])])], 2));
	}
}), Ks = {
	light: "",
	dark: ".dark"
}, [qs, Js] = fi("Chart"), Ys = /* @__PURE__ */ l({
	__name: "Checkbox",
	props: {
		defaultValue: {},
		modelValue: {},
		disabled: { type: Boolean },
		value: {},
		id: {},
		trueValue: {},
		falseValue: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Ke), p({ "data-slot": "checkbox" }, T(a), { class: T(R)("border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border shadow-xs transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", r.class) }), {
			default: E((t) => [c(T(Ge), {
				"data-slot": "checkbox-indicator",
				class: "[&>svg]:size-3.5 grid place-content-center text-current transition-none"
			}, {
				default: E(() => [C(e.$slots, "default", h(u(t)), () => [c(T(N))])]),
				_: 2
			}, 1024)]),
			_: 3
		}, 16, ["class"]));
	}
}), Xs = /* @__PURE__ */ l({
	__name: "Collapsible",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		disabled: { type: Boolean },
		unmountOnHide: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(Je), p({ "data-slot": "collapsible" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), Zs = /* @__PURE__ */ l({
	__name: "CollapsibleContent",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(qe), p({ "data-slot": "collapsible-content" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Qs = /* @__PURE__ */ l({
	__name: "CollapsibleTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Ye), p({ "data-slot": "collapsible-trigger" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), $s = /* @__PURE__ */ l({
	__name: "Combobox",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		resetSearchTermOnBlur: { type: Boolean },
		resetSearchTermOnSelect: { type: Boolean },
		openOnFocus: { type: Boolean },
		openOnClick: { type: Boolean },
		ignoreFilter: { type: Boolean },
		resetModelValueOnClear: { type: Boolean },
		modelValue: {},
		defaultValue: {},
		multiple: { type: Boolean },
		dir: {},
		disabled: { type: Boolean },
		highlightOnHover: { type: Boolean },
		by: { type: [String, Function] },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean }
	},
	emits: [
		"update:modelValue",
		"highlight",
		"update:open"
	],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(at), p({ "data-slot": "combobox" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), ec = /* @__PURE__ */ l({
	__name: "ComboboxAnchor",
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Xe), p({ "data-slot": "combobox-anchor" }, T(r), { class: T(R)("", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), tc = /* @__PURE__ */ l({
	__name: "ComboboxEmpty",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Qe), p({ "data-slot": "combobox-empty" }, T(r), { class: T(R)("text-muted-foreground hidden w-full justify-center py-2 text-center text-sm group-data-empty/combobox-content:flex", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), nc = /* @__PURE__ */ l({
	__name: "ComboboxGroup",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		heading: {}
	},
	setup(e) {
		let t = e, i = D(t, "class");
		return (a, o) => (y(), n(T($e), p({ "data-slot": "combobox-group" }, T(i), { class: T(R)("overflow-hidden text-foreground", t.class) }), {
			default: E(() => [e.heading ? (y(), n(T(rt), {
				key: 0,
				class: "text-muted-foreground px-2 py-1.5 text-xs"
			}, {
				default: E(() => [s(w(e.heading), 1)]),
				_: 1
			})) : r("", !0), C(a.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), rc = /* @__PURE__ */ l({
	__name: "InputGroup",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "input-group",
			role: "group",
			class: m(T(R)("border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 h-9 rounded-md border shadow-xs transition-[color,box-shadow] in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), ic = ["data-align"], ac = /* @__PURE__ */ l({
	__name: "InputGroupAddon",
	props: {
		align: { default: "inline-start" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		function n(e) {
			let t = e.currentTarget, n = e.target;
			n && n.closest("button") || t && t?.parentElement && t.parentElement?.querySelector("input")?.focus();
		}
		return (e, r) => (y(), i("div", {
			role: "group",
			"data-slot": "input-group-addon",
			"data-align": t.align,
			class: m(T(R)(T(fc)({ align: t.align }), t.class)),
			onClick: n
		}, [C(e.$slots, "default")], 10, ic));
	}
}), oc = /* @__PURE__ */ l({
	__name: "InputGroupButton",
	props: {
		variant: { default: "ghost" },
		size: { default: "xs" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(z), {
			type: "button",
			"data-size": t.size,
			variant: t.variant,
			class: m(T(R)(T(pc)({ size: t.size }), t.class))
		}, {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 8, [
			"data-size",
			"variant",
			"class"
		]));
	}
}), sc = /* @__PURE__ */ l({
	__name: "Input",
	props: {
		defaultValue: {},
		modelValue: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = O(n, "modelValue", t, {
			passive: !0,
			defaultValue: n.defaultValue
		});
		return (e, t) => ce((y(), i("input", {
			"onUpdate:modelValue": t[0] ||= (e) => f(r) ? r.value = e : null,
			"data-slot": "input",
			class: m(T(R)("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", n.class))
		}, null, 2)), [[oe, T(r)]]);
	}
}), cc = /* @__PURE__ */ l({
	__name: "InputGroupInput",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(sc), {
			"data-slot": "input-group-control",
			class: m(T(R)("rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent flex-1", t.class))
		}, null, 8, ["class"]));
	}
}), lc = /* @__PURE__ */ l({
	__name: "InputGroupText",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("span", { class: m(T(R)("text-muted-foreground gap-2 text-sm [&_svg:not([class*=size-])]:size-4 flex items-center [&_svg]:pointer-events-none", t.class)) }, [C(e.$slots, "default")], 2));
	}
}), uc = /* @__PURE__ */ l({
	__name: "Textarea",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		defaultValue: {},
		modelValue: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = O(n, "modelValue", t, {
			passive: !0,
			defaultValue: n.defaultValue
		});
		return (e, t) => ce((y(), i("textarea", {
			"onUpdate:modelValue": t[0] ||= (e) => f(r) ? r.value = e : null,
			"data-slot": "textarea",
			class: m(T(R)("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm flex field-sizing-content min-h-16 w-full outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", n.class))
		}, null, 2)), [[oe, T(r)]]);
	}
}), dc = /* @__PURE__ */ l({
	__name: "InputGroupTextarea",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(uc), {
			"data-slot": "input-group-control",
			class: m(T(R)("rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent flex-1 resize-none", t.class))
		}, null, 8, ["class"]));
	}
}), fc = L("text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*=size-])]:size-4 flex cursor-text items-center justify-center select-none", {
	variants: { align: {
		"inline-start": "pl-2 has-[>button]:-ml-1 has-[>kbd]:ml-[-0.15rem] order-first",
		"inline-end": "pr-2 has-[>button]:-mr-1 has-[>kbd]:mr-[-0.15rem] order-last",
		"block-start": "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
		"block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
	} },
	defaultVariants: { align: "inline-start" }
}), pc = L("gap-2 text-sm flex items-center shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-1.5 [&>svg:not([class*=size-])]:size-3.5",
		sm: "",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
}), mc = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "ComboboxInput",
	props: {
		displayValue: { type: Function },
		modelValue: {},
		autoFocus: { type: Boolean },
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(rc), null, {
			default: E(() => [c(T(ac), null, {
				default: E(() => [c(T(Mi), { class: "size-4 shrink-0 opacity-50" })]),
				_: 1
			}), c(T(et), p({
				"data-slot": "combobox-input",
				class: T(R)("flex-1 outline-hidden disabled:cursor-not-allowed disabled:opacity-50", r.class)
			}, {
				...e.$attrs,
				...T(a)
			}), null, 16, ["class"])]),
			_: 1
		}));
	}
}), hc = /* @__PURE__ */ l({
	__name: "ComboboxItem",
	props: {
		textValue: {},
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(tt), p({ "data-slot": "combobox-item" }, T(a), { class: T(R)("data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*=size-])]:size-4 relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", r.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), gc = /* @__PURE__ */ l({
	__name: "ComboboxItemIndicator",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(nt), p({ "data-slot": "combobox-item-indicator" }, T(r), { class: T(R)("pointer-events-none absolute right-2 flex size-4 items-center justify-center", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), _c = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "ComboboxList",
	props: {
		forceMount: { type: Boolean },
		position: { default: "popper" },
		bodyLock: { type: Boolean },
		hideWhenEmpty: { type: Boolean },
		side: {},
		sideOffset: { default: 4 },
		sideFlip: { type: Boolean },
		align: { default: "center" },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		disableOutsidePointerEvents: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(it), null, {
			default: E(() => [c(T(Ze), p({ "data-slot": "combobox-content" }, {
				...e.$attrs,
				...T(a)
			}, { class: T(R)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 max-h-72 min-w-36 overflow-hidden rounded-md shadow-md ring-1 duration-100 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 cn-menu-translucent group/combobox-content z-50 w-[var(--reka-combobox-trigger-width)]", r.class) }), {
				default: E(() => [C(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), vc = /* @__PURE__ */ l({
	__name: "ComboboxSeparator",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(ot), p({ "data-slot": "combobox-separator" }, T(r), { class: T(R)("bg-border -mx-1 my-1 h-px", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), yc = /* @__PURE__ */ l({
	__name: "ComboboxTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(st), p({ "data-slot": "combobox-trigger" }, T(r), {
			class: T(R)("[&_svg:not([class*=size-])]:size-4", t.class),
			tabindex: "0"
		}), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), bc = /* @__PURE__ */ l({
	__name: "ComboboxViewport",
	props: {
		nonce: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(ct), p({ "data-slot": "combobox-viewport" }, T(r), { class: T(R)("no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto p-1 data-empty:p-0", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), xc = /* @__PURE__ */ l({
	__name: "Command",
	props: {
		modelValue: { default: "" },
		defaultValue: {},
		multiple: { type: Boolean },
		orientation: {},
		dir: {},
		disabled: { type: Boolean },
		selectionBehavior: {},
		highlightOnHover: { type: Boolean },
		by: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"update:modelValue",
		"highlight",
		"entryFocus",
		"leave"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i), o = x(/* @__PURE__ */ new Map()), s = x(/* @__PURE__ */ new Map()), { contains: c } = mi({ sensitivity: "base" }), l = ee({
			search: "",
			filtered: {
				count: 0,
				items: /* @__PURE__ */ new Map(),
				groups: /* @__PURE__ */ new Set()
			}
		});
		function u() {
			if (!l.search) {
				l.filtered.count = o.value.size;
				return;
			}
			l.filtered.groups = /* @__PURE__ */ new Set();
			let e = 0;
			for (let [t, n] of o.value) {
				let r = c(n, l.search);
				l.filtered.items.set(t, +!!r), r && e++;
			}
			for (let [e, t] of s.value) for (let n of t) if (l.filtered.items.get(n) > 0) {
				l.filtered.groups.add(e);
				break;
			}
			l.filtered.count = e;
		}
		return se(() => l.search, () => {
			u();
		}), Uc({
			allItems: o,
			allGroups: s,
			filterState: l
		}), (e, t) => (y(), n(T(nn), p({ "data-slot": "command" }, T(a), { class: T(R)("bg-popover text-popover-foreground rounded-xl! p-1 flex size-full flex-col overflow-hidden", r.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Sc = /* @__PURE__ */ l({
	__name: "Dialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(Ot), p({ "data-slot": "dialog" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), Cc = /* @__PURE__ */ l({
	__name: "DialogClose",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(k), p({ "data-slot": "dialog-close" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), wc = /* @__PURE__ */ l({
	__name: "DialogOverlay",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Et), p({ "data-slot": "dialog-overlay" }, T(r), { class: T(R)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Tc = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "DialogContent",
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		showCloseButton: {
			type: Boolean,
			default: !0
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let i = e, o = t, s = M(D(i, "class"), o);
		return (t, o) => (y(), n(T(Dt), null, {
			default: E(() => [c(wc), c(T(wt), p({ "data-slot": "dialog-content" }, {
				...t.$attrs,
				...T(s)
			}, { class: T(R)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-6 rounded-xl p-6 text-sm ring-1 duration-100 sm:max-w-md fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none", i.class) }), {
				default: E(() => [C(t.$slots, "default"), e.showCloseButton ? (y(), n(T(k), {
					key: 0,
					"data-slot": "dialog-close",
					"as-child": ""
				}, {
					default: E(() => [c(T(z), {
						variant: "ghost",
						class: "absolute top-4 right-4",
						size: "icon-sm"
					}, {
						default: E(() => [c(T(I)), o[0] ||= a("span", { class: "sr-only" }, "Close", -1)]),
						_: 1
					})]),
					_: 1
				})) : r("", !0)]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), Ec = /* @__PURE__ */ l({
	__name: "DialogDescription",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Tt), p({ "data-slot": "dialog-description" }, T(r), { class: T(R)("text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Dc = /* @__PURE__ */ l({
	__name: "DialogFooter",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		showCloseButton: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e;
		return (a, o) => (y(), i("div", {
			"data-slot": "dialog-footer",
			class: m(T(R)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t.class))
		}, [C(a.$slots, "default"), e.showCloseButton ? (y(), n(T(k), {
			key: 0,
			"as-child": ""
		}, {
			default: E(() => [c(T(z), { variant: "outline" }, {
				default: E(() => [...o[0] ||= [s(" Close ", -1)]]),
				_: 1
			})]),
			_: 1
		})) : r("", !0)], 2));
	}
}), Oc = /* @__PURE__ */ l({
	__name: "DialogHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "dialog-header",
			class: m(T(R)("gap-2 flex flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), kc = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "DialogScrollContent",
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, o = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Dt), null, {
			default: E(() => [c(T(Et), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
				default: E(() => [c(T(wt), p({ class: T(R)("relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full", r.class) }, {
					...e.$attrs,
					...T(o)
				}, { onPointerDownOutside: t[0] ||= (e) => {
					let t = e.detail.originalEvent, n = t.target;
					(t.offsetX > n.clientWidth || t.offsetY > n.clientHeight) && e.preventDefault();
				} }), {
					default: E(() => [C(e.$slots, "default"), c(T(k), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
						default: E(() => [c(T(I), { class: "w-4 h-4" }), t[1] ||= a("span", { class: "sr-only" }, "Close", -1)]),
						_: 1
					})]),
					_: 3
				}, 16, ["class"])]),
				_: 3
			})]),
			_: 3
		}));
	}
}), Ac = /* @__PURE__ */ l({
	__name: "DialogTitle",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(kt), p({ "data-slot": "dialog-title" }, T(r), { class: T(R)("leading-none font-medium cn-font-heading", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), jc = /* @__PURE__ */ l({
	__name: "DialogTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(At), p({ "data-slot": "dialog-trigger" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Mc = /* @__PURE__ */ l({
	__name: "CommandDialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: { type: Boolean },
		title: { default: "Command Palette" },
		description: { default: "Search for a command to run..." },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		showCloseButton: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = e, i = M(r, t);
		return (t, a) => (y(), n(T(Sc), h(u(T(i))), {
			default: E((n) => [c(T(Tc), {
				class: m(T(R)("rounded-xl! top-1/3 translate-y-0 overflow-hidden p-0", r.class)),
				"show-close-button": e.showCloseButton
			}, {
				default: E(() => [c(T(Oc), { class: "sr-only" }, {
					default: E(() => [c(T(Ac), null, {
						default: E(() => [s(w(e.title), 1)]),
						_: 1
					}), c(T(Ec), null, {
						default: E(() => [s(w(e.description), 1)]),
						_: 1
					})]),
					_: 1
				}), c(xc, null, {
					default: E(() => [C(t.$slots, "default", h(u(n)))]),
					_: 2
				}, 1024)]),
				_: 2
			}, 1032, ["class", "show-close-button"])]),
			_: 3
		}, 16));
	}
}), Nc = /* @__PURE__ */ l({
	__name: "CommandEmpty",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let i = e, a = D(i, "class"), { filterState: o } = Hc(), s = t(() => !!o.search && o.filtered.count === 0);
		return (e, t) => s.value ? (y(), n(T(A), p({
			key: 0,
			"data-slot": "command-empty"
		}, T(a), { class: T(R)("py-6 text-center text-sm", i.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"])) : r("", !0);
	}
}), Pc = /* @__PURE__ */ l({
	__name: "CommandGroup",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		heading: {}
	},
	setup(e) {
		let i = e, a = D(i, "class"), { allGroups: o, filterState: c } = Hc(), l = gi(), u = t(() => c.search ? c.filtered.groups.has(l) : !0);
		return Gc({ id: l }), _(() => {
			o.value.has(l) || o.value.set(l, /* @__PURE__ */ new Set());
		}), v(() => {
			o.value.delete(l);
		}), (t, o) => (y(), n(T($t), p(T(a), {
			id: T(l),
			"data-slot": "command-group",
			class: T(R)("text-foreground **:[[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium", i.class),
			hidden: u.value ? void 0 : !0
		}), {
			default: E(() => [e.heading ? (y(), n(T(en), {
				key: 0,
				"data-slot": "command-group-heading",
				class: ""
			}, {
				default: E(() => [s(w(e.heading), 1)]),
				_: 1
			})) : r("", !0), C(t.$slots, "default")]),
			_: 3
		}, 16, [
			"id",
			"class",
			"hidden"
		]));
	}
}), Fc = {
	"data-slot": "command-input-wrapper",
	class: "p-1 pb-0"
}, Ic = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "CommandInput",
	props: {
		modelValue: {},
		autoFocus: { type: Boolean },
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = j(D(t, "class")), { filterState: r } = Hc();
		return (e, a) => (y(), i("div", Fc, [c(T(rc), { class: "bg-input/30 border-input/30 h-8! rounded-lg! shadow-none! *:data-[slot=input-group-addon]:pl-2!" }, {
			default: E(() => [c(T(Qt), p({
				...T(n),
				...e.$attrs
			}, {
				modelValue: T(r).search,
				"onUpdate:modelValue": a[0] ||= (e) => T(r).search = e,
				"data-slot": "command-input",
				"auto-focus": "",
				class: T(R)("w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", t.class)
			}), null, 16, ["modelValue", "class"]), c(T(ac), null, {
				default: E(() => [c(T(Mi), { class: "size-4 shrink-0 opacity-50" })]),
				_: 1
			})]),
			_: 1
		})]));
	}
}), Lc = /* @__PURE__ */ l({
	__name: "CommandItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["select"],
	setup(e, { emit: i }) {
		let a = e, o = i, s = M(D(a, "class"), o), l = gi(), { filterState: u, allItems: d, allGroups: f } = Hc(), m = Wc(), h = t(() => {
			if (u.search) {
				let e = u.filtered.items.get(l);
				return e === void 0 ? !0 : e > 0;
			} else return !0;
		}), g = x(), b = fe(g);
		return _(() => {
			if (!(b.value instanceof HTMLElement)) return;
			d.value.set(l, b.value.textContent ?? a.value?.toString() ?? "");
			let e = m?.id;
			e && (f.value.has(e) ? f.value.get(e)?.add(l) : f.value.set(e, new Set([l])));
		}), v(() => {
			d.value.delete(l);
		}), (e, t) => h.value ? (y(), n(T(tn), p({ key: 0 }, T(s), {
			id: T(l),
			ref_key: "itemRef",
			ref: g,
			"data-slot": "command-item",
			class: T(R)("data-selected:bg-muted data-selected:text-foreground data-selected:**:[svg]:text-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! [&_svg:not([class*=size-])]:size-4 group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", a.class),
			onSelect: t[0] ||= () => {
				T(u).search = "";
			}
		}), {
			default: E(() => [C(e.$slots, "default"), c(T(N), { class: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })]),
			_: 3
		}, 16, ["id", "class"])) : r("", !0);
	}
}), Rc = { role: "presentation" }, zc = /* @__PURE__ */ l({
	__name: "CommandList",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Zt), p({ "data-slot": "command-list" }, T(r), { class: T(R)("no-scrollbar max-h-72 scroll-py-1 outline-none overflow-x-hidden overflow-y-auto", t.class) }), {
			default: E(() => [a("div", Rc, [C(e.$slots, "default")])]),
			_: 3
		}, 16, ["class"]));
	}
}), Bc = /* @__PURE__ */ l({
	__name: "CommandSeparator",
	props: {
		orientation: {},
		decorative: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Ar), p({ "data-slot": "command-separator" }, T(r), { class: T(R)("bg-border -mx-1 h-px w-auto", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Vc = /* @__PURE__ */ l({
	__name: "CommandShortcut",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("span", {
			"data-slot": "command-shortcut",
			class: m(T(R)("text-muted-foreground group-data-selected/command-item:text-foreground ml-auto text-xs tracking-widest", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), [Hc, Uc] = fi("Command"), [Wc, Gc] = fi("CommandGroup"), Kc = /* @__PURE__ */ l({
	__name: "ContextMenu",
	props: {
		pressOpenDelay: {},
		dir: {},
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(vt), p({ "data-slot": "context-menu" }, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), qc = { class: "absolute right-2 pointer-events-none" }, Jc = /* @__PURE__ */ l({
	__name: "ContextMenuCheckboxItem",
	props: {
		modelValue: { type: [Boolean, String] },
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["select", "update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, o = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(lt), p({ "data-slot": "context-menu-checkbox-item" }, T(o), { class: T(R)("focus:bg-accent focus:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm data-inset:pl-8 [&_svg:not([class*=size-])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", r.class) }), {
			default: E(() => [a("span", qc, [c(T(pt), null, {
				default: E(() => [C(e.$slots, "indicator-icon", {}, () => [c(T(N))])]),
				_: 3
			})]), C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Yc = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "ContextMenuContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		sideFlip: { type: Boolean },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(ht), null, {
			default: E(() => [c(T(ut), p({ "data-slot": "context-menu-content" }, {
				...e.$attrs,
				...T(a)
			}, { class: T(R)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-36 rounded-md p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 max-h-(--reka-context-menu-content-available-height) origin-(--reka-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto", r.class) }), {
				default: E(() => [C(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), Xc = /* @__PURE__ */ l({
	__name: "ContextMenuGroup",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(dt), p({ "data-slot": "context-menu-group" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Zc = /* @__PURE__ */ l({
	__name: "ContextMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean },
		variant: { default: "default" }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (t, i) => (y(), n(T(ft), p({
			"data-slot": "context-menu-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, T(a), { class: T(R)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive focus:*:[svg]:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm data-inset:pl-8 [&_svg:not([class*=size-])]:size-4 group/context-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", r.class) }), {
			default: E(() => [C(t.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), Qc = /* @__PURE__ */ l({
	__name: "ContextMenuLabel",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (i, a) => (y(), n(T(mt), p({
			"data-slot": "context-menu-label",
			"data-inset": e.inset ? "" : void 0
		}, T(r), { class: T(R)("text-muted-foreground px-2 py-1.5 text-xs font-medium data-inset:pl-8", t.class) }), {
			default: E(() => [C(i.$slots, "default")]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), $c = /* @__PURE__ */ l({
	__name: "ContextMenuRadioGroup",
	props: {
		modelValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(gt), p({ "data-slot": "context-menu-radio-group" }, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), el = { class: "absolute right-2 pointer-events-none" }, tl = /* @__PURE__ */ l({
	__name: "ContextMenuRadioItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let r = e, i = t, o = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(_t), p({ "data-slot": "context-menu-radio-item" }, T(o), { class: T(R)("focus:bg-accent focus:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm data-inset:pl-8 [&_svg:not([class*=size-])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", r.class) }), {
			default: E(() => [a("span", el, [c(T(pt), null, {
				default: E(() => [C(e.$slots, "indicator-icon", {}, () => [c(T(N))])]),
				_: 3
			})]), C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), nl = /* @__PURE__ */ l({
	__name: "ContextMenuSeparator",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(yt), p({ "data-slot": "context-menu-separator" }, T(r), { class: T(R)("bg-border -mx-1 my-1 h-px", t.class) }), null, 16, ["class"]));
	}
}), rl = /* @__PURE__ */ l({
	__name: "ContextMenuShortcut",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("span", {
			"data-slot": "context-menu-shortcut",
			class: m(T(R)("text-muted-foreground group-focus/context-menu-item:text-accent-foreground ml-auto text-xs tracking-widest", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), il = /* @__PURE__ */ l({
	__name: "ContextMenuSub",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(bt), p({ "data-slot": "context-menu-sub" }, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), al = /* @__PURE__ */ l({
	__name: "ContextMenuSubContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		sideOffset: {},
		sideFlip: { type: Boolean },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(xt), p({ "data-slot": "context-menu-sub-content" }, T(a), { class: T(R)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-popover-foreground min-w-32 rounded-md border p-1 shadow-lg duration-100 cn-menu-translucent z-50 origin-(--reka-context-menu-content-transform-origin) overflow-hidden", r.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), ol = /* @__PURE__ */ l({
	__name: "ContextMenuSubTrigger",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (i, a) => (y(), n(T(St), p({
			"data-slot": "context-menu-sub-trigger",
			"data-inset": e.inset ? "" : void 0
		}, T(r), { class: T(R)("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground rounded-sm px-2 py-1.5 text-sm data-inset:pl-8 [&_svg:not([class*=size-])]:size-4 flex cursor-default items-center outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: E(() => [C(i.$slots, "default"), c(T(F), { class: "cn-rtl-flip ml-auto" })]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), sl = /* @__PURE__ */ l({
	__name: "ContextMenuTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Ct), p({ "data-slot": "context-menu-trigger" }, T(r), { class: T(R)("select-none", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), cl = /* @__PURE__ */ l({
	__name: "Drawer",
	props: {
		activeSnapPoint: {},
		closeThreshold: {},
		shouldScaleBackground: {
			type: Boolean,
			default: !0
		},
		setBackgroundColorOnScale: { type: Boolean },
		scrollLockTimeout: {},
		fixed: { type: Boolean },
		dismissible: { type: Boolean },
		modal: { type: Boolean },
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		nested: { type: Boolean },
		direction: {},
		noBodyStyles: { type: Boolean },
		handleOnly: { type: Boolean },
		preventScrollRestoration: { type: Boolean },
		snapPoints: {},
		fadeFromIndex: {}
	},
	emits: [
		"drag",
		"release",
		"close",
		"update:open",
		"update:activeSnapPoint",
		"animationEnd"
	],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(Bi), p({ "data-slot": "drawer" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), ll = /* @__PURE__ */ l({
	__name: "DrawerClose",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Fi), p({ "data-slot": "drawer-close" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ul = /* @__PURE__ */ l({
	__name: "DrawerOverlay",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Ri), p({ "data-slot": "drawer-overlay" }, T(r), { class: T(R)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50", t.class) }), null, 16, ["class"]));
	}
}), dl = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "DrawerContent",
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let r = e, i = M(r, t);
		return (e, t) => (y(), n(T(zi), null, {
			default: E(() => [c(ul), c(T(Ii), p({ "data-slot": "drawer-content" }, {
				...e.$attrs,
				...T(i)
			}, { class: T(R)("bg-popover text-popover-foreground flex h-auto flex-col text-sm data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm group/drawer-content fixed z-50", r.class) }), {
				default: E(() => [t[0] ||= a("div", { class: "bg-muted mt-4 h-1.5 w-[100px] rounded-full mx-auto hidden shrink-0 group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1), C(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), fl = /* @__PURE__ */ l({
	__name: "DrawerDescription",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Li), p({ "data-slot": "drawer-description" }, T(r), { class: T(R)("text-muted-foreground text-sm", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), pl = /* @__PURE__ */ l({
	__name: "DrawerFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "drawer-footer",
			class: m(T(R)("gap-2 p-4 mt-auto flex flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), ml = /* @__PURE__ */ l({
	__name: "DrawerHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "drawer-header",
			class: m(T(R)("gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left flex flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), hl = /* @__PURE__ */ l({
	__name: "DrawerTitle",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Vi), p({ "data-slot": "drawer-title" }, T(r), { class: T(R)("text-foreground font-medium cn-font-heading", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), gl = /* @__PURE__ */ l({
	__name: "DrawerTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Hi), p({ "data-slot": "drawer-trigger" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), _l = /* @__PURE__ */ l({
	__name: "DropdownMenu",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		dir: {},
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(Bt), p({ "data-slot": "dropdown-menu" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), vl = {
	class: "absolute right-2 flex items-center justify-center pointer-events-none",
	"data-slot": "dropdown-menu-checkbox-item-indicator"
}, yl = /* @__PURE__ */ l({
	__name: "DropdownMenuCheckboxItem",
	props: {
		modelValue: { type: [Boolean, String] },
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["select", "update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, o = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(jt), p({ "data-slot": "dropdown-menu-checkbox-item" }, T(o), { class: T(R)("focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm data-inset:pl-8 [&_svg:not([class*=size-])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", r.class) }), {
			default: E(() => [a("span", vl, [c(T(Ft), null, {
				default: E(() => [C(e.$slots, "indicator-icon", {}, () => [c(T(N))])]),
				_: 3
			})]), C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), bl = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "DropdownMenuContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		side: {},
		sideOffset: { default: 4 },
		sideFlip: { type: Boolean },
		align: { default: "start" },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Lt), null, {
			default: E(() => [c(T(Mt), p({ "data-slot": "dropdown-menu-content" }, {
				...e.$attrs,
				...T(a)
			}, { class: T(R)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-md p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 max-h-(--reka-dropdown-menu-content-available-height) w-(--reka-dropdown-menu-trigger-width) origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto data-[state=closed]:overflow-hidden", r.class) }), {
				default: E(() => [C(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), xl = /* @__PURE__ */ l({
	__name: "DropdownMenuGroup",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Nt), p({ "data-slot": "dropdown-menu-group" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Sl = /* @__PURE__ */ l({
	__name: "DropdownMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean },
		variant: { default: "default" }
	},
	setup(e) {
		let t = e, r = j(D(t, "inset", "variant", "class"));
		return (i, a) => (y(), n(T(Pt), p({
			"data-slot": "dropdown-menu-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, T(r), { class: T(R)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm data-inset:pl-8 [&_svg:not([class*=size-])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: E(() => [C(i.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), Cl = /* @__PURE__ */ l({
	__name: "DropdownMenuLabel",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean }
	},
	setup(e) {
		let t = e, r = j(D(t, "class", "inset"));
		return (i, a) => (y(), n(T(It), p({
			"data-slot": "dropdown-menu-label",
			"data-inset": e.inset ? "" : void 0
		}, T(r), { class: T(R)("text-muted-foreground px-2 py-1.5 text-xs font-medium data-inset:pl-8", t.class) }), {
			default: E(() => [C(i.$slots, "default")]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), wl = /* @__PURE__ */ l({
	__name: "DropdownMenuRadioGroup",
	props: {
		modelValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(Rt), p({ "data-slot": "dropdown-menu-radio-group" }, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Tl = {
	class: "absolute right-2 flex items-center justify-center pointer-events-none",
	"data-slot": "dropdown-menu-radio-item-indicator"
}, El = /* @__PURE__ */ l({
	__name: "DropdownMenuRadioItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let r = e, i = t, o = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(zt), p({ "data-slot": "dropdown-menu-radio-item" }, T(o), { class: T(R)("focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm data-inset:pl-8 [&_svg:not([class*=size-])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", r.class) }), {
			default: E(() => [a("span", Tl, [c(T(Ft), null, {
				default: E(() => [C(e.$slots, "indicator-icon", {}, () => [c(T(N))])]),
				_: 3
			})]), C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Dl = /* @__PURE__ */ l({
	__name: "DropdownMenuSeparator",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Vt), p({ "data-slot": "dropdown-menu-separator" }, T(r), { class: T(R)("bg-border -mx-1 my-1 h-px", t.class) }), null, 16, ["class"]));
	}
}), Ol = /* @__PURE__ */ l({
	__name: "DropdownMenuShortcut",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("span", {
			"data-slot": "dropdown-menu-shortcut",
			class: m(T(R)("text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-xs tracking-widest", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), kl = /* @__PURE__ */ l({
	__name: "DropdownMenuSub",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(Ht), p({ "data-slot": "dropdown-menu-sub" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), Al = /* @__PURE__ */ l({
	__name: "DropdownMenuSubContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		sideOffset: {},
		sideFlip: { type: Boolean },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Ut), p({ "data-slot": "dropdown-menu-sub-content" }, T(a), { class: T(R)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-[96px] rounded-md p-1 shadow-lg ring-1 duration-100 cn-menu-translucent z-50 origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden", r.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), jl = /* @__PURE__ */ l({
	__name: "DropdownMenuSubTrigger",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean }
	},
	setup(e) {
		let t = e, r = j(D(t, "class", "inset"));
		return (i, a) => (y(), n(T(Wt), p({
			"data-slot": "dropdown-menu-sub-trigger",
			"data-inset": e.inset ? "" : void 0
		}, T(r), { class: T(R)("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm data-inset:pl-8 [&_svg:not([class*=size-])]:size-4 flex cursor-default items-center outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: E(() => [C(i.$slots, "default"), c(T(F), { class: "cn-rtl-flip ml-auto" })]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), Ml = /* @__PURE__ */ l({
	__name: "DropdownMenuTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = j(e);
		return (e, r) => (y(), n(T(Gt), p({ "data-slot": "dropdown-menu-trigger" }, T(t)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Nl = /* @__PURE__ */ l({
	__name: "Empty",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "empty",
			class: m(T(R)("gap-4 rounded-lg border-dashed p-12 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Pl = /* @__PURE__ */ l({
	__name: "EmptyContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "empty-content",
			class: m(T(R)("gap-4 text-sm flex w-full max-w-sm min-w-0 flex-col items-center text-balance", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Fl = /* @__PURE__ */ l({
	__name: "EmptyDescription",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		return (e, t) => (y(), i("p", {
			"data-slot": "empty-description",
			class: m(T(R)("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", e.$attrs.class ?? ""))
		}, [C(e.$slots, "default")], 2));
	}
}), Il = /* @__PURE__ */ l({
	__name: "EmptyHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "empty-header",
			class: m(T(R)("gap-2 flex max-w-sm flex-col items-center", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Ll = ["data-variant"], Rl = /* @__PURE__ */ l({
	__name: "EmptyMedia",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: { default: "default" }
	},
	setup(e) {
		let t = e;
		return (n, r) => (y(), i("div", {
			"data-slot": "empty-icon",
			"data-variant": e.variant,
			class: m(T(R)(T(Bl)({ variant: e.variant }), t.class))
		}, [C(n.$slots, "default")], 10, Ll));
	}
}), zl = /* @__PURE__ */ l({
	__name: "EmptyTitle",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "empty-title",
			class: m(T(R)("text-lg font-medium tracking-tight cn-font-heading", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Bl = L("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*=size-])]:size-6"
	} },
	defaultVariants: { variant: "default" }
}), Vl = ["data-orientation"], Hl = /* @__PURE__ */ l({
	__name: "Field",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		orientation: { default: "vertical" }
	},
	setup(e) {
		let t = e;
		return (n, r) => (y(), i("div", {
			role: "group",
			"data-slot": "field",
			"data-orientation": e.orientation,
			class: m(T(R)(T(ru)({ orientation: e.orientation }), t.class))
		}, [C(n.$slots, "default")], 10, Vl));
	}
}), Ul = /* @__PURE__ */ l({
	__name: "FieldContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "field-content",
			class: m(T(R)("gap-1 group/field-content flex flex-1 flex-col leading-snug", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Wl = /* @__PURE__ */ l({
	__name: "FieldDescription",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("p", {
			"data-slot": "field-description",
			class: m(T(R)("text-muted-foreground text-left text-sm [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal group-has-data-horizontal/field:text-balance", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Gl = {
	key: 2,
	class: "ml-4 flex list-disc flex-col gap-1"
}, Kl = /* @__PURE__ */ l({
	__name: "FieldError",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		errors: {}
	},
	setup(n) {
		let a = n, o = t(() => {
			if (!a.errors || a.errors.length === 0) return null;
			let e = [...new Map(a.errors.filter(Boolean).map((e) => [typeof e == "string" ? e : e?.message, e])).values()];
			return e.length === 1 && e[0] ? typeof e[0] == "string" ? e[0] : e[0].message : e.map((e) => typeof e == "string" ? e : e?.message);
		});
		return (t, n) => t.$slots.default || o.value ? (y(), i("div", {
			key: 0,
			role: "alert",
			"data-slot": "field-error",
			class: m(T(R)("text-destructive text-sm font-normal", a.class))
		}, [t.$slots.default ? C(t.$slots, "default", { key: 0 }) : typeof o.value == "string" ? (y(), i(e, { key: 1 }, [s(w(o.value), 1)], 64)) : Array.isArray(o.value) ? (y(), i("ul", Gl, [(y(!0), i(e, null, S(o.value, (e, t) => (y(), i("li", { key: t }, w(e), 1))), 128))])) : r("", !0)], 2)) : r("", !0);
	}
}), ql = /* @__PURE__ */ l({
	__name: "FieldGroup",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "field-group",
			class: m(T(R)("gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Jl = /* @__PURE__ */ l({
	__name: "Label",
	props: {
		for: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Xt), p({ "data-slot": "label" }, T(r), { class: T(R)("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Yl = /* @__PURE__ */ l({
	__name: "FieldLabel",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Jl), {
			"data-slot": "field-label",
			class: m(T(R)("has-data-checked:bg-primary/5 has-data-checked:border-primary/30 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-3 group/field-label peer/field-label flex w-fit leading-snug", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col", t.class))
		}, {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}), Xl = ["data-variant"], Zl = /* @__PURE__ */ l({
	__name: "FieldLegend",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: { default: "legend" }
	},
	setup(e) {
		let t = e;
		return (n, r) => (y(), i("legend", {
			"data-slot": "field-legend",
			"data-variant": e.variant,
			class: m(T(R)("mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base", t.class))
		}, [C(n.$slots, "default")], 10, Xl));
	}
}), Ql = ["data-content"], $l = {
	key: 0,
	class: "text-muted-foreground px-2 relative mx-auto block w-fit bg-background",
	"data-slot": "field-separator-content"
}, eu = /* @__PURE__ */ l({
	__name: "FieldSeparator",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "field-separator",
			"data-content": !!e.$slots.default,
			class: m(T(R)("-my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2 relative", t.class))
		}, [c(T(V), { class: "absolute inset-0 top-1/2" }), e.$slots.default ? (y(), i("span", $l, [C(e.$slots, "default")])) : r("", !0)], 10, Ql));
	}
}), tu = /* @__PURE__ */ l({
	__name: "FieldSet",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("fieldset", {
			"data-slot": "field-set",
			class: m(T(R)("gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), nu = /* @__PURE__ */ l({
	__name: "FieldTitle",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "field-label",
			class: m(T(R)("gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50 flex w-fit items-center leading-snug", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), ru = L("data-[invalid=true]:text-destructive gap-3 group/field flex w-full", {
	variants: { orientation: {
		vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
		horizontal: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
}), iu = Symbol();
//#endregion
//#region src/components/ui/form/useFormField.ts
function au() {
	let e = d(Wi), n = d(iu);
	if (!e) throw Error("useFormField should be used within <FormField>");
	let { name: r, errorMessage: i, meta: a } = e, o = n, s = {
		valid: t(() => a.valid),
		isDirty: t(() => a.dirty),
		isTouched: t(() => a.touched),
		error: i
	};
	return {
		id: o,
		name: r,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...s
	};
}
//#endregion
//#region src/components/ui/form/FormControl.vue
var ou = /* @__PURE__ */ l({
	__name: "FormControl",
	setup(e) {
		let { error: t, formItemId: r, formDescriptionId: i, formMessageId: a } = au();
		return (e, o) => (y(), n(T(Fr), {
			id: T(r),
			"data-slot": "form-control",
			"aria-describedby": T(t) ? `${T(i)} ${T(a)}` : `${T(i)}`,
			"aria-invalid": !!T(t)
		}, {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 8, [
			"id",
			"aria-describedby",
			"aria-invalid"
		]));
	}
}), su = ["id"], cu = /* @__PURE__ */ l({
	__name: "FormDescription",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { formDescriptionId: n } = au();
		return (e, r) => (y(), i("p", {
			id: T(n),
			"data-slot": "form-description",
			class: m(T(R)("text-muted-foreground text-sm", t.class))
		}, [C(e.$slots, "default")], 10, su));
	}
}), lu = /* @__PURE__ */ l({
	__name: "FormItem",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return b(iu, gi()), (e, n) => (y(), i("div", {
			"data-slot": "form-item",
			class: m(T(R)("grid gap-2", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), uu = /* @__PURE__ */ l({
	__name: "FormLabel",
	props: {
		for: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, { error: r, formItemId: i } = au();
		return (e, a) => (y(), n(T(Jl), {
			"data-slot": "form-label",
			"data-error": !!T(r),
			class: m(T(R)("data-[error=true]:text-destructive", t.class)),
			for: T(i)
		}, {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 8, [
			"data-error",
			"class",
			"for"
		]));
	}
}), du = /* @__PURE__ */ l({
	__name: "FormMessage",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { name: r, formMessageId: i } = au();
		return (e, a) => (y(), n(T(Ui), {
			id: T(i),
			"data-slot": "form-message",
			as: "p",
			name: ie(T(r)),
			class: m(T(R)("text-destructive text-sm", t.class))
		}, null, 8, [
			"id",
			"name",
			"class"
		]));
	}
}), fu = /* @__PURE__ */ l({
	__name: "HoverCard",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		openDelay: {},
		closeDelay: {}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(Jt), p({ "data-slot": "hover-card" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), pu = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "HoverCardContent",
	props: {
		forceMount: { type: Boolean },
		side: {},
		sideOffset: { default: 4 },
		sideFlip: { type: Boolean },
		align: { default: "center" },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(qt), null, {
			default: E(() => [c(T(Kt), p({ "data-slot": "hover-card-content" }, {
				...e.$attrs,
				...T(r)
			}, { class: T(R)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-4 text-sm shadow-md ring-1 duration-100 z-50 origin-(--reka-hover-card-content-transform-origin) outline-hidden", t.class) }), {
				default: E(() => [C(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), mu = /* @__PURE__ */ l({
	__name: "HoverCardTrigger",
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Yt), p({ "data-slot": "hover-card-trigger" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), hu = /* @__PURE__ */ l({
	__name: "InputOTP",
	props: {
		maxlength: {},
		textAlign: {},
		inputmode: {},
		containerClass: {},
		pushPasswordManagerStrategy: {},
		noScriptCssFallback: {},
		defaultValue: {},
		pasteTransformer: { type: Function },
		accept: {},
		alt: {},
		autocomplete: {},
		autofocus: { type: Boolean },
		capture: { type: [Boolean, String] },
		checked: { type: [
			Boolean,
			Array,
			Set
		] },
		crossorigin: {},
		disabled: { type: Boolean },
		enterKeyHint: {},
		form: {},
		formaction: {},
		formenctype: {},
		formmethod: {},
		formnovalidate: { type: Boolean },
		formtarget: {},
		height: {},
		indeterminate: { type: Boolean },
		list: {},
		max: {},
		min: {},
		minlength: {},
		multiple: { type: Boolean },
		name: {},
		pattern: {},
		placeholder: {},
		readonly: { type: Boolean },
		required: { type: Boolean },
		size: {},
		src: {},
		step: {},
		type: {},
		value: {},
		width: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"complete",
		"change",
		"select",
		"input",
		"focus",
		"blur",
		"mouseover",
		"mouseleave",
		"paste"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Gi), p(T(a), {
			"container-class": T(R)("gap-2 flex items-center has-disabled:opacity-50", r.class),
			"data-slot": "input-otp",
			spellcheck: !1,
			class: "disabled:cursor-not-allowed"
		}), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["container-class"]));
	}
}), gu = /* @__PURE__ */ l({
	__name: "InputOTPGroup",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, n = j(D(t, "class"));
		return (e, r) => (y(), i("div", p({ "data-slot": "input-otp-group" }, T(n), { class: T(R)("has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive rounded-md has-aria-invalid:ring-3 flex items-center", t.class) }), [C(e.$slots, "default")], 16));
	}
}), _u = /* @__PURE__ */ l({
	__name: "InputOTPSeparator",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, n = j(D(t, "class"));
		return (e, r) => (y(), i("div", p({
			"data-slot": "input-otp-separator",
			role: "separator"
		}, T(n), { class: T(R)("[&_svg:not([class*=size-])]:size-4 flex items-center", t.class) }), [C(e.$slots, "default", {}, () => [c(T(Di))])], 16));
	}
}), vu = ["data-active"], yu = {
	key: 0,
	class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, bu = /* @__PURE__ */ l({
	__name: "InputOTPSlot",
	props: {
		index: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let n = e, o = j(D(n, "class")), c = Ki(), l = t(() => c?.value.slots[n.index]);
		return (e, t) => (y(), i("div", p(T(o), {
			"data-slot": "input-otp-slot",
			"data-active": l.value?.isActive,
			class: T(R)("dark:bg-input/30 border-input data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive size-9 border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:ring-3 relative flex items-center justify-center data-[active=true]:z-10", n.class)
		}), [s(w(l.value?.char) + " ", 1), l.value?.hasFakeCaret ? (y(), i("div", yu, [...t[0] ||= [a("div", { class: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }, null, -1)]])) : r("", !0)], 16, vu));
	}
}), xu = /* @__PURE__ */ l({
	__name: "Item",
	props: {
		asChild: { type: Boolean },
		as: { default: "div" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: { default: "default" },
		size: { default: "default" }
	},
	setup(e) {
		let t = e;
		return (r, i) => (y(), n(T(A), {
			"data-slot": "item",
			"data-variant": e.variant,
			"data-size": e.size,
			as: e.as,
			"as-child": e.asChild,
			class: m(T(R)(T(Mu)({
				variant: e.variant,
				size: e.size
			}), t.class))
		}, {
			default: E(() => [C(r.$slots, "default")]),
			_: 3
		}, 8, [
			"data-variant",
			"data-size",
			"as",
			"as-child",
			"class"
		]));
	}
}), Su = /* @__PURE__ */ l({
	__name: "ItemActions",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "item-actions",
			class: m(T(R)("gap-2 flex items-center", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Cu = /* @__PURE__ */ l({
	__name: "ItemContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "item-content",
			class: m(T(R)("gap-1 group-data-[size=xs]/item:gap-0 flex flex-1 flex-col [&+[data-slot=item-content]]:flex-none", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), wu = /* @__PURE__ */ l({
	__name: "ItemDescription",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("p", {
			"data-slot": "item-description",
			class: m(T(R)("text-muted-foreground text-left text-sm leading-normal group-data-[size=xs]/item:text-xs line-clamp-2 font-normal [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Tu = /* @__PURE__ */ l({
	__name: "ItemFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "item-footer",
			class: m(T(R)("gap-2 flex basis-full items-center justify-between", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Eu = /* @__PURE__ */ l({
	__name: "ItemGroup",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			role: "list",
			"data-slot": "item-group",
			class: m(T(R)("gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2 group/item-group flex w-full flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Du = /* @__PURE__ */ l({
	__name: "ItemHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "item-header",
			class: m(T(R)("gap-2 flex basis-full items-center justify-between", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Ou = ["data-variant"], ku = /* @__PURE__ */ l({
	__name: "ItemMedia",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: {}
	},
	setup(e) {
		let t = e;
		return (n, r) => (y(), i("div", {
			"data-slot": "item-media",
			"data-variant": t.variant,
			class: m(T(R)(T(Nu)({ variant: e.variant }), t.class))
		}, [C(n.$slots, "default")], 10, Ou));
	}
}), Au = /* @__PURE__ */ l({
	__name: "ItemSeparator",
	props: {
		orientation: {},
		decorative: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(V), {
			"data-slot": "item-separator",
			orientation: "horizontal",
			class: m(T(R)("my-2", t.class))
		}, null, 8, ["class"]));
	}
}), ju = /* @__PURE__ */ l({
	__name: "ItemTitle",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "item-title",
			class: m(T(R)("gap-2 text-sm leading-snug font-medium underline-offset-4 cn-font-heading line-clamp-1 flex w-fit items-center", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Mu = L("[a]:hover:bg-muted rounded-md border text-sm group/item flex w-full flex-wrap items-center transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors", {
	variants: {
		variant: {
			default: "border-transparent",
			outline: "border-border",
			muted: "bg-muted/50 border-transparent"
		},
		size: {
			default: "gap-3.5 px-4 py-3.5",
			sm: "gap-2.5 px-3 py-2.5",
			xs: "gap-2 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), Nu = L("gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start flex shrink-0 items-center justify-center [&_svg]:pointer-events-none", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "[&_svg:not([class*=size-])]:size-4",
		image: "size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover"
	} },
	defaultVariants: { variant: "default" }
}), Pu = /* @__PURE__ */ l({
	__name: "Kbd",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("kbd", {
			"data-slot": "kbd",
			class: m(T(R)("bg-muted text-muted-foreground in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 h-5 w-fit min-w-5 gap-1 rounded-sm px-1 font-sans text-xs font-medium [&_svg:not([class*=size-])]:size-3 pointer-events-none inline-flex items-center justify-center select-none", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Fu = /* @__PURE__ */ l({
	__name: "KbdGroup",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("kbd", {
			"data-slot": "kbd-group",
			class: m(T(R)("gap-1 inline-flex items-center", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Iu = /* @__PURE__ */ l({
	__name: "Menubar",
	props: {
		modelValue: {},
		defaultValue: {},
		dir: {},
		loop: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(mn), p({ "data-slot": "menubar" }, T(a), { class: T(R)("h-9 gap-1 rounded-md border p-1 shadow-xs flex items-center", r.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Lu = { class: "left-2 size-4 [&_svg:not([class*=size-])]:size-4 pointer-events-none absolute flex items-center justify-center" }, Ru = /* @__PURE__ */ l({
	__name: "MenubarCheckboxItem",
	props: {
		modelValue: { type: [Boolean, String] },
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["select", "update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, o = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(rn), p({ "data-slot": "menubar-checkbox-item" }, T(o), { class: T(R)("focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm data-inset:pl-8 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0", r.class) }), {
			default: E(() => [a("span", Lu, [c(T(cn), null, {
				default: E(() => [C(e.$slots, "indicator-icon", {}, () => [c(T(N))])]),
				_: 3
			})]), C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), zu = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "MenubarContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		side: {},
		sideOffset: { default: 8 },
		sideFlip: { type: Boolean },
		align: { default: "start" },
		alignOffset: { default: -4 },
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(dn), null, {
			default: E(() => [c(T(an), p({ "data-slot": "menubar-content" }, {
				...e.$attrs,
				...T(r)
			}, { class: T(R)("bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-md p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 origin-(--reka-menubar-content-transform-origin) overflow-hidden", t.class) }), {
				default: E(() => [C(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), Bu = /* @__PURE__ */ l({
	__name: "MenubarGroup",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(on), p({ "data-slot": "menubar-group" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Vu = /* @__PURE__ */ l({
	__name: "MenubarItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean },
		variant: {}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class", "inset", "variant"), i);
		return (t, i) => (y(), n(T(sn), p({
			"data-slot": "menubar-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, T(a), { class: T(R)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm data-disabled:opacity-50 data-inset:pl-8 [&_svg:not([class*=size-])]:size-4 group/menubar-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0", r.class) }), {
			default: E(() => [C(t.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), Hu = /* @__PURE__ */ l({
	__name: "MenubarLabel",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean }
	},
	setup(e) {
		let t = e, r = D(t, "class", "inset");
		return (i, a) => (y(), n(T(ln), p({
			"data-slot": "menubar-label",
			"data-inset": e.inset ? "" : void 0
		}, T(r), { class: T(R)("px-2 py-1.5 text-sm font-medium data-inset:pl-8", t.class) }), {
			default: E(() => [C(i.$slots, "default")]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), Uu = /* @__PURE__ */ l({
	__name: "MenubarMenu",
	props: { value: {} },
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(un), p({ "data-slot": "menubar-menu" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Wu = /* @__PURE__ */ l({
	__name: "MenubarRadioGroup",
	props: {
		modelValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(fn), p({ "data-slot": "menubar-radio-group" }, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Gu = { class: "left-2 size-4 [&_svg:not([class*=size-])]:size-4 pointer-events-none absolute flex items-center justify-center" }, Ku = /* @__PURE__ */ l({
	__name: "MenubarRadioItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let r = e, i = t, o = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(pn), p({ "data-slot": "menubar-radio-item" }, T(o), { class: T(R)("focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm data-disabled:opacity-50 data-inset:pl-8 [&_svg:not([class*=size-])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0", r.class) }), {
			default: E(() => [a("span", Gu, [c(T(cn), null, {
				default: E(() => [C(e.$slots, "indicator-icon", {}, () => [c(T(N))])]),
				_: 3
			})]), C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), qu = /* @__PURE__ */ l({
	__name: "MenubarSeparator",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(hn), p({
			"data-slot": "menubar-separator",
			class: T(R)("bg-border -mx-1 my-1 h-px", t.class)
		}, T(r)), null, 16, ["class"]));
	}
}), Ju = /* @__PURE__ */ l({
	__name: "MenubarShortcut",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("span", {
			"data-slot": "menubar-shortcut",
			class: m(T(R)("text-muted-foreground group-focus/menubar-item:text-accent-foreground text-xs tracking-widest ml-auto", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Yu = /* @__PURE__ */ l({
	__name: "MenubarSub",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(gn), p({ "data-slot": "menubar-sub" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), Xu = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "MenubarSubContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		sideOffset: {},
		sideFlip: { type: Boolean },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(dn), null, {
			default: E(() => [c(T(_n), p({ "data-slot": "menubar-sub-content" }, {
				...e.$attrs,
				...T(a)
			}, { class: T(R)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-32 rounded-md p-1 shadow-lg ring-1 duration-100 cn-menu-translucent z-50 origin-(--reka-menubar-content-transform-origin) overflow-hidden", r.class) }), {
				default: E(() => [C(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), Zu = /* @__PURE__ */ l({
	__name: "MenubarSubTrigger",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean }
	},
	setup(e) {
		let t = e, r = j(D(t, "class", "inset"));
		return (i, a) => (y(), n(T(vn), p({
			"data-slot": "menubar-sub-trigger",
			"data-inset": e.inset ? "" : void 0
		}, T(r), { class: T(R)("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm data-inset:pl-8 [&_svg:not([class*=size-])]:size-4 flex cursor-default items-center outline-none select-none", t.class) }), {
			default: E(() => [C(i.$slots, "default"), c(T(F), { class: "cn-rtl-flip ml-auto size-4" })]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), Qu = /* @__PURE__ */ l({
	__name: "MenubarTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(yn), p({ "data-slot": "menubar-trigger" }, T(r), { class: T(R)("hover:bg-muted aria-expanded:bg-muted rounded-sm px-2 py-1 text-sm font-medium flex items-center outline-hidden select-none", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), $u = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, ed = /* @__PURE__ */ l({
	__name: "NavigationMenuViewport",
	props: {
		forceMount: { type: Boolean },
		align: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = j(D(t, "class"));
		return (e, r) => (y(), i("div", $u, [c(T(Dn), p({ "data-slot": "navigation-menu-viewport" }, T(n), { class: T(R)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:zoom-out-90 data-open:zoom-in-90 ring-foreground/10 rounded-lg shadow ring-1 duration-100 origin-top-center relative mt-1.5 h-(--reka-navigation-menu-viewport-height) w-full overflow-hidden md:w-(--reka-navigation-menu-viewport-width)", t.class) }), null, 16, ["class"])]));
	}
}), td = /* @__PURE__ */ l({
	__name: "NavigationMenu",
	props: {
		modelValue: {},
		defaultValue: {},
		dir: {},
		orientation: {},
		delayDuration: {},
		skipDelayDuration: {},
		disableClickTrigger: { type: Boolean },
		disableHoverTrigger: { type: Boolean },
		disablePointerLeaveClose: { type: Boolean },
		unmountOnHide: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		viewport: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let i = e, a = t, o = M(D(i, "class", "viewport"), a);
		return (t, a) => (y(), n(T(Tn), p({
			"data-slot": "navigation-menu",
			"data-viewport": e.viewport
		}, T(o), { class: T(R)("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", i.class) }), {
			default: E((i) => [C(t.$slots, "default", h(u(i))), e.viewport ? (y(), n(ed, { key: 0 })) : r("", !0)]),
			_: 3
		}, 16, ["data-viewport", "class"]));
	}
}), nd = /* @__PURE__ */ l({
	__name: "NavigationMenuContent",
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(bn), p({ "data-slot": "navigation-menu-content" }, T(a), { class: T(R)("data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:ring-foreground/10 p-2 pr-2.5 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:duration-300 top-0 left-0 w-full group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none md:absolute md:w-auto", r.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), rd = /* @__PURE__ */ l({
	__name: "NavigationMenuIndicator",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(xn), p({ "data-slot": "navigation-menu-indicator" }, T(r), { class: T(R)("data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-1 flex h-1.5 items-end justify-center overflow-hidden", t.class) }), {
			default: E(() => [...i[0] ||= [a("div", { class: "bg-border rounded-tl-sm shadow-md relative top-[60%] h-2 w-2 rotate-45" }, null, -1)]]),
			_: 1
		}, 16, ["class"]));
	}
}), id = /* @__PURE__ */ l({
	__name: "NavigationMenuItem",
	props: {
		value: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Sn), p({ "data-slot": "navigation-menu-item" }, T(r), { class: T(R)("relative", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), ad = /* @__PURE__ */ l({
	__name: "NavigationMenuLink",
	props: {
		active: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Cn), p({ "data-slot": "navigation-menu-link" }, T(a), { class: T(R)("data-[active=true]:focus:bg-muted data-[active=true]:hover:bg-muted data-[active=true]:bg-muted/50 focus-visible:ring-ring/50 hover:bg-muted focus:bg-muted flex items-center gap-1.5 rounded-md p-2 text-sm transition-all outline-none focus-visible:ring-3 focus-visible:outline-1 [&_svg:not([class*=size-])]:size-4 in-data-[slot=navigation-menu-content]:rounded-sm", r.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), od = /* @__PURE__ */ l({
	__name: "NavigationMenuList",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(wn), p({ "data-slot": "navigation-menu-list" }, T(r), { class: T(R)("gap-0 group flex flex-1 list-none items-center justify-center", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), sd = /* @__PURE__ */ l({
	__name: "NavigationMenuTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(En), p({ "data-slot": "navigation-menu-trigger" }, T(r), { class: T(R)(T(cd)(), "group", t.class) }), {
			default: E(() => [C(e.$slots, "default"), c(T(P), {
				class: "relative top-px ml-1 size-3 transition duration-300 group-data-open/navigation-menu-trigger:rotate-180 group-data-popup-open/navigation-menu-trigger:rotate-180",
				"aria-hidden": "true"
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), cd = L("hover:bg-muted focus:bg-muted data-open:hover:bg-muted data-open:focus:bg-muted data-open:bg-muted/50 focus-visible:ring-ring/50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted rounded-md px-4 py-2 text-sm font-medium transition-all focus-visible:ring-3 focus-visible:outline-1 disabled:opacity-50 group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center outline-none disabled:pointer-events-none"), ld = /* @__PURE__ */ l({
	__name: "NumberField",
	props: {
		defaultValue: {},
		modelValue: {},
		min: {},
		max: {},
		step: {},
		stepSnapping: { type: Boolean },
		focusOnChange: { type: Boolean },
		formatOptions: {},
		locale: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		disableWheelChange: { type: Boolean },
		invertWheelChange: { type: Boolean },
		id: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(jn), p(T(a), { class: T(R)("grid gap-1.5", r.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), ud = /* @__PURE__ */ l({
	__name: "NumberFieldContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", { class: m(T(R)("relative [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5 [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5", t.class)) }, [C(e.$slots, "default")], 2));
	}
}), dd = /* @__PURE__ */ l({
	__name: "NumberFieldDecrement",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(On), p({ "data-slot": "decrement" }, T(r), { class: T(R)("absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20", t.class) }), {
			default: E(() => [C(e.$slots, "default", {}, () => [c(T(Di), { class: "h-4 w-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), fd = /* @__PURE__ */ l({
	__name: "NumberFieldIncrement",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(kn), p({ "data-slot": "increment" }, T(r), { class: T(R)("absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3", t.class) }), {
			default: E(() => [C(e.$slots, "default", {}, () => [c(T(ji), { class: "h-4 w-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), pd = /* @__PURE__ */ l({
	__name: "NumberFieldInput",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(An), {
			"data-slot": "input",
			class: m(T(R)("flex h-9 w-full rounded-md border border-input bg-transparent py-1 text-sm text-center shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t.class))
		}, null, 8, ["class"]));
	}
}), md = /* @__PURE__ */ l({
	__name: "Pagination",
	props: {
		page: {},
		defaultPage: {},
		itemsPerPage: {},
		total: {},
		siblingCount: {},
		disabled: { type: Boolean },
		showEdges: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:page"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(zn), p({ "data-slot": "pagination" }, T(a), { class: T(R)("mx-auto flex w-full justify-center", r.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), hd = /* @__PURE__ */ l({
	__name: "PaginationContent",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Fn), p({ "data-slot": "pagination-content" }, T(r), { class: T(R)("gap-1 flex items-center", t.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), gd = /* @__PURE__ */ l({
	__name: "PaginationEllipsis",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Mn), p({ "data-slot": "pagination-ellipsis" }, T(r), { class: T(R)("size-9 [&_svg:not([class*=size-])]:size-4 flex items-center justify-center", t.class) }), {
			default: E(() => [C(e.$slots, "default", {}, () => [c(T(Oi)), i[0] ||= a("span", { class: "sr-only" }, "More pages", -1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), _d = /* @__PURE__ */ l({
	__name: "PaginationFirst",
	props: {
		asChild: { type: Boolean },
		as: {},
		size: { default: "default" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class", "size"));
		return (i, o) => (y(), n(T(Nn), p({
			"data-slot": "pagination-first",
			class: T(R)(T(B)({
				variant: "ghost",
				size: e.size
			}), "", t.class)
		}, T(r)), {
			default: E(() => [C(i.$slots, "default", {}, () => [c(T(xi), { "data-icon": "inline-start" }), o[0] ||= a("span", { class: "hidden sm:block" }, "First", -1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), vd = /* @__PURE__ */ l({
	__name: "PaginationItem",
	props: {
		value: {},
		asChild: { type: Boolean },
		as: {},
		size: { default: "icon" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		isActive: { type: Boolean }
	},
	setup(e) {
		let t = e, r = D(t, "class", "size", "isActive");
		return (i, a) => (y(), n(T(In), p({ "data-slot": "pagination-item" }, T(r), { class: T(R)(T(B)({
			variant: e.isActive ? "outline" : "ghost",
			size: e.size
		}), t.class) }), {
			default: E(() => [C(i.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), yd = /* @__PURE__ */ l({
	__name: "PaginationLast",
	props: {
		asChild: { type: Boolean },
		as: {},
		size: { default: "default" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class", "size"));
		return (i, o) => (y(), n(T(Pn), p({
			"data-slot": "pagination-last",
			class: T(R)(T(B)({
				variant: "ghost",
				size: e.size
			}), "", t.class)
		}, T(r)), {
			default: E(() => [C(i.$slots, "default", {}, () => [o[0] ||= a("span", { class: "hidden sm:block" }, "Last", -1), c(T(Si), { "data-icon": "inline-end" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), bd = [
	"href",
	"data-active",
	"aria-current"
], xd = /* @__PURE__ */ l({
	__name: "PaginationLink",
	props: {
		href: {},
		size: { default: "icon" },
		isActive: {
			type: Boolean,
			default: !1
		},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (n, r) => (y(), i("a", {
			href: e.href,
			"data-slot": "pagination-link",
			"data-active": e.isActive ? "" : void 0,
			"aria-current": e.isActive ? "page" : void 0,
			class: m(T(R)(T(B)({
				variant: e.isActive ? "outline" : "ghost",
				size: e.size
			}), "", t.class))
		}, [C(n.$slots, "default")], 10, bd));
	}
}), Sd = /* @__PURE__ */ l({
	__name: "PaginationNext",
	props: {
		asChild: { type: Boolean },
		as: {},
		size: { default: "default" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class", "size"));
		return (i, o) => (y(), n(T(Ln), p({
			"data-slot": "pagination-next",
			class: T(R)(T(B)({
				variant: "ghost",
				size: e.size
			}), "pr-2!", t.class)
		}, T(r)), {
			default: E(() => [C(i.$slots, "default", {}, () => [o[0] ||= a("span", { class: "hidden sm:block" }, "Next", -1), c(T(F), {
				"data-icon": "inline-end",
				class: "cn-rtl-flip"
			})])]),
			_: 3
		}, 16, ["class"]));
	}
}), Cd = /* @__PURE__ */ l({
	__name: "PaginationPrevious",
	props: {
		asChild: { type: Boolean },
		as: {},
		size: { default: "default" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class", "size"));
		return (i, o) => (y(), n(T(Rn), p({
			"data-slot": "pagination-previous",
			class: T(R)(T(B)({
				variant: "ghost",
				size: e.size
			}), "pl-2!", t.class)
		}, T(r)), {
			default: E(() => [C(i.$slots, "default", {}, () => [c(T(yi), {
				"data-icon": "inline-start",
				class: "cn-rtl-flip"
			}), o[0] ||= a("span", { class: "hidden sm:block" }, "Previous", -1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), wd = /* @__PURE__ */ l({
	__name: "PinInput",
	props: {
		modelValue: {},
		defaultValue: {},
		placeholder: {},
		mask: { type: Boolean },
		otp: {
			type: Boolean,
			default: !0
		},
		type: {},
		dir: {},
		disabled: { type: Boolean },
		id: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue", "complete"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Vn), p({
			otp: r.otp,
			"data-slot": "pin-input"
		}, T(a), { class: T(R)("flex items-center gap-2 has-disabled:opacity-50 disabled:cursor-not-allowed", r.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["otp", "class"]));
	}
}), Td = /* @__PURE__ */ l({
	__name: "PinInputGroup",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(A), p({ "data-slot": "pin-input-group" }, T(r), { class: T(R)("flex items-center", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Ed = /* @__PURE__ */ l({
	__name: "PinInputSeparator",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = j(e);
		return (e, r) => (y(), n(T(A), p({ "data-slot": "pin-input-separator" }, T(t)), {
			default: E(() => [C(e.$slots, "default", {}, () => [c(T(Di))])]),
			_: 3
		}, 16));
	}
}), Dd = /* @__PURE__ */ l({
	__name: "PinInputSlot",
	props: {
		index: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Bn), p({ "data-slot": "pin-input-slot" }, T(r), { class: T(R)("border-input focus:border-ring focus:ring-ring/50 focus:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:focus:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:aria-invalid:border-destructive relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none text-center first:rounded-l-md first:border-l last:rounded-r-md focus:z-10 focus:ring-[3px]", t.class) }), null, 16, ["class"]));
	}
}), Od = /* @__PURE__ */ l({
	__name: "Popover",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(Gn), p({ "data-slot": "popover" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), kd = /* @__PURE__ */ l({
	__name: "PopoverAnchor",
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Hn), p({ "data-slot": "popover-anchor" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Ad = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "PopoverContent",
	props: {
		forceMount: { type: Boolean },
		side: {},
		sideOffset: { default: 4 },
		sideFlip: { type: Boolean },
		align: { default: "center" },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		disableOutsidePointerEvents: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Wn), null, {
			default: E(() => [c(T(Un), p({ "data-slot": "popover-content" }, {
				...e.$attrs,
				...T(a)
			}, { class: T(R)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-4 rounded-md p-4 text-sm shadow-md ring-1 duration-100 z-50 w-72 origin-(--reka-popover-content-transform-origin) outline-hidden", r.class) }), {
				default: E(() => [C(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), jd = /* @__PURE__ */ l({
	__name: "PopoverDescription",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("p", {
			"data-slot": "popover-description",
			class: m(T(R)("text-muted-foreground", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Md = /* @__PURE__ */ l({
	__name: "PopoverHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "popover-header",
			class: m(T(R)("flex flex-col gap-1 text-sm", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Nd = /* @__PURE__ */ l({
	__name: "PopoverTitle",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "popover-title",
			class: m(T(R)("font-medium cn-font-heading", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Pd = /* @__PURE__ */ l({
	__name: "PopoverTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Kn), p({ "data-slot": "popover-trigger" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Fd = /* @__PURE__ */ l({
	__name: "Progress",
	props: {
		modelValue: { default: 0 },
		max: {},
		getValueLabel: {},
		getValueText: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Jn), p({ "data-slot": "progress" }, T(r), { class: T(R)("bg-muted h-1.5 rounded-full relative flex w-full items-center overflow-x-hidden", t.class) }), {
			default: E(() => [c(T(qn), {
				"data-slot": "progress-indicator",
				class: "bg-primary size-full flex-1 transition-all",
				style: g(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
			}, null, 8, ["style"])]),
			_: 1
		}, 16, ["class"]));
	}
}), Id = /* @__PURE__ */ l({
	__name: "RadioGroup",
	props: {
		modelValue: {},
		defaultValue: {},
		disabled: { type: Boolean },
		orientation: {},
		dir: {},
		loop: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Zn), p({
			"data-slot": "radio-group",
			class: T(R)("grid gap-3 w-full", r.class)
		}, T(a)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Ld = /* @__PURE__ */ l({
	__name: "RadioGroupItem",
	props: {
		id: {},
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Xn), p({ "data-slot": "radio-group-item" }, T(r), { class: T(R)("border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 dark:aria-invalid:border-destructive/50 flex size-4 rounded-full focus-visible:ring-3 aria-invalid:ring-3 group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", t.class) }), {
			default: E(() => [c(T(Yn), {
				"data-slot": "radio-group-indicator",
				class: "flex size-4 items-center justify-center"
			}, {
				default: E(() => [C(e.$slots, "default", {}, () => [c(T(wi), { class: "bg-primary-foreground absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full" })])]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), Rd = { class: "flex items-center gap-1" }, zd = { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Bd = /* @__PURE__ */ l({
	__name: "RangeCalendar",
	props: {
		defaultPlaceholder: {},
		defaultValue: {},
		modelValue: {},
		placeholder: {},
		allowNonContiguousRanges: { type: Boolean },
		pagedNavigation: { type: Boolean },
		preventDeselect: { type: Boolean },
		maximumDays: {},
		weekStartsOn: {},
		weekdayFormat: {},
		calendarLabel: {},
		fixedWeeks: { type: Boolean },
		maxValue: {},
		minValue: {},
		locale: {},
		numberOfMonths: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		initialFocus: { type: Boolean },
		isDateDisabled: { type: Function },
		isDateUnavailable: { type: Function },
		isDateHighlightable: { type: Function },
		dir: {},
		nextPage: { type: Function },
		prevPage: { type: Function },
		disableDaysOutsideCurrentView: { type: Boolean },
		fixedDate: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"update:modelValue",
		"update:validModelValue",
		"update:placeholder",
		"update:startValue"
	],
	setup(t, { emit: r }) {
		let o = t, l = r, u = M(D(o, "class"), l);
		return (t, r) => (y(), n(T(lr), p({
			"data-slot": "range-calendar",
			class: T(R)("p-3", o.class)
		}, T(u)), {
			default: E(({ grid: t, weekDays: r }) => [c(T(Jd), null, {
				default: E(() => [c(T(Yd)), a("div", Rd, [c(T(Zd)), c(T(Xd))])]),
				_: 1
			}), a("div", zd, [(y(!0), i(e, null, S(t, (t) => (y(), n(T(Ud), { key: t.value.toString() }, {
				default: E(() => [c(T(Gd), null, {
					default: E(() => [c(T(Kd), null, {
						default: E(() => [(y(!0), i(e, null, S(r, (e) => (y(), n(T(qd), { key: e }, {
							default: E(() => [s(w(e), 1)]),
							_: 2
						}, 1024))), 128))]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024), c(T(Wd), null, {
					default: E(() => [(y(!0), i(e, null, S(t.rows, (r, a) => (y(), n(T(Kd), {
						key: `weekDate-${a}`,
						class: "mt-2 w-full"
					}, {
						default: E(() => [(y(!0), i(e, null, S(r, (e) => (y(), n(T(Vd), {
							key: e.toString(),
							date: e
						}, {
							default: E(() => [c(T(Hd), {
								day: e,
								month: t.value
							}, null, 8, ["day", "month"])]),
							_: 2
						}, 1032, ["date"]))), 128))]),
						_: 2
					}, 1024))), 128))]),
					_: 2
				}, 1024)]),
				_: 2
			}, 1024))), 128))])]),
			_: 1
		}, 16, ["class"]));
	}
}), Vd = /* @__PURE__ */ l({
	__name: "RangeCalendarCell",
	props: {
		date: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Qn), p({
			"data-slot": "range-calendar-cell",
			class: T(R)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-accent first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Hd = /* @__PURE__ */ l({
	__name: "RangeCalendarCellTrigger",
	props: {
		day: {},
		month: {},
		asChild: { type: Boolean },
		as: { default: "button" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T($n), p({
			"data-slot": "range-calendar-trigger",
			class: T(R)(T(B)({ variant: "ghost" }), "h-8 w-8 p-0 font-normal data-[selected]:opacity-100", "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground", "data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-primary data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:bg-primary data-[selection-start]:focus:text-primary-foreground", "data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary data-[selection-end]:hover:text-primary-foreground data-[selection-end]:focus:bg-primary data-[selection-end]:focus:text-primary-foreground", "data-[outside-view]:text-muted-foreground", "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50", "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Ud = /* @__PURE__ */ l({
	__name: "RangeCalendarGrid",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(er), p({
			"data-slot": "range-calendar-grid",
			class: T(R)("w-full border-collapse space-x-1", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Wd = /* @__PURE__ */ l({
	__name: "RangeCalendarGridBody",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(tr), p({ "data-slot": "range-calendar-grid-body" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Gd = /* @__PURE__ */ l({
	__name: "RangeCalendarGridHead",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(nr), p({ "data-slot": "range-calendar-grid-head" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Kd = /* @__PURE__ */ l({
	__name: "RangeCalendarGridRow",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(rr), p({
			"data-slot": "range-calendar-grid-row",
			class: T(R)("flex", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), qd = /* @__PURE__ */ l({
	__name: "RangeCalendarHeadCell",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(ir), p({
			"data-slot": "range-calendar-head-cell",
			class: T(R)("w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Jd = /* @__PURE__ */ l({
	__name: "RangeCalendarHeader",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(ar), p({
			"data-slot": "range-calendar-header",
			class: T(R)("flex justify-center pt-1 relative items-center w-full", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Yd = /* @__PURE__ */ l({
	__name: "RangeCalendarHeading",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(or), p({
			"data-slot": "range-calendar-heading",
			class: T(R)("text-sm font-medium", t.class)
		}, T(r)), {
			default: E(({ headingValue: t }) => [C(e.$slots, "default", { headingValue: t }, () => [s(w(t), 1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), Xd = /* @__PURE__ */ l({
	__name: "RangeCalendarNextButton",
	props: {
		nextPage: { type: Function },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(sr), p({
			"data-slot": "range-calendar-next-button",
			class: T(R)(T(B)({ variant: "outline" }), "absolute right-1", "size-7 bg-transparent p-0 opacity-50 hover:opacity-100", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default", {}, () => [c(T(F), { class: "size-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), Zd = /* @__PURE__ */ l({
	__name: "RangeCalendarPrevButton",
	props: {
		prevPage: { type: Function },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(cr), p({
			"data-slot": "range-calendar-prev-button",
			class: T(R)(T(B)({ variant: "outline" }), "absolute left-1", "size-7 bg-transparent p-0 opacity-50 hover:opacity-100", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default", {}, () => [c(T(yi), { class: "size-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), Qd = {
	key: 0,
	class: "bg-border h-6 w-1 rounded-lg z-10 flex shrink-0"
}, $d = /* @__PURE__ */ l({
	__name: "ResizableHandle",
	props: {
		id: {},
		hitAreaMargins: {},
		tabindex: {},
		disabled: { type: Boolean },
		nonce: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		withHandle: { type: Boolean }
	},
	emits: ["dragging"],
	setup(e, { emit: t }) {
		let a = e, o = t, s = M(D(a, "class", "withHandle"), o);
		return (e, t) => (y(), n(T(Rr), p({ "data-slot": "resizable-handle" }, T(s), { class: T(R)("relative flex w-px items-center justify-center bg-border ring-offset-background after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90", a.class) }), {
			default: E(() => [a.withHandle ? (y(), i("div", Qd, [C(e.$slots, "default")])) : r("", !0)]),
			_: 3
		}, 16, ["class"]));
	}
}), ef = /* @__PURE__ */ l({
	__name: "ResizablePanel",
	props: {
		collapsedSize: {},
		collapsible: { type: Boolean },
		defaultSize: {},
		id: {},
		maxSize: {},
		minSize: {},
		order: {},
		sizeUnit: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"collapse",
		"expand",
		"resize"
	],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return hi(), (e, t) => (y(), n(T(Lr), p({ "data-slot": "resizable-panel" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), tf = /* @__PURE__ */ l({
	__name: "ResizablePanelGroup",
	props: {
		id: {},
		autoSaveId: {},
		direction: {},
		keyboardResizeBy: {},
		storage: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["layout"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Ir), p({ "data-slot": "resizable-panel-group" }, T(a), { class: T(R)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", r.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), nf = /* @__PURE__ */ l({
	__name: "ScrollBar",
	props: {
		orientation: { default: "vertical" },
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (i, a) => (y(), n(T(fr), p({
			"data-slot": "scroll-area-scrollbar",
			"data-orientation": e.orientation
		}, T(r), { class: T(R)("data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none", t.class) }), {
			default: E(() => [c(T(pr), {
				"data-slot": "scroll-area-thumb",
				class: "rounded-full relative flex-1 bg-border"
			})]),
			_: 1
		}, 16, ["data-orientation", "class"]));
	}
}), rf = /* @__PURE__ */ l({
	__name: "ScrollArea",
	props: {
		type: {},
		dir: {},
		scrollHideDelay: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(dr), p({ "data-slot": "scroll-area" }, T(r), { class: T(R)("relative", t.class) }), {
			default: E(() => [
				c(T(mr), {
					"data-slot": "scroll-area-viewport",
					class: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
				}, {
					default: E(() => [C(e.$slots, "default")]),
					_: 3
				}),
				c(nf),
				c(T(ur))
			]),
			_: 3
		}, 16, ["class"]));
	}
}), af = /* @__PURE__ */ l({
	__name: "Select",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		defaultValue: {},
		modelValue: {},
		by: { type: [String, Function] },
		dir: {},
		multiple: { type: Boolean },
		autocomplete: {},
		disabled: { type: Boolean },
		name: {},
		required: { type: Boolean }
	},
	emits: ["update:modelValue", "update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(Cr), p({ "data-slot": "select" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), of = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "SelectContent",
	props: {
		forceMount: { type: Boolean },
		position: { default: "item-aligned" },
		bodyLock: { type: Boolean },
		side: {},
		sideOffset: {},
		sideFlip: { type: Boolean },
		align: { default: "center" },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		disableOutsidePointerEvents: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"closeAutoFocus",
		"escapeKeyDown",
		"pointerDownOutside"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (t, i) => (y(), n(T(Sr), null, {
			default: E(() => [c(T(hr), p({
				"data-slot": "select-content",
				"data-align-trigger": e.position === "item-aligned"
			}, {
				...t.$attrs,
				...T(a)
			}, { class: T(R)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-md shadow-md ring-1 duration-100 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 cn-menu-translucent relative z-50 max-h-(--reka-select-content-available-height) origin-(--reka-select-content-transform-origin) overflow-x-hidden overflow-y-auto data-[align-trigger=true]:animate-none", e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", r.class) }), {
				default: E(() => [
					c(T(pf)),
					c(T(kr), {
						"data-position": e.position,
						class: m(T(R)("data-[position=popper]:h-[var(--reka-select-trigger-height)] data-[position=popper]:w-full data-[position=popper]:min-w-[var(--reka-select-trigger-width)]"))
					}, {
						default: E(() => [C(t.$slots, "default")]),
						_: 3
					}, 8, ["data-position", "class"]),
					c(T(ff))
				]),
				_: 3
			}, 16, ["data-align-trigger", "class"])]),
			_: 3
		}));
	}
}), sf = /* @__PURE__ */ l({
	__name: "SelectGroup",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(gr), p({ "data-slot": "select-group" }, T(r), { class: T(R)("scroll-my-1 p-1", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), cf = { class: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }, lf = /* @__PURE__ */ l({
	__name: "SelectItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(vr), p({ "data-slot": "select-item" }, T(r), { class: T(R)("focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*=size-])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: E(() => [a("span", cf, [c(T(yr), null, {
				default: E(() => [C(e.$slots, "indicator-icon", {}, () => [c(T(N), { class: "pointer-events-none" })])]),
				_: 3
			})]), c(T(br), null, {
				default: E(() => [C(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), uf = /* @__PURE__ */ l({
	__name: "SelectItemText",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(br), p({ "data-slot": "select-item-text" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), df = /* @__PURE__ */ l({
	__name: "SelectLabel",
	props: {
		for: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(xr), {
			"data-slot": "select-label",
			class: m(T(R)("text-muted-foreground px-2 py-1.5 text-xs", t.class))
		}, {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}), ff = /* @__PURE__ */ l({
	__name: "SelectScrollDownButton",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(wr), p({ "data-slot": "select-scroll-down-button" }, T(r), { class: T(R)("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*=size-])]:size-4", t.class) }), {
			default: E(() => [C(e.$slots, "default", {}, () => [c(T(P))])]),
			_: 3
		}, 16, ["class"]));
	}
}), pf = /* @__PURE__ */ l({
	__name: "SelectScrollUpButton",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Tr), p({ "data-slot": "select-scroll-up-button" }, T(r), { class: T(R)("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*=size-])]:size-4", t.class) }), {
			default: E(() => [C(e.$slots, "default", {}, () => [c(T(bi))])]),
			_: 3
		}, 16, ["class"]));
	}
}), mf = /* @__PURE__ */ l({
	__name: "SelectSeparator",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Er), p({ "data-slot": "select-separator" }, T(r), { class: T(R)("bg-border -mx-1 my-1 h-px pointer-events-none", t.class) }), null, 16, ["class"]));
	}
}), hf = /* @__PURE__ */ l({
	__name: "SelectTrigger",
	props: {
		disabled: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: { default: "default" }
	},
	setup(e) {
		let t = e, r = j(D(t, "class", "size"));
		return (i, a) => (y(), n(T(Dr), p({
			"data-slot": "select-trigger",
			"data-size": e.size
		}, T(r), { class: T(R)("border-input data-placeholder:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-md border bg-transparent py-2 pr-2 pl-2.5 text-sm shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*=size-])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: E(() => [C(i.$slots, "default"), c(T(_r), { "as-child": "" }, {
				default: E(() => [c(T(P), { class: "text-muted-foreground size-4 pointer-events-none" })]),
				_: 1
			})]),
			_: 3
		}, 16, ["data-size", "class"]));
	}
}), gf = /* @__PURE__ */ l({
	__name: "SelectValue",
	props: {
		placeholder: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Or), p({ "data-slot": "select-value" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), _f = /* @__PURE__ */ l({
	__name: "Sheet",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(Ot), p({ "data-slot": "sheet" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), vf = /* @__PURE__ */ l({
	__name: "SheetClose",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(k), p({ "data-slot": "sheet-close" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), yf = /* @__PURE__ */ l({
	__name: "SheetOverlay",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Et), p({
			"data-slot": "sheet-overlay",
			class: T(R)("bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50 duration-100 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), bf = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "SheetContent",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		side: { default: "right" },
		showCloseButton: {
			type: Boolean,
			default: !0
		},
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let i = e, o = t, s = M(D(i, "class", "side", "showCloseButton"), o);
		return (t, o) => (y(), n(T(Dt), null, {
			default: E(() => [c(yf), c(T(wt), p({
				"data-slot": "sheet-content",
				"data-side": e.side,
				class: T(R)("bg-popover text-popover-foreground fixed z-50 flex flex-col gap-4 bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", i.class)
			}, {
				...t.$attrs,
				...T(s)
			}), {
				default: E(() => [C(t.$slots, "default"), e.showCloseButton ? (y(), n(T(k), {
					key: 0,
					"data-slot": "sheet-close",
					"as-child": ""
				}, {
					default: E(() => [c(T(z), {
						variant: "ghost",
						class: "absolute top-4 right-4",
						size: "icon-sm"
					}, {
						default: E(() => [c(T(I)), o[0] ||= a("span", { class: "sr-only" }, "Close", -1)]),
						_: 1
					})]),
					_: 1
				})) : r("", !0)]),
				_: 3
			}, 16, ["data-side", "class"])]),
			_: 3
		}));
	}
}), xf = /* @__PURE__ */ l({
	__name: "SheetDescription",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Tt), p({
			"data-slot": "sheet-description",
			class: T(R)("text-muted-foreground text-sm", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Sf = /* @__PURE__ */ l({
	__name: "SheetFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "sheet-footer",
			class: m(T(R)("gap-2 p-4 mt-auto flex flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Cf = /* @__PURE__ */ l({
	__name: "SheetHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "sheet-header",
			class: m(T(R)("gap-1.5 p-4 flex flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), wf = /* @__PURE__ */ l({
	__name: "SheetTitle",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(kt), p({
			"data-slot": "sheet-title",
			class: T(R)("text-foreground font-medium cn-font-heading", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Tf = /* @__PURE__ */ l({
	__name: "SheetTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(At), p({ "data-slot": "sheet-trigger" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Ef = "sidebar_state", Df = 3600 * 24 * 7, Of = "16rem", kf = "18rem", Af = "3rem", [jf, Mf] = fi("Sidebar"), Nf = { class: "flex h-full w-full flex-col" }, Pf = [
	"data-state",
	"data-collapsible",
	"data-variant",
	"data-side"
], Ff = ["data-side"], If = {
	"data-sidebar": "sidebar",
	"data-slot": "sidebar-inner",
	class: "bg-sidebar group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 flex size-full flex-col"
}, Lf = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "Sidebar",
	props: {
		side: { default: "left" },
		variant: { default: "sidebar" },
		collapsible: { default: "offcanvas" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, { isMobile: r, state: o, openMobile: l, setOpenMobile: u } = jf();
		return (d, f) => e.collapsible === "none" ? (y(), i("div", p({
			key: 0,
			"data-slot": "sidebar",
			class: T(R)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
		}, d.$attrs), [C(d.$slots, "default")], 16)) : T(r) ? (y(), n(T(_f), p({
			key: 1,
			open: T(l)
		}, d.$attrs, { "onUpdate:open": T(u) }), {
			default: E(() => [c(T(bf), {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar",
				"data-mobile": "true",
				side: e.side,
				class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
				style: g({ "--sidebar-width": T(kf) })
			}, {
				default: E(() => [c(Cf, { class: "sr-only" }, {
					default: E(() => [c(wf, null, {
						default: E(() => [...f[0] ||= [s("Sidebar", -1)]]),
						_: 1
					}), c(xf, null, {
						default: E(() => [...f[1] ||= [s("Displays the mobile sidebar.", -1)]]),
						_: 1
					})]),
					_: 1
				}), a("div", Nf, [C(d.$slots, "default")])]),
				_: 3
			}, 8, ["side", "style"])]),
			_: 3
		}, 16, ["open", "onUpdate:open"])) : (y(), i("div", {
			key: 2,
			class: "group peer text-sidebar-foreground hidden md:block",
			"data-slot": "sidebar",
			"data-state": T(o),
			"data-collapsible": T(o) === "collapsed" ? e.collapsible : "",
			"data-variant": e.variant,
			"data-side": e.side
		}, [a("div", {
			"data-slot": "sidebar-gap",
			class: m(T(R)("transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"))
		}, null, 2), a("div", p({
			"data-slot": "sidebar-container",
			"data-side": e.side,
			class: T(R)("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", t.class)
		}, d.$attrs), [a("div", If, [C(d.$slots, "default")])], 16, Ff)], 8, Pf));
	}
}), Rf = /* @__PURE__ */ l({
	__name: "SidebarContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "sidebar-content",
			"data-sidebar": "content",
			class: m(T(R)("no-scrollbar gap-2 flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), zf = /* @__PURE__ */ l({
	__name: "SidebarFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "sidebar-footer",
			"data-sidebar": "footer",
			class: m(T(R)("gap-2 p-2 flex flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Bf = /* @__PURE__ */ l({
	__name: "SidebarGroup",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "sidebar-group",
			"data-sidebar": "group",
			class: m(T(R)("p-2 relative flex w-full min-w-0 flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Vf = /* @__PURE__ */ l({
	__name: "SidebarGroupAction",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (r, i) => (y(), n(T(A), {
			"data-slot": "sidebar-group-action",
			"data-sidebar": "group-action",
			as: e.as,
			"as-child": e.asChild,
			class: m(T(R)("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 w-5 rounded-md p-0 focus-visible:ring-2 [&>svg]:size-4 flex aspect-square items-center justify-center outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:shrink-0", t.class))
		}, {
			default: E(() => [C(r.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class"
		]));
	}
}), Hf = /* @__PURE__ */ l({
	__name: "SidebarGroupContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "sidebar-group-content",
			"data-sidebar": "group-content",
			class: m(T(R)("text-sm w-full", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Uf = /* @__PURE__ */ l({
	__name: "SidebarGroupLabel",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (r, i) => (y(), n(T(A), {
			"data-slot": "sidebar-group-label",
			"data-sidebar": "group-label",
			as: e.as,
			"as-child": e.asChild,
			class: m(T(R)("text-sidebar-foreground/70 ring-sidebar-ring h-8 rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0", t.class))
		}, {
			default: E(() => [C(r.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class"
		]));
	}
}), Wf = /* @__PURE__ */ l({
	__name: "SidebarHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "sidebar-header",
			"data-sidebar": "header",
			class: m(T(R)("gap-2 p-2 flex flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Gf = /* @__PURE__ */ l({
	__name: "SidebarInput",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(sc), {
			"data-slot": "sidebar-input",
			"data-sidebar": "input",
			class: m(T(R)("bg-background h-8 w-full shadow-none", t.class))
		}, {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}), Kf = /* @__PURE__ */ l({
	__name: "SidebarInset",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("main", {
			"data-slot": "sidebar-inset",
			class: m(T(R)("bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative flex w-full flex-1 flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), qf = /* @__PURE__ */ l({
	__name: "SidebarMenu",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("ul", {
			"data-slot": "sidebar-menu",
			"data-sidebar": "menu",
			class: m(T(R)("gap-1 flex w-full min-w-0 flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Jf = /* @__PURE__ */ l({
	__name: "SidebarMenuAction",
	props: {
		asChild: { type: Boolean },
		as: { default: "button" },
		showOnHover: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (r, i) => (y(), n(T(A), {
			"data-slot": "sidebar-menu-action",
			"data-sidebar": "menu-action",
			class: m(T(R)("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 aspect-square w-5 rounded-md p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 focus-visible:ring-2 [&>svg]:size-4 flex items-center justify-center outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:shrink-0", e.showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground aria-expanded:opacity-100 md:opacity-0", t.class)),
			as: e.as,
			"as-child": e.asChild
		}, {
			default: E(() => [C(r.$slots, "default")]),
			_: 3
		}, 8, [
			"class",
			"as",
			"as-child"
		]));
	}
}), Yf = /* @__PURE__ */ l({
	__name: "SidebarMenuBadge",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "sidebar-menu-badge",
			"data-sidebar": "menu-badge",
			class: m(T(R)("text-sidebar-foreground peer-hover/menu-button:text-sidebar-accent-foreground peer-data-active/menu-button:text-sidebar-accent-foreground pointer-events-none absolute right-1 h-5 min-w-5 rounded-md px-1 text-xs font-medium peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 flex items-center justify-center tabular-nums select-none group-data-[collapsible=icon]:hidden", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Xf = /* @__PURE__ */ l({
	__name: "Tooltip",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		delayDuration: {},
		disableHoverableContent: { type: Boolean },
		disableClosingTrigger: { type: Boolean },
		disabled: { type: Boolean },
		ignoreNonKeyboardFocus: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let r = M(e, t);
		return (e, t) => (y(), n(T(ui), p({ "data-slot": "tooltip" }, T(r)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16));
	}
}), Zf = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "TooltipContent",
	props: {
		forceMount: { type: Boolean },
		ariaLabel: {},
		asChild: { type: Boolean },
		as: {},
		side: {},
		sideOffset: { default: 0 },
		align: {},
		alignOffset: {},
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["escapeKeyDown", "pointerDownOutside"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(ci), null, {
			default: E(() => [c(T(si), p({ "data-slot": "tooltip-content" }, {
				...T(a),
				...e.$attrs
			}, { class: T(R)("data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm bg-foreground text-background z-50 w-fit max-w-xs origin-(--reka-tooltip-content-transform-origin)", r.class) }), {
				default: E(() => [C(e.$slots, "default"), c(T(oi), { class: "size-2.5 rotate-45 rounded-[2px] bg-foreground fill-foreground z-50 translate-y-[calc(-50%_-_2px)]" })]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), Qf = /* @__PURE__ */ l({
	__name: "TooltipProvider",
	props: {
		delayDuration: { default: 0 },
		skipDelayDuration: {},
		disableHoverableContent: { type: Boolean },
		disableClosingTrigger: { type: Boolean },
		disabled: { type: Boolean },
		ignoreNonKeyboardFocus: { type: Boolean },
		content: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(li), h(u(t)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), $f = /* @__PURE__ */ l({
	__name: "TooltipTrigger",
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(di), p({ "data-slot": "tooltip-trigger" }, t), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ep = /* @__PURE__ */ l({
	__name: "SidebarMenuButtonChild",
	props: {
		variant: { default: "default" },
		size: { default: "default" },
		isActive: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		asChild: { type: Boolean },
		as: { default: "button" }
	},
	setup(e) {
		let t = e;
		return (r, i) => (y(), n(T(A), p({
			"data-slot": "sidebar-menu-button",
			"data-sidebar": "menu-button",
			"data-size": e.size,
			"data-active": e.isActive || void 0,
			class: T(R)(T(fp)({
				variant: e.variant,
				size: e.size
			}), t.class),
			as: e.as,
			"as-child": e.asChild
		}, r.$attrs), {
			default: E(() => [C(r.$slots, "default")]),
			_: 3
		}, 16, [
			"data-size",
			"data-active",
			"class",
			"as",
			"as-child"
		]));
	}
}), tp = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "SidebarMenuButton",
	props: {
		variant: { default: "default" },
		size: { default: "default" },
		isActive: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		asChild: { type: Boolean },
		as: { default: "button" },
		tooltip: {}
	},
	setup(t) {
		let r = t, { isMobile: a, state: o } = jf(), l = D(r, "tooltip");
		return (r, d) => t.tooltip ? (y(), n(T(Xf), { key: 1 }, {
			default: E(() => [c(T($f), { "as-child": "" }, {
				default: E(() => [c(ep, h(u({
					...T(l),
					...r.$attrs
				})), {
					default: E(() => [C(r.$slots, "default")]),
					_: 3
				}, 16)]),
				_: 3
			}), c(T(Zf), {
				side: "right",
				align: "center",
				hidden: T(o) !== "collapsed" || T(a)
			}, {
				default: E(() => [typeof t.tooltip == "string" ? (y(), i(e, { key: 0 }, [s(w(t.tooltip), 1)], 64)) : (y(), n(te(t.tooltip), { key: 1 }))]),
				_: 1
			}, 8, ["hidden"])]),
			_: 3
		})) : (y(), n(ep, h(p({ key: 0 }, {
			...T(l),
			...r.$attrs
		})), {
			default: E(() => [C(r.$slots, "default")]),
			_: 3
		}, 16));
	}
}), np = /* @__PURE__ */ l({
	__name: "SidebarMenuItem",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("li", {
			"data-slot": "sidebar-menu-item",
			"data-sidebar": "menu-item",
			class: m(T(R)("group/menu-item relative", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), rp = /* @__PURE__ */ l({
	__name: "Skeleton",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", {
			"data-slot": "skeleton",
			class: m(T(R)("bg-muted rounded-md animate-pulse", t.class))
		}, null, 2));
	}
}), ip = /* @__PURE__ */ l({
	__name: "SidebarMenuSkeleton",
	props: {
		showIcon: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let a = e, o = t(() => `${Math.floor(Math.random() * 40) + 50}%`);
		return (t, s) => (y(), i("div", {
			"data-slot": "sidebar-menu-skeleton",
			"data-sidebar": "menu-skeleton",
			class: m(T(R)("h-8 gap-2 rounded-md px-2 flex items-center", a.class))
		}, [e.showIcon ? (y(), n(T(rp), {
			key: 0,
			class: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		})) : r("", !0), c(T(rp), {
			class: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: g({ "--skeleton-width": o.value })
		}, null, 8, ["style"])], 2));
	}
}), ap = /* @__PURE__ */ l({
	__name: "SidebarMenuSub",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("ul", {
			"data-slot": "sidebar-menu-sub",
			"data-sidebar": "menu-sub",
			class: m(T(R)("border-sidebar-border mx-3.5 translate-x-px gap-1 border-l px-2.5 py-0.5 group-data-[collapsible=icon]:hidden flex min-w-0 flex-col", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), op = /* @__PURE__ */ l({
	__name: "SidebarMenuSubButton",
	props: {
		asChild: { type: Boolean },
		as: { default: "a" },
		size: { default: "md" },
		isActive: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (r, i) => (y(), n(T(A), {
			"data-slot": "sidebar-menu-sub-button",
			"data-sidebar": "menu-sub-button",
			as: e.as,
			"as-child": e.asChild,
			"data-size": e.size,
			"data-active": e.isActive || void 0,
			class: m(T(R)("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground h-7 gap-2 rounded-md px-2 focus-visible:ring-2 data-[size=md]:text-sm data-[size=sm]:text-xs [&>svg]:size-4 flex min-w-0 -translate-x-px items-center overflow-hidden outline-hidden group-data-[collapsible=icon]:hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:shrink-0", t.class))
		}, {
			default: E(() => [C(r.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-size",
			"data-active",
			"class"
		]));
	}
}), sp = /* @__PURE__ */ l({
	__name: "SidebarMenuSubItem",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("li", {
			"data-slot": "sidebar-menu-sub-item",
			"data-sidebar": "menu-sub-item",
			class: m(T(R)("group/menu-sub-item relative", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), cp = /* @__PURE__ */ l({
	__name: "SidebarProvider",
	props: {
		defaultOpen: {
			type: Boolean,
			default: !de?.cookie.includes(`${Ef}=false`)
		},
		open: {
			type: Boolean,
			default: void 0
		},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:open"],
	setup(e, { emit: r }) {
		let i = e, o = r, s = me("(max-width: 768px)"), c = x(!1), l = O(i, "open", o, {
			defaultValue: i.defaultOpen ?? !1,
			passive: i.open === void 0
		});
		function u(e) {
			l.value = e, document.cookie = `${Ef}=${l.value}; path=/; max-age=${Df}`;
		}
		function d(e) {
			c.value = e;
		}
		function f() {
			return s.value ? d(!c.value) : u(!l.value);
		}
		return pe("keydown", (e) => {
			e.key === "b" && (e.metaKey || e.ctrlKey) && (e.preventDefault(), f());
		}), Mf({
			state: t(() => l.value ? "expanded" : "collapsed"),
			open: l,
			setOpen: u,
			isMobile: s,
			openMobile: c,
			setOpenMobile: d,
			toggleSidebar: f
		}), (e, t) => (y(), n(T(li), { "delay-duration": 0 }, {
			default: E(() => [a("div", p({
				"data-slot": "sidebar-wrapper",
				style: {
					"--sidebar-width": T(Of),
					"--sidebar-width-icon": T(Af)
				},
				class: T(R)("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", i.class)
			}, e.$attrs), [C(e.$slots, "default")], 16)]),
			_: 3
		}));
	}
}), lp = /* @__PURE__ */ l({
	__name: "SidebarRail",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { toggleSidebar: n } = jf();
		return (e, r) => (y(), i("button", {
			"data-sidebar": "rail",
			"data-slot": "sidebar-rail",
			"aria-label": "Toggle Sidebar",
			tabindex: -1,
			title: "Toggle Sidebar",
			class: m(T(R)("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] sm:flex ltr:-translate-x-1/2 rtl:-translate-x-1/2", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", t.class)),
			onClick: r[0] ||= (...e) => T(n) && T(n)(...e)
		}, [C(e.$slots, "default")], 2));
	}
}), up = /* @__PURE__ */ l({
	__name: "SidebarSeparator",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(V), {
			"data-slot": "sidebar-separator",
			"data-sidebar": "separator",
			class: m(T(R)("bg-sidebar-border mx-2 w-auto", t.class))
		}, {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}), dp = /* @__PURE__ */ l({
	__name: "SidebarTrigger",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { toggleSidebar: r } = jf();
		return (e, i) => (y(), n(T(z), {
			"data-sidebar": "trigger",
			"data-slot": "sidebar-trigger",
			variant: "ghost",
			size: "icon-sm",
			class: m(T(R)("", t.class)),
			onClick: T(r)
		}, {
			default: E(() => [c(T(Ai), { class: "cn-rtl-flip" }), i[0] ||= a("span", { class: "sr-only" }, "Toggle Sidebar", -1)]),
			_: 1
		}, 8, ["class", "onClick"]));
	}
}), fp = L("ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground gap-2 rounded-md p-2 text-left text-sm transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button group/menu-button flex w-full items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_var(--sidebar-border)] hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), pp = /* @__PURE__ */ l({
	__name: "Slider",
	props: {
		defaultValue: {},
		modelValue: {},
		disabled: { type: Boolean },
		orientation: {},
		dir: {},
		inverted: { type: Boolean },
		min: {},
		max: {},
		step: {},
		minStepsBetweenThumbs: {},
		thumbAlignment: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue", "valueCommit"],
	setup(t, { emit: r }) {
		let a = t, o = r, s = M(D(a, "class"), o);
		return (t, r) => (y(), n(T(Mr), p({
			"data-slot": "slider",
			"data-vertical": a.orientation === "vertical" ? "" : void 0,
			class: T(R)("data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col", a.class)
		}, T(s)), {
			default: E(({ modelValue: t }) => [c(T(Pr), {
				"data-slot": "slider-track",
				"data-horizontal": a.orientation === "vertical" ? void 0 : "",
				"data-vertical": a.orientation === "vertical" ? "" : void 0,
				class: "bg-muted rounded-full data-horizontal:h-1.5 data-vertical:w-1.5 relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full"
			}, {
				default: E(() => [c(T(jr), {
					"data-slot": "slider-range",
					"data-horizontal": a.orientation === "vertical" ? void 0 : "",
					"data-vertical": a.orientation === "vertical" ? "" : void 0,
					class: "bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full"
				}, null, 8, ["data-horizontal", "data-vertical"])]),
				_: 1
			}, 8, ["data-horizontal", "data-vertical"]), (y(!0), i(e, null, S(t, (e, t) => (y(), n(T(Nr), {
				key: t,
				"data-slot": "slider-thumb",
				"data-vertical": a.orientation === "vertical" ? "" : void 0,
				class: "border-primary ring-ring/50 size-4 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
			}, null, 8, ["data-vertical"]))), 128))]),
			_: 1
		}, 16, ["data-vertical", "class"]));
	}
}), mp = /* @__PURE__ */ l({
	__name: "Sonner",
	props: {
		id: {},
		invert: { type: Boolean },
		theme: {},
		position: {},
		closeButtonPosition: {},
		hotkey: {},
		richColors: { type: Boolean },
		expand: { type: Boolean },
		duration: {},
		gap: {},
		visibleToasts: {},
		closeButton: { type: Boolean },
		toastOptions: {},
		class: {},
		style: {},
		offset: {},
		mobileOffset: {},
		dir: {},
		swipeDirections: {},
		icons: {},
		containerAriaLabel: {}
	},
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(qi), p({
			class: T(R)("toaster group", t.class),
			style: {
				"--normal-bg": "var(--popover)",
				"--normal-text": "var(--popover-foreground)",
				"--normal-border": "var(--border)",
				"--border-radius": "var(--radius)",
				"--gray2": "hsl(var(--popover) / 0.9)",
				"--gray3": "var(--border)",
				"--gray4": "var(--border)",
				"--gray5": "var(--border)",
				"--gray12": "var(--popover-foreground)"
			}
		}, {
			...t,
			toastOptions: {
				classes: { toast: "rounded-2xl" },
				...t.toastOptions
			}
		}), {
			"success-icon": E(() => [c(T(Ci), { class: "size-4" })]),
			"info-icon": E(() => [c(T(Ti), { class: "size-4" })]),
			"warning-icon": E(() => [c(T(Ni), { class: "size-4" })]),
			"error-icon": E(() => [c(T(ki), { class: "size-4" })]),
			"loading-icon": E(() => [a("div", null, [c(T(Ei), { class: "size-4 animate-spin" })])]),
			"close-icon": E(() => [c(T(I), { class: "size-4" })]),
			_: 1
		}, 16, ["class"]));
	}
}), hp = /* @__PURE__ */ l({
	__name: "Spinner",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, r) => (y(), n(T(Ei), {
			role: "status",
			"aria-label": "Loading",
			class: m(T(R)("size-4 animate-spin", t.class))
		}, null, 8, ["class"]));
	}
}), gp = /* @__PURE__ */ l({
	__name: "Stepper",
	props: {
		defaultValue: {},
		orientation: {},
		dir: {},
		modelValue: {},
		linear: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Hr), p({ class: T(R)("flex gap-2", r.class) }, T(a)), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), _p = /* @__PURE__ */ l({
	__name: "StepperDescription",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(zr), p(T(r), { class: T(R)("text-xs text-muted-foreground", t.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), vp = /* @__PURE__ */ l({
	__name: "StepperIndicator",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Br), p(T(r), { class: T(R)("inline-flex items-center justify-center rounded-full text-muted-foreground/50 w-8 h-8", "group-data-[disabled]:text-muted-foreground group-data-[disabled]:opacity-50", "group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground", "group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground", t.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), yp = /* @__PURE__ */ l({
	__name: "StepperItem",
	props: {
		step: {},
		disabled: { type: Boolean },
		completed: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Vr), p(T(r), { class: T(R)("flex items-center gap-2 group data-[disabled]:pointer-events-none", t.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), bp = /* @__PURE__ */ l({
	__name: "StepperSeparator",
	props: {
		orientation: {},
		decorative: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Ur), p(T(r), { class: T(R)("bg-muted", "group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50", "group-data-[state=completed]:bg-accent", t.class) }), null, 16, ["class"]));
	}
}), xp = /* @__PURE__ */ l({
	__name: "StepperTitle",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Wr), p(T(r), { class: T(R)("text-md font-semibold whitespace-nowrap", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Sp = /* @__PURE__ */ l({
	__name: "StepperTrigger",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Gr), p(T(r), { class: T(R)("p-1 flex flex-col items-center text-center gap-1 rounded-md", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Cp = /* @__PURE__ */ l({
	__name: "Switch",
	props: {
		defaultValue: {},
		modelValue: {},
		disabled: { type: Boolean },
		id: {},
		value: {},
		trueValue: {},
		falseValue: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: { default: "default" }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class", "size"), i);
		return (t, i) => (y(), n(T(Kr), p({
			"data-slot": "switch",
			"data-size": e.size
		}, T(a), { class: T(R)("data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent shadow-xs focus-visible:ring-3 aria-invalid:ring-3 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50", r.class) }), {
			default: E((e) => [c(T(qr), {
				"data-slot": "switch-thumb",
				class: "bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 pointer-events-none block ring-0 transition-transform"
			}, {
				default: E(() => [C(t.$slots, "thumb", h(u(e)))]),
				_: 2
			}, 1024)]),
			_: 3
		}, 16, ["data-size", "class"]));
	}
}), wp = {
	"data-slot": "table-container",
	class: "relative w-full overflow-x-auto"
}, Tp = /* @__PURE__ */ l({
	__name: "Table",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("div", wp, [a("table", {
			"data-slot": "table",
			class: m(T(R)("w-full caption-bottom text-sm", t.class))
		}, [C(e.$slots, "default")], 2)]));
	}
}), Ep = /* @__PURE__ */ l({
	__name: "TableBody",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("tbody", {
			"data-slot": "table-body",
			class: m(T(R)("[&_tr:last-child]:border-0", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Dp = /* @__PURE__ */ l({
	__name: "TableCaption",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("caption", {
			"data-slot": "table-caption",
			class: m(T(R)("text-muted-foreground mt-4 text-sm", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Op = /* @__PURE__ */ l({
	__name: "TableCell",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("td", {
			"data-slot": "table-cell",
			class: m(T(R)("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), kp = /* @__PURE__ */ l({
	__name: "TableRow",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("tr", {
			"data-slot": "table-row",
			class: m(T(R)("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors has-aria-expanded:bg-muted/50", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Ap = { class: "flex items-center justify-center py-10" }, jp = /* @__PURE__ */ l({
	__name: "TableEmpty",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		colspan: { default: 1 }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(kp, null, {
			default: E(() => [c(Op, p({ class: T(R)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class) }, T(r)), {
				default: E(() => [a("div", Ap, [C(e.$slots, "default")])]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), Mp = /* @__PURE__ */ l({
	__name: "TableFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("tfoot", {
			"data-slot": "table-footer",
			class: m(T(R)("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Np = /* @__PURE__ */ l({
	__name: "TableHead",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("th", {
			"data-slot": "table-head",
			class: m(T(R)("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Pp = /* @__PURE__ */ l({
	__name: "TableHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (y(), i("thead", {
			"data-slot": "table-header",
			class: m(T(R)("[&_tr]:border-b", t.class))
		}, [C(e.$slots, "default")], 2));
	}
}), Fp = /* @__PURE__ */ l({
	__name: "Tabs",
	props: {
		defaultValue: {},
		orientation: {},
		dir: {},
		activationMode: {},
		modelValue: {},
		unmountOnHide: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(Xr), p({
			"data-slot": "tabs",
			"data-orientation": T(a).orientation || "horizontal"
		}, T(a), { class: T(R)("gap-2 group/tabs flex data-horizontal:flex-col", r.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["data-orientation", "class"]));
	}
}), Ip = /* @__PURE__ */ l({
	__name: "TabsContent",
	props: {
		value: {},
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = D(t, "class");
		return (e, i) => (y(), n(T(Jr), p({
			"data-slot": "tabs-content",
			class: T(R)("text-sm flex-1 outline-none", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Lp = /* @__PURE__ */ l({
	__name: "TabsList",
	props: {
		loop: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: { default: "default" }
	},
	setup(e) {
		let t = e, r = D(t, "class", "variant");
		return (i, a) => (y(), n(T(Yr), p({
			"data-slot": "tabs-list",
			"data-variant": e.variant
		}, T(r), { class: T(R)(T(zp)({ variant: e.variant }), t.class) }), {
			default: E(() => [C(i.$slots, "default")]),
			_: 3
		}, 16, ["data-variant", "class"]));
	}
}), Rp = /* @__PURE__ */ l({
	__name: "TabsTrigger",
	props: {
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Zr), p({
			"data-slot": "tabs-trigger",
			class: T(R)("gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg:not([class*=size-])]:size-4 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", t.class)
		}, T(r)), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), zp = L("rounded-lg p-[3px] group-data-horizontal/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
}), Bp = /* @__PURE__ */ l({
	__name: "TagsInput",
	props: {
		modelValue: {},
		defaultValue: {},
		addOnPaste: { type: Boolean },
		addOnTab: { type: Boolean },
		addOnBlur: { type: Boolean },
		duplicate: { type: Boolean },
		disabled: { type: Boolean },
		delimiter: {},
		dir: {},
		max: {},
		id: {},
		convertValue: { type: Function },
		displayValue: { type: Function },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"update:modelValue",
		"invalid",
		"addTag",
		"removeTag"
	],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class"), i);
		return (e, t) => (y(), n(T(ni), p(T(a), { class: T(R)("flex flex-wrap gap-2 items-center rounded-md border border-input bg-background px-2 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none", "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", r.class) }), {
			default: E((t) => [C(e.$slots, "default", h(u(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Vp = /* @__PURE__ */ l({
	__name: "TagsInputInput",
	props: {
		placeholder: {},
		autoFocus: { type: Boolean },
		maxLength: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(Qr), p(T(r), { class: T(R)("text-sm min-h-5 focus:outline-none flex-1 bg-transparent px-1", t.class) }), null, 16, ["class"]));
	}
}), Hp = /* @__PURE__ */ l({
	__name: "TagsInputItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T($r), p(T(r), { class: T(R)("flex h-5 items-center rounded-md bg-secondary data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background", t.class) }), {
			default: E(() => [C(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Up = /* @__PURE__ */ l({
	__name: "TagsInputItemDelete",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(ei), p(T(r), { class: T(R)("flex rounded bg-transparent mr-1", t.class) }), {
			default: E(() => [C(e.$slots, "default", {}, () => [c(T(I), { class: "w-4 h-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), Wp = /* @__PURE__ */ l({
	__name: "TagsInputItemText",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, r = j(D(t, "class"));
		return (e, i) => (y(), n(T(ti), p(T(r), { class: T(R)("py-0.5 px-2 text-sm rounded bg-transparent", t.class) }), null, 16, ["class"]));
	}
}), Gp = /* @__PURE__ */ l({
	__name: "Toggle",
	props: {
		defaultValue: { type: Boolean },
		modelValue: { type: [Boolean, null] },
		disabled: {
			type: Boolean,
			default: !1
		},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: { default: "default" },
		size: { default: "default" }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(D(r, "class", "size", "variant"), i);
		return (t, i) => (y(), n(T(ri), p({ "data-slot": "toggle" }, T(a), { class: T(R)(T(Kp)({
			variant: e.variant,
			size: e.size
		}), r.class) }), {
			default: E((e) => [C(t.$slots, "default", h(u(e)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Kp = L("hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive gap-1 rounded-md text-sm font-medium transition-[color,box-shadow] [&_svg:not([class*=size-])]:size-4 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border-input hover:bg-muted border bg-transparent shadow-xs"
		},
		size: {
			default: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			sm: "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
			lg: "h-10 min-w-10 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), qp = /* @__PURE__ */ l({
	__name: "ToggleGroup",
	props: {
		rovingFocus: { type: Boolean },
		disabled: { type: Boolean },
		orientation: {},
		dir: {},
		loop: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		type: {},
		modelValue: {},
		defaultValue: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: {},
		size: {},
		spacing: { default: 0 }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let r = e, i = t;
		b("toggleGroup", {
			variant: r.variant,
			size: r.size,
			spacing: r.spacing
		});
		let a = M(D(r, "class", "size", "variant"), i);
		return (t, i) => (y(), n(T(ai), p({
			"data-slot": "toggle-group",
			"data-size": e.size,
			"data-variant": e.variant,
			"data-spacing": e.spacing,
			style: { "--gap": e.spacing }
		}, T(a), { class: T(R)("rounded-md data-[spacing=0]:data-[variant=outline]:shadow-xs group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-vertical:flex-col data-vertical:items-stretch", r.class) }), {
			default: E((e) => [C(t.$slots, "default", h(u(e)))]),
			_: 3
		}, 16, [
			"data-size",
			"data-variant",
			"data-spacing",
			"style",
			"class"
		]));
	}
}), Jp = /* @__PURE__ */ l({
	__name: "ToggleGroupItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: {},
		size: {}
	},
	setup(e) {
		let t = e, r = d("toggleGroup"), i = j(D(t, "class", "size", "variant"));
		return (a, o) => (y(), n(T(ii), p({
			"data-slot": "toggle-group-item",
			"data-variant": T(r)?.variant || e.variant,
			"data-size": T(r)?.size || e.size,
			"data-spacing": T(r)?.spacing
		}, T(i), { class: T(R)("data-[state=on]:bg-muted group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:shadow-none group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-md group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-md group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-md group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-md shrink-0 focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t", T(Kp)({
			variant: T(r)?.variant || e.variant,
			size: T(r)?.size || e.size
		}), t.class) }), {
			default: E((e) => [C(a.$slots, "default", h(u(e)))]),
			_: 3
		}, 16, [
			"data-variant",
			"data-size",
			"data-spacing",
			"class"
		]));
	}
});
//#endregion
//#region src/components/generated.ts
function Yp(e) {
	e.component("Accordion", Xi), e.component("AccordionContent", Zi), e.component("AccordionItem", Qi), e.component("AccordionTrigger", $i), e.component("Alert", ea), e.component("AlertAction", ta), e.component("AlertDescription", na), e.component("AlertTitle", ra), e.component("AlertDialog", aa), e.component("AlertDialogAction", oa), e.component("AlertDialogCancel", sa), e.component("AlertDialogContent", ca), e.component("AlertDialogDescription", la), e.component("AlertDialogFooter", ua), e.component("AlertDialogHeader", da), e.component("AlertDialogMedia", fa), e.component("AlertDialogTitle", pa), e.component("AlertDialogTrigger", ma), e.component("AspectRatio", ha), e.component("Avatar", ga), e.component("AvatarBadge", _a), e.component("AvatarFallback", va), e.component("AvatarGroup", ya), e.component("AvatarGroupCount", ba), e.component("AvatarImage", xa), e.component("Badge", Ca), e.component("Breadcrumb", Ta), e.component("BreadcrumbEllipsis", Ea), e.component("BreadcrumbItem", Da), e.component("BreadcrumbLink", Oa), e.component("BreadcrumbList", ka), e.component("BreadcrumbPage", Aa), e.component("BreadcrumbSeparator", ja), e.component("Button", z), e.component("ButtonGroup", Na), e.component("ButtonGroupSeparator", Pa), e.component("ButtonGroupText", Fa), e.component("Calendar", ss), e.component("CalendarCell", cs), e.component("CalendarCellTrigger", ls), e.component("CalendarGrid", us), e.component("CalendarGridBody", ds), e.component("CalendarGridHead", fs), e.component("CalendarGridRow", ps), e.component("CalendarHeadCell", ms), e.component("CalendarHeader", hs), e.component("CalendarHeading", gs), e.component("CalendarNextButton", _s), e.component("CalendarPrevButton", vs), e.component("Card", bs), e.component("CardAction", xs), e.component("CardContent", Ss), e.component("CardDescription", Cs), e.component("CardFooter", ws), e.component("CardHeader", Ts), e.component("CardTitle", Es), e.component("Carousel", As), e.component("CarouselContent", js), e.component("CarouselItem", Ms), e.component("CarouselNext", Ns), e.component("CarouselPrevious", Ps), e.component("ChartContainer", Ls), e.component("ChartLegendContent", Rs), e.component("ChartTooltipContent", Gs), e.component("Checkbox", Ys), e.component("Collapsible", Xs), e.component("CollapsibleContent", Zs), e.component("CollapsibleTrigger", Qs), e.component("Combobox", $s), e.component("ComboboxAnchor", ec), e.component("ComboboxEmpty", tc), e.component("ComboboxGroup", nc), e.component("ComboboxInput", mc), e.component("ComboboxItem", hc), e.component("ComboboxItemIndicator", gc), e.component("ComboboxList", _c), e.component("ComboboxSeparator", vc), e.component("ComboboxTrigger", yc), e.component("ComboboxViewport", bc), e.component("Command", xc), e.component("CommandDialog", Mc), e.component("CommandEmpty", Nc), e.component("CommandGroup", Pc), e.component("CommandInput", Ic), e.component("CommandItem", Lc), e.component("CommandList", zc), e.component("CommandSeparator", Bc), e.component("CommandShortcut", Vc), e.component("ContextMenu", Kc), e.component("ContextMenuCheckboxItem", Jc), e.component("ContextMenuContent", Yc), e.component("ContextMenuGroup", Xc), e.component("ContextMenuItem", Zc), e.component("ContextMenuLabel", Qc), e.component("ContextMenuRadioGroup", $c), e.component("ContextMenuRadioItem", tl), e.component("ContextMenuSeparator", nl), e.component("ContextMenuShortcut", rl), e.component("ContextMenuSub", il), e.component("ContextMenuSubContent", al), e.component("ContextMenuSubTrigger", ol), e.component("ContextMenuTrigger", sl), e.component("Dialog", Sc), e.component("DialogClose", Cc), e.component("DialogContent", Tc), e.component("DialogDescription", Ec), e.component("DialogFooter", Dc), e.component("DialogHeader", Oc), e.component("DialogOverlay", wc), e.component("DialogScrollContent", kc), e.component("DialogTitle", Ac), e.component("DialogTrigger", jc), e.component("Drawer", cl), e.component("DrawerClose", ll), e.component("DrawerContent", dl), e.component("DrawerDescription", fl), e.component("DrawerFooter", pl), e.component("DrawerHeader", ml), e.component("DrawerOverlay", ul), e.component("DrawerTitle", hl), e.component("DrawerTrigger", gl), e.component("DropdownMenu", _l), e.component("DropdownMenuCheckboxItem", yl), e.component("DropdownMenuContent", bl), e.component("DropdownMenuGroup", xl), e.component("DropdownMenuItem", Sl), e.component("DropdownMenuLabel", Cl), e.component("DropdownMenuRadioGroup", wl), e.component("DropdownMenuRadioItem", El), e.component("DropdownMenuSeparator", Dl), e.component("DropdownMenuShortcut", Ol), e.component("DropdownMenuSub", kl), e.component("DropdownMenuSubContent", Al), e.component("DropdownMenuSubTrigger", jl), e.component("DropdownMenuTrigger", Ml), e.component("Empty", Nl), e.component("EmptyContent", Pl), e.component("EmptyDescription", Fl), e.component("EmptyHeader", Il), e.component("EmptyMedia", Rl), e.component("EmptyTitle", zl), e.component("Field", Hl), e.component("FieldContent", Ul), e.component("FieldDescription", Wl), e.component("FieldError", Kl), e.component("FieldGroup", ql), e.component("FieldLabel", Yl), e.component("FieldLegend", Zl), e.component("FieldSeparator", eu), e.component("FieldSet", tu), e.component("FieldTitle", nu), e.component("FormControl", ou), e.component("FormDescription", cu), e.component("FormItem", lu), e.component("FormLabel", uu), e.component("FormMessage", du), e.component("HoverCard", fu), e.component("HoverCardContent", pu), e.component("HoverCardTrigger", mu), e.component("Input", sc), e.component("InputGroup", rc), e.component("InputGroupAddon", ac), e.component("InputGroupButton", oc), e.component("InputGroupInput", cc), e.component("InputGroupText", lc), e.component("InputGroupTextarea", dc), e.component("InputOTP", hu), e.component("InputOTPGroup", gu), e.component("InputOTPSeparator", _u), e.component("InputOTPSlot", bu), e.component("Item", xu), e.component("ItemActions", Su), e.component("ItemContent", Cu), e.component("ItemDescription", wu), e.component("ItemFooter", Tu), e.component("ItemGroup", Eu), e.component("ItemHeader", Du), e.component("ItemMedia", ku), e.component("ItemSeparator", Au), e.component("ItemTitle", ju), e.component("Kbd", Pu), e.component("KbdGroup", Fu), e.component("Label", Jl), e.component("Menubar", Iu), e.component("MenubarCheckboxItem", Ru), e.component("MenubarContent", zu), e.component("MenubarGroup", Bu), e.component("MenubarItem", Vu), e.component("MenubarLabel", Hu), e.component("MenubarMenu", Uu), e.component("MenubarRadioGroup", Wu), e.component("MenubarRadioItem", Ku), e.component("MenubarSeparator", qu), e.component("MenubarShortcut", Ju), e.component("MenubarSub", Yu), e.component("MenubarSubContent", Xu), e.component("MenubarSubTrigger", Zu), e.component("MenubarTrigger", Qu), e.component("NativeSelect", qo), e.component("NativeSelectOptGroup", Jo), e.component("NativeSelectOption", Yo), e.component("NavigationMenu", td), e.component("NavigationMenuContent", nd), e.component("NavigationMenuIndicator", rd), e.component("NavigationMenuItem", id), e.component("NavigationMenuLink", ad), e.component("NavigationMenuList", od), e.component("NavigationMenuTrigger", sd), e.component("NavigationMenuViewport", ed), e.component("NumberField", ld), e.component("NumberFieldContent", ud), e.component("NumberFieldDecrement", dd), e.component("NumberFieldIncrement", fd), e.component("NumberFieldInput", pd), e.component("Pagination", md), e.component("PaginationContent", hd), e.component("PaginationEllipsis", gd), e.component("PaginationFirst", _d), e.component("PaginationItem", vd), e.component("PaginationLast", yd), e.component("PaginationLink", xd), e.component("PaginationNext", Sd), e.component("PaginationPrevious", Cd), e.component("PinInput", wd), e.component("PinInputGroup", Td), e.component("PinInputSeparator", Ed), e.component("PinInputSlot", Dd), e.component("Popover", Od), e.component("PopoverAnchor", kd), e.component("PopoverContent", Ad), e.component("PopoverDescription", jd), e.component("PopoverHeader", Md), e.component("PopoverTitle", Nd), e.component("PopoverTrigger", Pd), e.component("Progress", Fd), e.component("RadioGroup", Id), e.component("RadioGroupItem", Ld), e.component("RangeCalendar", Bd), e.component("RangeCalendarCell", Vd), e.component("RangeCalendarCellTrigger", Hd), e.component("RangeCalendarGrid", Ud), e.component("RangeCalendarGridBody", Wd), e.component("RangeCalendarGridHead", Gd), e.component("RangeCalendarGridRow", Kd), e.component("RangeCalendarHeadCell", qd), e.component("RangeCalendarHeader", Jd), e.component("RangeCalendarHeading", Yd), e.component("RangeCalendarNextButton", Xd), e.component("RangeCalendarPrevButton", Zd), e.component("ResizableHandle", $d), e.component("ResizablePanel", ef), e.component("ResizablePanelGroup", tf), e.component("ScrollArea", rf), e.component("ScrollBar", nf), e.component("Select", af), e.component("SelectContent", of), e.component("SelectGroup", sf), e.component("SelectItem", lf), e.component("SelectItemText", uf), e.component("SelectLabel", df), e.component("SelectScrollDownButton", ff), e.component("SelectScrollUpButton", pf), e.component("SelectSeparator", mf), e.component("SelectTrigger", hf), e.component("SelectValue", gf), e.component("Separator", V), e.component("Sheet", _f), e.component("SheetClose", vf), e.component("SheetContent", bf), e.component("SheetDescription", xf), e.component("SheetFooter", Sf), e.component("SheetHeader", Cf), e.component("SheetTitle", wf), e.component("SheetTrigger", Tf), e.component("Sidebar", Lf), e.component("SidebarContent", Rf), e.component("SidebarFooter", zf), e.component("SidebarGroup", Bf), e.component("SidebarGroupAction", Vf), e.component("SidebarGroupContent", Hf), e.component("SidebarGroupLabel", Uf), e.component("SidebarHeader", Wf), e.component("SidebarInput", Gf), e.component("SidebarInset", Kf), e.component("SidebarMenu", qf), e.component("SidebarMenuAction", Jf), e.component("SidebarMenuBadge", Yf), e.component("SidebarMenuButton", tp), e.component("SidebarMenuItem", np), e.component("SidebarMenuSkeleton", ip), e.component("SidebarMenuSub", ap), e.component("SidebarMenuSubButton", op), e.component("SidebarMenuSubItem", sp), e.component("SidebarProvider", cp), e.component("SidebarRail", lp), e.component("SidebarSeparator", up), e.component("SidebarTrigger", dp), e.component("Skeleton", rp), e.component("Slider", pp), e.component("Toaster", mp), e.component("Spinner", hp), e.component("Stepper", gp), e.component("StepperDescription", _p), e.component("StepperIndicator", vp), e.component("StepperItem", yp), e.component("StepperSeparator", bp), e.component("StepperTitle", xp), e.component("StepperTrigger", Sp), e.component("Switch", Cp), e.component("Table", Tp), e.component("TableBody", Ep), e.component("TableCaption", Dp), e.component("TableCell", Op), e.component("TableEmpty", jp), e.component("TableFooter", Mp), e.component("TableHead", Np), e.component("TableHeader", Pp), e.component("TableRow", kp), e.component("Tabs", Fp), e.component("TabsContent", Ip), e.component("TabsList", Lp), e.component("TabsTrigger", Rp), e.component("TagsInput", Bp), e.component("TagsInputInput", Vp), e.component("TagsInputItem", Hp), e.component("TagsInputItemDelete", Up), e.component("TagsInputItemText", Wp), e.component("Textarea", uc), e.component("Toggle", Gp), e.component("ToggleGroup", qp), e.component("ToggleGroupItem", Jp), e.component("Tooltip", Xf), e.component("TooltipContent", Zf), e.component("TooltipProvider", Qf), e.component("TooltipTrigger", $f);
}
//#endregion
//#region src/api.ts
var Xp = (e) => typeof e == "object" && !!e;
function $(e) {
	if (e == null) return e;
	if (Array.isArray(e)) return e.map((e) => $(e));
	if (typeof e != "object") return e;
	if (Xp(e) && "edges" in e && Array.isArray(e.edges)) {
		let t = [...e.edges.map((e) => Xp(e) ? e.node : null).filter(Boolean).map($)], n = Object.keys(e).filter((e) => e !== "__typename");
		for (let r of n) t[r] = $(e[r]);
		return t;
	}
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n] = $(r);
	return t;
}
async function Zp(e) {
	try {
		let t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", t);
		return Array.from(new Uint8Array(n)).map((e) => e.toString(16).padStart(2, "0")).join("");
	} catch {
		return null;
	}
}
var Qp = (e, t, n = {}) => {
	let r = `${n.protocol || "https"}://${e}.${n.apiDomain || "api.example.com"}`, i = async (e, n = {}) => {
		let i = await fetch(`${r}${e}`, {
			...n,
			headers: {
				"Content-Type": "application/json",
				...n.headers
			}
		}), a = i.headers.get("X-LiteSpeed-Tag");
		return a && a.split(",").forEach((e) => {
			let n = e.trim();
			n && t.add(n);
		}), i;
	}, a = {
		get: async (e, t) => {
			let n = await i(e, {
				method: "GET",
				...t
			}), r = await n.json();
			if (!n.ok) throw {
				response: { data: r },
				status: n.status
			};
			return r;
		},
		post: async (e, t, n) => {
			let r = await i(e, {
				method: "POST",
				body: JSON.stringify(t),
				...n
			}), a = await r.json();
			if (!r.ok) throw {
				response: { data: a },
				status: r.status
			};
			return a;
		},
		gql: async (e, t) => {
			let n = typeof e == "string" ? e : Ji(e), r = await Zp(n), i = {
				query: n,
				variables: t
			};
			r && (i = {
				variables: t,
				extensions: { persistedQuery: {
					version: 1,
					sha256Hash: r
				} }
			});
			try {
				let e = await a.post("/graphql", i);
				if (e.errors?.some((e) => e.message === "PersistedQueryNotFound") && (i.query = n, e = await a.post("/graphql", i)), e.errors?.length) throw Error(e.errors[0]?.message);
				return $(e.data);
			} catch (e) {
				throw Error(e.message || "GraphQL API Error");
			}
		}
	};
	return a;
};
//#endregion
//#region src/renderer.ts
async function $p(e, t, n) {
	let r = o({ ...(await import(`data:text/javascript;base64,${Buffer.from(e).toString("base64")}`)).default });
	Yp(r);
	let i = /* @__PURE__ */ new Set(), a = Qp(t, i, n);
	return r.provide("api", a), r.config.globalProperties.$api = a, {
		html: await Yi(r),
		tags: Array.from(i).join(",")
	};
}
//#endregion
export { Qp as createApi, Yp as registerComponents, $p as renderComponent };
