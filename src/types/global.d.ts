/// <reference types="vitest/globals" />

declare global {
  interface Navigator {
    connection?: {
      downlink?: number;
      rtt?: number;
      saveData?: boolean;
      addEventListener: (
        type: string,
        listener: EventListener,
        options?: boolean | AddEventListenerOptions
      ) => void;
      removeEventListener: (
        type: string,
        listener: EventListener,
        options?: boolean | EventListenerOptions
      ) => void;
    };
  }
}

export {};
