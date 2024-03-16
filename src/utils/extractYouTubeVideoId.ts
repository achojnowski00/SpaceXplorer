import { YT_URL_LIVE, YT_URL_YOUTUBE_COM, YT_URL_YOUTU_BE } from 'CONSTANTS';

export default function extractYouTubeVideoId(href?: string | null): string | null {
  if (!href) return null;

  const url = new URL(href);
  const searchParams = new URLSearchParams(url.search);

  let result: string | null = href;

  if (href.includes(YT_URL_YOUTUBE_COM)) {
    result = searchParams.get('v');

    if (url.pathname.includes(YT_URL_LIVE)) {
      result = url.pathname.substring(YT_URL_LIVE.length);
    }
  }

  if (href.includes(YT_URL_YOUTU_BE)) {
    result = url.pathname.substring(1);
  }

  return result;
}
