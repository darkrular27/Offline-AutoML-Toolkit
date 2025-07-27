# Offline AutoML Toolkit (Desktop Edition)

**Creator:** Jitender Prasad Arya  
**Version:** 0.1.0

This is a cross-platform desktop application that provides an offline-first, browser-based toolkit for simple machine learning workflows. Built with Next.js and Tauri, it runs in a native window on your operating system, ensuring complete privacy and offline capability from the very first launch.

Users can upload data, perform exploratory data analysis, train a model, and make predictions directly on their machine without needing an internet connection or a complex server setup.

## Core Features

- **Home Page**: A landing page that provides an overview of the application's features and navigation.
- **Data Upload**: Upload datasets in CSV format using a drag-and-drop interface or by selecting a file.
- **Sample Datasets**: Load pre-packaged sample datasets (e.g., Titanic, Iris, Customer Churn) to quickly explore the tool's capabilities.
- **Data Exploration (EDA)**: View basic statistics of your dataset, including row/column counts, missing value warnings, and a data preview.
- **Model Training**: A simulated model training process that runs locally.
- **Prediction & Evaluation**:
  - **Manual Prediction**: Use sliders and input fields to get predictions from the trained model.
  - **Feature Importance**: Visualize which data features most influenced the model's predictions via a bar chart.
  - **Model Metrics**: View key performance indicators like Accuracy and RMSE.
- **Step-by-Step Explanations**: Each step of the ML workflow is explained with references to common Python libraries like Pandas and Scikit-learn to help users understand the underlying processes.
- **Built-in Manual & FAQ**: A comprehensive user manual and a categorized FAQ page are included for guidance.

## Tech Stack

- **Desktop Framework**: [Tauri](https://tauri.app/)
- **Web Framework**: [Next.js](https://nextjs.org/) (Static Export)
- **Language**: [TypeScript](https://www.typescriptlang.org/) & [Rust](https://www.rust-lang.org/) (for Tauri backend)
- **UI**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Charts & Visualization**: [Recharts](https://recharts.org/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

1.  **Node.js**: [Node.js](https://nodejs.org/) (v18 or later recommended) and `npm`.
2.  **Rust**: The [Rust toolchain](https://www.rust-lang.org/tools/install) is required for the Tauri backend.
3.  **Tauri System Dependencies**: Follow the official [Tauri prerequisites guide](https://tauri.app/v1/guides/getting-started/prerequisites) for your specific operating system.

### Installation & Development

1.  **Clone the repository and install Node.js dependencies**:
    ```bash
    git clone <repository_url>
    cd <repository_folder>
    npm install
    ```

2.  **Run the development servers**:
    For a full development experience with hot-reloading, you need to run two processes in separate terminals:
    
    *   **Terminal 1 (Next.js Dev Server)**:
        ```bash
        npm run dev
        ```
    
    *   **Terminal 2 (Tauri Desktop App)**:
        ```bash
        npx tauri dev
        ```
    This will launch the application in a native desktop window, which will automatically reload as you make changes to the Next.js code.

### Building for Production

To create a production-ready, distributable desktop application (e.g., a `.exe` or `.msi` installer on Windows), follow these steps:

1.  **Build the static Next.js application**:
    This command exports your web app into the `/out` directory, which Tauri will use.
    ```bash
    npm run build
    ```

2.  **Build the Tauri desktop application**:
    This command bundles the static web app from the `/out` folder into a native desktop executable.
    ```bash
    npx tauri build
    ```
    The final installer/executable will be located in the `src-tauri/target/release/bundle/` directory.

## Project Structure

Here is a brief overview of the key directories in this project:

```
.
├── src                     # Next.js frontend source code
│   ├── app                 # Next.js App Router pages and layouts
│   ├── components          # Reusable React components
│   ├── hooks               # Custom React hooks
│   └── lib                 # Utility functions and static data
├── src-tauri               # Tauri desktop application source code
│   ├── build.rs
│   ├── Cargo.toml          # Rust dependencies
│   ├── icons               # Application icons
│   ├── src                 # Rust backend source
│   │   ├── main.rs
│   │   └── lib.rs
│   └── tauri.conf.json     # Tauri configuration file
├── public                  # Static assets for the Next.js app
└── package.json            # Node.js project dependencies and scripts
```
