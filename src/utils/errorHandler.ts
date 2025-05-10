// src/utils/errorHandler.ts
import { toast } from "react-toastify";

interface ApiErrorResponse {
  message: string;
  // Add other potential properties from your API's error response
  // errors?: Record<string, string[]>; // Example for validation errors
}

interface AxiosErrorLike {
  response?: {
    data?: ApiErrorResponse | string | { message?: string }; // API might return string or object
    status?: number;
  };
  message: string; // Fallback message from the error object itself
}

/**
 * Handles API errors and displays a toast notification.
 * @param error The error object (can be of unknown type).
 * @param defaultMessage A default message to show if a specific one can't be extracted.
 */
export const displayErrorToast = (
  error: unknown,
  defaultMessage: string = "An unexpected error occurred. Please try again."
): void => {
  let message = defaultMessage;

  if (error && typeof error === "object") {
    const axiosError = error as AxiosErrorLike; // Type assertion

    // 1. Check for Axios-like error with a specific structure from your backend
    if (axiosError.response?.data) {
      if (typeof axiosError.response.data === "string") {
        message = axiosError.response.data;
      } else if (
        typeof axiosError.response.data === "object" &&
        axiosError.response.data.message
      ) {
        // Common pattern: { message: "Error details" }
        message = (axiosError.response.data as ApiErrorResponse).message;
      }
      // You could add more specific checks here if your API returns errors in other formats
      // e.g., for validation errors:
      // else if (axiosError.response.data.errors && Object.keys(axiosError.response.data.errors).length > 0) {
      //   message = Object.values(axiosError.response.data.errors).flat().join(' ');
      // }
    }
    // 2. Check for a standard Error object's message property
    else if (
      "message" in error &&
      typeof error.message === "string" &&
      error.message
    ) {
      message = error.message;
    }
  } else if (typeof error === "string" && error) {
    // 3. If the error itself is a string
    message = error;
  }

  toast.error(message);
  console.error("Error Displayed:", message, "Original Error:", error); // Keep console log for dev
};
