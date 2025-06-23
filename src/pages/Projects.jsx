import PageLayout from './PageLayout';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Real-time Bitcoin Analytics with LangChain",
    summary: "Built a real-time dashboard to analyze Bitcoin data and graph relationships using NLP and LangChain.",
    description:
      "Designed a real-time analytics pipeline that streams Bitcoin price and transaction data, models wallet relationships in Neo4j, and enables natural language querying using LangChain with the Mistral model (via Ollama). The dashboard features multi-tab analytics, wallet graph visualizations, and a Cypher query generator with few-shot prompting. This project explores the intersection of NLP, knowledge graphs, and real-time financial analytics.",
    tech: ["LangChain", "Neo4j", "Streamlit", "Cypher", "Ollama", "Mistral"],
    repo: "https://github.com/saranshkr/langchain-bitcoin-analytics",
    demo: null,
    report: null,
  },
  {
    title: "ClimaSense: Smart HVAC Control",
    summary: "Optimized HVAC energy usage using reinforcement learning in a custom smart environment.",
    description:
      "ClimaSense is a reinforcement learning–powered HVAC optimization project built using a custom Gym environment and the Soft Actor-Critic (SAC) algorithm. It simulates dynamic room conditions with temperature sensors and schedules HVAC actions to minimize energy cost while maintaining comfort. I also built a FastAPI backend and deployed the model for real-time interaction and visualization. This project was submitted on Devpost as a complete smart energy solution.",
    tech: ["Reinforcement Learning", "Gym", "Soft Actor-Critic", "FastAPI", "Devpost"],
    repo: "https://github.com/Ineshtandy/HVAC_Predictive_Consumption",
    demo: null,
    report: null,
  },
  {
    title: "Ocular Disease Recognition",
    summary: "Classified retinal diseases from fundus images using CNN and the ODIR-5K dataset.",
    description:
      "This deep learning project tackled the automated classification of ocular diseases using the ODIR-5K dataset. We preprocessed over 10,000 fundus images and engineered features from tabular data. I contributed to data cleaning, feature engineering, and model development. The final model was a VGG16-based CNN fine-tuned for binary classification (Cataract vs. Normal), achieving over 90% accuracy. We addressed class imbalance and data quality issues, and documented our findings in a group report and tutorial.",
    tech: ["CNN", "VGG16", "ODIR-5K", "Pandas", "OpenCV", "Transfer Learning"],
    repo: "https://github.com/mvetlu/ocular-disease-ml",
    demo: "https://mvetlu.github.io/ocular-disease-ml/",
    report: null,
  },
  {
    title: "Purchase Propensity Model",
    summary: "Predicted user purchase likelihood using Gaussian Naive Bayes on behavioral data.",
    description:
      "This beginner-friendly project involved building a model to predict whether a user would place an order on a fictional website. I started by cleaning and analyzing raw behavioral data from a Kaggle dataset that recorded user actions like login status and page clicks. Using Gaussian Naive Bayes, I trained a propensity model to classify purchase intent, which can help businesses target high-propensity users and reduce marketing overhead. This project solidified my understanding of EDA, feature selection, and model evaluation in a real-world context.",
    tech: ["GaussianNB", "Pandas", "Seaborn", "Matplotlib"],
    repo: "https://github.com/saranshkr/purchase-propensity-model",
    demo: null,
    report: null,
  },
  {
    title: "Customer Segmentation",
    summary: "Clustered customer personas from marketing data using unsupervised learning.",
    description:
      "This project started as a personal exercise in exploratory data analysis and evolved into a full market segmentation pipeline. Using a Kaggle dataset from a marketing campaign, I analyzed customer behavior — including spending habits and campaign responses — to group similar profiles using clustering techniques. After extensive EDA, I applied unsupervised learning to identify high-value customer segments. This helped simulate how businesses can tailor campaigns to specific profiles, rather than targeting everyone equally.",
    tech: ["KMeans", "PCA", "Seaborn", "Scikit-learn"],
    repo: "https://github.com/saranshkr/customer-profile-analysis",
    demo: null,
    report: null,
  },
  {
    title: "Face Recognition System",
    summary: "Real-time face detection and recognition using Dlib’s HoG model and deep metric learning.",
    description:
      "This project implements a simple and efficient pipeline for face recognition in both images and videos using the Dlib library. It features HoG-based face detection and deep metric learning for face encoding and matching. The system includes scripts for training (encoding), recognition from test images, and real-time recognition from videos. Encodings are saved as pickles and the model supports both HoG and CNN detection backends. Modular CLI support allows flexibility across datasets and detection models.",
    tech: ["Dlib", "face_recognition", "OpenCV", "Python", "deep metric learning"],
    repo: "https://github.com/saranshkr/face-recognition",
    demo: null,
    report: null,
  },
  {
    title: "House Price Prediction",
    summary: "Modeled California house prices using regression and hyperparameter tuning.",
    description:
      "This project involved end-to-end predictive modeling using the California housing dataset. I performed data cleaning, exploratory analysis, and regression modeling using features like location, room count, and neighborhood income. I applied GridSearchCV and RandomizedSearchCV to tune models including Decision Trees, Linear Regression, and MLPs. The goal was to compare regression performance and gain practical exposure to model evaluation in real-world-like settings.",
    tech: ["Pandas", "Scikit-learn", "GridSearchCV", "MLPRegressor", "Matplotlib"],
    repo: "https://github.com/saranshkr/house-price-prediction",
    demo: null,
    report: null,
  }
  
];

export default function Projects() {
  return (
    <PageLayout title="Projects">
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {projects.map((project) => (
          <div key={project.title} className="break-inside-avoid">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
