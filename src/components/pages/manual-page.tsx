
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="mb-8">
        <h2 className="text-2xl font-bold font-headline mb-4 pb-2 border-b-2 border-primary/20">{title}</h2>
        <div className="space-y-4 text-muted-foreground prose prose-neutral dark:prose-invert max-w-none">
            {children}
        </div>
    </section>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-6">
        <h3 className="text-xl font-semibold font-headline mb-3">{title}</h3>
        <div className="space-y-3 prose prose-neutral dark:prose-invert max-w-none">
            {children}
        </div>
    </div>
);


export function ManualPage() {
  return (
    <div className="container max-w-4xl py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight font-headline lg:text-5xl">
                Offline AutoML Toolkit User Manual
            </h1>
        </div>

        <Card className="mb-12">
            <CardHeader>
                <CardTitle className="font-headline">Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
                 <ol className="list-decimal list-inside space-y-2">
                    <li><a href="#introduction" className="text-primary hover:underline">Introduction & Philosophy</a></li>
                    <li><a href="#requirements" className="text-primary hover:underline">System Requirements & Installation</a></li>
                    <li><a href="#architecture" className="text-primary hover:underline">Application Architecture Overview</a></li>
                    <li>
                        <a href="#workflow" className="text-primary hover:underline">Workflow Guide: Step-by-Step Use</a>
                        <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                            <li>Data Input & Management</li>
                            <li>Data Preparation & Exploration</li>
                            <li>Model Training (Simulated)</li>
                            <li>Evaluation, Interpretation, & Export</li>
                        </ul>
                    </li>
                    <li><a href="#ux" className="text-primary hover:underline">User Experience & Accessibility</a></li>
                    <li><a href="#privacy" className="text-primary hover:underline">Privacy, Security, and Data Handling</a></li>
                    <li><a href="#advanced" className="text-primary hover:underline">Advanced Customization & Technical Stack</a></li>
                    <li><a href="#troubleshooting" className="text-primary hover:underline">Tips, Troubleshooting, and Support</a></li>
                    <li><a href="#credits" className="text-primary hover:underline">Credits</a></li>
                </ol>
            </CardContent>
        </Card>

        <article>
            <section id="introduction" className="mb-8 scroll-mt-20">
                <h2 className="text-2xl font-bold font-headline mb-4 pb-2 border-b-2 border-primary/20">1. Introduction & Philosophy</h2>
                <div className="space-y-4 text-muted-foreground">
                    <p>Offline AutoML Toolkit is a browser-based, offline-capable application that simulates the entire machine learning workflow. Its design prioritizes:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Accessibility for all users</strong>—no coding or installations required.</li>
                        <li><strong>Complete privacy</strong>—your data never leaves your device.</li>
                        <li><strong>Conceptual clarity</strong>—each ML step is explained, with code samples and UI visualizations to bridge the gap between practical workflow and underlying code.</li>
                        <li><strong>Robustness</strong>—runs on most computers, regardless of OS, and continues to operate without an internet connection after loading.</li>
                    </ul>
                    <SubSection title="Who should use this?">
                        <ul className="list-disc list-inside">
                            <li>Students new to ML</li>
                            <li>Educators for classroom demos</li>
                            <li>Self-learners and hobbyists</li>
                            <li>Professionals needing quick experimentation or education aids</li>
                        </ul>
                    </SubSection>
                </div>
            </section>

             <section id="requirements" className="mb-8 scroll-mt-20">
                <h2 className="text-2xl font-bold font-headline mb-4 pb-2 border-b-2 border-primary/20">2. System Requirements & Installation</h2>
                <div className="space-y-4 text-muted-foreground">
                    <SubSection title="Hardware Requirements">
                        <ul className="list-disc list-inside">
                            <li>Any modern computer (Windows, MacOS, Linux)</li>
                            <li>Minimum 4GB RAM (8GB recommended for larger datasets)</li>
                            <li>Standard processor (Intel/AMD/Apple Silicon)</li>
                        </ul>
                    </SubSection>
                    <SubSection title="Software & Browser Requirements">
                        <ul className="list-disc list-inside">
                            <li>Modern browser required: latest versions of Chrome, Firefox, Edge, Safari</li>
                            <li>No additional installations, libraries, or plug-ins</li>
                        </ul>
                    </SubSection>
                    <SubSection title="Setup & Access">
                         <ul className="list-disc list-inside">
                            <li>Visit the provided URL or open the local HTML/app file if distributed offline.</li>
                            <li>On first load, all necessary code and dependencies are downloaded for offline operation.</li>
                            <li>After the initial load, disconnect from the internet if desired.</li>
                        </ul>
                    </SubSection>
                </div>
            </section>

            <section id="architecture" className="mb-8 scroll-mt-20">
                <h2 className="text-2xl font-bold font-headline mb-4 pb-2 border-b-2 border-primary/20">3. Application Architecture Overview</h2>
                <div className="space-y-4 text-muted-foreground">
                     <ul className="list-disc list-inside">
                        <li><strong>Frontend:</strong> Next.js with React (App Router), TypeScript.</li>
                        <li><strong>Styling/UI:</strong> Tailwind CSS for design, ShadCN UI for accessible components.</li>
                        <li><strong>Visualization:</strong> Recharts for charts, histograms, scatterplots.</li>
                        <li><strong>State Management:</strong> Pure React hooks (useState, useMemo, useCallback)—no external libs like Redux for true offline use.</li>
                        <li><strong>Data Handling:</strong> In-browser memory; explicit export/import via JSON files.</li>
                        <li><strong>ML Simulation:</strong> No live ML library; instead, generates plausible results for education and speed.</li>
                        <li><strong>Modularity:</strong> Organized into /pages, /components, /lib and /hooks for maintainability.</li>
                    </ul>
                </div>
            </section>
            
            <section id="workflow" className="mb-8 scroll-mt-20">
                <h2 className="text-2xl font-bold font-headline mb-4 pb-2 border-b-2 border-primary/20">4. Workflow Guide: Step-by-Step Use</h2>
                <div className="space-y-4 text-muted-foreground">
                    <SubSection title="4.1. Data Input & Management">
                        <h4 className="font-semibold text-lg text-foreground/90">Loading Data</h4>
                        <ul className="list-disc list-inside mt-2">
                            <li><strong>Upload CSV:</strong> Select CSV using the file picker or drag-and-drop. Check that the CSV is clean and not too large for browser-based handling.</li>
                            <li><strong>Sample Datasets:</strong> Instantly load classic datasets (Titanic, Iris, Customer Churn) for demonstration or rapid trials.</li>
                            <li><strong>Import Session:</strong> Load a .json file previously exported—restores data, settings, results.</li>
                        </ul>
                         <h4 className="font-semibold text-lg mt-4 text-foreground/90">Data Persistence</h4>
                        <p>All data is held in memory during a session for user privacy. <strong className="text-destructive">Important: Data is lost if you close the browser unless you export the session.</strong></p>
                    </SubSection>
                    <SubSection title="4.2. Data Preparation & Exploration">
                         <h4 className="font-semibold text-lg text-foreground/90">Data Overview</h4>
                         <p>Instantly view row/column counts, missing values, and detected data types. Visualizations include automatic histograms for numeric columns and scatterplots between any two features.</p>
                         <h4 className="font-semibold text-lg mt-4 text-foreground/90">Cleaning Tools</h4>
                         <ul className="list-disc list-inside mt-2">
                             <li><strong>Missing Value Imputation:</strong> Fill missing numeric cells with that column’s mean via a one-button action.</li>
                             <li><strong>Outlier Detection:</strong> Identify statistically unusual points, with an option for single-click removal.</li>
                             <li><strong>Delete Rows/Columns:</strong> Remove problematic entries directly in the interactive data preview.</li>
                         </ul>
                         <h4 className="font-semibold text-lg mt-4 text-foreground/90">Feature Engineering</h4>
                          <ul className="list-disc list-inside mt-2">
                             <li><strong>Feature/Target Selection:</strong> Choose independent variable(s) and which column to predict.</li>
                             <li><strong>Task Type Inference:</strong> Automatically detects Classification, Regression, or Clustering based on your selection.</li>
                             <li><strong>Task Override:</strong> In manual mode, adjust selections for experimentation.</li>
                         </ul>
                    </SubSection>
                    <SubSection title="4.3. Model Training (Simulated)">
                        <h4 className="font-semibold text-lg text-foreground/90">Modes & Configuration</h4>
                        <p>Choose between <strong>Automatic Mode</strong> (minimal input) or <strong>Manual Mode</strong> to customize the training/test split and select specific models.</p>
                        <h4 className="font-semibold text-lg mt-4 text-foreground/90">Supported Model Types (Simulated)</h4>
                        <p>Logistic Regression, Random Forest, Support Vector Machine (SVM), Linear Regression, K-Means Clustering.</p>
                         <h4 className="font-semibold text-lg mt-4 text-foreground/90">Training Simulation</h4>
                         <p>The app simulates training with timers and generates plausible (but not real) performance metrics. An educational card explains what would happen in real ML code, often with a Python snippet like <code className="bg-muted p-1 rounded-md text-foreground">model.fit(X_train, y_train)</code>.</p>
                    </SubSection>
                    <SubSection title="4.4. Evaluation, Interpretation, & Export">
                         <h4 className="font-semibold text-lg text-foreground/90">Results Interpretation</h4>
                         <p>A comparison table ranks all simulated models by their primary metric (Accuracy, RMSE, or Silhouette Score). The best model is highlighted.</p>
                         <h4 className="font-semibold text-lg mt-4 text-foreground/90">Feature Importance</h4>
                         <p>Bar charts show which features had the most simulated impact on predictions.</p>
                         <h4 className="font-semibold text-lg mt-4 text-foreground/90">Manual Prediction</h4>
                         <p>Input new values through a dynamic form with sliders and dropdowns to get instant predictions from the best model.</p>
                          <h4 className="font-semibold text-lg mt-4 text-foreground/90">Exporting & Importing</h4>
                         <p>Save your entire session as a <code className="bg-muted p-1 rounded-md text-foreground">.json</code> file to backup or share your work. Import a saved file to restore a previous session.</p>
                    </SubSection>
                </div>
            </section>
            
            <section id="ux" className="mb-8 scroll-mt-20">
                <h2 className="text-2xl font-bold font-headline mb-4 pb-2 border-b-2 border-primary/20">5. User Experience & Accessibility</h2>
                 <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc list-inside">
                        <li>Simple tab-based navigation guides users through the workflow.</li>
                        <li>UI components are built for accessibility (keyboard and screen reader support).</li>
                        <li>Inline help and tooltips are available at every major step.</li>
                        <li>The FAQ assistant is multilingual (English, Hindi, and Hinglish).</li>
                    </ul>
                </div>
            </section>

            <section id="privacy" className="mb-8 scroll-mt-20">
                <h2 className="text-2xl font-bold font-headline mb-4 pb-2 border-b-2 border-primary/20">6. Privacy, Security, and Data Handling</h2>
                 <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc list-inside">
                        <li><strong>Local-Only Data:</strong> Data never leaves your device.</li>
                        <li><strong>No Analytics/Telemetry:</strong> Zero tracking.</li>
                        <li><strong>Exported Files:</strong> Exported JSON files are not encrypted; store them securely.</li>
                        <li><strong>Session Loss:</strong> Work is lost if the browser is closed without exporting the session.</li>
                    </ul>
                </div>
            </section>

            <section id="advanced" className="mb-8 scroll-mt-20">
                <h2 className="text-2xl font-bold font-headline mb-4 pb-2 border-b-2 border-primary/20">7. Advanced Customization & Technical Stack</h2>
                 <div className="space-y-4 text-muted-foreground">
                    <p>UI theming can be customized via CSS variables in <code className="bg-muted p-1 rounded-md text-foreground">globals.css</code>. The app avoids complex state management libraries like Redux to maximize offline compatibility and performance.</p>
                </div>
            </section>

            <section id="troubleshooting" className="mb-8 scroll-mt-20">
                <h2 className="text-2xl font-bold font-headline mb-4 pb-2 border-b-2 border-primary/20">8. Tips, Troubleshooting, and Support</h2>
                 <div className="space-y-4 text-muted-foreground">
                    <SubSection title="Best Practices">
                         <ul className="list-disc list-inside">
                            <li><strong>Save often:</strong> Export sessions frequently.</li>
                            <li><strong>Try Sample Data First:</strong> Use built-in datasets to get familiar with the workflow.</li>
                            <li><strong>Explore Explanations:</strong> Read the inline cards for conceptual clarity.</li>
                        </ul>
                    </SubSection>
                     <SubSection title="Troubleshooting">
                         <ul className="list-disc list-inside">
                            <li><strong>App not loading?</strong> Refresh the page, clear your browser cache, or try a different modern browser.</li>
                            <li><strong>Unable to upload?</strong> Ensure your file is a valid CSV. Convert Excel files to CSV first.</li>
                             <li><strong>App slow?</strong> Performance can degrade with very large datasets due to browser memory limitations. Try a smaller file.</li>
                            <li><strong>Browser closed unexpectedly?</strong> If you did not export your session, the work is lost.</li>
                        </ul>
                    </SubSection>
                </div>
            </section>

             <section id="credits" className="mb-8 scroll-mt-20">
                <h2 className="text-2xl font-bold font-headline mb-4 pb-2 border-b-2 border-primary/20">9. Credits</h2>
                 <div className="space-y-4 text-muted-foreground">
                     <p><strong>Developed by:</strong> Jitender Prasad Arya</p>
                     <p><strong>Tech Stack:</strong> Next.js, React, TypeScript, Tailwind CSS, ShadCN UI, Recharts</p>
                     <p><strong>Design Philosophy:</strong> Privacy-first, education-oriented, fully offline.</p>
                </div>
            </section>

        </article>
    </div>
  );
}
