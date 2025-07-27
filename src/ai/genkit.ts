
'use client';
import {genkit, type Genkit} from 'genkit';
import {googleAI} from 'genkit/googleai';
import {configureGenkit} from 'genkit';

// Note: Genkit is not used in this application, but this configuration
// is available for future use.
export const ai: Genkit = genkit({
  plugins: [
    googleAI({
      apiVersion: ['v1beta'],
    }),
  ],
});
