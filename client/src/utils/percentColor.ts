export const percentChangeColor = (change: number) => {
  if (change > 0) {
    return 'text-green-600';
  } else if (change < 0) {
    return 'text-red-800';
  }
  return 'text-gray-500';
};
