import { formatDistanceToNow } from 'https://cdn.skypack.dev/date-fns';

// Generate the last edited message
export const generateLastEdited = (timestamp) => {
  return `Last edited ${formatDistanceToNow(timestamp, { addSuffix: true })}`;
};

export const hello = 'world';
