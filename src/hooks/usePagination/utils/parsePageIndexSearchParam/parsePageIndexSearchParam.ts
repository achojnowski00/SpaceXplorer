export default function parsePageIndexSearchParam({ pageCount, pageIndexSearchParam }: IArgs) {
  const numericSearchParam = Number(pageIndexSearchParam) - 1;
  const isNanNumber = Number.isNaN(numericSearchParam);

  if (isNanNumber) return 0;
  if (numericSearchParam < 0) return 0;
  if (!pageCount) return numericSearchParam;

  return numericSearchParam > pageCount ? pageCount : numericSearchParam;
}

type IArgs = {
  pageCount: number | null;
  pageIndexSearchParam: string | null;
};
