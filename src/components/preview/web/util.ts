export interface PreviewProps {
  hideCountdown?: boolean;
  activeFont?: Activefont;
  theme?: string;
  coverPhotos?: {
    [page: string]: CoverPhoto;
  };
  eventInfo: EventInfo;
  previewOptions?: {
    height?: number;
    width?: number;
    maxContainerHeight?: number;
    maxContainerWidth?: number;
  };
  baseColor?: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  baseText?: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  pages?: Array<Page>;
  useThemeColors?: boolean;
  previewContainerId?: string;
  graphicAccent?: string;
  layout?: Layout;

  // Hack for the mock aloha preview
  coverPhotoSectionPreview?: string;
}

export interface Layout {
  template: Template;
  backgroundType: BackgroundType;
}

export type Template = 'brannan' | 'aloha';
export type BackgroundType = 'neat' | 'open' | 'transparent' | 'modern';

export interface Page {
  name?: string;
  url?: string;
}

export interface EventInfo {
  date?: string;
  fianceeName?: string;
  location?: string;
  message?: string;
  ownerName?: string;
}

export interface CoverPhoto {
  page: string;
  url: string;
}

export interface Activefont {
  key: string;
  fontFamily?: string;
  fontWeight?: string;
  h1?: string;
  h2?: string;
  h3?: string;
  letterSpacing?: string;
  lineHeight?: string;
  textTransform: string;
  _comment?: string;
}

export const getCoverPhotoForPage = (page: string, coverPhotos = {}) => {
  return coverPhotos[page] ? coverPhotos[page] : {};
};

export const getDefaultEventFields = ({
  ownerName,
  fianceeName,
  date,
  location,
  message
}: any) => {
  return {
    ownerName: ownerName || 'Romeo',
    fianceeName: fianceeName || 'Juliet',
    date: date || new Date().toString(),
    location: location || 'San Francisco, CA',
    message:
      message ||
      'We are so excited to celebrate with you. Help us capture our wedding with Joy.'
  };
};
