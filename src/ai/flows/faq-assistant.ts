
'use server';

/**
 * @fileoverview A simple FAQ assistant that uses a local data source.
 * This flow does not use a generative AI model. It performs a simple
 * keyword search on a predefined list of questions and answers.
 *
 * This file is provided as an example of how a Genkit flow can be structured.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqAssitantInputSchema = z.object({
  query: z.string(),
});
export type FaqAssistantInput = z.infer<typeof FaqAssitantInputSchema>;

const FaqAssistantOutputSchema = z.object({
  answer: z.string(),
});
export type FaqAssistantOutput = z.infer<typeof FaqAssistantOutputSchema>;

// This flow is not currently used by the application but is available
// for future extension. The app currently uses a server action in
// src/lib/actions.ts for the FAQ functionality.
export const faqAssistantFlow = ai.defineFlow(
  {
    name: 'faqAssistantFlow',
    inputSchema: FaqAssitantInputSchema,
    outputSchema: FaqAssistantOutputSchema,
  },
  async ({query}) => {
    // This is a placeholder implementation.
    // In a real scenario, you might use a tool to search a knowledge base.
    const faqs = [
      {
        q: 'What is the Offline AutoML Toolkit?',
        a: "It's a browser-based web application for easy, offline machine learning workflows.",
      },
      {
        q: 'Can it work without an internet connection?',
        a: 'Yes, after the initial page load, it works fully offline.',
      },
    ];

    const lowerCaseQuery = query.toLowerCase();
    const found = faqs.find(faq => faq.q.toLowerCase().includes(lowerCaseQuery));

    if (found) {
      return {answer: found.a};
    }

    return {
      answer: "I'm sorry, I couldn't find an answer to your question. Please try rephrasing it.",
    };
  }
);
