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

export const getDefaultEventFields = (
  ownerName,
  fianceeName,
  eventDate,
  location,
  message
) => {
  return {
    ownerName: ownerName || 'Romeo',
    fianceeName: fianceeName || 'Juliet',
    eventDate: eventDate || new Date().toString(),
    location: location || 'San Francisco, CA',
    message:
      message ||
      'We are so excited to celebrate with you. Help us capture our wedding with Joy.'
  };
};
