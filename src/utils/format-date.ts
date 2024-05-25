export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
