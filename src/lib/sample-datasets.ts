
export interface DataRow {
  [key: string]: string | number | null;
}

export interface SampleDataset {
  name: string;
  description: string;
  fileName: string;
  data: DataRow[];
}

export const sampleDatasets = {
  churn: {
    name: "Customer Churn",
    description: "Predict customer churn for a subscription-based service.",
    fileName: "sample_churn_data.csv",
    data: [
      { CustomerId: 15634602, Gender: 'Female', Age: 42, Tenure: 2, Balance: 0, NumOfProducts: 1, HasCrCard: 1, IsActiveMember: 1, EstimatedSalary: 101348.88, Exited: 1 },
      { CustomerId: 15647311, Gender: 'Female', Age: 41, Tenure: 1, Balance: 83807.86, NumOfProducts: 1, HasCrCard: 0, IsActiveMember: 1, EstimatedSalary: 112542.58, Exited: 0 },
      { CustomerId: 15619304, Gender: 'Female', Age: 42, Tenure: 8, Balance: 159660.8, NumOfProducts: 3, HasCrCard: 1, IsActiveMember: 0, EstimatedSalary: 113931.57, Exited: 1 },
      { CustomerId: 15701354, Gender: 'Male', Age: 39, Tenure: 1, Balance: 0, NumOfProducts: 2, HasCrCard: 0, IsActiveMember: 0, EstimatedSalary: 93826.63, Exited: 0 },
      { CustomerId: 15737888, Gender: 'Male', Age: 43, Tenure: 2, Balance: 125510.82, NumOfProducts: 1, HasCrCard: 1, IsActiveMember: 1, EstimatedSalary: 79084.1, Exited: 0 },
      { CustomerId: 15574012, Gender: 'Male', Age: 44, Tenure: 8, Balance: 113755.78, NumOfProducts: 2, HasCrCard: 1, IsActiveMember: 0, EstimatedSalary: 149756.71, Exited: 1 },
      { CustomerId: 15592531, Gender: 'Female', Age: 50, Tenure: 7, Balance: 0, NumOfProducts: 2, HasCrCard: 1, IsActiveMember: 1, EstimatedSalary: 10062.8, Exited: 0 },
      { CustomerId: 15656148, Gender: 'Male', Age: 29, Tenure: 4, Balance: 115046.74, NumOfProducts: 4, HasCrCard: 1, IsActiveMember: 0, EstimatedSalary: 119346.88, Exited: 1 },
      { CustomerId: 15792365, Gender: 'Female', Age: 44, Tenure: 4, Balance: 142051.07, NumOfProducts: 2, HasCrCard: 0, IsActiveMember: 1, EstimatedSalary: 74940.5, Exited: 0 },
      { CustomerId: 15592389, Gender: 'Male', Age: 27, Tenure: 9, Balance: 134603.88, NumOfProducts: 1, HasCrCard: 1, IsActiveMember: 1, EstimatedSalary: 73578.88, Exited: 0 }
    ],
  },
  titanic: {
    name: "Titanic Survival",
    description: "Predict survival on the Titanic.",
    fileName: "titanic_survival.csv",
    data: [
      { PassengerId: 1, Survived: 0, Pclass: 3, Sex: 'male', Age: 22, SibSp: 1, Parch: 0, Fare: 7.25 },
      { PassengerId: 2, Survived: 1, Pclass: 1, Sex: 'female', Age: 38, SibSp: 1, Parch: 0, Fare: 71.2833 },
      { PassengerId: 3, Survived: 1, Pclass: 3, Sex: 'female', Age: 26, SibSp: 0, Parch: 0, Fare: 7.925 },
      { PassengerId: 4, Survived: 1, Pclass: 1, Sex: 'female', Age: 35, SibSp: 1, Parch: 0, Fare: 53.1 },
      { PassengerId: 5, Survived: 0, Pclass: 3, Sex: 'male', Age: 35, SibSp: 0, Parch: 0, Fare: 8.05 },
      { PassengerId: 6, Survived: 0, Pclass: 3, Sex: 'male', Age: null, SibSp: 0, Parch: 0, Fare: 8.4583 },
      { PassengerId: 7, Survived: 0, Pclass: 1, Sex: 'male', Age: 54, SibSp: 0, Parch: 0, Fare: 51.8625 },
      { PassengerId: 8, Survived: 0, Pclass: 3, Sex: 'male', Age: 2, SibSp: 3, Parch: 1, Fare: 21.075 },
      { PassengerId: 9, Survived: 1, Pclass: 3, Sex: 'female', Age: 27, SibSp: 0, Parch: 2, Fare: 11.1333 },
      { PassengerId: 10, Survived: 1, Pclass: 2, Sex: 'female', Age: 14, SibSp: 1, Parch: 0, Fare: 30.0708 },
    ],
  },
  iris: {
    name: "Iris Flower Species",
    description: "Classify iris flowers into three species based on measurements.",
    fileName: "iris_species.csv",
    data: [
        { SepalLengthCm: 5.1, SepalWidthCm: 3.5, PetalLengthCm: 1.4, PetalWidthCm: 0.2, Species: 'Iris-setosa' },
        { SepalLengthCm: 4.9, SepalWidthCm: 3.0, PetalLengthCm: 1.4, PetalWidthCm: 0.2, Species: 'Iris-setosa' },
        { SepalLengthCm: 4.7, SepalWidthCm: 3.2, PetalLengthCm: 1.3, PetalWidthCm: 0.2, Species: 'Iris-setosa' },
        { SepalLengthCm: 7.0, SepalWidthCm: 3.2, PetalLengthCm: 4.7, PetalWidthCm: 1.4, Species: 'Iris-versicolor' },
        { SepalLengthCm: 6.4, SepalWidthCm: 3.2, PetalLengthCm: 4.5, PetalWidthCm: 1.5, Species: 'Iris-versicolor' },
        { SepalLengthCm: 6.9, SepalWidthCm: 3.1, PetalLengthCm: 4.9, PetalWidthCm: 1.5, Species: 'Iris-versicolor' },
        { SepalLengthCm: 6.3, SepalWidthCm: 3.3, PetalLengthCm: 6.0, PetalWidthCm: 2.5, Species: 'Iris-virginica' },
        { SepalLengthCm: 5.8, SepalWidthCm: 2.7, PetalLengthCm: 5.1, PetalWidthCm: 1.9, Species: 'Iris-virginica' },
        { SepalLengthCm: 7.1, SepalWidthCm: 3.0, PetalLengthCm: 5.9, PetalWidthCm: 2.1, Species: 'Iris-virginica' },
        { SepalLengthCm: 6.5, SepalWidthCm: 3.0, PetalLengthCm: 5.8, PetalWidthCm: 2.2, Species: 'Iris-virginica' },
    ],
  },
  housePrices: {
      name: "House Prices",
      description: "Predict house prices in Ames, Iowa.",
      fileName: "house_prices.csv",
      data: [
          { MSSubClass: 60, LotArea: 8450, OverallQual: 7, OverallCond: 5, YearBuilt: 2003, '1stFlrSF': 856, '2ndFlrSF': 854, GrLivArea: 1710, SalePrice: 208500 },
          { MSSubClass: 20, LotArea: 9600, OverallQual: 6, OverallCond: 8, YearBuilt: 1976, '1stFlrSF': 1262, '2ndFlrSF': 0, GrLivArea: 1262, SalePrice: 181500 },
          { MSSubClass: 60, LotArea: 11250, OverallQual: 7, OverallCond: 5, YearBuilt: 2001, '1stFlrSF': 920, '2ndFlrSF': 866, GrLivArea: 1786, SalePrice: 223500 },
          { MSSubClass: 70, LotArea: 9550, OverallQual: 7, OverallCond: 5, YearBuilt: 1915, '1stFlrSF': 961, '2ndFlrSF': 756, GrLivArea: 1717, SalePrice: 140000 },
          { MSSubClass: 60, LotArea: 14260, OverallQual: 8, OverallCond: 5, YearBuilt: 2000, '1stFlrSF': 1145, '2ndFlrSF': 1053, GrLivArea: 2198, SalePrice: 250000 },
          { MSSubClass: 50, LotArea: 14115, OverallQual: 5, OverallCond: 5, YearBuilt: 1993, '1stFlrSF': 796, '2ndFlrSF': 566, GrLivArea: 1362, SalePrice: 143000 },
          { MSSubClass: 20, LotArea: 10084, OverallQual: 8, OverallCond: 5, YearBuilt: 2004, '1stFlrSF': 1694, '2ndFlrSF': 0, GrLivArea: 1694, SalePrice: 307000 },
          { MSSubClass: 60, LotArea: 10382, OverallQual: 7, OverallCond: 6, YearBuilt: 1973, '1stFlrSF': 1107, '2ndFlrSF': 983, GrLivArea: 2090, SalePrice: 200000 },
          { MSSubClass: 50, LotArea: 6120, OverallQual: 7, OverallCond: 5, YearBuilt: 1931, '1stFlrSF': 1022, '2ndFlrSF': 752, GrLivArea: 1774, SalePrice: 129900 },
          { MSSubClass: 190, LotArea: 7420, OverallQual: 5, OverallCond: 6, YearBuilt: 1939, '1stFlrSF': 1077, '2ndFlrSF': 0, GrLivArea: 1077, SalePrice: 118000 },
      ]
  },
  wineQuality: {
    name: "Wine Quality",
    description: "Predict the quality of wine from chemical properties.",
    fileName: "wine_quality.csv",
    data: [
        { 'fixed acidity': 7.4, 'volatile acidity': 0.7, 'citric acid': 0, 'residual sugar': 1.9, chlorides: 0.076, 'free sulfur dioxide': 11, 'total sulfur dioxide': 34, density: 0.9978, pH: 3.51, sulphates: 0.56, alcohol: 9.4, quality: 5 },
        { 'fixed acidity': 7.8, 'volatile acidity': 0.88, 'citric acid': 0, 'residual sugar': 2.6, chlorides: 0.098, 'free sulfur dioxide': 25, 'total sulfur dioxide': 67, density: 0.9968, pH: 3.2, sulphates: 0.68, alcohol: 9.8, quality: 5 },
        { 'fixed acidity': 7.8, 'volatile acidity': 0.76, 'citric acid': 0.04, 'residual sugar': 2.3, chlorides: 0.092, 'free sulfur dioxide': 15, 'total sulfur dioxide': 54, density: 0.997, pH: 3.26, sulphates: 0.65, alcohol: 9.8, quality: 5 },
        { 'fixed acidity': 11.2, 'volatile acidity': 0.28, 'citric acid': 0.56, 'residual sugar': 1.9, chlorides: 0.075, 'free sulfur dioxide': 17, 'total sulfur dioxide': 60, density: 0.998, pH: 3.16, sulphates: 0.58, alcohol: 9.8, quality: 6 },
        { 'fixed acidity': 7.4, 'volatile acidity': 0.66, 'citric acid': 0, 'residual sugar': 1.8, chlorides: 0.075, 'free sulfur dioxide': 13, 'total sulfur dioxide': 40, density: 0.9978, pH: 3.51, sulphates: 0.56, alcohol: 9.4, quality: 5 },
        { 'fixed acidity': 7.9, 'volatile acidity': 0.6, 'citric acid': 0.06, 'residual sugar': 1.6, chlorides: 0.069, 'free sulfur dioxide': 15, 'total sulfur dioxide': 59, density: 0.9964, pH: 3.3, sulphates: 0.46, alcohol: 9.4, quality: 5 },
        { 'fixed acidity': 7.3, 'volatile acidity': 0.65, 'citric acid': 0, 'residual sugar': 1.2, chlorides: 0.065, 'free sulfur dioxide': 15, 'total sulfur dioxide': 21, density: 0.9946, pH: 3.39, sulphates: 0.47, alcohol: 10, quality: 7 },
        { 'fixed acidity': 7.8, 'volatile acidity': 0.58, 'citric acid': 0.02, 'residual sugar': 2, chlorides: 0.073, 'free sulfur dioxide': 9, 'total sulfur dioxide': 18, density: 0.9968, pH: 3.36, sulphates: 0.57, alcohol: 9.5, quality: 7 },
        { 'fixed acidity': 6.7, 'volatile acidity': 0.58, 'citric acid': 0.08, 'residual sugar': 1.8, chlorides: 0.097, 'free sulfur dioxide': 15, 'total sulfur dioxide': 65, density: 0.9959, pH: 3.28, sulphates: 0.54, alcohol: 9.2, quality: 5 },
        { 'fixed acidity': 7.5, 'volatile acidity': 0.5, 'citric acid': 0.36, 'residual sugar': 6.1, chlorides: 0.071, 'free sulfur dioxide': 17, 'total sulfur dioxide': 102, density: 0.9978, pH: 3.35, sulphates: 0.8, alcohol: 10.5, quality: 5 },
    ]
  },
} as const;

export type SampleDatasetKey = keyof typeof sampleDatasets;

    