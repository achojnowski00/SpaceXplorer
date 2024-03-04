import React from 'react';

import { PAGINATION_ITEMS_PER_PAGE } from 'src/CONSTANTS';

export default function usePagination({
  limit = PAGINATION_ITEMS_PER_PAGE,
  itemsCount,
}: IArgs = {}) {
  const [{ queryOffset, queryLimit }, setState] = React.useState({
    queryOffset: 0,
    queryLimit: limit,
  });

  const onNextPage = () => {
    if (!hasNextPage) return;

    setState((prev) => ({
      ...prev,
      queryOffset: prev.queryOffset + limit,
    }));
  };

  const onPrevPage = () => {
    if (!hasPrevPage) return;

    setState((prev) => ({
      ...prev,
      queryOffset: prev.queryOffset - limit,
    }));
  };

  /**
   * @param pageIndex - numeric starts from 0, first page has pageIndex 0, second has pageIndex 1, ...
   */
  const onJumpPage = (pageIndex: number) => {
    if (pageCount && pageIndex + 1 > pageCount) return;

    setState((prev) => ({
      ...prev,
      queryOffset: limit * pageIndex,
    }));
  };

  const hasNextPage = React.useMemo(() => {
    if (!itemsCount) return true;

    return queryLimit + queryOffset < itemsCount;
  }, [itemsCount, queryLimit, queryOffset]);

  const hasPrevPage = React.useMemo(() => {
    return queryOffset !== 0;
  }, [queryOffset]);

  const pageCount = itemsCount ? Math.ceil(itemsCount / limit) : null;
  const currentPage = React.useMemo(() => queryOffset / limit + 1, [limit, queryOffset]);

  return {
    queryLimit,
    queryOffset,
    onNextPage,
    onPrevPage,
    onJumpPage,
    hasNextPage,
    hasPrevPage,
    pageCount,
    currentPage,
  };
}

type IArgs = {
  /**
   * Number of items for every page
   *
   * @defaultValue {@link PAGINATION_ITEMS_PER_PAGE}
   */
  limit?: number;
  /**
   * How much items do database contains. When no value is passed, there wont overflow check.
   *
   * Note: this is not the best option to get known how much items BE can return
   *       This method is used due to API limitations
   *
   */
  itemsCount?: number;
};
