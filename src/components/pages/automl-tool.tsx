
"use client";

import { useState, useMemo, ChangeEvent, useRef, useCallback, useEffect, Fragment } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, FileCheck2, Loader2, UploadCloud, FileWarning, BarChart as BarChartIcon, BrainCircuit, SlidersHorizontal, CheckCircle2, Database, Info, PieChart, Check, X, Settings2, Columns, Eraser, Download, Upload, Replace, LineChart, Target, Group, Trash2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "../ui/separator";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { sampleDatasets, type SampleDatasetKey } from "@/lib/sample-datasets";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, ScatterChart, Scatter, ZAxis } from "recharts";
import { ChartContainer, ChartTooltipContent, ChartTooltip, ChartLegend, ChartLegendContent } from "../ui/chart";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Badge } from "../ui/badge";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import React from "react";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

type Step = "upload" | "explore" | "train" | "predict";
type TaskType = "classification" | "regression" | "clustering";

interface DataRow {
  [key: string]: string | number | null | string[];
}

interface ModelResult {
    modelName: keyof typeof modelOptions;
    metrics: {
        accuracy?: number;
        rmse?: number;
        silhouetteScore?: number;
    };
    featureImportance: { name: string; importance: number }[];
    confusionMatrix?: { name: string; 'Predicted Positive': number; 'Predicted Negative': number; }[];
}

const stepsConfig: { id: Step; title: string; icon: React.ReactNode }[] = [
  { id: "upload", title: "Upload", icon: <UploadCloud className="w-4 h-4 mr-2" /> },
  { id: "explore", title: "Explore & Prepare", icon: <Columns className="w-4 h-4 mr-2" /> },
  { id: "train", title: "Train", icon: <BrainCircuit className="w-4 h-4 mr-2" /> },
  { id: "predict", title: "Predict & Evaluate", icon: <SlidersHorizontal className="w-4 h-4 mr-2" /> },
];

const modelOptions = {
    logistic: "Logistic Regression",
    randomForest: "Random Forest",
    svm: "Support Vector Machine (SVM)",
    linear: "Linear Regression",
    kmeans: "K-Means Clustering",
};
  
const modelExplanations = {
    logistic: {
        title: "Logistic Regression",
        description: "A statistical model used for binary classification. It predicts the probability of an outcome by fitting data to a logistic function.",
        use: "Best for simple, interpretable classification tasks like spam detection or churn prediction.",
        type: "classification"
    },
    randomForest: {
        title: "Random Forest",
        description: "An ensemble learning method that operates by constructing multiple decision trees during training and outputting the class that is the mode of the classes.",
        use: "Excellent for complex datasets with many features, often providing high accuracy. Good for both classification and regression.",
        type: "classification" // Can be both, but we'll default to class. for this tool
    },
    svm: {
        title: "Support Vector Machine (SVM)",
        description: "A supervised learning model that finds the optimal hyperplane which best separates data points of different classes in a high-dimensional space.",
        use: "Effective in high-dimensional spaces and for classification tasks where clear margins of separation exist between classes.",
        type: "classification"
    },
    linear: {
        title: "Linear Regression",
        description: "A linear approach to modeling the relationship between a dependent variable and one or more independent variables.",
        use: "Best for predicting continuous numerical values like prices, sales, or temperatures.",
        type: "regression"
    },
    kmeans: {
        title: "K-Means Clustering",
        description: "An unsupervised learning algorithm that aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean.",
        use: "Used for market segmentation, document clustering, and image segmentation when you don't have a specific outcome to predict.",
        type: "clustering"
    }
};

const ExplanationCard = ({ title, content, command }: { title: string; content: React.ReactNode; command?: string }) => (
    <Card className="bg-secondary/50 dark:bg-card">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        <Info className="w-5 h-5 text-primary" />
        <CardTitle className="text-lg font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
            {content}
        </div>
        {command && (
            <div className="mt-4">
                <p className="text-xs font-semibold text-foreground mb-1">Example Python command:</p>
                <code className="text-xs p-2 bg-muted rounded-md block font-mono">
                    {command}
                </code>
            </div>
        )}
      </CardContent>
    </Card>
  );

