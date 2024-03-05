import { FC } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import Flex from 'src/components/Flex';

import DoubleChevronLeftIcon from 'assets/icons/double_chevron_left.svg';
import ChevronLeftIcon from 'assets/icons/chevron_left.svg';
import ChevronRightIcon from 'assets/icons/chevron_right.svg';
import DoubleChevronRightIcon from 'assets/icons/double_chevron_right.svg';

import './pagination-layout-render.scss';

const PaginationLayoutRender: FC<IProps> = ({
  className,
  currentPage,
  pageCount,
  isNextPageButtonDisabled,
  isPrevPageButtonDisabled,
  isFirstPageButtonDisabled,
  isLastPageButtonDisabled,
  isLastPageButtonVisible,
  onClickNextPage,
  onClickPrevPage,
  onClickJumpPage,
  onClickFirstPage,
  onClickLastPage,
}) => {
  const { t } = useTranslation('common');
  const currentPageIndex = currentPage - 1;

  /**
   * Make array that contains
   * page - 2 | page - 1 | page | page + 1 | page + 2
   */
  const pagesArray = Array.from({ length: 5 }, (_, idx) => {
    const prevPages = currentPage - 2;
    const label = idx + prevPages;
    const index = idx - 2 + currentPageIndex;
    let type = 'normal';
    if (Math.abs(label - currentPage) === 2) type = 'transparent';
    if (Math.abs(label - currentPage) === 1) type = 'dimmed';

    return { label, type, index };
  });

  const finalPagesArray = pagesArray.filter((el) =>
    pageCount ? el.label > 0 && el.label <= pageCount : el && el.label > 0,
  );

  return (
    <Flex justify="center" gap="40px" className={clsx('pagination-layout-render', className)}>
      <Flex justify="center" gap="20px" width="auto">
        <button
          disabled={isFirstPageButtonDisabled}
          className="pagination-layout-render__chevron-button pagination-layout-render__chevron-button--m-hidden"
          onClick={onClickFirstPage}
        >
          <DoubleChevronLeftIcon />
        </button>
        <button
          disabled={isPrevPageButtonDisabled}
          className="pagination-layout-render__chevron-button"
          onClick={onClickPrevPage}
        >
          <ChevronLeftIcon />
        </button>
      </Flex>

      <Flex
        justify="start"
        className="pagination-layout-render__pages-controls"
        gap="15px"
        width="auto"
      >
        {finalPagesArray.map((el) => (
          <button
            title={t('go_to_page_count', { count: el.label })}
            key={el.label}
            onClick={onClickJumpPage(el.index)}
            className={clsx('pagination-layout-render__page', {
              [`pagination-layout-render__page--${el.type}`]: el.type !== 'center',
            })}
          >
            {el.label}
          </button>
        ))}
      </Flex>

      <Flex justify="center" gap="20px" width="auto">
        <button
          disabled={isNextPageButtonDisabled}
          className="pagination-layout-render__chevron-button"
          onClick={onClickNextPage}
        >
          <ChevronRightIcon />
        </button>
        {isLastPageButtonVisible && (
          <button
            disabled={isLastPageButtonDisabled}
            className="pagination-layout-render__chevron-button pagination-layout-render__chevron-button--m-hidden"
            onClick={onClickLastPage}
          >
            <DoubleChevronRightIcon />
          </button>
        )}
      </Flex>
    </Flex>
  );
};

type IProps = IComponent & {
  currentPage: number;
  pageCount: number | null;
  isNextPageButtonDisabled: boolean;
  isPrevPageButtonDisabled: boolean;
  isFirstPageButtonDisabled: boolean;
  isLastPageButtonDisabled: boolean;
  isLastPageButtonVisible: boolean;
  onClickNextPage: VoidFunction;
  onClickPrevPage: VoidFunction;
  onClickJumpPage: (idx: number) => VoidFunction;
  onClickFirstPage: VoidFunction;
  onClickLastPage: VoidFunction;
};

export default PaginationLayoutRender;
