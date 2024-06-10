export * from '@tanstack/table-core';

declare module "@tanstack/table-core" {
  interface TableOptions<TData extends RowData>
    extends PartialKeys<TableOptionsResolved<TData>, "state" | "onStateChange" | "renderFallbackValue"> {
    filterFns?: FilterFns;
  }

  interface FilterFns { fuzzy: FilterFn<unknown> }
}