export function AutomlTool() {
  const [activeStep, setActiveStep] = useState<Step>("upload");
  const [completedSteps, setCompletedSteps] = useState<Step[]>([]);
  const [data, setData] = useState<DataRow[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const importFileRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [trainingMode, setTrainingMode] = useState<'auto' | 'manual'>('auto');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [targetVariable, setTargetVariable] = useState<string | null>(null);
  const [trainTestSplit, setTrainTestSplit] = useState([80]);
  const [selectedModels, setSelectedModels] = useState<Array<keyof typeof modelOptions>>(["randomForest"]);
  const [taskType, setTaskType] = useState<TaskType>("classification");
  const [numClusters, setNumClusters] = useState(3);
  const [filterModelsByTask, setFilterModelsByTask] = useState(true);

  const [predictionInputs, setPredictionInputs] = useState<DataRow>({});
  const [predictionResult, setPredictionResult] = useState<{ value: string | number; confidence?: number; cluster?: number } | null>(null);
  const [modelResults, setModelResults] = useState<ModelResult[]>([]);
  const [activeResultModel, setActiveResultModel] = useState<keyof typeof modelOptions | null>(null);

  const [scatterX, setScatterX] = useState<string>('');
  const [scatterY, setScatterY] = useState<string>('');

  const activeModelResult = useMemo(() => {
      return modelResults.find(r => r.modelName === activeResultModel);
  }, [modelResults, activeResultModel]);
  
  const predictionHeaders = useMemo(() => {
    const idColumn = headers.find(h => h.toLowerCase().includes('id'));
    return selectedFeatures.filter(h => h !== targetVariable && h !== idColumn);
  }, [selectedFeatures, targetVariable, headers]);


  useEffect(() => {
    if (headers.length > 0) {
      const initialFeatures = headers.filter(h => !h.toLowerCase().includes('id'));
      setSelectedFeatures(initialFeatures);
      if (initialFeatures.length > 0) {
        setTargetVariable(initialFeatures[initialFeatures.length - 1]);
      } else if (headers.length > 0) {
        setTargetVariable(headers[headers.length-1]);
      }
    }
  }, [headers]);

  const categoricalOptions = useMemo(() => {
    const options: { [key: string]: string[] } = {};
    predictionHeaders.forEach(header => {
      const uniqueValues = Array.from(new Set(data.map(row => row[header] as string).filter(v => typeof v === 'string')));
      if (uniqueValues.length > 0 && uniqueValues.length < data.length / 2) { // Heuristic for categorical
        options[header] = uniqueValues;
      }
    });
    return options;
  }, [predictionHeaders, data]);
  
  const categoricalEncodingMap = useMemo(() => {
    const encodingMap: { [key: string]: { [key: string]: number } } = {};
    Object.keys(categoricalOptions).forEach(header => {
      encodingMap[header] = {};
      categoricalOptions[header].forEach((option, index) => {
        encodingMap[header][option] = index;
      });
    });
    return encodingMap;
  }, [categoricalOptions]);

  const numericRanges = useMemo(() => {
    const ranges: { [key: string]: { min: number; max: number } } = {};
    predictionHeaders.forEach(header => {
      if (categoricalOptions[header]) return;
      const values = data.map(row => row[header]).filter(v => typeof v === 'number') as number[];
      if (values.length > 0) {
        const min = Math.min(...values);
        const max = Math.max(...values);
        ranges[header] = { min: min, max: max };
      }
    });
    return ranges;
  }, [predictionHeaders, data, categoricalOptions]);

  const handlePrediction = useCallback(() => {
    if (taskType === 'classification' && targetVariable) {
        const randomValue = Math.random() > 0.5 ? "Positive" : "Negative";
        const randomConfidence = Math.random() * (0.99 - 0.7) + 0.7;
        setPredictionResult({ value: randomValue, confidence: randomConfidence });
    } else if (taskType === 'regression' && targetVariable) {
        const numericValues = data.map(d => d[targetVariable]).filter(v => typeof v === 'number') as number[];
        const avg = numericValues.reduce((a, b) => a + b, 0) / numericValues.length;
        const stdDev = Math.sqrt(numericValues.map(x => Math.pow(x - avg, 2)).reduce((a, b) => a + b) / numericValues.length);
        const randomValue = avg + (Math.random() - 0.5) * stdDev;
        setPredictionResult({ value: randomValue.toFixed(2) });
    } else if (taskType === 'clustering') {
        const cluster = Math.floor(Math.random() * numClusters);
        setPredictionResult({ value: `Cluster ${cluster}`, cluster });
    }
  }, [taskType, data, targetVariable, numClusters]);

  useEffect(() => {
    if (activeStep === "predict" && modelResults.length > 0 && !predictionResult) {
      const initialInputs: DataRow = {};
      predictionHeaders.forEach(header => {
        if (categoricalOptions[header]) {
            initialInputs[header] = [];
        } else if (numericRanges[header]) {
            const values = data.map(row => row[header]).filter(v => typeof v === 'number') as number[];
            if (values.length > 0) {
              const avg = values.reduce((acc, v) => acc + v, 0) / values.length;
              initialInputs[header] = Math.round(avg);
            } else {
              initialInputs[header] = '';
            }
        } else {
            initialInputs[header] = '';
        }
      });
      setPredictionInputs(initialInputs);
      handlePrediction();
    }
  }, [activeStep, modelResults, predictionResult, data, predictionHeaders, handlePrediction, categoricalOptions, numericRanges]);


  const handleFileUpload = (file: File, isImport: boolean = false) => {
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        
        if (isImport) {
            try {
                const importedState = JSON.parse(text);
                setData(importedState.data);
                setHeaders(importedState.headers);
                setFileName(importedState.fileName);
                setSelectedFeatures(importedState.selectedFeatures);
                setTargetVariable(importedState.targetVariable);
                setTrainTestSplit(importedState.trainTestSplit);
                setSelectedModels(importedState.selectedModels);
                setModelResults(importedState.modelResults);
                setActiveResultModel(importedState.activeResultModel);
                setTaskType(importedState.taskType || 'classification');
                setCompletedSteps(["upload", "explore", "train"]);
                setActiveStep("predict");
                toast({ title: "Model state imported successfully!" });
            } catch (error) {
                toast({ variant: "destructive", title: "Import failed", description: "The file was not a valid model export." });
            }
        } else if (file.type === "text/csv") {
            // Mock parsing logic for CSV
            const lines = text.split('\n').filter(line => line);
            const fileHeaders = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
            const fileData = lines.slice(1).map(line => {
                const values = line.split(',');
                return fileHeaders.reduce((obj, header, index) => {
                    const value = values[index]?.trim().replace(/"/g, '');
                    if (value === null || value === undefined || value === "") {
                        obj[header] = null;
                    } else {
                        obj[header] = !isNaN(Number(value)) ? Number(value) : value;
                    }
                    return obj;
                }, {} as DataRow);
            });
            
            setData(fileData);
            setHeaders(fileHeaders);
            setCompletedSteps(prev => ["upload"]);
            setActiveStep("explore");
            toast({
                title: "File uploaded successfully",
                description: `${file.name} has been processed.`,
                variant: "default"
            });
        } else {
            toast({
                title: "Invalid file type",
                description: "Please upload a valid CSV or model export file (.json).",
                variant: "destructive",
            });
        }
      };
      reader.readAsText(file);
    }
  };

  const handleLoadSampleData = (datasetKey: SampleDatasetKey) => {
    const dataset = sampleDatasets[datasetKey];
    if (!dataset) return;

    resetWorkflow(false);

    const sampleHeaders = Object.keys(dataset.data[0]);
    setData(dataset.data as DataRow[]);
    setHeaders(sampleHeaders);
    setFileName(dataset.fileName);
    setCompletedSteps(["upload"]);
    setActiveStep("explore");
    toast({
        title: "Sample data loaded",
        description: `${dataset.name} dataset is ready for exploration.`,
    });
  };
  
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      handleFileUpload(file, file.type === "application/json");
      e.dataTransfer.clearData();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, isImport: boolean) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpload(e.target.files[0], isImport);
    }
  };

  const startTraining = () => {
    setIsTraining(true);
    setTrainingProgress(0);
    const interval = setInterval(() => {
      setTrainingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          
          const results: ModelResult[] = selectedModels.map(modelName => {
              const accuracy = taskType === 'classification' ? Math.random() * (0.95 - 0.75) + 0.75 : undefined;
              const rmse = taskType === 'regression' ? Math.random() * (25000) + 5000 : undefined;
              const silhouetteScore = taskType === 'clustering' ? Math.random() * (0.8 - 0.4) + 0.4 : undefined;
              
              const featureImportance = predictionHeaders.map(header => ({
                  name: header,
                  importance: Math.random()
              })).sort((a,b) => b.importance - a.importance);
              
              let confusionMatrix;
              if (taskType === 'classification') {
                const truePositive = Math.floor(Math.random() * 40) + 50;
                const falseNegative = Math.floor(Math.random() * 10) + 1;
                const falsePositive = Math.floor(Math.random() * 10) + 1;
                const trueNegative = Math.floor(Math.random() * 40) + 50;
                confusionMatrix = [
                    { name: 'Actual Positive', 'Predicted Positive': truePositive, 'Predicted Negative': falseNegative },
                    { name: 'Actual Negative', 'Predicted Positive': falsePositive, 'Predicted Negative': trueNegative },
                ];
              }

              return {
                  modelName,
                  metrics: { 
                      accuracy: accuracy ? parseFloat(accuracy.toFixed(3)) : undefined, 
                      rmse: rmse ? parseFloat(rmse.toFixed(3)) : undefined,
                      silhouetteScore: silhouetteScore ? parseFloat(silhouetteScore.toFixed(3)) : undefined
                  },
                  featureImportance,
                  confusionMatrix
              }
          });

          setModelResults(results);
          setActiveResultModel(results[0]?.modelName || null);
          setCompletedSteps(prev => [...prev, "train"]);
          setActiveStep("predict");
          toast({
            title: "Model training complete!",
            description: "You can now make predictions.",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  
  const resetWorkflow = (showToast = true) => {
    setActiveStep("upload");
    setCompletedSteps([]);
    setData([]);
    setHeaders([]);
    setFileName("");
    setPredictionResult(null);
    setPredictionInputs({});
    setTrainingProgress(0);
    setTrainingMode('auto');
    setSelectedFeatures([]);
    setTargetVariable(null);
    setTrainTestSplit([80]);
    setSelectedModels(["randomForest"]);
    setModelResults([]);
    setActiveResultModel(null);
    if (showToast) {
        toast({
            title: "Workflow reset",
            description: "You can now start over with a new dataset.",
        });
    }
  };

  const dataStats = useMemo(() => {
    if (!data || data.length === 0) {
      return { rowCount: 0, colCount: 0, missingValues: 0 };
    }
    const rowCount = data.length;
    const colCount = headers.length;
    const missingValues = data.reduce((acc, row) => {
        return acc + Object.values(row).filter(val => val === null || val === undefined || val === "").length;
    }, 0);
    return { rowCount, colCount, missingValues };
  }, [data, headers]);

  const numericHeaders = useMemo(() => {
    if (data.length === 0) return [];
    return headers.filter(h => typeof data.find(d => d[h] !== null)?.[h] === 'number');
  }, [data, headers]);
  
  useEffect(() => {
    if (numericHeaders.length >= 2) {
        setScatterX(numericHeaders[0]);
        setScatterY(numericHeaders[1]);
    } else if (numericHeaders.length > 0) {
        setScatterX(numericHeaders[0]);
        setScatterY(numericHeaders[0]);
    }
  }, [numericHeaders]);

  const isStepEnabled = useCallback((step: Step) => {
    if (step === 'upload') return true;
    const requiredStepIndex = stepsConfig.findIndex(s => s.id === step) - 1;
    if (requiredStepIndex < 0) return true;
    const requiredPreviousStep = stepsConfig[requiredStepIndex].id;
    return completedSteps.includes(requiredPreviousStep);
  }, [completedSteps]);
  
  const handleFeatureSelection = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleModelSelection = (model: keyof typeof modelOptions) => {
    setSelectedModels(prev =>
        prev.includes(model)
        ? prev.filter(m => m !== model)
        : [...prev, model]
    );
  };
  
  const [imputed, setImputed] = useState(false);
  const handleMissingValueImputation = () => {
    if (dataStats.missingValues === 0) {
      toast({ title: "No missing values to impute." });
      return;
    }

    const newData = data.map(row => {
      const newRow = { ...row };
      numericHeaders.forEach(header => {
        if (newRow[header] === null || newRow[header] === undefined || newRow[header] === "") {
          const numericValues = data.map(d => d[header]).filter(v => typeof v === 'number') as number[];
          const avg = numericValues.reduce((acc, v) => acc + v, 0) / numericValues.length;
          newRow[header] = Math.round(avg);
        }
      });
      return newRow;
    });

    setData(newData);
    setImputed(true);
  };

  const outlierStats = useMemo(() => {
      const stats: { [key: string]: { count: number; lowerBound: number; upperBound: number; } } = {};
      let totalOutliers = 0;
      numericHeaders.forEach(header => {
          const values = data.map(d => d[header]).filter(v => typeof v === 'number') as number[];
          if (values.length < 4) return;
          values.sort((a, b) => a - b);
          const q1 = values[Math.floor(values.length / 4)];
          const q3 = values[Math.floor(values.length * 3 / 4)];
          const iqr = q3 - q1;
          const lowerBound = q1 - 1.5 * iqr;
          const upperBound = q3 + 1.5 * iqr;
          const outliers = values.filter(v => v < lowerBound || v > upperBound);
          if (outliers.length > 0) {
              stats[header] = { count: outliers.length, lowerBound, upperBound };
              totalOutliers += outliers.length;
          }
      });
      return { stats, totalOutliers };
  }, [data, numericHeaders]);

  const [removedOutliers, setRemovedOutliers] = useState(false);
  const handleRemoveOutliers = () => {
      if (outlierStats.totalOutliers === 0) {
          toast({ title: "No outliers to remove." });
          return;
      }
      const originalRowCount = data.length;
      const newData = data.filter(row => {
          return numericHeaders.every(header => {
              const stat = outlierStats.stats[header];
              if (!stat) return true;
              const value = row[header];
              if (typeof value !== 'number') return true;
              return value >= stat.lowerBound && value <= stat.upperBound;
          });
      });
      setData(newData);
      toast({
          title: "Outliers removed",
          description: `Removed ${originalRowCount - newData.length} rows containing outlier values.`
      });
  };

  useEffect(() => {
      if (imputed) {
          toast({
              title: "Missing values imputed",
              description: "Missing numerical values have been filled with their column's average."
          });
          setImputed(false);
      }
  }, [imputed, toast]);
  
  const correlationData = useMemo(() => {
    const correlations: { [key: string]: { [key: string]: number } } = {};
    numericHeaders.forEach(h1 => {
        correlations[h1] = {};
        numericHeaders.forEach(h2 => {
            if (h1 === h2) {
                correlations[h1][h2] = 1;
            } else if (correlations[h2]?.[h1]) {
                correlations[h1][h2] = correlations[h2][h1];
            }
            else {
                // Mock correlation
                correlations[h1][h2] = Number((Math.random() * 2 - 1).toFixed(2));
            }
        });
    });
    return correlations;
  }, [numericHeaders]);

  const handleExport = () => {
    if (modelResults.length === 0) {
        toast({ variant: "destructive", title: "Cannot Export", description: "You must train a model before exporting." });
        return;
    }

    const exportState = {
        fileName,
        data,
        headers,
        selectedFeatures,
        targetVariable,
        trainTestSplit,
        selectedModels,
        modelResults,
        activeResultModel,
        taskType
    };

    const blob = new Blob([JSON.stringify(exportState, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName.replace('.csv', '')}_model_export.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({ title: "Model exported successfully!" });
  };
  
  // Detect task type when target variable changes or is set to null
  useEffect(() => {
      if (!targetVariable) {
          setTaskType("clustering");
          setSelectedModels(['kmeans']);
          return;
      }

      if (targetVariable && data.length > 0) {
          const uniqueValues = new Set(data.map(row => row[targetVariable]));
          const firstValue = data.find(row => row[targetVariable] !== null)?.[targetVariable];
          // Heuristic: if target is numeric and has many unique values, it's regression.
          if (typeof firstValue === 'number' && uniqueValues.size > 10) {
              setTaskType("regression");
              setSelectedModels(['linear']);
          } else {
              setTaskType("classification");
              setSelectedModels(['randomForest']);
          }
      }
  }, [targetVariable, data]);
  
  const deleteColumn = (columnToDelete: string) => {
    setHeaders(prev => prev.filter(h => h !== columnToDelete));
    setData(prev => prev.map(row => {
        const newRow = { ...row };
        delete newRow[columnToDelete];
        return newRow;
    }));
    toast({ title: `Column "${columnToDelete}" removed` });
  };
  
  const deleteRow = (rowIndexToDelete: number) => {
    setData(prev => prev.filter((_, index) => index !== rowIndexOfDelete));
    toast({ title: `Row ${rowIndexToDelete + 1} removed` });
  };


  return (
    <Tabs value={activeStep} onValueChange={(val) => setActiveStep(val as Step)} className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        {stepsConfig.map(step => (
            <TabsTrigger key={step.id} value={step.id} disabled={!isStepEnabled(step.id)}>
                {step.icon}
                {step.title}
                {completedSteps.includes(step.id) && <CheckCircle2 className="w-4 h-4 ml-2 text-green-500" />}
            </TabsTrigger>
        ))}
      </TabsList>
      
      <TabsContent value="upload">
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="font-headline">Upload your Data</CardTitle>
            <CardDescription>Drag and drop a CSV file, or click to select a file from your computer. You can also import a previously exported model state.</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg cursor-pointer
                ${isDragging ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <UploadCloud className="w-12 h-12 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">
                {isDragging ? "Drop the file here..." : "Drag & drop CSV or JSON model file, or click to select"}
              </p>
              <Input type="file" accept=".csv,.json" ref={fileInputRef} className="hidden" onChange={(e) => handleFileChange(e, e.target.files?.[0]?.type === 'application/json')} />
            </div>
            {fileName && (
                <div className="mt-4 flex items-center justify-center text-sm text-muted-foreground">
                    <FileCheck2 className="w-5 h-5 mr-2 text-green-500" />
                    <span>Selected file: <strong>{fileName}</strong></span>
                </div>
            )}
            <div className="flex items-center gap-4 my-4">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">OR</span>
                <Separator className="flex-1" />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <div className="flex flex-col items-center">
                  <p className="text-sm text-muted-foreground mb-2">Load a sample dataset</p>
                  <Select onValueChange={(value: SampleDatasetKey) => handleLoadSampleData(value)}>
                    <SelectTrigger className="w-64">
                      <Database className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Select a dataset" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {Object.entries(sampleDatasets).map(([key, dataset]) => (
                          <SelectItem key={key} value={key as SampleDatasetKey}>{dataset.name}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-sm text-muted-foreground mb-2">Import a saved model state</p>
                    <Button className="w-64" variant="outline" onClick={() => importFileRef.current?.click()}>
                        <Upload className="w-4 h-4 mr-2" />
                        Import Model (.json)
                    </Button>
                    <Input type="file" accept=".json" ref={importFileRef} className="hidden" onChange={(e) => handleFileChange(e, true)} />
                </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="explore">
        <div className="grid lg:grid-cols-2 gap-6 mt-4">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Data Overview & Preparation</CardTitle>
                        <CardDescription>Review, clean, and prepare your dataset: <strong>{fileName}</strong></CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card>
                                <CardHeader><CardTitle className="text-lg">Rows</CardTitle></CardHeader>
                                <CardContent><p className="text-3xl font-bold">{dataStats.rowCount}</p></CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle className="text-lg">Columns</CardTitle></CardHeader>
                                <CardContent><p className="text-3xl font-bold">{dataStats.colCount}</p></CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle className="text-lg">Missing Values</CardTitle></CardHeader>
                                <CardContent><p className="text-3xl font-bold">{dataStats.missingValues}</p></CardContent>
                            </Card>
                        </div>
                        
                        <Card className="p-4 bg-secondary/30 dark:bg-card/50">
                            <h4 className="mb-4 font-medium text-foreground">Data Preparation</h4>
                             <Alert variant="default" className="mb-4">
                                <Info className="h-4 w-4" />
                                <AlertTitle>Detected Task: {taskType.charAt(0).toUpperCase() + taskType.slice(1)}</AlertTitle>
                                <AlertDescription>
                                    Based on your target variable, we've identified this as a {taskType} problem.
                                </AlertDescription>
                            </Alert>
                            <div className="space-y-4">
                                <div>
                                    <Label className="font-semibold">Feature Selection</Label>
                                    <p className="text-xs text-muted-foreground mb-2">Select the columns to use for training.</p>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="w-full justify-start font-normal">
                                                {selectedFeatures.length} of {headers.length} columns selected
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <div className="space-y-1 p-2 max-h-60 overflow-y-auto">
                                                {headers.map(header => (
                                                    <div key={header} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={`feature-select-${header}`}
                                                            checked={selectedFeatures.includes(header)}
                                                            onCheckedChange={() => handleFeatureSelection(header)}
                                                        />
                                                        <Label htmlFor={`feature-select-${header}`} className="font-normal">{header}</Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <Label className="font-semibold">Target Variable</Label>
                                        <Button variant="link" size="sm" className="h-auto p-0 text-xs" onClick={() => setTargetVariable(null)}>
                                            <Group className="w-3 h-3 mr-1"/>
                                            Switch to Clustering
                                        </Button>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">Select the column the model should predict. Deselect for clustering.</p>
                                     <Select value={targetVariable || ''} onValueChange={(val) => setTargetVariable(val === 'none' ? null : val)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select target variable" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">None (for Clustering)</SelectItem>
                                            {selectedFeatures.map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                                
                            </div>
                        </Card>

                        <Card className="p-4 bg-secondary/30 dark:bg-card/50">
                             <h4 className="mb-4 font-medium text-foreground">Data Cleaning</h4>
                             <div className="space-y-4">
                                {dataStats.missingValues > 0 && (
                                    <Alert variant="destructive">
                                        <FileWarning className="h-4 w-4" />
                                        <AlertTitle>Missing Values Detected</AlertTitle>
                                        <AlertDescription className="flex justify-between items-center">
                                            <span>Your dataset contains {dataStats.missingValues} missing values.</span>
                                            <Button size="sm" variant="destructive" onClick={handleMissingValueImputation} className="bg-destructive-foreground text-destructive">Impute (Avg)</Button>
                                        </AlertDescription>
                                    </Alert>
                                )}
                                {outlierStats.totalOutliers > 0 && (
                                    <Alert variant="destructive">
                                        <FileWarning className="h-4 w-4" />
                                        <AlertTitle>Outliers Detected</AlertTitle>
                                        <AlertDescription className="flex justify-between items-center">
                                            <span>Found {outlierStats.totalOutliers} potential outliers.</span>
                                            <Button size="sm" variant="destructive" onClick={handleRemoveOutliers} className="bg-destructive-foreground text-destructive">Remove Them</Button>
                                        </AlertDescription>
                                    </Alert>
                                )}
                                {dataStats.missingValues === 0 && outlierStats.totalOutliers === 0 && (
                                    <p className="text-sm text-muted-foreground text-center py-2">No missing values or outliers detected.</p>
                                )}
                             </div>
                        </Card>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Data Preview</h3>
                            <div className="max-h-80 overflow-auto rounded-md border">
                            <Table>
                                <TableHeader className="sticky top-0 bg-secondary dark:bg-card">
                                <TableRow>
                                    {headers.map(header => (
                                      <TableHead key={header} className="relative group">
                                        {header}
                                        <Button variant="ghost" size="icon" className="absolute top-1/2 right-0 -translate-y-1/2 h-6 w-6 opacity-0 group-hover:opacity-100" onClick={() => deleteColumn(header)}>
                                            <Trash2 className="w-4 h-4 text-destructive" />
                                        </Button>
                                      </TableHead>
                                    ))}
                                    <TableHead className="w-10">Actions</TableHead>
                                </TableRow>
                                </TableHeader>
                                <TableBody>
                                {data.slice(0, 10).map((row, i) => (
                                    <TableRow key={i}>
                                    {headers.map(header => <TableCell key={header}>{String(row[header] ?? 'N/A')}</TableCell>)}
                                    <TableCell>
                                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => deleteRow(i)}>
                                            <Trash2 className="w-4 h-4 text-destructive" />
                                        </Button>
                                    </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                 <div className="flex justify-end mt-6">
                    <Button onClick={() => { setCompletedSteps(prev => [...prev, "explore"]); setActiveStep("train"); }}>Proceed to Training</Button>
                </div>
            </div>
             <div className="space-y-6">
                <ExplanationCard
                    title="What is Data Preparation?"
                    command="df_cleaned = df.drop('ID_Column', axis=1).fillna(df.mean())"
                    content={
                        <>
                            <p>This step is crucial for building a good model. We're performing several key tasks:</p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li><strong>Feature Selection:</strong> You choose which columns (features) are relevant for prediction. It's common to remove ID columns or other data that won't help the model learn.</li>
                                <li><strong>Target Variable:</strong> You define what you want to predict. This is the "answer" the model will try to learn. If you don't select one, the app switches to Clustering mode to find groups in your data.</li>
                                <li><strong>Missing Value Imputation:</strong> We handle empty cells in your data. Here, we're filling them with the average value of the respective column.</li>
                                <li><strong>Outlier Removal:</strong> We can automatically detect and remove rows that contain statistically unusual values (outliers) that might negatively affect the model.</li>
                            </ul>
                        </>
                    }
                />
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Data Distributions</CardTitle>
                        <CardDescription>Histograms of numerical features in your dataset.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {numericHeaders.map(header => (
                                <AccordionItem key={header} value={header}>
                                    <AccordionTrigger>{header}</AccordionTrigger>
                                    <AccordionContent forceMount>
                                        <div className="h-48 w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={data.map((d, i) => ({ name: i, [header]: d[header] }))}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Bar dataKey={header} fill="var(--color-chart-1)" key={header}/>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
                 <Card>
                  <CardHeader>
                    <CardTitle className="font-headline">Categorical Encoding</CardTitle>
                    <CardDescription>How text values are converted to numbers for the model.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                          {Object.keys(categoricalEncodingMap).map(header => (
                              <AccordionItem key={header} value={header}>
                                  <AccordionTrigger>{header}</AccordionTrigger>
                                  <AccordionContent>
                                      <Table>
                                          <TableHeader>
                                              <TableRow>
                                                  <TableHead>Original Value</TableHead>
                                                  <TableHead className="text-right">Encoded Value</TableHead>
                                              </TableRow>
                                          </TableHeader>
                                          <TableBody>
                                              {Object.entries(categoricalEncodingMap[header]).map(([option, value]) => (
                                                  <TableRow key={option}>
                                                      <TableCell>{option}</TableCell>
                                                      <TableCell className="text-right">{value}</TableCell>
                                                  </TableRow>
                                              ))}
                                          </TableBody>
                                      </Table>
                                  </AccordionContent>
                              </AccordionItem>
                          ))}
                      </Accordion>
                  </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Scatter Plot</CardTitle>
                        <CardDescription>Explore relationships between two numerical features.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <Label>X-Axis</Label>
                                <Select value={scatterX} onValueChange={setScatterX}>
                                    <SelectTrigger><SelectValue/></SelectTrigger>
                                    <SelectContent>{numericHeaders.map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}</SelectContent>
                                </Select>
                            </div>
                             <div>
                                <Label>Y-Axis</Label>
                                <Select value={scatterY} onValueChange={setScatterY}>
                                    <SelectTrigger><SelectValue/></SelectTrigger>
                                    <SelectContent>{numericHeaders.map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}</SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                    <CartesianGrid />
                                    <XAxis type="number" dataKey={scatterX} name={scatterX} />
                                    <YAxis type="number" dataKey={scatterY} name={scatterY} />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                    <Scatter name="Data points" data={data} fill="var(--color-chart-2)" />
                                </ScatterChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
             </div>
        </div>
      </TabsContent>

      <TabsContent value="train">
        <div className="grid md:grid-cols-2 gap-6 mt-4">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Model Training</CardTitle>
                    <CardDescription>Configure your training preferences and start the process.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <RadioGroup defaultValue={trainingMode} onValueChange={(value) => setTrainingMode(value as 'auto' | 'manual')} className="flex gap-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="auto" id="auto" />
                            <Label htmlFor="auto">Automatic</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="manual" id="manual" />
                            <Label htmlFor="manual">Manual</Label>
                        </div>
                    </RadioGroup>

                    {trainingMode === 'manual' && (
                        <Card className="p-4 bg-secondary/30 dark:bg-card/50 space-y-4">
                            {taskType !== 'clustering' && (
                            <div>
                                <Label htmlFor="data-split" className="mb-2 block font-medium text-foreground">Train/Test Split: {trainTestSplit[0]}% / {100 - trainTestSplit[0]}%</Label>
                                <Slider
                                    id="data-split"
                                    min={50}
                                    max={90}
                                    step={5}
                                    value={trainTestSplit}
                                    onValueChange={setTrainTestSplit}
                                />
                            </div>
                            )}
                            {taskType === 'clustering' && (
                            <div>
                                <Label htmlFor="num-clusters" className="mb-2 block font-medium text-foreground">Number of Clusters (K): {numClusters}</Label>
                                <Slider
                                    id="num-clusters"
                                    min={2}
                                    max={10}
                                    step={1}
                                    value={[numClusters]}
                                    onValueChange={(val) => setNumClusters(val[0])}
                                />
                            </div>
                            )}
                            <div>
                                <Label htmlFor="model-select" className="mb-2 block font-medium text-foreground">Select Models for Comparison</Label>
                                 <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="w-full justify-start font-normal">
                                            {selectedModels.length} model(s) selected
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <div className="space-y-1 p-2">
                                            {Object.entries(modelOptions).map(([key, name]) => {
                                                const modelInfo = modelExplanations[key as keyof typeof modelExplanations];
                                                const isCompatible = modelInfo.type === taskType;
                                                return (
                                                    <div key={key} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={`model-select-${key}`}
                                                            checked={selectedModels.includes(key as keyof typeof modelOptions)}
                                                            onCheckedChange={() => handleModelSelection(key as keyof typeof modelOptions)}
                                                            disabled={filterModelsByTask && !isCompatible}
                                                        />
                                                        <Label htmlFor={`model-select-${key}`} className={cn("font-normal", filterModelsByTask && !isCompatible && "text-muted-foreground")}>{name}</Label>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </PopoverContent>
                                </Popover>
                                <div className="flex items-center space-x-2 mt-2">
                                    <Checkbox id="filter-models" checked={filterModelsByTask} onCheckedChange={(checked) => setFilterModelsByTask(Boolean(checked))} />
                                    <Label htmlFor="filter-models" className="text-xs font-normal">Only show compatible models</Label>
                                </div>
                            </div>
                        </Card>
                    )}

                    <div className="flex flex-col items-center justify-center space-y-6 pt-4">
                        {!isTraining && trainingProgress === 0 && (
                            <>
                            <BrainCircuit className="w-16 h-16 text-primary/50" />
                            <Button size="lg" onClick={startTraining} disabled={trainingMode === 'manual' && selectedModels.length === 0}>
                                {trainingMode === 'manual' && selectedModels.length === 0 ? "Select at least one model" : "Start Training"}
                            </Button>
                            </>
                        )}
                        {isTraining && (
                            <>
                            <p className="text-lg font-medium">Training in progress...</p>
                            <Progress value={trainingProgress} className="w-full max-w-md" />
                            <p className="text-muted-foreground">{trainingProgress}% complete</p>
                            </>
                        )}
                        {!isTraining && trainingProgress === 100 && (
                            <>
                            <CheckCircle2 className="w-16 h-16 text-green-500" />
                            <p className="text-lg font-medium">Training Completed!</p>
                            <Button onClick={() => setActiveStep("predict")}>Go to Predictions</Button>
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
            <div className="space-y-4">
                <ExplanationCard
                    title="What is happening now?"
                    command={taskType === 'clustering' 
                        ? 'kmeans = KMeans(n_clusters=3).fit(X)'
                        : `X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=${((100 - trainTestSplit[0])/100).toFixed(2)})`
                    }
                    content={
                        <>
                            <p>During training, we are teaching a machine learning model to find patterns in your data.</p>
                            {trainingMode === 'manual' && (
                                <Alert className="mt-2" variant="default">
                                    <Settings2 className="h-4 w-4" />
                                    <AlertTitle>Manual Mode</AlertTitle>
                                    <AlertDescription>
                                        You are in manual mode, giving you more control over the training process. This can lead to a better, more efficient model.
                                    </AlertDescription>
                                </Alert>
                            )}
                            <ol className="list-decimal list-inside space-y-1 mt-2">
                                {taskType === 'clustering' ? (
                                    <li><strong>Clustering:</strong> The K-Means algorithm is analyzing your data to find {numClusters} distinct groups (clusters) based on the features you've selected.</li>
                                ) : (
                                    <>
                                        <li><strong>Data Splitting:</strong> The dataset is split into a training set (for learning) and a testing set (for evaluation). You've chosen a {trainTestSplit[0]}/{100-trainTestSplit[0]} split.</li>
                                        <li><strong>Model Selection:</strong> An algorithm is chosen. We use libraries like <strong className="text-foreground">Scikit-learn</strong> for this.</li>
                                        <li><strong>Fitting:</strong> The model 'fits' itself to the training data, adjusting its parameters to make the best possible predictions.</li>
                                    </>
                                )}
                            </ol>
                            <p className="mt-2">This progress bar simulates that fitting process.</p>
                        </>
                    }
                />
                {trainingMode === 'manual' && (
                <Card className="bg-secondary/50 dark:bg-card">
                    <CardHeader>
                        <CardTitle className="text-lg font-headline">Available Models</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    {Object.values(modelExplanations).map(model => (
                        <div key={model.title}>
                            <h4 className="font-semibold text-foreground">{model.title}</h4>
                            <p className="text-sm text-muted-foreground">{model.description}</p>
                            <p className="text-xs mt-1"><strong className="text-foreground">Use case:</strong> <span className="text-muted-foreground">{model.use}</span></p>
                        </div>
                    ))}
                    </CardContent>
                </Card>
                )}
            </div>
        </div>
      </TabsContent>

      <TabsContent value="predict">
        <div className="grid lg:grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Manual Prediction</CardTitle>
                        <CardDescription>Adjust the inputs to generate a new prediction using the <strong className="text-primary">{activeResultModel ? modelOptions[activeResultModel] : ''}</strong> model.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {predictionHeaders.map(header => (
                            <div key={header} className="space-y-2">
                            <Label htmlFor={header}>{header}</Label>
                                {categoricalOptions[header] ? (
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="w-full justify-start font-normal h-auto min-h-10">
                                                <div className="flex gap-1 flex-wrap">
                                                {(predictionInputs[header] as string[])?.length > 0 ? (
                                                    (predictionInputs[header] as string[]).map(val => <Badge key={val}>{val}</Badge>)
                                                ) : (
                                                    <span className="text-muted-foreground">Select {header}</span>
                                                )}
                                                </div>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <div className="space-y-1 p-2">
                                                {categoricalOptions[header].map(option => (
                                                    <Button
                                                        key={option}
                                                        variant="ghost"
                                                        className="w-full justify-start"
                                                        onClick={() => {
                                                            const currentSelection = (predictionInputs[header] as string[] || []);
                                                            const newSelection = currentSelection.includes(option)
                                                                ? currentSelection.filter(item => item !== option)
                                                                : [...currentSelection, option];
                                                            setPredictionInputs(prev => ({ ...prev, [header]: newSelection }));
                                                        }}
                                                    >
                                                        <div className={`w-4 h-4 mr-2 border border-primary rounded-sm flex items-center justify-center ${(predictionInputs[header] as string[] || []).includes(option) ? 'bg-primary' : ''}`}>
                                                            {(predictionInputs[header] as string[] || []).includes(option) && <Check className="w-3 h-3 text-primary-foreground" />}
                                                        </div>
                                                        {option}
                                                    </Button>
                                                ))}
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                ) : numericRanges[header] ? (
                                    <div className="flex items-center gap-4">
                                    <Slider
                                        id={header}
                                        min={numericRanges[header].min - 100}
                                        max={numericRanges[header].max + 100}
                                        step={1}
                                        value={[Number(predictionInputs[header] || 0)]}
                                        onValueChange={(value) => setPredictionInputs(prev => ({...prev, [header]: value[0]}))}
                                    />
                                    <Input
                                        type="number"
                                        className="w-24"
                                        value={predictionInputs[header] || 0}
                                        onChange={(e) => setPredictionInputs(prev => ({...prev, [header]: Number(e.target.value)}))}
                                    />
                                    </div>
                                ) : (
                                    <Input
                                        id={header}
                                        placeholder={`Enter ${header}`}
                                        value={predictionInputs[header] as string || ""}
                                        onChange={(e) => setPredictionInputs(prev => ({...prev, [header]: e.target.value}))}
                                    />
                                )}
                            </div>
                        ))}
                        <Button onClick={() => handlePrediction()} className="w-full">
                            {predictionResult ? 'Predict Again' : 'Generate Prediction'}
                        </Button>
                    </CardContent>
                </Card>
                 <ExplanationCard
                    title="How does this work?"
                    command="prediction = model.predict(new_data)"
                    content={
                        <>
                            <p>Here, you provide a new set of inputs to the model we just trained. The model uses the patterns it learned to make a prediction on this new, unseen data.</p>
                            {taskType === "classification" && <p>The <strong className="text-foreground">confidence score</strong> indicates how certain the model is about its prediction. Higher confidence generally means a more reliable prediction.</p>}
                            {taskType === "clustering" && <p>The model is assigning your new data point to one of the <strong className="text-foreground">{numClusters} clusters</strong> it identified during training.</p>}
                        </>
                    }
                />
            </div>

            <div className="space-y-6">
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Model Comparison</CardTitle>
                        <CardDescription>Performance of all trained models for this {taskType} task.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Model</TableHead>
                                    {taskType === 'classification' && <TableHead className="text-right">Accuracy</TableHead>}
                                    {taskType === 'regression' && <TableHead className="text-right">RMSE</TableHead>}
                                    {taskType === 'clustering' && <TableHead className="text-right">Silhouette Score</TableHead>}
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {modelResults.map(result => (
                                    <TableRow key={result.modelName} className={cn(activeResultModel === result.modelName && "bg-secondary")}>
                                        <TableCell className="font-medium">{modelOptions[result.modelName]}</TableCell>
                                        {taskType === 'classification' && <TableCell className="text-right">{result.metrics.accuracy ? (result.metrics.accuracy * 100).toFixed(1) + '%' : 'N/A'}</TableCell>}
                                        {taskType === 'regression' && <TableCell className="text-right">{result.metrics.rmse ? result.metrics.rmse.toFixed(3) : 'N/A'}</TableCell>}
                                        {taskType === 'clustering' && <TableCell className="text-right">{result.metrics.silhouetteScore ? result.metrics.silhouetteScore.toFixed(3) : 'N/A'}</TableCell>}
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm" onClick={() => setActiveResultModel(result.modelName)} disabled={activeResultModel === result.modelName}>
                                                {activeResultModel === result.modelName ? "Active" : "View"}
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                {activeModelResult && <>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Prediction Result</CardTitle>
                         <CardDescription>Using the <strong className="text-primary">{modelOptions[activeResultModel]}</strong> model</CardDescription>
                    </CardHeader>
                    <CardContent className="min-h-36 flex items-center justify-center">
                    {predictionResult ? (
                        <div className="text-center">
                            <p className="text-lg text-muted-foreground">Predicted {taskType === 'regression' && targetVariable ? targetVariable : taskType === 'clustering' ? 'Assignment' : 'Value'}:</p>
                            <p className="text-5xl font-bold text-primary">{String(predictionResult.value)}</p>
                            {predictionResult.confidence && <p className="text-sm text-muted-foreground mt-2">Confidence: {(predictionResult.confidence * 100).toFixed(2)}%</p>}
                        </div>
                    ) : (
                        <div className="text-center text-muted-foreground">
                            <Loader2 className="w-8 h-8 mx-auto animate-spin mb-2" />
                            <p>Generating initial prediction...</p>
                        </div>
                    )}
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Model Evaluation</CardTitle>
                        <CardDescription>How well the <strong className="text-primary">{modelOptions[activeResultModel]}</strong> model performed.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="grid grid-cols-2 gap-4 text-center">
                             {taskType === 'classification' && activeModelResult.metrics.accuracy && (
                                <div>
                                    <p className="text-sm text-muted-foreground">Accuracy Score</p>
                                    <p className="text-2xl font-bold">{(activeModelResult.metrics.accuracy * 100).toFixed(1)}%</p>
                                </div>
                             )}
                            {taskType === 'regression' && activeModelResult.metrics.rmse && (
                                <div>
                                    <p className="text-sm text-muted-foreground">RMSE</p>
                                    <p className="text-2xl font-bold">{activeModelResult.metrics.rmse.toFixed(3)}</p>
                                </div>
                            )}
                            {taskType === 'clustering' && activeModelResult.metrics.silhouetteScore && (
                                <div>
                                    <p className="text-sm text-muted-foreground">Silhouette Score</p>
                                    <p className="text-2xl font-bold">{activeModelResult.metrics.silhouetteScore.toFixed(3)}</p>
                                </div>
                            )}
                         </div>
                         {taskType === 'classification' && activeModelResult.confusionMatrix &&
                         <>
                             <Separator />
                             <div>
                                <h4 className="font-medium text-center mb-2">Confusion Matrix</h4>
                                 <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead></TableHead>
                                            <TableHead className="text-center">Predicted Positive</TableHead>
                                            <TableHead className="text-center">Predicted Negative</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableHead>Actual Positive</TableHead>
                                            <TableCell className="text-center font-bold text-green-600 bg-green-500/10">{activeModelResult.confusionMatrix[0]['Predicted Positive']}</TableCell>
                                            <TableCell className="text-center">{activeModelResult.confusionMatrix[0]['Predicted Negative']}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableHead>Actual Negative</TableHead>
                                            <TableCell className="text-center">{activeModelResult.confusionMatrix[1]['Predicted Positive']}</TableCell>
                                            <TableCell className="text-center font-bold text-green-600 bg-green-500/10">{activeModelResult.confusionMatrix[1]['Predicted Negative']}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                             </div>
                         </>
                         }
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Feature Importance</CardTitle>
                        <CardDescription>Which factors mattered most for the prediction?</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={{
                            importance: {
                                label: "Importance",
                                color: "hsl(var(--primary))",
                            },
                        }} className="h-64">
                            <ResponsiveContainer width="100%" height={256}>
                                <BarChart accessibilityLayer data={activeModelResult.featureImportance} layout="vertical" margin={{ left: 20, right: 20 }}>
                                    <CartesianGrid horizontal={false} />
                                    <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} width={80} />
                                    <XAxis dataKey="importance" type="number" hide />
                                    <Tooltip
                                        cursor={{fill: 'hsl(var(--muted))'}}
                                        content={<ChartTooltipContent indicator="dot" />}
                                    />
                                    <Bar dataKey="importance" fill="var(--color-importance)" radius={4} />
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>
                </>}
                <ExplanationCard
                    title="Understanding the Results"
                    content={
                        <>
                           {taskType === 'classification' && <p><strong>Accuracy</strong> measures how many predictions the model got right. Higher is better.</p>}
                           {taskType === 'regression' && <p><strong>RMSE</strong> (Root Mean Squared Error) measures the average error in the model's predictions. Lower is better.</p>}
                           {taskType === 'clustering' && <p><strong>Silhouette Score</strong> measures how well-separated the clusters are. A score closer to 1 indicates dense, well-defined clusters. Higher is better.</p>}
                           {taskType === 'classification' && <><p>The <strong>Confusion Matrix</strong> provides a detailed breakdown: True Positives are correct "yes" predictions, and True Negatives are correct "no" predictions.</p></>}
                           <p>The <strong>Feature Importance</strong> chart shows which data columns the model relied on most. This helps you understand what drives the outcomes.</p>
                        </>
                    }
                />
                <div className="flex gap-2">
                    <Button variant="outline" onClick={() => resetWorkflow()} className="w-full"><Replace className="w-4 h-4 mr-2" />Start Over</Button>
                    <Button variant="outline" onClick={handleExport} className="w-full"><Download className="w-4 h-4 mr-2"/>Export Model</Button>
                </div>
            </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
