export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== "string") {
    return false;
  }

  // Regular expression for validating email format
  // This pattern checks for:
  // - Username part (letters, numbers, dots, underscores, percent, plus, hyphens)
  // - @ symbol
  // - Domain part with at least one period
  // - TLD with 2-63 characters
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,63}))$/;

  return emailRegex.test(email);
};
