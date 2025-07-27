# Offline AutoML Toolkit

This is a Next.js web application that provides an offline-first, browser-based toolkit for simple machine learning workflows. Users can upload data, perform exploratory data analysis, train a model, and make predictions directly in their browser without needing a constant internet connection or a complex server setup.

The application also features an offline FAQ assistant that can answer questions about using the tool.

## Core Features

- **Home Page**: A landing page that provides an overview of the application's features and navigation.
- **Data Upload**: Upload datasets in CSV format using a drag-and-drop interface or by selecting a file.
- **Sample Datasets**: Load pre-packaged sample datasets (e.g., Titanic, Iris, Customer Churn) to quickly explore the tool's capabilities.
- **Data Exploration (EDA)**: View basic statistics of your dataset, including row/column counts, missing value warnings, and a data preview.
- **Model Training**: A simulated model training process that runs locally in the browser.
- **Prediction & Evaluation**:
  - **Manual Prediction**: Use sliders and input fields to get predictions from the trained model.
  - **Feature Importance**: Visualize which data features most influenced the model's predictions via a bar chart.
  - **Model Metrics**: View key performance indicators like Accuracy and RMSE.
- **Step-by-Step Explanations**: Each step of the ML workflow is explained with references to common Python libraries like Pandas and Scikit-learn to help users understand the underlying processes.
- **Offline FAQ Assistant**: A chat interface powered by a local Genkit flow that answers questions about the tool in English, Hindi, or Hinglish.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **AI/LLM Integration**: [Genkit](https://firebase.google.com/docs/genkit)
- **Charts & Visualization**: [Recharts](https://recharts.org/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (or another package manager like yarn or pnpm)

### Installation & Running

1.  **Clone the repository and install dependencies**:
    ```bash
    git clone <repository_url>
    cd <repository_folder>
    npm install
    ```

2.  **Run the Genkit development server**:
    The FAQ assistant is powered by Genkit. Open a terminal and run the following command to start the Genkit development server:
    ```bash
    npm run genkit:dev
    ```
    This will start the local server that the Next.js application communicates with for AI features.

3.  **Run the Next.js development server**:
    In a separate terminal, run the following command to start the main web application:
    ```bash
    npm run dev
    ```

4.  **Open the application**:
    Open your web browser and navigate to `http://localhost:9002` to see the application in action.

## Project Structure

Here is a brief overview of the key directories in this project:

```
.
├── src
│   ├── app                 # Next.js App Router pages and layouts
│   │   ├── (app)           # Main application routes (e.g., /tool, /faq)
│   │   └── page.tsx        # Home page
│   ├── ai                  # Genkit AI-related code
│   │   ├── flows           # Genkit flows (e.g., faq-assistant.ts)
│   │   └── genkit.ts       # Genkit configuration
│   ├── components          # Reusable React components
│   │   ├── pages           # Page-level components (e.g., automl-tool.tsx)
│   │   └── ui              # ShadCN UI components
│   ├── hooks               # Custom React hooks (e.g., use-toast)
│   └── lib                 # Utility functions, actions, and static data
│       ├── actions.ts      # Next.js Server Actions
│       └── sample-datasets.ts # Sample data for the AutoML tool
├── public                  # Static assets
└── package.json            # Project dependencies and scripts
```

## Module Breakdown

### AutoML Tool (`src/components/pages/automl-tool.tsx`)

This is the core feature of the application. It's a client-side component (`"use client"`) that manages the entire machine learning workflow through a multi-step tabbed interface.

-   **State Management**: Uses `useState` to manage the active step, uploaded data, model training progress, and prediction results.
-   **Data Handling**:
    -   File upload is handled via the native File API and `FileReader`.
    -   CSV parsing is simulated to structure the data into headers and rows.
    -   Sample datasets are imported from `src/lib/sample-datasets.ts`.
-   **Workflow Steps**:
    1.  **Upload**: Provides UI for drag-and-drop or file selection.
    2.  **Explore**: Calculates and displays basic EDA metrics using `useMemo` for efficiency.
    3.  **Train**: Simulates a training process using `setInterval` to update a progress bar.
    4.  **Predict & Evaluate**:
        -   Renders dynamic input sliders and fields based on the dataset's columns.
        -   Simulates a prediction and displays the result.
        -   Uses `Recharts` to create the "Feature Importance" bar chart.

### FAQ Assistant (`src/components/pages/faq-page.tsx`)

A chat interface that allows users to ask questions about the toolkit.

-   **State Management**: Manages the conversation history (`messages`), user input, and loading state.
-   **Server Communication**: When a user submits a message, it calls the `askFaq` Server Action defined in `src/lib/actions.ts`.
-   **Genkit Integration**: The `askFaq` action invokes the `faqAssistantFlow` from `src/ai/flows/faq-assistant.ts`. This flow uses a Genkit tool to look up the answer from a predefined JSON array, demonstrating how to build a simple, offline-capable RAG (Retrieval-Augmented Generation) system.
