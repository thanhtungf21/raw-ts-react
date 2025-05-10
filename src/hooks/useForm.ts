// src/hooks/useForm.ts
import { useState, useCallback, ChangeEvent } from "react";

// T will be the type of your form's state (e.g., LoginForm)
export function useForm<T extends Record<string, any>>(initialState: T) {
  const [values, setValues] = useState<T>(initialState);

  // A generic handler for most input types
  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value, type } = e.target;

      // Handle checkboxes specifically
      if (type === "checkbox") {
        const { checked } = e.target as HTMLInputElement; // Type assertion for 'checked'
        setValues((prev) => ({
          ...prev,
          [name]: checked,
        }));
      } else if (type === "number") {
        // Handle number inputs, converting to number if not empty
        setValues((prev) => ({
          ...prev,
          [name]: value === "" ? "" : Number(value), // Or parseFloat(value) / parseInt(value, 10)
        }));
      } else {
        setValues((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    },
    [] // setValues from useState is stable and doesn't need to be in dependencies
  );

  // Function to reset the form to its initial state
  const resetForm = useCallback(() => {
    setValues(initialState);
  }, [initialState]);

  // Function to manually set all form values (e.g., for loading data into the form)
  const setFormValues = useCallback((newValues: T) => {
    setValues(newValues);
  }, []);

  return {
    values,
    handleChange,
    resetForm,
    setValues: setFormValues, // Expose a way to set all values directly
  };
}
