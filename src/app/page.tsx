
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BrainCircuit, LineChart, UploadCloud } from 'lucide-react';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';

const features = [
  {
    icon: <UploadCloud className="w-8 h-8 text-primary" />,
    title: 'Upload Data',
    description: 'Easily upload your dataset in CSV format with a simple drag-and-drop interface.',
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: 'Explore Insights',
    description: 'Get instant Exploratory Data Analysis (EDA) to understand your data better.',
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: 'Train & Predict',
    description: 'Train models locally and make predictions without needing an internet connection.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Offline AutoML Toolkit
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Empower your data science workflow. Upload data, train models, and generate predictions entirely on your machine. No cloud needed.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/tool">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                 <div className="bg-primary/10 rounded-xl p-8 relative overflow-hidden h-full">
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 rounded-full"></div>
                    <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-accent/10 rounded-full"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      <BrainCircuit className="w-32 h-32 text-primary opacity-80"/>
                      <p className="text-center mt-4 font-semibold text-primary/80">Machine Learning, Simplified & Secure.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  Core Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  A Seamless Workflow
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From data to decision in a few simple steps, all within a secure, offline environment.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {features.map((feature) => (
                <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {feature.icon}
                    <CardTitle className="font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2025 Offline AutoML Toolkit. All rights reserved.</p>
      </footer>
    </div>
  );
}
