import React from 'react';
import { SetURLSearchParams, useSearchParams } from 'react-router-dom';

import parsePageIndexSearchParam from './utils/parsePageIndexSearchParam';

import { PAGINATION_ITEMS_PER_PAGE, PAGINATION_PAGE_SEARCH_PARAM } from 'src/CONSTANTS';

const setPageSearchParam = (setSearParams: SetURLSearchParams, page: number) => {
  setSearParams({ [PAGINATION_PAGE_SEARCH_PARAM]: String(page) });
};

export default function usePagination({
  queryLimit = PAGINATION_ITEMS_PER_PAGE,
  itemsCount,
}: IArgs = {}): IUsePagination {
  const pageCount = itemsCount ? Math.ceil(itemsCount / queryLimit) : null;

  const [searchParams, setSearchParams] = useSearchParams();

  const pageIndexSearchParam = React.useMemo(
    () =>
      parsePageIndexSearchParam({
        pageIndexSearchParam: searchParams.get(PAGINATION_PAGE_SEARCH_PARAM),
        pageCount,
      }),
    [pageCount, searchParams],
  );
  const pageIndexSearchParam_ = pageIndexSearchParam > 0 ? pageIndexSearchParam : 0;

  const [pageIndex, setPageIndex] = React.useState<number>(pageIndexSearchParam_);

  const currentPage = React.useMemo(() => pageIndex + 1, [pageIndex]);
  const queryOffset = React.useMemo(() => pageIndex * queryLimit, [queryLimit, pageIndex]);

  const onNextPage = () => {
    if (!hasNextPage) return;
    setPageIndex((prev) => prev + 1);
  };

  const onPrevPage = () => {
    if (!hasPrevPage) return;
    setPageIndex((prev) => prev - 1);
  };

  /**
   * @param pageIndex - numeric starts from 0, first page has pageIndex 0, second has pageIndex 1, ...
   */
  const onJumpPage = (pageIndex: number) => {
    if (pageCount && pageIndex + 1 > pageCount) return;
    setPageIndex(pageIndex);
  };

  const hasNextPage = React.useMemo(() => {
    if (!itemsCount) return true;
    return queryLimit + queryOffset < itemsCount;
  }, [itemsCount, queryLimit, queryOffset]);

  const hasPrevPage = React.useMemo(() => {
    return pageIndex !== 0;
  }, [pageIndex]);

  React.useEffect(() => {
    setPageSearchParam(
      setSearchParams,
      pageCount && currentPage > pageCount ? pageCount : currentPage,
    );
  }, [currentPage, setSearchParams, pageIndex, pageCount]);

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
  queryLimit?: number;
  /**
   * How much items do database contains. When no value is passed, there wont overflow check.
   *
   * Note: this is not the best option to get known how much items BE can return
   *       This method is used due to API limitations
   *
   */
  itemsCount?: number;
};

export type IUsePaginationOnJumpHandler = (pageIndex: number) => void;

export type IUsePagination = {
  queryLimit: number;
  queryOffset: number;
  onNextPage: VoidFunction;
  onPrevPage: VoidFunction;
  onJumpPage: IUsePaginationOnJumpHandler;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  pageCount: number | null;
  currentPage: number;
};
