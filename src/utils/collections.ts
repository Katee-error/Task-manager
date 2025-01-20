export const groupBy = <T, K extends string>(
  items: T[],
  getKey: (item: T) => K,
  initialValue?: Record<K, T[]>
) => {
  return items.reduce(
    (acc, item) => ({
      ...acc,
      [getKey(item)]: (acc[getKey(item)] ?? []).concat(item),
    }),
    initialValue ?? ({} as Record<K, T[]>)
  );
};
