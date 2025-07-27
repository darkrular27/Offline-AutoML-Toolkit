import { AutomlTool } from "@/components/pages/automl-tool";

export const metadata = {
  title: "AutoML Tool | Offline AutoML Toolkit",
  description: "Upload data, explore, train models, and get predictions.",
};

export default function AutomlToolPage() {
  return (
    <div className="container py-8">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">AutoML Workflow</h1>
        <p className="text-muted-foreground">Follow the steps to train your model and get predictions.</p>
      </div>
      <AutomlTool />
    </div>
  );
}
