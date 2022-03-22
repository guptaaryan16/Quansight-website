import { TLogosProps } from '../../Logos/Logos';
import { TLogosRawData } from '../../../types/storyblok/bloks/logos';
import { getUrl } from '@quansight/shared/ui-components';

export const getLogosProps = (blok: TLogosRawData): TLogosProps => ({
  title: blok.title,
  grid: blok.grid.map(({ alt, filename }) => ({
    imageSrc: filename,
    imageAlt: alt,
  })),
  linkTitle: blok.linkTitle,
  linkUrl: getUrl(blok.linkUrl),
});