import { formatDistanceToNow } from 'https://cdn.skypack.dev/date-fns';

// Generate the last edited message
export const generateLastEdited = (timestamp) =>
  `Last edited ${formatDistanceToNow(timestamp, { addSuffix: true })}`;

// Placeholder
export const hello = 'world';
