import { FC, ReactNode, useCallback } from 'react';
import clsx from 'clsx';

import PaginationLayoutRender from './PaginationLayoutRender';

import { IUsePagination } from 'src/hooks/usePagination/usePagination';

const PaginationLayout: FC<IProps> = ({
  className,
  pagination,
  children,
  scrollTopOnNavigate = true,
  scrollBehavior = 'smooth',
  fetchDelay = 300,
}) => {
  const fetchDelay_ = scrollTopOnNavigate ? fetchDelay : 0;
  const { onNextPage, onPrevPage, onJumpPage, pageCount, currentPage, hasNextPage, hasPrevPage } =
    pagination;

  const onScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
  }, [scrollBehavior]);

  const onClickNextPage = useCallback(() => {
    if (scrollTopOnNavigate) onScrollTop();

    setTimeout(() => {
      onNextPage();
    }, fetchDelay_);
  }, [onNextPage, onScrollTop, scrollTopOnNavigate, fetchDelay]);

  const onClickPrevPage = useCallback(() => {
    if (scrollTopOnNavigate) onScrollTop();

    setTimeout(() => {
      onPrevPage();
    }, fetchDelay_);
  }, [onPrevPage, onScrollTop, scrollTopOnNavigate, fetchDelay]);

  const onClickJumpPage = useCallback(
    (index: number) => () => {
      if (scrollTopOnNavigate) onScrollTop();

      setTimeout(() => {
        onJumpPage(index);
      }, fetchDelay_);
    },
    [scrollTopOnNavigate, onScrollTop, fetchDelay, onJumpPage],
  );

  const onClickLastPage = useCallback(() => {
    if (!pageCount) return;

    if (scrollTopOnNavigate) onScrollTop();

    setTimeout(() => {
      onJumpPage(pageCount - 1);
    }, fetchDelay_);
  }, [pageCount, scrollTopOnNavigate, onScrollTop, fetchDelay, onJumpPage]);

  const onClickFirstPage = useCallback(() => {
    if (scrollTopOnNavigate) onScrollTop();

    setTimeout(() => {
      onJumpPage(0);
    }, fetchDelay_);
  }, [scrollTopOnNavigate, onScrollTop, fetchDelay, onJumpPage]);

  return (
    <div className={clsx('pagination-layout', className)}>
      {children}
      <PaginationLayoutRender
        currentPage={currentPage}
        pageCount={pageCount}
        isNextPageButtonDisabled={!hasNextPage}
        isPrevPageButtonDisabled={!hasPrevPage}
        isFirstPageButtonDisabled={currentPage === 1}
        isLastPageButtonDisabled={typeof pageCount === 'number' ? currentPage === pageCount : true}
        isLastPageButtonVisible={!!pageCount}
        onClickNextPage={onClickNextPage}
        onClickPrevPage={onClickPrevPage}
        onClickJumpPage={onClickJumpPage}
        onClickFirstPage={onClickFirstPage}
        onClickLastPage={onClickLastPage}
      />
    </div>
  );
};

type IProps = IComponent & {
  children: ReactNode;
  pagination: IUsePagination;
  /**
   * Wether view will scroll to top after navigating between pages
   *
   * @defaultValue `true`
   */
  scrollTopOnNavigate?: boolean;
  /**
   * Note: Affects only when {@link scrollTopOnNavigate} is set to `true`
   *
   * @defaultValue `smooth`
   */
  scrollBehavior?: ScrollBehavior;
  /**
   * Delay in milliseconds between clicking button and call action
   *
   * Note: Affects only when {@link scrollBehavior} is set to `smooth`
   *
   * @defaultValue `300`
   */
  fetchDelay?: number;
};

export default PaginationLayout;
