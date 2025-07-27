
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = {
  G: "General Overview",
  I: "Installation & Requirements",
  P: "Privacy & Data Security",
  U: "Intended Users",
  D: "Data Management",
  M: "Machine Learning Capabilities",
  L: "User Guidance & Learning",
  E: "Model Evaluation",
  S: "Saving & Export",
  T: "Technical Details",
};

const faqData = [
  // General Overview (G)
  {
    "id": "G1",
    "question": "What is the Offline AutoML Toolkit?",
    "answer": "It's a browser-based web application designed for easy, offline-machine learning workflows without any coding."
  },
  {
    "id": "G1",
    "question": "ऑफ़लाइन ऑटोएमएल टूलकिट क्या है?",
    "answer": "यह एक ब्राउज़र-आधारित वेब एप्लिकेशन है, जो बिना कोडिंग के आसान और ऑफ़लाइन मशीन लर्निंग वर्कफ़्लो के लिए बनाया गया है।"
  },
  {
    "id": "G1",
    "question": "Offline AutoML Toolkit kya hai?",
    "answer": "Yeh ek browser-based app hai jo bina coding ke easy aur offline ML workflow provide karta hai."
  },
  {
    "id": "G2",
    "question": "What are the main features of the Offline AutoML Toolkit?",
    "answer": "Key features include offline use, no coding required, simulated model training, data cleaning, visualizations, and session import/export."
  },
  {
    "id": "G2",
    "question": "ऑफ़लाइन ऑटोएमएल टूलकिट की मुख्य विशेषताएं क्या हैं?",
    "answer": "मुख्य विशेषताओं में ऑफ़लाइन उपयोग, बिना कोडिंग, सिम्युलेटेड मॉडल ट्रेनिंग, डेटा क्लीनिंग, विज़ुअलाइज़ेशन और सेशन आयात/निर्यात शामिल हैं।"
  },
  {
    "id": "G2",
    "question": "Offline AutoML Toolkit ke main features kya hain?",
    "answer": "Offline chalna, bina coding, simulated model training, data clean karna, visualization aur session import/export important features hain."
  },
  {
    "id": "G3",
    "question": "Who developed the Offline AutoML Toolkit?",
    "answer": "It was developed by a team focused on making machine learning accessible and educational for all users."
  },
  {
    "id": "G3",
    "question": "ऑफ़लाइन ऑटोएमएल टूलकिट किसने बनाया?",
    "answer": "इसे एक ऐसी टीम ने विकसित किया है जो मशीन लर्निंग को सबके लिए सुलभ और शैक्षिक बनाना चाहती है।"
  },
  {
    "id": "G3",
    "question": "Offline AutoML Toolkit kisne develop kiya?",
    "answer": "Ek team ne develop kiya jo ML ko sabke liye accessible aur educational banaana chahti hai."
  },
  {
    "id": "G4",
    "question": "Is the Offline AutoML Toolkit free to use?",
    "answer": "Yes, it is completely free for all users."
  },
  {
    "id": "G4",
    "question": "क्या ऑफ़लाइन ऑटोएमएल टूलकिट मुफ्त है?",
    "answer": "हाँ, यह सभी उपयोगकर्ताओं के लिए पूरी तरह मुफ्त है।"
  },
  {
    "id": "G4",
    "question": "Offline AutoML Toolkit free hai kya?",
    "answer": "Haan, yeh sabhi ke liye bilkul free hai."
  },
  {
    "id": "G5",
    "question": "What platforms does the Offline AutoML Toolkit support?",
    "answer": "It supports modern browsers on Windows, MacOS, and Linux platforms."
  },
  {
    "id": "G5",
    "question": "ऑफ़लाइन ऑटोएमएल टूलकिट कौन-कौन से प्लेटफ़ॉर्म सपोर्ट करता है?",
    "answer": "यह Windows, MacOS, और Linux पर आधुनिक ब्राउज़रों का समर्थन करता है।"
  },
  {
    "id": "G5",
    "question": "Offline AutoML Toolkit kaunse platforms pe chalta hai?",
    "answer": "Windows, MacOS aur Linux ke modern browsers pe support karta hai."
  },
  {
    "id": "G6",
    "question": "Can it work without an internet connection?",
    "answer": "Yes, after the initial page load, it works fully offline."
  },
  {
    "id": "G6",
    "question": "क्या यह इंटरनेट कनेक्शन के बिना काम कर सकता है?",
    "answer": "हाँ, एक बार पेज लोड होने के बाद यह पूरी तरह ऑफ़लाइन काम करता है।"
  },
  {
    "id": "G6",
    "question": "Kya yeh bina internet ke chal sakta hai?",
    "answer": "Haan, ek baar load hone ke baad pura offline chalta hai."
  },
  {
    "id": "G7",
    "question": "What is the main objective of the Offline AutoML Toolkit?",
    "answer": "Its goal is to teach users the machine learning process in an easy, interactive, offline environment."
  },
  {
    "id": "G7",
    "question": "ऑफ़लाइन ऑटोएमएल टूलकिट का मुख्य उद्देश्य क्या है?",
    "answer": "इसका उद्देश्य उपयोगकर्ताओं को आसान, इंटरैक्टिव और ऑफ़लाइन माहौल में मशीन लर्निंग प्रक्रिया सिखाना है।"
  },
  {
    "id": "G7",
    "question": "Offline AutoML Toolkit ka main objective kya hai?",
    "answer": "Yeh users ko simple, interactive, aur offline environment me ML process sikhaane ke liye banaya gaya hai."
  },
  {
    "id": "G8",
    "question": "How does this toolkit differ from other AutoML tools?",
    "answer": "It is fully offline, educational, and simulates model training instead of running resource-heavy real training."
  },
  {
    "id": "G8",
    "question": "यह टूलकिट अन्य AutoML टूल्स से कैसे अलग है?",
    "answer": "यह पूरी तरह ऑफलाइन है, शैक्षिक है, और भारी ट्रेनिंग के बजाय सिमुलेटेड मॉडल ट्रेनिंग करता है।"
  },
  {
    "id": "G8",
    "question": "Yeh toolkit dusre AutoML tools se kaise alag hai?",
    "answer": "Yeh pura offline chalta hai, education focus karta hai aur resource heavy training ki jagah simulate karta hai."
  },
  {
    "id": "G9",
    "question": "Can it be used for professional machine learning projects?",
    "answer": "No, it's primarily an educational tool and not intended for production use."
  },
  {
    "id": "G9",
    "question": "क्या इसे पेशेवर मशीन लर्निंग प्रोजेक्ट्स के लिए इस्तेमाल किया जा सकता है?",
    "answer": "नहीं, ये मुख्य रूप से एक शैक्षिक उपकरण है, पेशेवर इस्तेमाल के लिए नहीं।"
  },
  {
    "id": "G9",
    "question": "Kya ise professional ML projects ke liye use kar sakte hain?",
    "answer": "Nahi, yeh primarily educational purpose ke liye banaya gaya hai."
  },
  {
    "id": "G10",
    "question": "Is the Offline AutoML Toolkit suitable for beginners?",
    "answer": "Yes, it is designed especially for beginners to easily learn machine learning concepts."
  },
  {
    "id": "G10",
    "question": "क्या यह उम्मीदवारों के लिए उपयुक्त है?",
    "answer": "हाँ, यह विशेष रूप से शुरुआती लोगों के लिए डिज़ाइन किया गया है।"
  },
  {
    "id": "G10",
    "question": "Kya yeh beginners ke liye sahi hai?",
    "answer": "Haan, yeh beginners ke liye specially design kiya gaya hai."
  },
  {
    "id": "G11",
    "question": "What programming knowledge do I need to use it?",
    "answer": "No programming knowledge is needed; the interface is code-free and user-friendly."
  },
  {
    "id": "G11",
    "question": "इसे उपयोग करने के लिए मुझे प्रोग्रामिंग का ज्ञान होना चाहिए?",
    "answer": "नहीं, इसका उपयोग करने के लिए कोई प्रोग्रामिंग ज्ञान आवश्यक नहीं है।"
  },
  {
    "id": "G11",
    "question": "Isko use karne ke liye programming aani chahiye?",
    "answer": "Nahi, yeh completely code-free aur user friendly hai."
  },
  {
    "id": "G12",
    "question": "Is it a desktop application or web-based?",
    "answer": "It is a web-based application that runs inside your browser."
  },
  {
    "id": "G12",
    "question": "क्या यह डेस्कटॉप एप्लिकेशन है या वेब-आधारित?",
    "answer": "यह एक वेब-आधारित एप्लिकेशन है जो आपके ब्राउज़र में चलता है।"
  },
  {
    "id": "G12",
    "question": "Yeh desktop app hai ya web based?",
    "answer": "Yeh web based app hai jo browser me run hota hai."
  },
  {
    "id": "G13",
    "question": "How does the Offline AutoML Toolkit help in machine learning education?",
    "answer": "By simulating training and giving clear explanations and Python code snippets for conceptual understanding."
  },
  {
    "id": "G13",
    "question": "ऑफ़लाइन ऑटोएमएल टूलकिट मशीन लर्निंग शिक्षा में कैसे मदद करता है?",
    "answer": "यह ट्रेनिंग को सिमुलेट करता है और स्पष्ट व्याख्याएं व पायथन कोड प्रदान करता है।"
  },
  {
    "id": "G13",
    "question": "Offline AutoML Toolkit ML education me kaise madad karta hai?",
    "answer": "Training simulate karta hai, saaf explanations aur Python code snippets deta hai concepts samajhne ke liye."
  },
  {
    "id": "G14",
    "question": "What do the four steps in the application represent?",
    "answer": "They represent Data Upload, Data Preparation, Model Training (simulated), and Model Evaluation."
  },
  {
    "id": "G14",
    "question": "एप्लिकेशन में चार चरण क्या दर्शाते हैं?",
    "answer": "ये डेटा अपलोड, डेटा तैयारी, मॉडल ट्रेनिंग (सिमुलेटेड), और मॉडल मूल्यांकन को दर्शाते हैं।"
  },
  {
    "id": "G14",
    "question": "App me char steps kya dikhate hain?",
    "answer": "Data upload, data cleaning, model training (simulate), aur model evaluation."
  },
  {
    "id": "G15",
    "question": "What kinds of datasets can I use with this toolkit?",
    "answer": "Upload your own CSV or use included sample datasets like Titanic, Iris, and Customer Churn."
  },
  {
    "id": "G15",
    "question": "मैं इस टूलकिट के साथ किस प्रकार के डेटासेट्स का उपयोग कर सकता हूँ?",
    "answer": "CSV फाइल अपलोड करें या टाइटैनिक, आइरिस, कस्टमर चर्न जैसे सैंपल डेटासेट का उपयोग करें।"
  },
  {
    "id": "G15",
    "question": "Is toolkit me kaunse datasets use kar sakte hain?",
    "answer": "Apni CSV upload karo ya Titanic, Iris, Customer Churn jaise sample datasets use karo."
  },
  {
    "id": "G16",
    "question": "Can I use this toolkit for data exploration?",
    "answer": "Yes, it provides statistics, visualization, and data cleaning for exploration."
  },
  {
    "id": "G16",
    "question": "क्या मैं इस टूलकिट का उपयोग डेटा एक्सप्लोरेशन के लिए कर सकता हूँ?",
    "answer": "हाँ, यह आँकड़े, विज़ुअलाइज़ेशन और डेटा क्लीनिंग प्रदान करता है।"
  },
  {
    "id": "G16",
    "question": "Kya main data exploration ke liye use kar sakta hoon?",
    "answer": "Haan, statistics, visualization aur data cleaning ke liye perfect hai."
  },
  {
    "id": "G17",
    "question": "How does the app simulate model training?",
    "answer": "By running timers and generating realistic results with random but plausible metrics."
  },
  {
    "id": "G17",
    "question": "ऐप मॉडल ट्रेनिंग को कैसे सिमुलेट करता है?",
    "answer": "यह टाइमर चलाकर और वास्तविक दिखने वाले लेकिन यादृच्छिक परिणाम उत्पन्न करके सिमुलेट करता है।"
  },
  {
    "id": "G17",
    "question": "App model training kaise simulate karta hai?",
    "answer": "Timer chala ke aur random par believable results de ke simulate karta hai."
  },
  {
    "id": "G18",
    "question": "Does the Offline AutoML Toolkit support all data formats?",
    "answer": "Currently, it supports CSV files only."
  },
  {
    "id": "G18",
    "question": "क्या ऑफलाइन ऑटोएमएल टूलकिट सभी डेटा फॉर्मेट्स को सपोर्ट करता है?",
    "answer": "फिलहाल यह केवल CSV फाइलों का समर्थन करता है।"
  },
  {
    "id": "G18",
    "question": "Offline AutoML Toolkit sabhi data formats support karta hai kya?",
    "answer": "Abhi ke liye sirf CSV supported hai."
  },
  {
    "id": "G19",
    "question": "How is data privacy handled in the Offline AutoML Toolkit?",
    "answer": "All data stays locally on your device; nothing is sent to any servers."
  },
  {
    "id": "G19",
    "question": "ऑफ़लाइन ऑटोएमएल टूलकिट में डेटा की गोपनीयता कैसे संभाली जाती है?",
    "answer": "सारा डेटा आपके डिवाइस पर ही रहता है; इसे कहीं भी नहीं भेजा जाता।"
  },
  {
    "id": "G19",
    "question": "Offline AutoML Toolkit me data privacy kaise ensure hoti hai?",
    "answer": "Sab data aapke device pe rehta hai, kisi server pe nahi jata."
  },
  {
    "id": "G20",
    "question": "Can I import previously saved sessions?",
    "answer": "Yes, you can import session JSON files to restore your work."
  },
  {
    "id": "G20",
    "question": "क्या मैं पहले से सेव किए गए सेशन्स को आयात कर सकता हूँ?",
    "answer": "हाँ, आप JSON सेशन फाइलों को आयात करके अपना काम पुनः प्राप्त कर सकते हैं।"
  },
  {
    "id": "G20",
    "question": "Kya main pehle saved session import kar sakta hoon?",
    "answer": "Haan, JSON session files import karke apna kaam restore kar sakte ho."
  },
  {
    "id": "G21",
    "question": "What is the technology stack behind the toolkit?",
    "answer": "It uses Next.js, React, TypeScript, Tailwind CSS, ShadCN UI components, and Recharts for charts."
  },
  {
    "id": "G21",
    "question": "टूलकिट के पीछे तकनीकी स्टैक क्या है?",
    "answer": "यह Next.js, React, TypeScript, Tailwind CSS, ShadCN UI, और Recharts का उपयोग करता है।"
  },
  {
    "id": "G21",
    "question": "Toolkit ke piche kaunse technology stack hai?",
    "answer": "Next.js, React, TypeScript, Tailwind CSS, ShadCN UI components aur Recharts charts ke liye use hote hain."
  },
  {
    "id": "G22",
    "question": "Are there any tutorials or documentation available?",
    "answer": "Yes, the app includes inline explanations and example Python code snippets."
  },
  {
    "id": "G22",
    "question": "क्या कोई ट्यूटोरियल या दस्तावेज़ उपलब्ध हैं?",
    "answer": "हाँ, इसमें इनलाइन व्याख्याएँ और पायथन कोड के उदाहरण शामिल हैं।"
  },
  {
    "id": "G22",
    "question": "Kya tutorials ya documentation available hain?",
    "answer": "Haan, app me inline explanations aur Python code snippets diye hain."
  },
  {
    "id": "G23",
    "question": "How can I provide feedback or report bugs?",
    "answer": "You can provide feedback via the app's support channels or GitHub repository."
  },
  {
    "id": "G23",
    "question": "मैं प्रतिक्रिया कैसे दे सकता हूँ या बग कैसे रिपोर्ट कर सकता हूँ?",
    "answer": "आप ऐप के सपोर्ट चैनल या GitHub रिपॉजिटरी के माध्यम से फ़ीडबैक दे सकते हैं।"
  },
  {
    "id": "G23",
    "question": "Feedback ya bugs kaise report karoon?",
    "answer": "App ke support channels ya GitHub repo par feedback de sakte ho."
  },
  {
    "id": "G24",
    "question": "Can I customize the UI appearance?",
    "answer": "Yes, the app supports theming and color customization via CSS variables."
  },
  {
    "id": "G24",
    "question": "क्या मैं यूआई की उपस्थिति कस्टमाइज़ कर सकता हूँ?",
    "answer": "हाँ, CSS वेरिएबल्स के माध्यम से थीमिंग और रंग कस्टमाइज़ेशन समर्थन करता है।"
  },
  {
    "id": "G24",
    "question": "Kya main UI appearence customize kar sakta hoon?",
    "answer": "Haan, CSS variables se theming aur colors customize kiye ja sakte hain."
  },
  {
    "id": "G25",
    "question": "Does the app include sample datasets to practice with?",
    "answer": "Yes, it includes sample datasets such as Titanic, Iris, and Customer Churn for easy practice."
  },
  {
    "id": "G25",
    "question": "क्या ऐप में प्रैक्टिस के लिए नमूना डेटासेट शामिल हैं?",
    "answer": "हाँ, इसमें Titanic, Iris, और Customer Churn जैसे नमूना डेटासेट शामिल हैं।"
  },
  {
    "id": "G25",
    "question": "App me practice ke liye sample datasets hain kya?",
    "answer": "Haan, Titanic, Iris, Customer Churn jaise sample datasets diye gaye hain."
  },
  // Installation & Requirements (I)
  {
    "id": "I1",
    "question": "Do I need to install the Offline AutoML Toolkit?",
    "answer": "No installation is required. Just open it in your modern web browser and start immediately."
  },
  {
    "id": "I1",
    "question": "क्या मुझे ऑफ़लाइन ऑटोएमएल टूलकिट इंस्टॉल करना होगा?",
    "answer": "नहीं, आपको कुछ इंस्टॉल करने की आवश्यकता नहीं है। बस आधुनिक वेब ब्राउज़र में इसे खोलें और तुरंत शुरू करें।"
  },
  {
    "id": "I1",
    "question": "Mujhe Offline AutoML Toolkit install karna padega kya?",
    "answer": "Nahi, installation ki zarurat nahi hai. Bas apne browser me open karo aur shuru karo."
  },
  {
    "id": "I2",
    "question": "What are the browser requirements to use this app?",
    "answer": "Any modern browser such as Chrome, Firefox, Edge, or Safari supporting JavaScript and React works well."
  },
  {
    "id": "I2",
    "question": "इस ऐप को इस्तेमाल करने के लिए ब्राउज़र की क्या आवश्यकताएं हैं?",
    "answer": "कोई भी आधुनिक ब्राउज़र, जैसे Chrome, Firefox, Edge या Safari, जो JavaScript और React सपोर्ट करता हो, सही से चलेगा।"
  },
  {
    "id": "I2",
    "question": "App chalane ke liye browser ki kya requirements hain?",
    "answer": "Koi bhi modern browser jaise Chrome, Firefox, Edge, Safari jisme JavaScript aur React ka support ho."
  },
  {
    "id": "I3",
    "question": "Can I use it on mobile devices?",
    "answer": "The app is primarily designed for desktop browsers; mobile support is limited and may not provide the full experience."
  },
  {
    "id": "I3",
    "question": "क्या मैं इसे मोबाइल डिवाइस पर इस्तेमाल कर सकता हूँ?",
    "answer": "यह मुख्यतः डेस्कटॉप ब्राउज़र के लिए डिज़ाइन किया गया है; मोबाइल पर इसकी सुविधाएँ सीमित हो सकती हैं।"
  },
  {
    "id": "I3",
    "question": "Kya main mobile pe use kar sakta hoon?",
    "answer": "App desktop browsers ke liye bana hai, mobile pe features thode limited hain."
  },
  {
    "id": "I4",
    "question": "Is there any required software dependency?",
    "answer": "No additional software dependencies are required; you only need a compatible browser."
  },
  {
    "id": "I4",
    "question": "क्या इसे चलाने के लिए कोई अतिरिक्त सॉफ़्टवेयर चाहिए?",
    "answer": "नहीं, इसे चलाने के लिए केवल एक संगत ब्राउज़र की आवश्यकता होती है।"
  },
  {
    "id": "I4",
    "question": "Kya koi extra software chahiye chalane ke liye?",
    "answer": "Nahi, sirf compatible browser hona chahiye."
  },
  {
    "id": "I5",
    "question": "What is the minimum hardware requirement?",
    "answer": "A modern computer with at least 4GB RAM and a standard processor is sufficient."
  },
  {
    "id": "I5",
    "question": "न्यूनतम हार्डवेयर आवश्यकताएं क्या हैं?",
    "answer": "कम से कम 4GB RAM और एक सामान्य प्रोसेसर वाला एक आधुनिक कंप्यूटर पर्याप्त है।"
  },
  {
    "id": "I5",
    "question": "Minimum hardware requirements kya hain?",
    "answer": "Modern computer, kam se kam 4GB RAM aur standard processor."
  },
  {
    "id": "I6",
    "question": "How much disk space is needed?",
    "answer": "The application is lightweight and requires minimal disk space, typically under 100MB."
  },
  {
    "id": "I6",
    "question": "कितनी हार्ड डिस्क जगह चाहिए?",
    "answer": "ऐप हल्का है और सामान्यतः 100MB से कम जगह लेता है।"
  },
  {
    "id": "I6",
    "question": "Kitna disk space chahiye?",
    "answer": "App lightweight hai, usually 100MB se kam space leta hai."
  },
  {
    "id": "I7",
    "question": "Can I use the app offline after first load?",
    "answer": "Yes, after the initial page load, all features work fully offline."
  },
  {
    "id": "I7",
    "question": "क्या पहली बार लोड करने के बाद ऐप ऑफ़लाइन इस्तेमाल किया जा सकता है?",
    "answer": "हाँ, पहली बार लोड होने के बाद ऐप पूरी तरह से ऑफ़लाइन काम करता है।"
  },
  {
    "id": "I7",
    "question": "Ek baar load karne ke baad kya app offline chal sakta hai?",
    "answer": "Haan, ek baar page load hone ke baad poora app offline chal jata hai."
  },
  {
    "id": "I8",
    "question": "Does it work on all operating systems (Windows, Mac, Linux)?",
    "answer": "Yes, it works on any OS with a modern supported web browser."
  },
  {
    "id": "I8",
    "question": "क्या यह सभी ऑपरेटिंग सिस्टम (विंडोज़, मैक, लिनक्स) पर काम करता है?",
    "answer": "हाँ, यह किसी भी ऑपरेटिंग सिस्टम पर चलता है, जहां आधुनिक ब्राउज़र उपलब्ध हो।"
  },
  {
    "id": "I8",
    "question": "Kya yeh sab OS (Windows, Mac, Linux) pe chal sakta hai?",
    "answer": "Haan, jahan modern browser ho wahan ye chal jata hai."
  },
  {
    "id": "I9",
    "question": "How do I start the app?",
    "answer": "Open the toolkit URL in your browser and begin by uploading a dataset or loading a sample."
  },
  {
    "id": "I9",
    "question": "मैं ऐप कैसे शुरू करूं?",
    "answer": "अपने ब्राउज़र में टूलकिट का URL खोलें और डेटासेट अपलोड करें या सैंपल लोड करें।"
  },
  {
    "id": "I9",
    "question": "App start kaise karun?",
    "answer": "Browser me toolkit ke URL ko open karo aur dataset upload ya sample load karo."
  },
  {
    "id": "I10",
    "question": "Can I run multiple sessions at the same time?",
    "answer": "Yes, you may open multiple browser tabs or windows with different sessions."
  },
  {
    "id": "I10",
    "question": "क्या मैं एक साथ कई सेशन्स चला सकता हूँ?",
    "answer": "हाँ, आप अलग-अलग ब्राउज़र टैब या विंडोज़ में अलग सेशन चला सकते हैं।"
  },
  {
    "id": "I10",
    "question": "Kya main ek saath kai sessions chala sakta hoon?",
    "answer": "Haan, alag-alag tabs ya windows me alag sessions run kar sakte ho."
  },
  {
    "id": "I11",
    "question": "Is there any cloud integration?",
    "answer": "No, the app is entirely offline and does not connect to any cloud services."
  },
  {
    "id": "I11",
    "question": "क्या इसमें कोई क्लाउड इंटीग्रेशन है?",
    "answer": "नहीं, ऐप पूरी तरह ऑफ़लाइन है और किसी क्लाउड सेवा से जुड़ा नहीं है।"
  },
  {
    "id": "I11",
    "question": "Kya cloud integration hai?",
    "answer": "Nahi, yeh app puri tarah offline chalti hai, cloud se connect nahi hai."
  },
  {
    "id": "I12",
    "question": "What browser security settings should I be aware of?",
    "answer": "Ensure JavaScript is enabled and no extensions block the app’s operations."
  },
  {
    "id": "I12",
    "question": "मुझे किन ब्राउज़र सुरक्षा सेटिंग्स का ध्यान रखना चाहिए?",
    "answer": "JavaScript सक्षम होना चाहिए और कोई एक्सटेंशन ऐप की कार्यक्षमता को अवरुद्ध न करे।"
  },
  {
    "id": "I12",
    "question": "Browser security settings kya dhyan me rakhna chahiye?",
    "answer": "JavaScript enable hona chahiye aur koi extension app kaam karne se na roke."
  },
  {
    "id": "I13",
    "question": "Can I save my place if the browser closes?",
    "answer": "No, unless you export your session, the state is lost when the browser is closed."
  },
  {
    "id": "I13",
    "question": "अगर ब्राउज़र बंद हो जाए तो क्या मेरी प्रगति सेव रहेगी?",
    "answer": "नहीं, यदि आपने सेशन को एक्सपोर्ट नहीं किया है तो बंद होने पर डेटा खो जाता है।"
  },
  {
    "id": "I13",
    "question": "Browser band karne par progress save hota hai kya?",
    "answer": "Nahi, jab tak session export nahi karte, browser close karne par data chala jata hai."
  },
  {
    "id": "I14",
    "question": "How can I update to the latest version?",
    "answer": "Simply reload the app page in your browser to get the latest version, no manual update required."
  },
  {
    "id": "I14",
    "question": "मैं नवीनतम संस्करण कैसे प्राप्त करूं?",
    "answer": "बस ब्राउज़र में ऐप पेज को रीलोड करें, कोई मैनुअल अपडेट आवश्यक नहीं है।"
  },
  {
    "id": "I14",
    "question": "Latest version kaise paun?",
    "answer": "Browser me app page reload karo, koi manual update nahi chahiye."
  },
  {
    "id": "I15",
    "question": "What if the app doesn’t load properly?",
    "answer": "Try clearing the browser cache or refresh the page. Use a supported browser."
  },
  {
    "id": "I15",
    "question": "अगर ऐप सही से लोड नहीं होता तो क्या करें?",
    "answer": "ब्राउज़र कैश साफ़ करें या पृष्ठ रिफ्रेश करें। समर्थित ब्राउज़र का उपयोग करें।"
  },
  {
    "id": "I15",
    "question": "App agar sahi load na ho to kya karein?",
    "answer": "Browser cache clear karo ya page refresh karo. Supported browser use karo."
  },
  {
    "id": "I16",
    "question": "Can I use the app behind firewalls or proxies?",
    "answer": "Since the app works offline after loading, firewalls and proxies don't affect usage after first load."
  },
  {
    "id": "I16",
    "question": "क्या मैं फायरवॉल या प्रॉक्सी के पीछे ऐप का इस्तेमाल कर सकता हूँ?",
    "answer": "चूंकि ऐप पहली बार लोड होने के बाद ऑफ़लाइन काम करता है, इस लिए फायरवॉल और प्रॉक्सी का कोई असर नहीं पड़ता।"
  },
  {
    "id": "I16",
    "question": "Kya firewall ya proxy ke peeche app chala sakte hain?",
    "answer": "App offline chalti hai, firewall/proxy ka koi effect nahi hota first load ke baad."
  },
  {
    "id": "I17",
    "question": "Does the app require heavy computational power?",
    "answer": "No, since model training is simulated, it needs minimal resources and runs on most systems."
  },
  {
    "id": "I17",
    "question": "क्या ऐप को भारी कंप्यूटेशनल पावर की जरूरत होती है?",
    "answer": "नहीं, चूंकि ट्रेनिंग सिमुलेटेड है, इसे सामान्य संसाधनों की जरूरत होती है।"
  },
  {
    "id": "I17",
    "question": "App ko kya heavy computation chahiye?",
    "answer": "Nahi, model training simulate hoti hai, isliye kam resources chahiye."
  },
  {
    "id": "I18",
    "question": "Is there a downloadable offline installer?",
    "answer": "No, it runs entirely in the browser; no installer is available."
  },
  {
    "id": "I18",
    "question": "क्या इसका कोई डाउनलोडेबल ऑफ़लाइन इंस्टॉलर है?",
    "answer": "नहीं, यह पूरी तरह ब्राउज़र में चलता है; इंस्टॉलर उपलब्ध नहीं है।"
  },
  {
    "id": "I18",
    "question": "Kya koi offline installer available hai?",
    "answer": "Nahi, yeh puri tarah browser me chalta hai, installer nahi hai."
  },
  {
    "id": "I19",
    "question": "How do I clear cached data from the app?",
    "answer": "Clear your browser cache and local storage to reset the app state."
  },
  {
    "id": "I19",
    "question": "कैश्ड डेटा कैसे हटाएं?",
    "answer": "अपने ब्राउज़र की कैश और लोकल स्टोरेज साफ़ करें।"
  },
  {
    "id": "I19",
    "question": "Cache data kaise clear karein?",
    "answer": "Browser ka cache aur local storage clear karo."
  },
  {
    "id": "I20",
    "question": "Can the app be embedded into other platforms?",
    "answer": "Currently, the app is standalone and does not support embedding."
  },
  {
    "id": "I20",
    "question": "क्या इसे अन्य प्लेटफ़ॉर्म्स में एम्बेड किया जा सकता है?",
    "answer": "वर्तमान में, यह स्टैंडअलोन ऐप है और एम्बेडिंग सपोर्ट नहीं करता।"
  },
  {
    "id": "I20",
    "question": "Kya app ko dusre platforms me embed kar sakte hain?",
    "answer": "Abhi standalone hai, embedding support nahi karta."
  },
  // Privacy & Data Security (P)
  {
    "id": "P1",
    "question": "Is my data stored online?",
    "answer": "No, your data always remains on your device and is never uploaded or transferred online."
  },
  {
    "id": "P1",
    "question": "क्या मेरा डेटा ऑनलाइन स्टोर होता है?",
    "answer": "नहीं, आपका डेटा हमेशा आपके डिवाइस पर ही रहता है और कहीं भी भेजा या अपलोड नहीं किया जाता।"
  },
  {
    "id": "P1",
    "question": "Mera data online store hota hai kya?",
    "answer": "Nahi, data sirf aapke device par rehta hai, kahin upload nahi hota."
  },
  {
    "id": "P2",
    "question": "How is data handled in terms of security?",
    "answer": "All data is processed locally on your machine, with no external data transfer or storage."
  },
  {
    "id": "P2",
    "question": "सुरक्षा के लिहाज से डेटा कैसे हैंडल किया जाता है?",
    "answer": "सारा डेटा आपके कंप्यूटर पर ही संसाधित होता है, कहीं भी ट्रांसफर या स्टोर नहीं किया जाता।"
  },
  {
    "id": "P2",
    "question": "Data security kaise ensure hoti hai?",
    "answer": "Sab data local machine pe hi process hota hai, bahar kahin transfer ya store nahi hota."
  },
  {
    "id": "P3",
    "question": "Does the app send data to any servers?",
    "answer": "No, the app works completely offline and does not send data to any server."
  },
  {
    "id": "P3",
    "question": "क्या ऐप कोई डेटा सर्वर पर भेजता है?",
    "answer": "नहीं, ऐप पूरी तरह ऑफलाइन काम करता है और डेटा सर्वर पर नहीं भेजता।"
  },
  {
    "id": "P3",
    "question": "Kya app data kisi server ko bhejta hai?",
    "answer": "Nahi, app fully offline chalti hai, data kahin bhejti nahi."
  },
  {
    "id": "P4",
    "question": "Can others access data on my device?",
    "answer": "Only users with access to your device can see your data; the app does not expose data externally."
  },
  {
    "id": "P4",
    "question": "क्या दूसरे लोग मेरे डिवाइस पर डेटा देख सकते हैं?",
    "answer": "केवल वे लोग जो आपके डिवाइस तक पहुँच रखते हैं, आपका डेटा देख सकते हैं; ऐप डेटा बाहर नहीं भेजता।"
  },
  {
    "id": "P4",
    "question": "Kya doosre log mera data dekh sakte hain?",
    "answer": "Sirf wahi jo aapke device use karte hain, nahi toh app data bahar nahi bhejti."
  },
  {
    "id": "P5",
    "question": "What encryption is used for stored data?",
    "answer": "As all data stays locally and is stored as JSON files when exported, encryption depends on your file system security."
  },
  {
    "id": "P5",
    "question": "संग्रहीत डेटा के लिए कौन सा एन्क्रिप्शन उपयोग किया जाता है?",
    "answer": "चूंकि डेटा स्थानीय रूप से JSON फ़ाइलों के रूप में सेव होता है, एन्क्रिप्शन आपकी फ़ाइल सिस्टम सुरक्षा पर निर्भर करता है।"
  },
  {
    "id": "P5",
    "question": "Stored data kaunsa encryption use karta hai?",
    "answer": "Data local aur JSON files me hota hai, encrypt hona aapke file system pe depend karta hai."
  },
  {
    "id": "P6",
    "question": "Are uploaded CSV files saved anywhere?",
    "answer": "No, uploaded CSV files are held only in memory during the session and not saved unless you export."
  },
  {
    "id": "P6",
    "question": "क्या अपलोड की गई CSV फाइलें कहीं सेव होती हैं?",
    "answer": "नहीं, अपलोड की गई CSV फाइलें सिर्फ वर्तमान सत्र के दौरान मेमोरी में रहती हैं और केवल एक्सपोर्ट करने पर सेव होती हैं।"
  },
  {
    "id": "P6",
    "question": "Uploaded CSV files saved hoti hain kya?",
    "answer": "Nahi, files sirf session ke dauran memory me hoti hain, jab tak aap export nahi karte."
  },
  {
    "id": "P7",
    "question": "How does the app ensure privacy during offline use?",
    "answer": "By running fully locally with no network communications, it ensures your data stays private."
  },
  {
    "id": "P7",
    "question": "ऑफ़लाइन उपयोग के दौरान ऐप कैसे गोपनीयता सुनिश्चित करता है?",
    "answer": "यह पूरी तरह स्थानीय रूप से चलता है और कोई नेटवर्क कम्युनिकेशन नहीं करता, जिससे डेटा गोपनीय रहता है।"
  },
  {
    "id": "P7",
    "question": "Offline use me privacy kaise ensure hoti hai?",
    "answer": "App local chalti hai, koi network communication nahi hota, isliye data private rehta hai."
  },
  {
    "id": "P8",
    "question": "Can data be accidentally leaked?",
    "answer": "No, since the app does not send or share data, accidental leaks via the app are not possible."
  },
  {
    "id": "P8",
    "question": "क्या डेटा गलती से लीक हो सकता है?",
    "answer": "नहीं, क्योंकि ऐप डेटा कभी साझा या भेजता नहीं है, इसलिए लीक होना संभव नहीं है।"
  },
  {
    "id": "P8",
    "question": "Kya data galti se leak ho sakta hai?",
    "answer": "Nahi, app data kisi ko share nahi karta, isliye leak nahi hota."
  },
  {
    "id": "P9",
    "question": "Is there a way to delete all data permanently?",
    "answer": "Since data is local and temporary, closing the browser clears session data; exported files must be deleted manually."
  },
  {
    "id": "P9",
    "question": "क्या डेटा को स्थायी रूप से हटाने का कोई तरीका है?",
    "answer": "डेटा स्थानीय और अस्थायी होता है, ब्राउज़र बंद करने से क्लियर हो जाता है; एक्सपोर्ट की गई फाइलों को मैन्युअली हटाना होगा।"
  },
  {
    "id": "P9",
    "question": "Data permanently delete kaise karun?",
    "answer": "Data local aur temporary hota hai, browser close karte hi clear ho jata hai; export ki files manually delete karo."
  },
  {
    "id": "P10",
    "question": "Are cookies or local storage used?",
    "answer": "The app primarily uses in-memory state; minimal local storage or cookies may be used but no user data is stored persistently."
  },
  {
    "id": "P10",
    "question": "क्या कुकीज़ या लोकल स्टोरेज का उपयोग होता है?",
    "answer": "ऐप मुख्य रूप से मेमोरी में चलता है; कुछ लोकल स्टोरेज हो सकता है लेकिन उपयोगकर्ता डेटा स्थायी रूप से स्टोर नहीं होता।"
  },
  {
    "id": "P10",
    "question": "Cookies ya local storage use hota hai kya?",
    "answer": "App mainly memory me state rakhta hai; thodi bahut local storage ya cookies hote hain par user data store nahi hota."
  },
  {
    "id": "P11",
    "question": "Does the app comply with data protection regulations?",
    "answer": "Yes, by keeping all data local and offline, it minimizes compliance concerns for typical users."
  },
  {
    "id": "P11",
    "question": "क्या ऐप डेटा सुरक्षा नियमों का पालन करता है?",
    "answer": "हाँ, स्थानीय और ऑफलाइन डेटा प्रबंधन के कारण यह आम नियमों का पालन करता है।"
  },
  {
    "id": "P11",
    "question": "App data protection laws follow karta hai kya?",
    "answer": "Haan, data local aur offline rehta hai, is wajah se compliance asaan hota hai."
  },
  {
    "id": "P12",
    "question": "Can I password protect my session?",
    "answer": "No, password protection isn't currently supported; data security relies on device access control."
  },
  {
    "id": "P12",
    "question": "क्या मैं अपने सेशन को पासवर्ड से सुरक्षित कर सकता हूँ?",
    "answer": "नहीं, फिलहाल पासवर्ड सुरक्षा उपलब्ध नहीं है; सुरक्षा डिवाइस एक्सेस पर निर्भर है।"
  },
  {
    "id": "P12",
    "question": "Kya session password protected hota hai?",
    "answer": "Nahi, abhi password protection nahi hai; device ki security pe depend karta hai."
  },
  {
    "id": "P13",
    "question": "Is user data anonymized?",
    "answer": "Data is fully private on your device and not shared, so anonymization is not applicable."
  },
  {
    "id": "P13",
    "question": "क्या उपयोगकर्ता डेटा को अनाम किया जाता है?",
    "answer": "नहीं, डेटा आपके डिवाइस पर निजी रहता है और साझा नहीं किया जाता, इसलिए अनामिकरण लागू नहीं होता।"
  },
  {
    "id": "P13",
    "question": "User data anonymized hota hai kya?",
    "answer": "Data private hai aur share nahi hota, isliye anonymization ka sawal nahi hai."
  },
  {
    "id": "P14",
    "question": "How are session files (.json) secured?",
    "answer": "Session files are stored as JSON on your device; securing these files depends on your device's security."
  },
  {
    "id": "P14",
    "question": "सेशन फाइलों (.json) की सुरक्षा कैसे होती है?",
    "answer": "सेशन फाइलें आपके डिवाइस पर JSON स्वरूप में होती हैं; सुरक्षा आपके डिवाइस की सुरक्षा पर निर्भर करती है।"
  },
  {
    "id": "P14",
    "question": "Session files (.json) kaise secure hoti hain?",
    "answer": "Yeh JSON files aapke device pe store hoti hain; security device par depend karti hai."
  },
  {
    "id": "P15",
    "question": "Can the FAQ assistant access my data?",
    "answer": "No, the FAQ assistant operates locally and does not have access to your data."
  },
  {
    "id": "P15",
    "question": "क्या FAQ सहायक मेरा डेटा एक्सेस कर सकता है?",
    "answer": "नहीं, FAQ सहायक स्थानीय रूप से चलता है और आपका डेटा एक्सेस नहीं करता।"
  },
  {
    "id": "P15",
    "question": "Kya FAQ assistant mera data access karta hai?",
    "answer": "Nahi, FAQ assistant local run karta hai, aapka data access nahi karta."
  },
  {
    "id": "P16",
    "question": "How does caching affect privacy?",
    "answer": "Caching is local and temporary; clearing browser cache deletes any cached data related to the app."
  },
  {
    "id": "P16",
    "question": "कैशिंग गोपनीयता को कैसे प्रभावित करती है?",
    "answer": "कैश स्थानीय और अस्थायी होता है; ब्राउज़र कैश साफ़ करने से संबंधित डेटा हट जाता है।"
  },
  {
    "id": "P16",
    "question": "Caching privacy ko kaise effect karti hai?",
    "answer": "Cache local aur temporary hoti hai; browser cache clear karne se data delete ho jata hai."
  },
  {
    "id": "P17",
    "question": "Can multiple users share one computer safely?",
    "answer": "Yes, but each user should manage their own sessions and clear browser data to maintain privacy."
  },
  {
    "id": "P17",
    "question": "क्या कई उपयोगकर्ता सुरक्षित रूप से एक कंप्यूटर साझा कर सकते हैं?",
    "answer": "हाँ, लेकिन प्रत्येक उपयोगकर्ता को अपनी सेशन प्रबंधित करनी चाहिए और गोपनीयता के लिए ब्राउज़र डेटा साफ़ करना चाहिए।"
  },
  {
    "id": "P17",
    "question": "Kya kai users ek PC share kar sakte hain safely?",
    "answer": "Haan, par har user ko apne sessions manage karne chahiye aur privacy ke liye browser data clear karna chahiye."
  },
  {
    "id": "P18",
    "question": "What should I do if I suspect a data breach?",
    "answer": "Since data is local, ensure your device is secure; always delete exported sessions if concerned."
  },
  {
    "id": "P18",
    "question": "अगर मुझे डेटा उल्लंघन का संदेह हो तो क्या करना चाहिए?",
    "answer": "चूंकि डेटा स्थानीय है, सुनिश्चित करें कि आपका डिवाइस सुरक्षित है; यदि आवश्यक हो तो एक्सपोर्ट की गई फ़ाइलें हटाएं।"
  },
  {
    "id": "P18",
    "question": "Data breach hone ka doubt ho to kya karein?",
    "answer": "Data local hai, device secure rakho; jis session file pe doubt ho use delete kar do."
  },
  {
    "id": "P19",
    "question": "Can data be exported safely?",
    "answer": "Yes, exporting session data as JSON is safe but you should store files securely."
  },
  {
    "id": "P19",
    "question": "क्या डेटा सुरक्षित रूप से निर्यात किया जा सकता है?",
    "answer": "हाँ, JSON के रूप में निर्यात करना सुरक्षित है, लेकिन फाइलों को सुरक्षित रूप से संग्रहीत करें।"
  },
  {
    "id": "P19",
    "question": "Data safe export kar sakte hain?",
    "answer": "Haan, JSON file ke roop me export safe hai, par files secure jagah pe rakho."
  },
  {
    "id": "P20",
    "question": "Is there any telemetry or user analytics collected?",
    "answer": "No telemetry or analytics data is collected; the app respects complete user privacy."
  },
  {
    "id": "P20",
    "question": "क्या कोई टेलीमेट्री या उपयोगकर्ता विश्लेषण एकत्रित किया जाता है?",
    "answer": "नहीं, कोई टेलीमेट्री या विश्लेषण डेटा एकत्रित नहीं किया जाता। ऐप पूर्ण गोपनीयता का सम्मान करता है।"
  },
  {
    "id": "P20",
    "question": "Kya telemetry ya user analytics collect hota hai?",
    "answer": "Nahi, app koi telemetry ya analytics data nahi collect karta. Privacy puri tarah maintain karta hai."
  },
  // Intended Users (U)
  {
    "id": "U1",
    "question": "Who is the Offline AutoML Toolkit designed for?",
    "answer": "It is made for students, hobbyists, teachers, professionals, and anyone interested in exploring machine learning."
  },
  {
    "id": "U1",
    "question": "ऑफ़लाइन ऑटोएमएल टूलकिट किसके लिए बनाया गया है?",
    "answer": "यह छात्रों, शौकीनों, शिक्षकों, पेशेवरों और मशीन लर्निंग में रुचि रखने वाले सभी के लिए बनाया गया है।"
  },
  {
    "id": "U1",
    "question": "Offline AutoML Toolkit kiske liye bana hai?",
    "answer": "Yeh students, hobbyists, teachers, professionals aur ML me interest rakhne walon ke liye hai."
  },
  {
    "id": "U2",
    "question": "Can students use this for learning ML?",
    "answer": "Yes, it is especially suitable for students to learn and practice machine learning concepts."
  },
  {
    "id": "U2",
    "question": "क्या छात्र इसे मशीन लर्निंग सीखने के लिए इस्तेमाल कर सकते हैं?",
    "answer": "हाँ, यह छात्रों के लिए मशीन लर्निंग सीखने और अभ्यास करने के लिए उपयुक्त है।"
  },
  {
    "id": "U2",
    "question": "Kya students ise ML seekhne ke liye use kar sakte hain?",
    "answer": "Haan, yeh students ke liye ML seekhne aur practice karne me helpful hai."
  },
  {
    "id": "U3",
    "question": "Is it suitable for data science professionals?",
    "answer": "While primarily educational, professionals can use it for quick experiments and demos."
  },
  {
    "id": "U3",
    "question": "क्या यह डेटा साइंस पेशेवरों के लिए उपयुक्त है?",
    "answer": "यह मुख्य रूप से शैक्षिक है, लेकिन पेशेवर इसे त्वरित प्रयोग और डेमो के लिए उपयोग कर सकते हैं।"
  },
  {
    "id": "U3",
    "question": "Kya yeh data science professionals ke liye useful hai?",
    "answer": "Primarily educational hai, phir bhi professionals quick experiments ya demos ke liye use kar sakte hain."
  },
  {
    "id": "U4",
    "question": "Can teachers use this for classroom demos?",
    "answer": "Yes, teachers can use it to demonstrate machine learning workflows interactively."
  },
  {
    "id": "U4",
    "question": "क्या शिक्षक इसका उपयोग कक्षा में डेमो के लिए कर सकते हैं?",
    "answer": "हाँ, शिक्षक इसे इंटरैक्टिव डेमो के लिए उपयोग कर सकते हैं।"
  },
  {
    "id": "U4",
    "question": "Kya teachers ise classroom me demo ke liye use kar sakte hain?",
    "answer": "Haan, teachers ise ML workflows ke interactive demo ke liye use kar sakte hain."
  },
  {
    "id": "U5",
    "question": "Is prior programming knowledge required?",
    "answer": "No programming skills are needed to use the toolkit."
  },
  {
    "id": "U5",
    "question": "क्या पूर्व प्रोग्रामिंग ज्ञान की आवश्यकता है?",
    "answer": "नहीं, इसका उपयोग करने के लिए प्रोग्रामिंग ज्ञान आवश्यक नहीं है।"
  },
  {
    "id": "U5",
    "question": "Kya programming knowledge chahiye?",
    "answer": "Nahi, is tool ko use karne ke liye koi programming skills ki zarurat nahi hai."
  },
  {
    "id": "U6",
    "question": "Can hobbyists or beginners use it effectively?",
    "answer": "Yes, it is designed to be user-friendly for beginners and hobbyists."
  },
  {
    "id": "U6",
    "question": "क्या शौकीनों या शुरुआती इसे प्रभावी ढंग से उपयोग कर सकते हैं?",
    "answer": "हाँ, यह शुरुआती और शौकीनों के लिए उपयोगकर्ता के अनुकूल है।"
  },
  {
    "id": "U6",
    "question": "Kya hobbyists ya beginners ise asani se use kar sakte hain?",
    "answer": "Haan, yeh beginners aur hobbyists ke liye simple aur user-friendly hai."
  },
  {
    "id": "U7",
    "question": "Is it useful for data analysts?",
    "answer": "Yes, it helps data analysts explore datasets and model outcomes quickly."
  },
  {
    "id": "U7",
    "question": "क्या यह डेटा विश्लेषकों के लिए उपयोगी है?",
    "answer": "हाँ, यह डेटा विश्लेषकों को जल्दी से डेटासेट और मॉडल परिणामों का पता लगाने में मदद करता है।"
  },
  {
    "id": "U7",
    "question": "Kya yeh data analysts ke liye useful hai?",
    "answer": "Haan, yeh data analysts ko datasets aur model results quickly explore karne me madad karta hai."
  },
  {
    "id": "U8",
    "question": "Can domain experts with no ML background use it?",
    "answer": "Yes, its intuitive design allows domain experts without programming skills to experiment easily."
  },
  {
    "id": "U8",
    "question": "क्या बिना मशीन लर्निंग पृष्ठभूमि वाले डोमेन एक्सपर्ट इसका उपयोग कर सकते हैं?",
    "answer": "हाँ, इसका सहज डिज़ाइन गैर-प्रोग्रामर विशेषज्ञों के लिए भी प्रयोग करना आसान बनाता है।"
  },
  {
    "id": "U8",
    "question": "Kya bina ML background wale experts ise use kar sakte hain?",
    "answer": "Haan, iska simple design domain experts ko bina coding ke experiment karne deta hai."
  },
  {
    "id": "U9",
    "question": "Does the app support team collaboration?",
    "answer": "No direct collaboration features exist, but sessions can be shared as exported files."
  },
  {
    "id": "U9",
    "question": "क्या ऐप टीम सहयोग का समर्थन करता है?",
    "answer": "सीधे टीम सहयोग की सुविधा नहीं है, लेकिन सेशन फाइलें साझा की जा सकती हैं।"
  },
  {
    "id": "U9",
    "question": "Kya app team collaboration support karta hai?",
    "answer": "Nahi, direct collaboration nahi hai, par session files share ki ja sakti hain."
  },
  {
    "id": "U10",
    "question": "Can it be used in corporate environments?",
    "answer": "Yes, it can be used for training and demonstrations but is not intended for product deployment."
  },
  {
    "id": "U10",
    "question": "क्या इसे कॉर्पोरेट वातावरण में उपयोग किया जा सकता है?",
    "answer": "हाँ, इसे प्रशिक्षण और डेमो के लिए उपयोग किया जा सकता है, पर उत्पाद डिप्लॉयमेंट के लिए नहीं।"
  },
  {
    "id": "U10",
    "question": "Kya ise corporate environments me use kar sakte hain?",
    "answer": "Haan, training aur demos ke liye use ho sakta hai, production ke liye nahi."
  },
  {
    "id": "U11",
    "question": "How can data science clubs or groups benefit?",
    "answer": "They can use it for interactive learning sessions, prototyping, and group experiments."
  },
  {
    "id": "U11",
    "question": "डेटा साइंस क्लब या समूह इससे कैसे लाभान्वित हो सकते हैं?",
    "answer": "वे इसे इंटरैक्टिव लर्निंग, प्रोटोटाइपिंग और समूह प्रयोगों के लिए उपयोग कर सकते हैं।"
  },
  {
    "id": "U11",
    "question": "Data science clubs kaise fayda uthayein?",
    "answer": "Interactive learning, prototyping aur group experiments ke liye yeh useful hai."
  },
  {
    "id": "U12",
    "question": "Is the app accessible for users with disabilities?",
    "answer": "Yes, it uses accessible UI components and adheres to basic accessibility standards."
  },
  {
    "id": "U12",
    "question": "क्या ऐप विकलांग उपयोगकर्ताओं के लिए सुलभ है?",
    "answer": "हाँ, यह प्रगतिशील UI घटकों का उपयोग करता है और बुनियादी पहुंच मानकों का पालन करता है।"
  },
  {
    "id": "U12",
    "question": "Kya app disabilities wale users ke liye accessible hai?",
    "answer": "Haan, accessible UI components use karta hai aur basic accessibility follow karta hai."
  },
  {
    "id": "U13",
    "question": "Are there specific use cases for various industries?",
    "answer": "While educational, it can be adapted for industry-specific demos and learning."
  },
  {
    "id": "U13",
    "question": "क्या विभिन्न उद्योगों के लिए विशेष उपयोग के मामले हैं?",
    "answer": "यह शैक्षिक है, लेकिन उद्योग-विशिष्ट डेमो और सीखने के लिए अनुकूलित किया जा सकता है।"
  },
  {
    "id": "U13",
    "question": "Kya alag-alag industries ke liye use cases hain?",
    "answer": "Primary educational hai, par industry demos aur learning ke liye customize kiya ja sakta hai."
  },
  {
    "id": "U14",
    "question": "What kind of learning curve should I expect?",
    "answer": "Designed to be beginner-friendly with gradual complexity explained through the workflow."
  },
  {
    "id": "U14",
    "question": "मुझे किस प्रकार की सीखने की अवस्था की उम्मीद करनी चाहिए?",
    "answer": "यह शुरुआत में आसान है और वर्कफ़्लो के माध्यम से जटिलता को चरणबद्ध तरीके से समझाता है।"
  },
  {
    "id": "U14",
    "question": "Learning curve kaisa hoga?",
    "answer": "Beginner friendly design hai; dheere-dheere complexity explain karta hai."
  },
  {
    "id": "U15",
    "question": "Can it be used to teach ML concepts in workshops?",
    "answer": "Yes, it is ideal for workshops due to its hands-on, interactive and offline nature."
  },
  {
    "id": "U15",
    "question": "क्या इसका उपयोग कार्यशालाओं में एमएल अवधारणाओं को सिखाने के लिए किया जा सकता है?",
    "answer": "हाँ, इसकी इंटरैक्टिव और ऑफ़लाइन प्रकृति के कारण, यह कार्यशालाओं के लिए उपयुक्त है।"
  },
  {
    "id": "U15",
    "question": "Kya ise workshops me ML sikhane ke liye use kar sakte hain?",
    "answer": "Haan, hands-on aur offline nature ke karan workshops ke liye best hai."
  },
  {
    "id": "U16",
    "question": "Does it support multiple languages?",
    "answer": "Currently, the UI is in English, but multilingual FAQ and explanations are included."
  },
  {
    "id": "U16",
    "question": "क्या यह कई भाषाओं का समर्थन करता है?",
    "answer": "वर्तमान में UI अंग्रेजी में है, लेकिन बहुभाषी FAQ और व्याख्याएँ शामिल हैं।"
  },
  {
    "id": "U16",
    "question": "Kya yeh multiple languages support karta hai?",
    "answer": "Abhi UI sirf English me hai, par multilingual FAQs aur explanations diye gaye hain."
  },
  {
    "id": "U17",
    "question": "Are there plans to support more user types?",
    "answer": "Future plans may include expanding features to better serve diverse user groups."
  },
  {
    "id": "U17",
    "question": "क्या अधिक उपयोगकर्ता प्रकारों के लिए समर्थन की योजना है?",
    "answer": "भविष्य की योजनाओं में विभिन्न उपयोगकर्ता समूहों के लिए सुविधाओं का विस्तार शामिल हो सकता है।"
  },
  {
    "id": "U17",
    "question": "Kya future me zyada user types support karne ka plan hai?",
    "answer": "Future me ho sakta hai ki diverse users ke liye features expand kiye jayen."
  },
  {
    "id": "U18",
    "question": "Can researchers use this for prototyping?",
    "answer": "Yes, researchers can use the toolkit for quick prototyping and concept demonstrations."
  },
  {
    "id": "U18",
    "question": "क्या शोधकर्ता इसे प्रोटोटाइपिंग के लिए उपयोग कर सकते हैं?",
    "answer": "हाँ, शोधकर्ता तेज़ प्रोटोटाइपिंग और अवधारणा प्रदर्शन के लिए इसका उपयोग कर सकते हैं।"
  },
  {
    "id": "U18",
    "question": "Kya researchers ise prototyping ke liye use kar sakte hain?",
    "answer": "Haan, quick prototyping aur demos ke liye use kar sakte hain."
  },
  {
    "id": "U19",
    "question": "Is it good for quick ML experiments?",
    "answer": "Yes, simulated training and quick setup make it ideal for fast experiments."
  },
  {
    "id": "U19",
    "question": "क्या यह जल्दी एमएल प्रयोगों के लिए अच्छा है?",
    "answer": "हाँ, सिमुलेटेड ट्रेनिंग और तेज़ सेटअप इसे उपयुक्त बनाते हैं।"
  },
  {
    "id": "U19",
    "question": "Kya yeh fast ML experiments ke liye accha hai?",
    "answer": "Haan, simulation aur fast setup ki wajah se perfect hai."
  },
  {
    "id": "U20",
    "question": "Can it be used in hackathons or competitions?",
    "answer": "Yes, due to offline operation and quick simulations, it can be very useful in such events."
  },
  {
    "id": "U20",
    "question": "क्या इसे हैकाथॉन या प्रतियोगिताओं में इस्तेमाल किया जा सकता है?",
    "answer": "हाँ, ऑफलाइन ऑपरेशन और तेज़ सिमुलेशन के कारण यह बहुत उपयोगी है।"
  },
  {
    "id": "U20",
    "question": "Kya ise hackathons ya competitions me use kar sakte hain?",
    "answer": "Haan, offline aur fast simulation ke karan yeh bahut faydemand hai."
  },
  // Data Management (D)
  {
    "id": "D1",
    "question": "What data formats are supported?",
    "answer": "Currently, only CSV file format is supported for uploading data."
  },
  {
    "id": "D1",
    "question": "कौन से डेटा फॉर्मेट सपोर्ट होते हैं?",
    "answer": "अभी के लिए केवल CSV फ़ाइल फॉर्मेट का समर्थन किया जाता है।"
  },
  {
    "id": "D1",
    "question": "Kaunse data formats supported hain?",
    "answer": "Abhi sirf CSV file upload ke liye supported hai."
  },
  {
    "id": "D2",
    "question": "How do I upload a CSV file?",
    "answer": "Use the drag-and-drop area or the file selector button to upload your CSV dataset."
  },
  {
    "id": "D2",
    "question": "मैं CSV फ़ाइल कैसे अपलोड करूं?",
    "answer": "CSV फ़ाइल अपलोड करने के लिए ड्रैग-एंड-ड्रॉप क्षेत्र या फ़ाइल चयन बटन का उपयोग करें।"
  },
  {
    "id": "D2",
    "question": "CSV file kaise upload karun?",
    "answer": "Drag-and-drop ya file selector button ka use karke CSV file upload karo."
  },
  {
    "id": "D3",
    "question": "Can I use Excel or other data formats?",
    "answer": "No, currently only CSV files are supported; Excel files need to be converted to CSV first."
  },
  {
    "id": "D3",
    "question": "क्या मैं Excel या अन्य डेटा फॉर्मेट्स का उपयोग कर सकता हूँ?",
    "answer": "नहीं, वर्तमान में केवल CSV फाइल समर्थित हैं; Excel फाइल को पहले CSV में बदलना होगा।"
  },
  {
    "id": "D3",
    "question": "Kya Excel ya dusre formats use kar sakte hain?",
    "answer": "Nahi, abhi sirf CSV hi supported hai; Excel file pehle CSV me convert karo."
  },
  {
    "id": "D4",
    "question": "How do I load sample datasets?",
    "answer": "Choose from predefined sample datasets like Titanic, Iris, or Customer Churn within the app."
  },
  {
    "id": "D4",
    "question": "मैं सैंपल डेटासेट कैसे लोड करूं?",
    "answer": "ऐप में टाइटैनिक, आइरिस या कस्टमर चर्न जैसे पूर्व-परिभाषित सैंपल डेटासेट चुनें।"
  },
  {
    "id": "D4",
    "question": "Sample datasets kaise load karun?",
    "answer": "App ke andar Titanic, Iris, Customer Churn jaise sample datasets select karo."
  },
  {
    "id": "D5",
    "question": "How do I import a saved session?",
    "answer": "Use the import option to load a previously exported JSON session file."
  },
  {
    "id": "D5",
    "question": "मैं सेव्ड सेशन को कैसे इम्पोर्ट करूं?",
    "answer": "पहले एक्सपोर्ट की गई JSON सेशन फाइल को आयात करने के लिए इम्पोर्ट विकल्प का उपयोग करें।"
  },
  {
    "id": "D5",
    "question": "Saved session kaise import karun?",
    "answer": "Exported JSON session file ko import option se load karo."
  },
  {
    "id": "D6",
    "question": "Can I view the entire dataset in the app?",
    "answer": "Yes, the app provides an interactive data preview table to view and manipulate data."
  },
  {
    "id": "D6",
    "question": "क्या मैं ऐप में पूरा डेटासेट देख सकता हूँ?",
    "answer": "हाँ, ऐप में डेटा प्रिव्यू टेबल है जहाँ आप डेटा देख और एडिट कर सकते हैं।"
  },
  {
    "id": "D6",
    "question": "Kya main app me pura dataset dekh sakta hoon?",
    "answer": "Haan, app me interactive data preview table hota hai jahan data dekh sakte hain."
  },
  {
    "id": "D7",
    "question": "How do I clean missing values?",
    "answer": "Use the 'Fill Missing Values' button to automatically fill empty numerical cells with the column's average."
  },
  {
    "id": "D7",
    "question": "मैं मिसिंग वैल्यूज़ को कैसे साफ़ करूं?",
    "answer": "'मिसिंग वैल्यूज़ भरें' बटन का उपयोग करें, जो खाली संख्यात्मक सेल को उस कॉलम के औसत से भर देगा।"
  },
  {
    "id": "D7",
    "question": "Missing values ko kaise clean karun?",
    "answer": "'Fill Missing Values' button se khali numerical cells ko column ke average se automatically fill karo."
  },
  {
    "id": "D8",
    "question": "What outlier detection methods does the app use?",
    "answer": "The app identifies statistically unusual data points and allows removal via a one-click action."
  },
  {
    "id": "D8",
    "question": "ऐप कौन सी आउटलेयर डिटेक्शन विधि का उपयोग करता है?",
    "answer": "यह संख्यात्मक तौर पर असामान्य डेटा पॉइंट्स को पहचानता है और एक क्लिक से हटाने की सुविधा देता है।"
  },
  {
    "id": "D8",
    "question": "App kaunsa outlier detection method use karta hai?",
    "answer": "Statistical outliers ko detect karta hai aur ek click se remove karne deta hai."
  },
  {
    "id": "D9",
    "question": "Can I delete unwanted rows or columns?",
    "answer": "Yes, you can delete unwanted rows or columns directly from the data preview table."
  },
  {
    "id": "D9",
    "question": "क्या मैं अवांछित पंक्तियाँ या स्तंभ हटा सकता हूँ?",
    "answer": "हाँ, डेटा प्रिव्यू टेबल से सीधे अवांछित पंक्तियाँ या स्तंभ हटा सकते हैं।"
  },
  {
    "id": "D9",
    "question": "Kya main unwanted rows ya columns delete kar sakta hoon?",
    "answer": "Haan, data preview table se seedha rows aur columns delete kar sakte hain."
  },
  {
    "id": "D10",
    "question": "How do I select features and target variables?",
    "answer": "Choose columns as features and select one as a target variable using the provided feature selection UI."
  },
  {
    "id": "D10",
    "question": "मैं फीचर्स और लक्ष्य चरों का चयन कैसे करूं?",
    "answer": "प्रदान किए गए फीचर चयन UI में कॉलम को फीचर के रूप में चुनें और एक को लक्ष्य चर के रूप में चुनें।"
  },
  {
    "id": "D10",
    "question": "Feature aur target variables kaise select karun?",
    "answer": "UI me columns ko features select karo aur ek column target variable ke liye chuno."
  },
  {
    "id": "D11",
    "question": "Can I change task type manually?",
    "answer": "Task type is automatically detected based on target variable selection; manual override is limited."
  },
  {
    "id": "D11",
    "question": "क्या मैं कार्य प्रकार को मैन्युअल रूप से बदल सकता हूँ?",
    "answer": "कार्य प्रकार स्वचालित रूप से लक्ष्य चर के आधार पर पता चलता है; मैन्युअल बदलाव सीमित हैं।"
  },
  {
    "id": "D11",
    "question": "Kya task type manually change kar sakta hoon?",
    "answer": "Task type automatic detect hota hai target variable ke basis par; manual control thoda limited hai."
  },
  {
    "id": "D12",
    "question": "How are data visualizations created?",
    "answer": "Visualizations such as histograms and scatter plots are generated dynamically from the dataset."
  },
  {
    "id": "D12",
    "question": "डेटा विज़ुअलाइज़ेशन कैसे बनाए जाते हैं?",
    "answer": "डेटासेट से histogram और scatter plot जैसे दृश्य गतिशील रूप से बनाए जाते हैं।"
  },
  {
    "id": "D12",
    "question": "Data visualizations kaise bante hain?",
    "answer": "Dataset se histograms aur scatter plots dynamically generate hote hain."
  },
  {
    "id": "D13",
    "question": "Can I filter or sort my data?",
    "answer": "Yes, you can interactively filter and sort data directly in the preview table."
  },
  {
    "id": "D13",
    "question": "क्या मैं अपने डेटा को फ़िल्टर या सॉर्ट कर सकता हूँ?",
    "answer": "हाँ, आप प्रिव्यू टेबल में डेटा को फ़िल्टर और सॉर्ट कर सकते हैं।"
  },
  {
    "id": "D13",
    "question": "Kya main apna data filter ya sort kar sakta hoon?",
    "answer": "Haan, preview table me data filter aur sort kar sakte hain."
  },
  {
    "id": "D14",
    "question": "How does the app handle large datasets?",
    "answer": "The app is optimized for moderate size datasets but may slow with very large data due to browser limits."
  },
  {
    "id": "D14",
    "question": "ऐप बड़े डेटासेट्स को कैसे संभालता है?",
    "answer": "यह मध्यम आकार के डेटासेट के लिए अनुकूलित है, लेकिन बहुत बड़े डेटा के साथ ब्राउज़र की सीमाओं के कारण धीमा हो सकता है।"
  },
  {
    "id": "D14",
    "question": "App large datasets ko kaise handle karta hai?",
    "answer": "App moderate datasets ke liye optimized hai, bahut bada data slow kar sakta hai browser ki limits ke karan."
  },
  {
    "id": "D15",
    "question": "Are there any size limits for uploads?",
    "answer": "There is no strict limit, but performance depends on your browser and machine capabilities."
  },
  {
    "id": "D15",
    "question": "क्या अपलोड के लिए कोई आकार सीमा है?",
    "answer": "कोई सख्त सीमा नहीं है, लेकिन प्रदर्शन आपके ब्राउज़र और मशीन की क्षमताओं पर निर्भर करता है।"
  },
  {
    "id": "D15",
    "question": "Upload ke liye size limit hai kya?",
    "answer": "Koi strict limit nahi par performance aapke browser aur machine par depend karta hai."
  },
  {
    "id": "D16",
    "question": "Can I export prepared datasets?",
    "answer": "Yes, you can export data including cleaning and selection steps for later use."
  },
  {
    "id": "D16",
    "question": "क्या मैं तैयार किए गए डेटासेट को निर्यात कर सकता हूँ?",
    "answer": "हाँ, आप डेटा क्लीनिंग और चयन के बाद तैयार डेटासेट को निर्यात कर सकते हैं।"
  },
  {
    "id": "D16",
    "question": "Kya main prepared datasets export kar sakta hoon?",
    "answer": "Haan, cleaning aur selection ke baad data export kar sakte hain."
  },
  {
    "id": "D17",
    "question": "How do I handle categorical variables?",
    "answer": "You can select categorical columns as features; the app automatically handles them appropriately."
  },
  {
    "id": "D17",
    "question": "मैं श्रेणीबद्ध चर कैसे संभालूं?",
    "answer": "आप श्रेणीबद्ध कॉलम को फीचर के रूप में चुन सकते हैं; ऐप उन्हें स्वचालित रूप से संभालता है।"
  },
  {
    "id": "D17",
    "question": "Categorical variables kaise handle karun?",
    "answer": "Categorical columns ko features ke roop me select karo, app automatically manage karega."
  },
  {
    "id": "D18",
    "question": "Is there support for missing categorical values?",
    "answer": "Yes, missing categorical values can be detected and handled during data cleaning."
  },
  {
    "id": "D18",
    "question": "क्या मिसिंग कैटेगॉरिकल वैल्यूज़ का समर्थन किया जाता है?",
    "answer": "हाँ, मिसिंग कैटेगॉरिकल वैल्यूज़ को पहचानने और सुधारने के लिए टूल उपलब्ध हैं।"
  },
  {
    "id": "D18",
    "question": "Missing categorical values supported hain kya?",
    "answer": "Haan, missing categorical values detect aur handle ki ja sakti hain."
  },
  {
    "id": "D19",
    "question": "What happens if data is malformed?",
    "answer": "The app may display an error or skip malformed rows; it is best to ensure clean CSV input."
  },
  {
    "id": "D19",
    "question": "अगर डेटा गलत फ़ॉर्मेट में हो तो क्या होता है?",
    "answer": "ऐप त्रुटि दिखा सकता है या गलत पंक्तियों को छोड़ सकता है; साफ़ CSV का उपयोग करना बेहतर है।"
  },
  {
    "id": "D19",
    "question": "Data malformed ho to kya hota hai?",
    "answer": "App error show kar sakta hai ya bad rows skip karta hai; clean CSV use karna best hai."
  },
  {
    "id": "D20",
    "question": "Can I undo changes in data cleaning?",
    "answer": "The app does not have an undo feature; it is recommended to save versions or export before changes."
  },
  {
    "id": "D20",
    "question": "क्या मैं डेटा क्लीनिंग में किए गए बदलावों को पूर्ववत कर सकता हूँ?",
    "answer": "ऐप में पूर्ववत विकल्प नहीं है; बदलावों से पहले संस्करण सेव या निर्यात करना अच्छा है।"
  },
  {
    "id": "D20",
    "question": "Data cleaning me kiye badlav undo kar sakta hoon?",
    "answer": "App me undo feature nahi hai; changes ke pehle session save/export karlo."
  },
  // Machine Learning Capabilities (M)
  {
    "id": "M1",
    "question": "What ML tasks does the app support?",
    "answer": "The app supports classification, regression, and clustering machine learning tasks."
  },
  {
    "id": "M1",
    "question": "ऐप कौन से मशीन लर्निंग टास्क सपोर्ट करता है?",
    "answer": "यह ऐप क्लासिफिकेशन, रिग्रेशन और क्लस्टरिंग टास्क को सपोर्ट करता है।"
  },
  {
    "id": "M1",
    "question": "App kaunse ML tasks support karta hai?",
    "answer": "Yeh classification, regression, aur clustering tasks support karta hai."
  },
  {
    "id": "M2",
    "question": "Does the app train real ML models?",
    "answer": "No, the app simulates model training to demonstrate the process without heavy computation."
  },
  {
    "id": "M2",
    "question": "क्या ऐप असली मशीन लर्निंग मॉडल ट्रेन करता है?",
    "answer": "नहीं, ऐप मॉडल ट्रेनिंग का सिमुलेशन करता है ताकि बिना भारी कंप्यूटेशन के प्रक्रिया समझा सके।"
  },
  {
    "id": "M2",
    "question": "Kya app real ML models train karta hai?",
    "answer": "Nahi, yeh training simulate karta hai taaki heavy computation na ho aur process samajh aaye."
  },
  {
    "id": "M3",
    "question": "How are model training processes simulated?",
    "answer": "Training runs on timers and generates realistic performance metrics using random but plausible values."
  },
  {
    "id": "M3",
    "question": "मॉडल ट्रेनिंग प्रक्रिया को कैसे सिमुलेट किया जाता है?",
    "answer": "टाइमर चलाकर और यादृच्छिक लेकिन संभव परिणाम उत्पन्न करके ट्रेनिंग सिमुलेट की जाती है।"
  },
  {
    "id": "M3",
    "question": "Model training process kaise simulate hota hai?",
    "answer": "Timer ke jariye aur random plausible metrics generate karke training simulate hoti hai."
  },
  {
    "id": "M4",
    "question": "Can I configure model parameters?",
    "answer": "The app allows limited configuration in manual mode, such as choosing models and training data split."
  },
  {
    "id": "M4",
    "question": "क्या मैं मॉडल पैरामीटर कॉन्फ़िगर कर सकता हूँ?",
    "answer": "हाँ, मैन्युअल मोड में आप मॉडल चुन सकते हैं और ट्रेनिंग डेटा स्प्लिट बदल सकते हैं।"
  },
  {
    "id": "M4",
    "question": "Kya main model parameters configure kar sakta hoon?",
    "answer": "Haan, manual mode me model select kar sakte ho aur training data split adjust kar sakte ho."
  },
  {
    "id": "M5",
    "question": "What models are available?",
    "answer": "You can simulate Logistic Regression, Random Forest, Support Vector Machine, Linear Regression, and K-Means Clustering."
  },
  {
    "id": "M5",
    "question": "कौन से मॉडल उपलब्ध हैं?",
    "answer": "लॉजिस्टिक रिग्रेशन, रैंडम फॉरेस्ट, सपोर्ट वेक्टर मशीन, लीनियर रिग्रेशन, और K-मीन क्लस्टरिंग उपलब्ध हैं।"
  },
  {
    "id": "M5",
    "question": "Kaunse models available hain?",
    "answer": "Logistic Regression, Random Forest, SVM, Linear Regression, aur K-Means Clustering supported hain."
  },
  {
    "id": "M6",
    "question": "How is model compatibility handled?",
    "answer": "The app filters models based on the task type but allows manual override for experiments."
  },
  {
    "id": "M6",
    "question": "मॉडल संगतता को कैसे संभाला जाता है?",
    "answer": "ऐप कार्य प्रकार के आधार पर मॉडल को फ़िल्टर करता है लेकिन प्रयोग के लिए मैन्युअल ओवरराइड की अनुमति देता है।"
  },
  {
    "id": "M6",
    "question": "Model compatibility kaise handle hoti hai?",
    "answer": "Task ke hisab se models filter kiye jate hain, par manual override bhi possible hai."
  },
  {
    "id": "M7",
    "question": "What is the difference between automatic and manual mode?",
    "answer": "Automatic trains models with default settings; manual mode lets you customize models and parameters."
  },
  {
    "id": "M7",
    "question": "स्वचालित और मैन्युअल मोड में क्या अंतर है?",
    "answer": "स्वचालित मोड में डिफ़ॉल्ट सेटिंग्स के साथ ट्रेनिंग होती है, मैन्युअल मोड में आप कस्टमाइज़ कर सकते हैं।"
  },
  {
    "id": "M7",
    "question": "Automatic aur manual mode me kya fark hai?",
    "answer": "Automatic mode default settings ke saath training karta hai, manual mode me aap customize kar sakte hain."
  },
  {
    "id": "M8",
    "question": "Can I train multiple models simultaneously?",
    "answer": "Yes, you can select and train multiple models in one go."
  },
  {
    "id": "M8",
    "question": "क्या मैं कई मॉडल एक साथ ट्रेन कर सकता हूँ?",
    "answer": "हाँ, आप एक साथ कई मॉडल चुनकर ट्रेन कर सकते हैं।"
  },
  {
    "id": "M8",
    "question": "Kya main multiple models ek saath train kar sakta hoon?",
    "answer": "Haan, aap ek baar me kai models select karke train kar sakte ho."
  },
  {
    "id": "M9",
    "question": "How is overfitting addressed?",
    "answer": "Since training is simulated, overfitting is explained conceptually but not technically addressed in calculations."
  },
  {
    "id": "M9",
    "question": "ओवरफिटिंग को कैसे संभाला जाता है?",
    "answer": "क्योंकि ट्रेनिंग सिम्युलेटेड है, ओवरफिटिंग केवल अवधारणात्मक रूप से समझाया जाता है, गणना में नहीं।"
  },
  {
    "id": "M9",
    "question": "Overfitting ko kaise handle kiya jata hai?",
    "answer": "Training simulate hoti hai, isliye overfitting sirf conceptually bataya jata hai, technically calculate nahi hota."
  },
  {
    "id": "M10",
    "question": "Are hyperparameters adjustable?",
    "answer": "In manual mode, you can adjust some training parameters like train-test split; detailed hyperparameter tuning isn’t supported."
  },
  {
    "id": "M10",
    "question": "क्या हाइपरपैरामीटर समायोज्य हैं?",
    "answer": "मैन्युअल मोड में आप कुछ पैरामीटर जैसे ट्रेन-टेस्ट विभाजन को समायोजित कर सकते हैं; विस्तृत ट्यूनिंग नहीं है।"
  },
  {
    "id": "M10",
    "question": "Kya hyperparameters adjustable hain?",
    "answer": "Manual mode me aap training parameters adjust kar sakte ho, par detailed tuning nahi hai."
  },
  {
    "id": "M11",
    "question": "Does the app support multi-class classification?",
    "answer": "Yes, multi-class classification is supported when the target variable has multiple categories."
  },
  {
    "id": "M11",
    "question": "क्या ऐप मल्टी-क्लास क्लासिफिकेशन सपोर्ट करता है?",
    "answer": "हाँ, यदि टारगेट वेरिएबल में कई कैटेगरी हों तो मल्टी-क्लास क्लासिफिकेशन संभव है।"
  },
  {
    "id": "M11",
    "question": "Kya app multi-class classification support karta hai?",
    "answer": "Haan, jab target variable me multiple categories ho tab multi-class classification possible hai."
  },
  {
    "id": "M12",
    "question": "How are regression models evaluated?",
    "answer": "Regression models are evaluated using metrics like Root Mean Squared Error (RMSE)."
  },
  {
    "id": "M12",
    "question": "रिग्रेशन मॉडल का मूल्यांकन कैसे किया जाता है?",
    "answer": "रिग्रेशन मॉडल को रूट मीन स्क्वायर्ड एरर (RMSE) जैसे मेट्रिक्स से मूल्यांकित किया जाता है।"
  },
  {
    "id": "M12",
    "question": "Regression models ko kaise evaluate karte hain?",
    "answer": "Regression models ko RMSE jese metrics se evaluate kiya jata hai."
  },
  {
    "id": "M13",
    "question": "Is clustering unsupervised?",
    "answer": "Yes, clustering is an unsupervised learning task where the app finds natural groups in data."
  },
  {
    "id": "M13",
    "question": "क्या क्लस्टरिंग अनसुपरवाइज्ड है?",
    "answer": "हाँ, क्लस्टरिंग एक अनसुपरवाइज्ड टास्क है जिसमें डेटा में प्राकृतिक समूह पाए जाते हैं।"
  },
  {
    "id": "M13",
    "question": "Kya clustering unsupervised hai?",
    "answer": "Haan, clustering unsupervised learning hota hai jisme app groups find karta hai."
  },
  {
    "id": "M14",
    "question": "Can I add new ML models?",
    "answer": "No, the app currently supports only built-in simulated models."
  },
  {
    "id": "M14",
    "question": "क्या मैं नए मशीन लर्निंग मॉडल जोड़ सकता हूँ?",
    "answer": "नहीं, वर्तमान में ऐप में केवल निर्मित सिम्युलेटेड मॉडल ही उपलब्ध हैं।"
  },
  {
    "id": "M14",
    "question": "Kya naye ML models add kar sakte hain?",
    "answer": "Nahi, abhi sirf built-in simulated models hi use kar sakte hain."
  },
  {
    "id": "M15",
    "question": "Is model interpretability supported?",
    "answer": "Yes, feature importance is shown to explain model predictions."
  },
  {
    "id": "M15",
    "question": "क्या मॉडल इंटरप्रेटेबिलिटी समर्थित है?",
    "answer": "हाँ, मॉडल की भविष्यवाणियों को समझाने के लिए फीचर इम्पोर्टेंस दिखाई जाती है।"
  },
  {
    "id": "M15",
    "question": "Model interpretability supported hai kya?",
    "answer": "Haan, feature importance dikhayi jati hai jo prediction explain karti hai."
  },
  {
    "id": "M16",
    "question": "How is feature importance calculated?",
    "answer": "Feature importance values are generated as part of the simulated training results."
  },
  {
    "id": "M16",
    "question": "फीचर इम्पोर्टेंस कैसे गणना की जाती है?",
    "answer": "फीचर इम्पोर्टेंस मान सिम्युलेटेड ट्रेनिंग के परिणामों के रूप में प्रदान किए जाते हैं।"
  },
  {
    "id": "M16",
    "question": "Feature importance kaise calculate hoti hai?",
    "answer": "Simulation training results ke part ke roop me feature importance values di jati hain."
  },
  {
    "id": "M17",
    "question": "Can I save trained models?",
    "answer": "Yes, the entire session including trained models can be exported as a JSON file."
  },
  {
    "id": "M17",
    "question": "क्या मैं प्रशिक्षित मॉडल सहेज सकता हूँ?",
    "answer": "हाँ, प्रशिक्षित मॉडल समेत पूरा सेशन JSON फ़ाइल के रूप में सेव किया जा सकता है।"
  },
  {
    "id": "M17",
    "question": "Kya main trained models save kar sakta hoon?",
    "answer": "Haan, poora session including trained models JSON file me export kar sakte hain."
  },
  {
    "id": "M18",
    "question": "Are real ML libraries used?",
    "answer": "No, the app does not use real ML libraries like TensorFlow; training is simulated."
  },
  {
    "id": "M18",
    "question": "क्या ऐप में असली मशीन लर्निंग लाइब्रेरीज़ का उपयोग होता है?",
    "answer": "नहीं, ऐप में TensorFlow जैसी वास्तविक लाइब्रेरीज़ उपयोग नहीं होती; ट्रेनिंग सिमुलेटेड होती है।"
  },
  {
    "id": "M18",
    "question": "Kya real ML libraries use hoti hain?",
    "answer": "Nahi, TensorFlow jaise real libraries use nahi hoti, training sirf simulate hoti hai."
  },
  {
    "id": "M19",
    "question": "Can I export model predictions?",
    "answer": "Currently, the app supports manual prediction input but does not export predictions separately."
  },
  {
    "id": "M19",
    "question": "क्या मैं मॉडल भविष्यवाणियों को निर्यात कर सकता हूँ?",
    "answer": "इस समय, ऐप मैन्युअल पूर्वानुमान इनपुट का समर्थन करता है लेकिन भविष्यवाणियों का अलग निर्यात नहीं करता।"
  },
  {
    "id": "M19",
    "question": "Kya model predictions export kar sakta hoon?",
    "answer": "Abhi manual prediction form hai, par predictions separately export nahi hote."
  },
  {
    "id": "M20",
    "question": "How does the app simulate metrics like accuracy or RMSE?",
    "answer": "It generates plausible random metric values after simulated training to mimic real model outputs."
  },
  {
    "id": "M20",
    "question": "ऐप सटीकता या RMSE जैसे मेट्रिक्स को कैसे सिमुलेट करता है?",
    "answer": "यह सिमुलेटेड ट्रेनिंग के बाद वास्तविक मॉडल आउटपुट की तरह दिग्भ्रमित करने के लिए संभावित यादृच्छिक मान उत्पन्न करता है।"
  },
  {
    "id": "M20",
    "question": "App accuracy ya RMSE jaise metrics kaise simulate karta hai?",
    "answer": "Simulated training ke baad plausible random values generate karta hai jo real outputs jaisi lagti hain."
  },
  // User Guidance & Learning (L)
  {
    "id": "L1",
    "question": "How does the app help users learn ML?",
    "answer": "It provides clear explanations, interactive steps, and Python code snippets to make machine learning concepts easy to understand."
  },
  {
    "id": "L1",
    "question": "ऐप उपयोगकर्ताओं को मशीन लर्निंग कैसे सिखाता है?",
    "answer": "यह स्पष्ट व्याख्याएँ, इंटरैक्टिव स्टेप्स और पायथन कोड के स्निपेट्स प्रदान करता है जिससे मशीन लर्निंग के कॉन्सेप्ट आसानी से समझे जा सकते हैं।"
  },
  {
    "id": "L1",
    "question": "App users ko ML kaise sikhata hai?",
    "answer": "Ye clear explanations, interactive steps, aur Python code snippets deta hai taaki ML concepts easily samajh aayein."
  },
  {
    "id": "L2",
    "question": "What are explanation cards?",
    "answer": "Explanation cards are informative UI components that describe what happens at each step of the ML workflow."
  },
  {
    "id": "L2",
    "question": "व्याख्या कार्ड क्या होते हैं?",
    "answer": "व्याख्या कार्ड UI घटक होते हैं जो एमएल प्रक्रिया के प्रत्येक चरण में होने वाली गतिविधियों का विवरण देते हैं।"
  },
  {
    "id": "L2",
    "question": "Explanation cards kya hote hain?",
    "answer": "Ye UI components hain jo ML workflow ke har step me kya hota hai batate hain."
  },
  {
    "id": "L3",
    "question": "Are code snippets provided?",
    "answer": "Yes, example Python code snippets are included in explanation cards to bridge UI and coding concepts."
  },
  {
    "id": "L3",
    "question": "क्या कोड स्निपेट्स प्रदान किए गए हैं?",
    "answer": "हाँ, उदाहरण स्वरूप पायथन कोड स्निपेट्स व्याख्या कार्ड्स में शामिल हैं जो यूआई और कोडिंग के बीच पुल का काम करते हैं।"
  },
  {
    "id": "L3",
    "question": "Code snippets diye gaye hain kya?",
    "answer": "Haan, explanation cards me Python code snippets diye hain jisse UI aur coding concepts samajh aayein."
  },
  {
    "id": "L4",
    "question": "Which programming language is referenced?",
    "answer": "Python is the programming language featured in the example code snippets."
  },
  {
    "id": "L4",
    "question": "कौन सी प्रोग्रामिंग भाषा का संदर्भ दिया गया है?",
    "answer": "पायथन वह प्रोग्रामिंग भाषा है जिसे उदाहरण कोड स्निपेट्स में दिखाया गया है।"
  },
  {
    "id": "L4",
    "question": "Kaunsi programming language ka reference hai?",
    "answer": "Python programming language ka example code snippets me use hua hai."
  },
  {
    "id": "L5",
    "question": "Can beginners understand the explanations?",
    "answer": "Yes, explanations are designed to be beginner-friendly with clear language and examples."
  },
  {
    "id": "L5",
    "question": "क्या शुरुआती लोग व्याख्याओं को समझ सकते हैं?",
    "answer": "हाँ, व्याख्याएँ स्पष्ट भाषा और उदाहरण के साथ शुरुआती उपयोगकर्ताओं के लिए उपयुक्त होती हैं।"
  },
  {
    "id": "L5",
    "question": "Kya beginners explanations samajh sakte hain?",
    "answer": "Haan, explanations simple language me aur examples ke sath diye gaye hain jo beginners ke liye best hain."
  },
  {
    "id": "L6",
    "question": "Is there a glossary of ML terms?",
    "answer": "Currently, there is no dedicated glossary, but explanations clarify key terms contextually."
  },
  {
    "id": "L6",
    "question": "क्या मशीन लर्निंग शब्दकोश उपलब्ध है?",
    "answer": "वर्तमान में कोई समर्पित शब्दकोश नहीं है, लेकिन प्रमुख शब्दों को सन्दर्भ के अनुसार स्पष्ट किया गया है।"
  },
  {
    "id": "L6",
    "question": "Kya ML terms ka glossary hai?",
    "answer": "Abhi koi dedicated glossary nahi hai, par explanations me key terms context ke sath samjhaye gaye hain."
  },
  {
    "id": "L7",
    "question": "Are tutorials part of the app?",
    "answer": "The app includes inline explanations but does not currently offer formal tutorial modules."
  },
  {
    "id": "L7",
    "question": "क्या ट्यूटोरियल ऐप का हिस्सा हैं?",
    "answer": "ऐप में इनलाइन व्याख्याएँ हैं, लेकिन फिलहाल औपचारिक ट्यूटोरियल मॉड्यूल नहीं हैं।"
  },
  {
    "id": "L7",
    "question": "Kya tutorials app me hain?",
    "answer": "App me inline explanations hain, par formal tutorials abhi nahi diye gaye."
  },
  {
    "id": "L8",
    "question": "Can I get help within the app?",
    "answer": "Yes, use the built-in FAQ assistant for guidance and answers to common questions."
  },
  {
    "id": "L8",
    "question": "क्या मैं ऐप के भीतर मदद प्राप्त कर सकता हूँ?",
    "answer": "हाँ, सामान्य प्रश्नों के उत्तर और मार्गदर्शन के लिए अंतर्निहित FAQ असिस्टेंट का उपयोग करें।"
  },
  {
    "id": "L8",
    "question": "Kya app ke andar help milti hai?",
    "answer": "Haan, built-in FAQ assistant se madad aur common questions ke jawab milte hain."
  },
  {
    "id": "L9",
    "question": "How detailed are the explanations?",
    "answer": "Explanations are sufficiently detailed for beginners and provide conceptual clarity without overwhelming technical depth."
  },
  {
    "id": "L9",
    "question": "व्याख्याएँ कितनी विस्तृत हैं?",
    "answer": "व्याख्याएँ शुरुआती लोगों के लिए पर्याप्त विस्तार से हैं और तकनीकी जटिलता के बिना अवधारणात्मक स्पष्टता प्रदान करती हैं।"
  },
  {
    "id": "L9",
    "question": "Explanations kitne detailed hain?",
    "answer": "Beginners ke liye enough detail hain, concepts clear karte hain bina zyada technical gahanaye ke."
  },
  {
    "id": "L10",
    "question": "Does the FAQ assistant provide help?",
    "answer": "Yes, the FAQ assistant offers keyword-based offline help about the app’s features."
  },
  {
    "id": "L10",
    "question": "क्या FAQ सहायक मदद प्रदान करता है?",
    "answer": "हाँ, FAQ सहायक एप्लिकेशन की विशेषताओं के बारे में ऑफलाइन कीवर्ड आधारित सहायता प्रदान करता है।"
  },
  {
    "id": "L10",
    "question": "Kya FAQ assistant help deta hai?",
    "answer": "Haan, FAQ assistant offline keyword search ke through app ke features ki madad karta hai."
  },
  {
    "id": "L11",
    "question": "Can I see step-by-step workflows?",
    "answer": "Yes, the app’s UI guides you through the four-step ML workflow clearly."
  },
  {
    "id": "L11",
    "question": "क्या मैं चरण दर चरण वर्कफ़्लो देख सकता हूँ?",
    "answer": "हाँ, ऐप का UI आपको चार चरणों वाले एमएल वर्कफ़्लो के माध्यम से स्पष्ट रूप से मार्गदर्शन करता है।"
  },
  {
    "id": "L11",
    "question": "Kya main step-by-step workflows dekh sakta hoon?",
    "answer": "Haan, app ka UI 4-step ML workflow ko clearly guide karta hai."
  },
  {
    "id": "L12",
    "question": "Are visual aids used to explain concepts?",
    "answer": "Yes, the app uses charts, plots, and interactive elements to help explain data and ML concepts."
  },
  {
    "id": "L12",
    "question": "क्या अवधारणाओं को समझाने के लिए दृश्य सहायता का उपयोग किया जाता है?",
    "answer": "हाँ, ऐप डेटा और मशीन लर्निंग अवधारणाओं को समझाने में चार्ट्स, प्लॉट्स और इंटरैक्टिव तत्वों का उपयोग करता है।"
  },
  {
    "id": "L12",
    "question": "Kya visual aids use kiye jate hain?",
    "answer": "Haan, app charts, plots aur interactive elements se data aur ML concepts samjhata hai."
  },
  {
    "id": "L13",
    "question": "Is there a community forum?",
    "answer": "Currently, there is no official community forum linked with the app."
  },
  {
    "id": "L13",
    "question": "क्या कोई समुदाय मंच है?",
    "answer": "वर्तमान में, ऐप के साथ कोई आधिकारिक समुदाय मंच नहीं है।"
  },
  {
    "id": "L13",
    "question": "Kya community forum hai?",
    "answer": "Abhi tak koi official community forum app ke sath nahi hai."
  },
  {
    "id": "L14",
    "question": "Can I export explanation notes?",
    "answer": "No, explanation cards cannot be exported, but you can refer to them within the app anytime."
  },
  {
    "id": "L14",
    "question": "क्या मैं व्याख्या नोट्स निर्यात कर सकता हूँ?",
    "answer": "नहीं, व्याख्या कार्ड्स को निर्यात नहीं किया जा सकता, लेकिन आप उन्हें ऐप में कभी भी संदर्भित कर सकते हैं।"
  },
  {
    "id": "L14",
    "question": "Kya explanation notes export kar sakte hain?",
    "answer": "Nahi, explanation cards export nahi hote, par app me kabhi bhi dekh sakte ho."
  },
  {
    "id": "L15",
    "question": "Are Python examples runnable?",
    "answer": "No, Python code snippets are for educational reference and are not executable within the app."
  },
  {
    "id": "L15",
    "question": "क्या पायथन उदाहरण चलाए जा सकते हैं?",
    "answer": "नहीं, पायथन कोड स्निपेट्स केवल शैक्षिक संदर्भ के लिए हैं और ऐप में निष्पादित नहीं किए जा सकते।"
  },
  {
    "id": "L15",
    "question": "Kya Python examples run kar sakte hain?",
    "answer": "Nahi, wo sirf educational reference ke liye hain, app me run nahi hote."
  },
  {
    "id": "L16",
    "question": "Can I suggest new explanation topics?",
    "answer": "Currently, there is no built-in mechanism, but feedback can be submitted through the app’s support channels."
  },
  {
    "id": "L16",
    "question": "क्या मैं नए व्याख्या विषय सुझा सकता हूँ?",
    "answer": "वर्तमान में कोई अंतर्निहित प्रणाली नहीं है, लेकिन आप ऐप के सहायता चैनलों के माध्यम से सुझाव भेज सकते हैं।"
  },
  {
    "id": "L16",
    "question": "Kya main naye explanation topics suggest kar sakta hoon?",
    "answer": "Abhi koi built-in mechanism nahi hai, lekin feedback support channels se de sakte hain."
  },
  {
    "id": "L17",
    "question": "How are complex concepts simplified?",
    "answer": "Through clear language, visual aids, example code, and stepwise explanations."
  },
  {
    "id": "L17",
    "question": "जटिल अवधारणाओं को कैसे सरल बनाया जाता है?",
    "answer": "साफ़ भाषा, दृश्य सहायता, उदाहरण कोड, और चरणबद्ध व्याख्याओं के माध्यम से।"
  },
  {
    "id": "L17",
    "question": "Complex concepts kaise simple banaye jate hain?",
    "answer": "Clear language, visual aids, example code, aur steps ke zariye."
  },
  {
    "id": "L18",
    "question": "Are datasets explained in detail?",
    "answer": "Basic statistics and distribution visualizations help explain datasets in the app."
  },
  {
    "id": "L18",
    "question": "क्या डेटासेट का विस्तार से वर्णन किया गया है?",
    "answer": "आधारभूत सांख्यिकी और वितरण विज़ुअलाइज़ेशन डेटासेट को समझने में मदद करते हैं।"
  },
  {
    "id": "L18",
    "question": "Datasets ko detail me explain kiya jata hai?",
    "answer": "Basic stats aur distribution visuals datasets ko samjhane me madad karte hain."
  },
  {
    "id": "L19",
    "question": "Is there contextual help for features?",
    "answer": "Yes, inline explanations appear at key steps and UI elements to assist users."
  },
  {
    "id": "L19",
    "question": "क्या फीचर्स के लिए संदर्भित सहायता है?",
    "answer": "हाँ, प्रमुख चरणों और UI तत्वों पर इनलाइन व्याख्याएँ उपयोगकर्ताओं की सहायता करती हैं।"
  },
  {
    "id": "L19",
    "question": "Kya features ke liye contextual help milti hai?",
    "answer": "Haan, important steps aur UI elements pe inline explanations milti hain."
  },
  {
    "id": "L20",
    "question": "Does the app track learning progress?",
    "answer": "No, the app does not currently track user progress or learning milestones."
  },
  {
    "id": "L20",
    "question": "क्या ऐप सीखने की प्रगति को ट्रैक करता है?",
    "answer": "नहीं, वर्तमान में ऐप उपयोगकर्ता की प्रगति या सीखने के मील के पत्थर ट्रैक नहीं करता।"
  },
  {
    "id": "L20",
    "question": "Kya app learning progress track karta hai?",
    "answer": "Nahi, abhi tak user progress ya learning milestones track nahi karta."
  },
  // Model Evaluation (E)
  {
    "id": "E1",
    "question": "How do I compare different trained models?",
    "answer": "After training, a comparison table shows performance metrics for all models to help you select the best one."
  },
  {
    "id": "E1",
    "question": "मैं विभिन्न प्रशिक्षित मॉडलों की तुलना कैसे करूं?",
    "answer": "ट्रेनिंग के बाद, एक तुलना तालिका सभी मॉडल के प्रदर्शन मीट्रिक्स दिखाती है जिससे आप सबसे अच्छा चुन सकते हैं।"
  },
  {
    "id": "E1",
    "question": "Alag alag trained models kaise compare karen?",
    "answer": "Training ke baad models ka comparison table banta hai, jisme performance metrics hote hain, jisse best choose kar sakte ho."
  },
  {
    "id": "E2",
    "question": "What metrics are used for classification?",
    "answer": "Accuracy and confusion matrix are used to evaluate classification models."
  },
  {
    "id": "E2",
    "question": "वर्गीकरण के लिए कौन से मेट्रिक्स उपयोग किए जाते हैं?",
    "answer": "क्लासिफिकेशन मॉडलों के लिए सटीकता और भ्रम मैट्रिक्स का उपयोग किया जाता है।"
  },
  {
    "id": "E2",
    "question": "Classification me kaunse metrics use hote hain?",
    "answer": "Accuracy aur confusion matrix classification models ke liye use hote hain."
  },
  {
    "id": "E3",
    "question": "How is accuracy calculated?",
    "answer": "Accuracy is the ratio of correctly predicted instances to the total instances."
  },
  {
    "id": "E3",
    "question": "सटीकता कैसे गणना की जाती है?",
    "answer": "सटीकता सही पूर्वानुमान वाले मामलों का कुल मामलों के अनुपात होती है।"
  },
  {
    "id": "E3",
    "question": "Accuracy kaise calculate hoti hai?",
    "answer": "Accuracy matlab sahi predictions ka total predictions me ratio."
  },
  {
    "id": "E4",
    "question": "What is a confusion matrix?",
    "answer": "A confusion matrix shows the counts of true positives, true negatives, false positives, and false negatives to evaluate classification."
  },
  {
    "id": "E4",
    "question": "कन्फ्यूजन मैट्रिक्स क्या है?",
    "answer": "यह सही और गलत वर्गीकरण की गिनती दिखाता है जैसे true positives, true negatives, false positives, और false negatives।"
  },
  {
    "id": "E4",
    "question": "Confusion matrix kya hota hai?",
    "answer": "Ye true positive, true negative, false positive, aur false negative counts dikhata hai classification ke liye."
  },
  {
    "id": "E5",
    "question": "How is RMSE used in regression?",
    "answer": "RMSE measures the average magnitude of prediction errors in regression."
  },
  {
    "id": "E5",
    "question": "रिग्रेशन में RMSE का उपयोग कैसे किया जाता है?",
    "answer": "RMSE रिग्रेशन में पूर्वानुमान त्रुटियों का औसत मापन है।"
  },
  {
    "id": "E5",
    "question": "Regression me RMSE ka use kaise hota hai?",
    "answer": "RMSE regression me error ki average magnitude measure karta hai."
  },
  {
    "id": "E6",
    "question": "What is silhouette score?",
    "answer": "Silhouette score measures how well clusters are separated in clustering tasks."
  },
  {
    "id": "E6",
    "question": "सिल्हूट स्कोर क्या है?",
    "answer": "सिल्हूट स्कोर क्लस्टरिंग में समूहों के बीच भेद को मापता है।"
  },
  {
    "id": "E6",
    "question": "Silhouette score kya hai?",
    "answer": "Silhouette score clustering me clusters ki alag alag hone ki quality measure karta hai."
  },
  {
    "id": "E7",
    "question": "Can I visualize performance metrics?",
    "answer": "Yes, performance metrics are shown in tables and charts for easy understanding."
  },
  {
    "id": "E7",
    "question": "क्या मैं प्रदर्शन मीट्रिक्स को विज़ुअलाइज़ कर सकता हूँ?",
    "answer": "हाँ, प्रदर्शन मीट्रिक्स टेबल और चार्ट के रूप में दिखाए जाते हैं।"
  },
  {
    "id": "E7",
    "question": "Kya main performance metrics visualize kar sakta hoon?",
    "answer": "Haan, ye tables aur charts me dikhte hain taaki samajhna easy ho."
  },
  {
    "id": "E8",
    "question": "How are feature importance charts interpreted?",
    "answer": "Feature importance charts show which features contributed most to model predictions."
  },
  {
    "id": "E8",
    "question": "फीचर इम्पोर्टेंस चार्ट की व्याख्या कैसे करें?",
    "answer": "यह चार्ट बताता है कि किस फीचर ने मॉडल की भविष्यवाणी में सबसे ज्यादा योगदान दिया।"
  },
  {
    "id": "E8",
    "question": "Feature importance charts kaise samjhein?",
    "answer": "Ye charts dikhate hain kaunse features ne model predictions me sabse jyada impact diya."
  },
  {
    "id": "E9",
    "question": "Can I manually test models with new data?",
    "answer": "Yes, an interactive form lets you input new data points and get instant predictions."
  },
  {
    "id": "E9",
    "question": "क्या मैं नए डेटा के साथ मैन्युअल रूप से मॉडल का परीक्षण कर सकता हूँ?",
    "answer": "हाँ, एक इंटरैक्टिव फ़ॉर्म आपको नए डेटा के लिए त्वरित पूर्वानुमान देता है।"
  },
  {
    "id": "E9",
    "question": "Kya main naye data ke saath manual testing kar sakta hoon?",
    "answer": "Haan, interactive form se naya data daal kar turant prediction lo."
  },
  {
    "id": "E10",
    "question": "How do the predictions work?",
    "answer": "Predictions are generated by the best performing simulated model based on the input data."
  },
  {
    "id": "E10",
    "question": "पूर्वानुमान कैसे काम करता है?",
    "answer": "इनपुट डेटा के आधार पर सबसे अच्छा प्रदर्शन करने वाला सिम्युलेटेड मॉडल पूर्वानुमान बनाता है।"
  },
  {
    "id": "E10",
    "question": "Predictions kaise kaam karte hain?",
    "answer": "Input data ke hisab se best simulated model prediction deta hai."
  },
  {
    "id": "E11",
    "question": "What does overfitting look like in results?",
    "answer": "Overfitting may cause very high training accuracy but poor performance on test data."
  },
  {
    "id": "E11",
    "question": "परिणामों में ओवरफिटिंग कैसी दिखती है?",
    "answer": "ओवरफिटिंग में प्रशिक्षण सटीकता बहुत अधिक होती है लेकिन परीक्षण डेटा पर प्रदर्शन खराब होता है।"
  },
  {
    "id": "E11",
    "question": "Overfitting results me kaisa dikhta hai?",
    "answer": "Training accuracy bahut high ho, lekin test data par performance low ho."
  },
  {
    "id": "E12",
    "question": "Can I export evaluation results?",
    "answer": "Yes, the session export includes evaluation metrics and model details."
  },
  {
    "id": "E12",
    "question": "क्या मैं मूल्यांकन परिणाम निर्यात कर सकता हूँ?",
    "answer": "हाँ, सेशन एक्सपोर्ट में मूल्यांकन मीट्रिक्स और मॉडल विवरण शामिल हैं।"
  },
  {
    "id": "E12",
    "question": "Kya main evaluation results export kar sakta hoon?",
    "answer": "Haan, session export me evaluation metrics aur model details aati hain."
  },
  {
    "id": "E13",
    "question": "Are evaluation metrics customizable?",
    "answer": "No, metrics are automatically set based on the ML task type."
  },
  {
    "id": "E13",
    "question": "क्या मूल्यांकन मीट्रिक्स अनुकूलनीय हैं?",
    "answer": "नहीं, मीट्रिक्स स्वचालित रूप से एमएल कार्य प्रकार के आधार पर सेट होते हैं।"
  },
  {
    "id": "E13",
    "question": "Kya evaluation metrics customize kar sakte hain?",
    "answer": "Nahi, metrics task type ke hisab se automatic hote hain."
  },
  {
    "id": "E14",
    "question": "How often should I validate models?",
    "answer": "Frequent validation during training is simulated to demonstrate best practices."
  },
  {
    "id": "E14",
    "question": "मॉडल को कितनी बार वैध ठहराना चाहिए?",
    "answer": "प्रशिक्षण के दौरान अक्सर मान्यकरण किया जाता है, जो प्रदर्शित करने के लिए सिम्युलेटेड होता है।"
  },
  {
    "id": "E14",
    "question": "Models ko kitni baar validate karna chahiye?",
    "answer": "Training ke dauran frequent validation simulated hota hai best practices samjhane ke liye."
  },
  {
    "id": "E15",
    "question": "Can I compare models from different sessions?",
    "answer": "No, model comparisons are limited to models trained within the same session."
  },
  {
    "id": "E15",
    "question": "क्या मैं अलग-अलग सत्रों के मॉडल की तुलना कर सकता हूँ?",
    "answer": "नहीं, मॉडल तुलना केवल एक ही सत्र में प्रशिक्षित मॉडलों तक सीमित है।"
  },
  {
    "id": "E15",
    "question": "Kya main alag sessions ke models compare kar sakta hoon?",
    "answer": "Nahi, models comparison sirf ek hi session ke andar hota hai."
  },
  {
    "id": "E16",
    "question": "Are cross-validation techniques simulated?",
    "answer": "No, the app does not simulate cross-validation, it uses a simple train/test split."
  },
  {
    "id": "E16",
    "question": "क्या क्रॉस-वैलिडेशन तकनीकों का सिमुलेशन किया जाता है?",
    "answer": "नहीं, ऐप क्रॉस-वैलिडेशन सिम्युलेट नहीं करता, यह आसान ट्रेन/टेस्ट विभाजन का उपयोग करता है।"
  },
  {
    "id": "E16",
    "question": "Kya cross-validation simulate hota hai?",
    "answer": "Nahi, app cross-validation simulate nahi karta, simple train/test split use karta hai."
  },
  {
    "id": "E17",
    "question": "Can I drill down on feature contributions?",
    "answer": "You can view feature importance charts to understand contributions, but no detailed breakdown per instance."
  },
  {
    "id": "E17",
    "question": "क्या मैं फीचर योगदान को विस्तार से देख सकता हूँ?",
    "answer": "आप फीचर महत्व चार्ट देख सकते हैं, लेकिन प्रति उदाहरण विस्तृत विश्लेषण नहीं है।"
  },
  {
    "id": "E17",
    "question": "Kya feature contributions ko detail me dekh sakte hain?",
    "answer": "Feature importance charts available hain, par har instance ka detailed explanation nahi hai."
  },
  {
    "id": "E18",
    "question": "What is the baseline metric?",
    "answer": "Baseline depends on the task; for classification, a no-skill classifier accuracy is a baseline example."
  },
  {
    "id": "E18",
    "question": "मूलभूत मीट्रिक क्या है?",
    "answer": "मूलभूत मीट्रिक कार्य पर निर्भर करता है; उदाहरण के लिए, वर्गीकरण में नो-स्किल क्लासिफायर की सटीकता।"
  },
  {
    "id": "E18",
    "question": "Baseline metric kya hai?",
    "answer": "Task ke hisab se; classification me no-skill classifier ki accuracy baseline hoti hai."
  },
  {
    "id": "E19",
    "question": "Does the app support multi-metric comparison?",
    "answer": "Yes, multiple relevant metrics are displayed according to the ML task."
  },
  {
    "id": "E19",
    "question": "क्या ऐप मल्टी-मीटरिक तुलना सपोर्ट करता है?",
    "answer": "हाँ, एमएल टास्क के अनुसार कई संबंधित मीट्रिक्स दिखाए जाते हैं।"
  },
  {
    "id": "E19",
    "question": "Kya app multi-metric comparison support karta hai?",
    "answer": "Haan, task ke hisab se multiple metrics dikhaye jate hain."
  },
  {
    "id": "E20",
    "question": "How does model ranking work?",
    "answer": "Models are ranked based on primary task metrics like accuracy, RMSE, or silhouette score."
  },
  {
    "id": "E20",
    "question": "मॉडल रैंकिंग कैसे काम करती है?",
    "answer": "मॉडलों को प्राथमिक मीट्रिक्स जैसे सटीकता, RMSE, या सिल्हूट स्कोर के आधार पर रैंक किया जाता है।"
  },
  {
    "id": "E20",
    "question": "Model ranking kaise hoti hai?",
    "answer": "Models ko primary metrics jaise accuracy, RMSE, ya silhouette score ke basis pe rank kiya jata hai."
  },
  // Saving & Export (S)
  {
    "id": "S1",
    "question": "How can I save my session?",
    "answer": "You can export your entire session, including data, models, and results, as a JSON file for later use."
  },
  {
    "id": "S1",
    "question": "मैं अपना सेशन कैसे सेव कर सकता हूँ?",
    "answer": "आप अपना पूरा सेशन, जिसमें डेटा, मॉडल और परिणाम शामिल हैं, JSON फ़ाइल के रूप में निर्यात कर सकते हैं।"
  },
  {
    "id": "S1",
    "question": "Session kaise save karun?",
    "answer": "Apna pura session jisme data, models, results hain, usko JSON file ke roop me export kar sakte ho."
  },
  {
    "id": "S2",
    "question": "What does the JSON export include?",
    "answer": "The JSON export contains your uploaded data, model configurations, training results, and evaluation metrics."
  },
  {
    "id": "S2",
    "question": "JSON निर्यात में क्या शामिल होता है?",
    "answer": "JSON फ़ाइल में आपका अपलोड किया गया डेटा, मॉडल कॉन्फ़िगरेशन, प्रशिक्षण परिणाम और मूल्यांकन मीट्रिक्स शामिल होते हैं।"
  },
  {
    "id": "S2",
    "question": "JSON export me kya hota hai?",
    "answer": "Isme aapka uploaded data, model configs, training results, aur evaluation metrics hote hain."
  },
  {
    "id": "S3",
    "question": "Can I reload saved sessions?",
    "answer": "Yes, you can import previously exported JSON files to restore your session exactly as you left it."
  },
  {
    "id": "S3",
    "question": "क्या मैं सेव किए गए सेशन को पुनः लोड कर सकता हूँ?",
    "answer": "हाँ, आप पहले से निर्यात की गई JSON फ़ाइलों को आयात करके अपने सेशन को पुनः प्राप्त कर सकते हैं।"
  },
  {
    "id": "S3",
    "question": "Kya main saved sessions reload kar sakta hoon?",
    "answer": "Haan, pehle export ki gayi JSON files import karke apna session wapas la sakte ho."
  },
  {
    "id": "S4",
    "question": "Are models saved along with data?",
    "answer": "Yes, trained models and their parameters are saved as part of the exported session."
  },
  {
    "id": "S4",
    "question": "क्या मॉडल डेटा के साथ सेव होते हैं?",
    "answer": "हाँ, प्रशिक्षित मॉडल और उनके पैरामीटर भी निर्यात किए गए सेशन में शामिल होते हैं।"
  },
  {
    "id": "S4",
    "question": "Kya models data ke sath save hote hain?",
    "answer": "Haan, trained models aur unke parameters bhi session export me hote hain."
  },
  {
    "id": "S5",
    "question": "How to share saved sessions?",
    "answer": "Share the exported JSON session file via email, cloud storage, or any file-sharing method."
  },
  {
    "id": "S5",
    "question": "सेव किए गए सेशन को कैसे साझा करें?",
    "answer": "निर्यात की गई JSON फ़ाइल को ईमेल, क्लाउड स्टोरेज या किसी अन्य फ़ाइल-साझाकरण विधि से साझा करें।"
  },
  {
    "id": "S5",
    "question": "Session share kaise karen?",
    "answer": "Exported JSON file ko email, cloud storage, ya kisi file sharing tarike se share karo."
  },
  {
    "id": "S6",
    "question": "Can I backup my work offline?",
    "answer": "Yes, by exporting your session files regularly, you can keep backups on your device."
  },
  {
    "id": "S6",
    "question": "क्या मैं अपना काम ऑफ़लाइन बैकअप कर सकता हूँ?",
    "answer": "हाँ, नियमित रूप से सेशन एक्सपोर्ट करके आप अपने डिवाइस पर बैकअप रख सकते हैं।"
  },
  {
    "id": "S6",
    "question": "Kya main apna kaam offline backup kar sakta hoon?",
    "answer": "Haan, regularly session export karke device par backup rakh sakte ho."
  },
  {
    "id": "S7",
    "question": "Is there versioning for saves?",
    "answer": "The app does not automatically version saves; you can manually keep multiple exported files for versions."
  },
  {
    "id": "S7",
    "question": "क्या सेव के लिए संस्करण बनाए जाते हैं?",
    "answer": "ऐप स्वचालित रूप से संस्करण नहीं बनाता; आप अलग-अलग एक्सपोर्ट किए गए फ़ाइलों से संस्करण रख सकते हैं।"
  },
  {
    "id": "S7",
    "question": "Kya saves ka versioning hota hai?",
    "answer": "App automatic versioning nahi karta, aap manual alag-alag exported files rakh sakte ho."
  },
  {
    "id": "S8",
    "question": "How large are saved files typically?",
    "answer": "Saved JSON files usually are small, depending on the size of your dataset and session content."
  },
  {
    "id": "S8",
    "question": "सेव की गई फ़ाइलें आमतौर पर कितनी बड़ी होती हैं?",
    "answer": "सीमित डेटा और सेशन सामग्री के आधार पर JSON फ़ाइलें आमतौर पर छोटी होती हैं।"
  },
  {
    "id": "S8",
    "question": "Saved files kitni badi hoti hain?",
    "answer": "File size dataset aur session ke content pe depend karta hai, generally chhoti hoti hain."
  },
  {
    "id": "S9",
    "question": "Can I export charts and visualizations?",
    "answer": "Currently, only session export is supported; exporting charts separately is not available."
  },
  {
    "id": "S9",
    "question": "क्या मैं चार्ट और विज़ुअलाइज़ेशन निर्यात कर सकता हूँ?",
    "answer": "वर्तमान में केवल सेशन निर्यात समर्थित है; चार्ट को अलग से निर्यात करने का विकल्प नहीं है।"
  },
  {
    "id": "S9",
    "question": "Kya charts aur visualizations export kar sakte hain?",
    "answer": "Abhi sirf session export hota hai, charts ka separate export nahi hai."
  },
  {
    "id": "S10",
    "question": "Are export files compatible across versions?",
    "answer": "Yes, exported JSON files are designed for compatibility with app updates."
  },
  {
    "id": "S10",
    "question": "क्या एक्सपोर्ट की गई फ़ाइलें संस्करणों के बीच संगत हैं?",
    "answer": "हाँ, JSON एक्सपोर्ट फ़ाइलें ऐप के अपडेट के साथ संगत बनाई जाती हैं।"
  },
  {
    "id": "S10",
    "question": "Kya export files version ke sath compatible hain?",
    "answer": "Haan, exported JSON files app ke new versions ke sath compatible hoti hain."
  },
  {
    "id": "S11",
    "question": "How to import sessions?",
    "answer": "Use the import option in the app to load a previously exported JSON session file."
  },
  {
    "id": "S11",
    "question": "सेशन कैसे इम्पोर्ट करें?",
    "answer": "ऐप में इम्पोर्ट विकल्प का उपयोग करें और पूर्व में निर्यात की गई JSON फ़ाइल लोड करें।"
  },
  {
    "id": "S11",
    "question": "Session kaise import karun?",
    "answer": "App ka import option use karo aur pehle export ki gayi JSON file load karo."
  },
  {
    "id": "S12",
    "question": "Can I export training results separately?",
    "answer": "No, training results are part of the overall session export and cannot be exported separately."
  },
  {
    "id": "S12",
    "question": "क्या मैं प्रशिक्षण परिणामों को अलग से निर्यात कर सकता हूँ?",
    "answer": "नहीं, प्रशिक्षण परिणाम केवल पूर्ण सत्र निर्यात का हिस्सा होते हैं।"
  },
  {
    "id": "S12",
    "question": "Kya training results separately export kar sakta hoon?",
    "answer": "Nahi, ye session export ka hi part hote hain, alag se export nahi hote."
  },
  {
    "id": "S13",
    "question": "Can session files be edited manually?",
    "answer": "Editing session files manually is not recommended as it may cause errors when importing."
  },
  {
    "id": "S13",
    "question": "क्या सेशन फाइलों को मैन्युअल रूप से संपादित किया जा सकता है?",
    "answer": "संपादन अनुशंसित नहीं है क्योंकि इससे आयात में त्रुटियां हो सकती हैं।"
  },
  {
    "id": "S13",
    "question": "Kya session files manually edit ki ja sakti hain?",
    "answer": "Manually edit karna recommend nahi hai, ise import karte waqt errors aa sakte hain."
  },
  {
    "id": "S14",
    "question": "What if a session file is corrupted?",
    "answer": "A corrupted session file cannot be loaded; you will need to use a valid backup."
  },
  {
    "id": "S14",
    "question": "अगर सेशन फ़ाइल भ्रष्ट हो जाए तो क्या करें?",
    "answer": "भ्रष्ट फ़ाइल लोड नहीं हो सकती; वैध बैकअप का उपयोग करें।"
  },
  {
    "id": "S14",
    "question": "Session file corrupt ho to kya karein?",
    "answer": "Corrupt file load nahi hoti, valid backup use karo."
  },
  {
    "id": "S15",
    "question": "How is export data secured?",
    "answer": "Exported files rely on your device's security; keep them safe and private."
  },
  {
    "id": "S15",
    "question": "निर्यात डेटा की सुरक्षा कैसे की जाती है?",
    "answer": "निर्यात की गई फाइलें आपके डिवाइस की सुरक्षा पर निर्भर करती हैं; इन्हें सुरक्षित और निजी रखें।"
  },
  {
    "id": "S15",
    "question": "Export data kaise secure hota hai?",
    "answer": "Files aapke device security pe depend karti hain, inhe safe aur private rakho."
  },
  {
    "id": "S16",
    "question": "Can I export to PDF or other formats?",
    "answer": "No, the app only supports exporting sessions as JSON files."
  },
  {
    "id": "S16",
    "question": "क्या मैं PDF या अन्य फॉर्मेट में निर्यात कर सकता हूँ?",
    "answer": "नहीं, ऐप केवल JSON फाइल के रूप में निर्यात का समर्थन करता है।"
  },
  {
    "id": "S16",
    "question": "Kya PDF ya dusre formats me export kar sakte hain?",
    "answer": "Nahi, sirf JSON export possible hai."
  },
  {
    "id": "S17",
    "question": "Is automated saving supported?",
    "answer": "No, the app does not automatically save sessions; manual exports are required."
  },
  {
    "id": "S17",
    "question": "क्या स्वचालित बचत समर्थित है?",
    "answer": "नहीं, ऐप स्वचालित रूप से सत्र नहीं बचाता; मैनुअल एक्सपोर्ट आवश्यक है।"
  },
  {
    "id": "S17",
    "question": "Kya automated saving hoti hai?",
    "answer": "Nahi, app automatically save nahi karta, aapko manually export karna hota hai."
  },
  {
    "id": "S18",
    "question": "How are export and import integrated with offline use?",
    "answer": "Both operations happen locally without internet, ensuring offline functionality."
  },
  {
    "id": "S18",
    "question": "ऑफ़लाइन उपयोग के साथ निर्यात और आयात कैसे एकीकृत हैं?",
    "answer": "दोनों ऑपरेशन स्थानीय रूप से होते हैं, बिना इंटरनेट के, जिससे ऑफ़लाइन कार्यक्षमता सुनिश्चित होती है।"
  },
  {
    "id": "S18",
    "question": "Offline use ke sath export-import kaise integrated hain?",
    "answer": "Dono local hote hain, bina internet use ke, isliye offline use possible hai."
  },
  {
    "id": "S19",
    "question": "Can I export prediction data?",
    "answer": "No, the app currently does not support exporting individual prediction results."
  },
  {
    "id": "S19",
    "question": "क्या मैं भविष्यवाणी डेटा निर्यात कर सकता हूँ?",
    "answer": "नहीं, ऐप वर्तमान में व्यक्तिगत भविष्यवाणी परिणामों का निर्यात समर्थन नहीं करता।"
  },
  {
    "id": "S19",
    "question": "Kya prediction data export kar sakta hoon?",
    "answer": "Nahi, abhi app prediction results nahi export karta."
  },
  {
    "id": "S20",
    "question": "Are there options for partial export?",
    "answer": "No, the app only exports the full session as a whole."
  },
  {
    "id": "S20",
    "question": "क्या आंशिक निर्यात के विकल्प हैं?",
    "answer": "नहीं, ऐप केवल पूर्ण सेशन को पूरे के पूरे निर्यात करता है।"
  },
  {
    "id": "S20",
    "question": "Kya partial export ke options hain?",
    "answer": "Nahi, pura session hi export hota hai."
  },
  // Technical Details (T)
  {
    "id": "T1",
    "question": "What framework is used in the application?",
    "answer": "The application is built using Next.js with React and TypeScript."
  },
  {
    "id": "T1",
    "question": "एप्लिकेशन में कौन सा फ्रेमवर्क इस्तेमाल किया गया है?",
    "answer": "इस एप्लिकेशन को Next.js, React और TypeScript के साथ बनाया गया है।"
  },
  {
    "id": "T1",
    "question": "App mein kaunsa framework use hua hai?",
    "answer": "App Next.js, React aur TypeScript se bana hai."
  },
  {
    "id": "T2",
    "question": "Which frontend technologies are used?",
    "answer": "React and TypeScript are used along with Tailwind CSS for styling and ShadCN UI for components."
  },
  {
    "id": "T2",
    "question": "कौन सी फ्रंटएंड तकनीकें उपयोग की गई हैं?",
    "answer": "React, TypeScript, Tailwind CSS स्टाइलिंग के लिए, और ShadCN UI घटकों के लिए इस्तेमाल होती है।"
  },
  {
    "id": "T2",
    "question": "Kaunse frontend technologies use ki gayi hain?",
    "answer": "React, TypeScript, Tailwind CSS aur ShadCN UI components use hote hain."
  },
  {
    "id": "T3",
    "question": "What styling approach is used?",
    "answer": "Utility-first styling with Tailwind CSS is used to design the app's look and feel."
  },
  {
    "id": "T3",
    "question": "कौन सा स्टाइलिंग दृष्टिकोण उपयोग किया गया है?",
    "answer": "ऐप के लुक और फील के लिए Tailwind CSS का उपयोग किया गया है।"
  },
  {
    "id": "T3",
    "question": "Styling ke liye kya approach use hui hai?",
    "answer": "App me Tailwind CSS ke utility-first styling ka istemal hota hai."
  },
  {
    "id": "T4",
    "question": "What UI component libraries are integrated?",
    "answer": "ShadCN UI components are integrated to provide accessible, themeable UI elements."
  },
  {
    "id": "T4",
    "question": "कौन सी UI कंपोनेंट लाइब्रेरी एकीकृत हैं?",
    "answer": "ShadCN UI घटक उपयोगकर्ता इंटरफ़ेस के लिए एकीकृत हैं।"
  },
  {
    "id": "T4",
    "question": "Kaunse UI component libraries integrated hain?",
    "answer": "ShadCN UI components app me use hote hain."
  },
  {
    "id": "T5",
    "question": "Which charting libraries are utilized?",
    "answer": "Recharts is used to create interactive charts such as bar charts and scatter plots."
  },
  {
    "id": "T5",
    "question": "कौन सी चार्टिंग लाइब्रेरी का उपयोग किया जाता है?",
    "answer": "इंटरैक्टिव चार्ट बनाने के लिए Recharts का उपयोग किया जाता है।"
  },
  {
    "id": "T5",
    "question": "Kaunse charting library use hoti hai?",
    "answer": "Interactive charts ke liye Recharts use hota hai."
  },
  {
    "id": "T6",
    "question": "What programming language is the app written in?",
    "answer": "The app is written entirely in TypeScript."
  },
  {
    "id": "T6",
    "question": "ऐप किस प्रोग्रामिंग भाषा में लिखा गया है?",
    "answer": "यह पूरी तरह TypeScript में लिखा गया है।"
  },
  {
    "id": "T6",
    "question": "App kis programming language me likha gaya hai?",
    "answer": "App poori tarah TypeScript me likha gaya hai."
  },
  {
    "id": "T7",
    "question": "How is state managed?",
    "answer": "State is managed locally using React hooks like useState, useMemo, and useCallback."
  },
  {
    "id": "T7",
    "question": "राज्य को कैसे प्रबंधित किया जाता है?",
    "answer": "React के hooks जैसे useState, useMemo, और useCallback का उपयोग करके स्थानीय रूप से प्रबंधित किया जाता है।"
  },
  {
    "id": "T7",
    "question": "State kaise manage hoti hai?",
    "answer": "React hooks (useState, useMemo, useCallback) se local state manage ki jati hai."
  },
  {
    "id": "T8",
    "question": "Are any complex state management libraries used?",
    "answer": "No, complex libraries like Redux or Zustand are deliberately avoided to keep the app lightweight and offline."
  },
  {
    "id": "T8",
    "question": "क्या कोई जटिल राज्य प्रबंधन लाइब्रेरीज़ उपयोग की जाती हैं?",
    "answer": "नहीं, Redux या Zustand जैसी जटिल लाइब्रेरीज़ टाल दी गई हैं ताकि ऐप हल्का और ऑफलाइन रहे।"
  },
  {
    "id": "T8",
    "question": "Kya koi complex state management libraries use hoti hain?",
    "answer": "Nahi, Redux ya Zustand jaise libraries avoid kiye gaye hain taaki app light aur offline rahe."
  },
  {
    "id": "T9",
    "question": "How is offline functionality achieved?",
    "answer": "Because all app logic and data management occurs in-browser, no server calls are needed after initial load."
  },
  {
    "id": "T9",
    "question": "ऑफ़लाइन कार्यक्षमता कैसे प्राप्त की जाती है?",
    "answer": "क्योंकि सारी लॉजिक और डेटा प्रबंधन ब्राउज़र में होता है, इसलिए पहली बार लोड के बाद सर्वर कॉल की आवश्यकता नहीं होती।"
  },
  {
    "id": "T9",
    "question": "Offline functionality kaise hoti hai?",
    "answer": "Saari logic aur state browser me hoti hai, initial load ke baad kisi server call ki zarurat nahi."
  },
  {
    "id": "T10",
    "question": "How modular is the codebase?",
    "answer": "The codebase is well organized into directories for components, hooks, libraries, and pages following Next.js conventions."
  },
  {
    "id": "T10",
    "question": "कोडबेस कितना मॉड्यूलर है?",
    "answer": "यह Next.js कन्वेंशंस का पालन करते हुए कंपोनेंट, हुक, लाइब्रेरी और पेज डायरेक्टरी में व्यवस्थित है।"
  },
  {
    "id": "T10",
    "question": "Codebase kitna modular hai?",
    "answer": "Next.js conventions ke hisaab se components, hooks, lib, pages me achhe se organize hai."
  },
  {
    "id": "T11",
    "question": "Can developers contribute easily?",
    "answer": "Yes, the project structure and use of TypeScript with clear separation make contributions straightforward."
  },
  {
    "id": "T11",
    "question": "क्या डेवलपर्स आसानी से योगदान कर सकते हैं?",
    "answer": "हाँ, परियोजना की संरचना और स्पष्ट विभाजन के कारण योगदान सरल है।"
  },
  {
    "id": "T11",
    "question": "Developers asani se contribute kar sakte hain?",
    "answer": "Haan, project structure aur TypeScript ki wajah se contribute karna asaan hai."
  },
  {
    "id": "T12",
    "question": "Does the app use server-side rendering?",
    "answer": "Yes, it uses Next.js App Router which supports server-side rendering but most logic runs client-side."
  },
  {
    "id": "T12",
    "question": "क्या ऐप सर्वर-साइड रेंडरिंग का उपयोग करता है?",
    "answer": "हाँ, यह Next.js ऐप राउटर का उपयोग करता है जो सर्वर-साइड रेंडरिंग को सपोर्ट करता है, लेकिन ज्यादातर लॉजिक क्लाइंट-साइड पर चलता है।"
  },
  {
    "id": "T12",
    "question": "Kya app server-side rendering use karta hai?",
    "answer": "Haan, Next.js App Router use hota hai jo SSR ko support karta hai, par most logic client-side hoti hai."
  },
  {
    "id": "T13",
    "question": "How is the FAQ assistant implemented?",
    "answer": "The FAQ assistant runs locally with static Q&A data and implements keyword search offline without any server."
  },
  {
    "id": "T13",
    "question": "FAQ सहायक कैसे लागू किया गया है?",
    "answer": "FAQ सहायक स्थानीय रूप से चलता है, जिसमें स्थिर प्रश्न और उत्तर डेटा होता है और कीवर्ड खोज ऑफलाइन होती है।"
  },
  {
    "id": "T13",
    "question": "FAQ assistant kaise implement hua hai?",
    "answer": "FAQ assistant locally run karta hai static Q&A data ke sath aur offline keyword search karta hai."
  },
  {
    "id": "T14",
    "question": "Are any external APIs called?",
    "answer": "No external APIs are used, ensuring complete offline functionality."
  },
  {
    "id": "T14",
    "question": "क्या कोई बाहरी एपीआई कॉल किए जाते हैं?",
    "answer": "नहीं, कोई बाहरी एपीआई उपयोग में नहीं हैं, जिससे पूरी तरह ऑफलाइन कार्यक्षमता सुनिश्चित होती है।"
  },
  {
    "id": "T14",
    "question": "Kya koi external APIs call hote hain?",
    "answer": "Nahi, koi external APIs nahi use hoti, app pura offline chalti hai."
  },
  {
    "id": "T15",
    "question": "How is performance optimized?",
    "answer": "By using React hooks such as useMemo and useCallback to avoid unnecessary calculations and renders."
  },
  {
    "id": "T15",
    "question": "प्रदर्शन को कैसे अनुकूलित किया जाता है?",
    "answer": "अनावश्यक कैलकुलेशन और रेंडरिंग से बचने के लिए React hooks जैसे useMemo और useCallback का उपयोग किया जाता है।"
  },
  {
    "id": "T15",
    "question": "Performance kaise optimize hota hai?",
    "answer": "React hooks (useMemo, useCallback) se unnecessary calculations aur renders avoid kiye jate hain."
  },
  {
    "id": "T16",
    "question": "Is TypeScript strictly typed?",
    "answer": "Yes, strict typing is used throughout the app for type safety and better developer experience."
  },
  {
    "id": "T16",
    "question": "क्या TypeScript सख्ती से टाइप किया गया है?",
    "answer": "हाँ, बेहतर टाइप सुरक्षा और विकास के लिए पूरे ऐप में सख्त टाइपिंग उपयोग की गई है।"
  },
  {
    "id": "T16",
    "question": "Kya TypeScript strict typed hai?",
    "answer": "Haan, poore app me strict typing use hoti hai for type safety."
  },
  {
    "id": "T17",
    "question": "What build tools or bundlers are used?",
    "answer": "Next.js uses Vite or Webpack under the hood, but primarily Vite in recent versions."
  },
  {
    "id": "T17",
    "question": "कौन से निर्माण उपकरण या बंडलर उपयोग किए जाते हैं?",
    "answer": "Next.js के अंतर्गत Vite या Webpack का उपयोग होता है, हाल के संस्करणों में मुख्य रूप से Vite है।"
  },
  {
    "id": "T17",
    "question": "Kaunse build tools use karte hain?",
    "answer": "Next.js Vite ya Webpack use karta hai; naye versions me mostly Vite hai."
  },
  {
    "id": "T18",
    "question": "How are custom hooks used?",
    "answer": "Custom hooks like use-toast are used for reusable business logic and UI effects."
  },
  {
    "id": "T18",
    "question": "कस्टम हुक्स का उपयोग कैसे किया जाता है?",
    "answer": "use-toast जैसे कस्टम हुक्स का उपयोग पुन: उपयोग योग्य लॉजिक और UI प्रभावों के लिए किया जाता है।"
  },
  {
    "id": "T18",
    "question": "Custom hooks kaise use hote hain?",
    "answer": "use-toast jaise hooks reusable logic aur UI effects ke liye use hote hain."
  },
  {
    "id": "T19",
    "question": "Is the app accessible?",
    "answer": "Yes, accessible UI components and best practices are followed to support users with disabilities."
  },
  {
    "id": "T19",
    "question": "क्या ऐप सुलभ है?",
    "answer": "हाँ, विकलांग उपयोगकर्ताओं के समर्थन के लिए सुलभ UI घटकों और सर्वोत्तम प्रथाओं का पालन किया जाता है।"
  },
  {
    "id": "T19",
    "question": "Kya app accessible hai?",
    "answer": "Haan, accessibility standards ke sath UI components use kiye hain jo disabled users ko madad karte hain."
  },
  {
    "id": "T20",
    "question": "How is theming and styling handled?",
    "answer": "Styling and theming are managed using Tailwind CSS and CSS variables for easy customization."
  },
  {
    "id": "T20",
    "question": "थीमिंग और स्टाइलिंग कैसे संभाली जाती है?",
    "answer": "स्टाइलिंग Tailwind CSS और CSS वेरिएबल्स के माध्यम से प्रबंधित की जाती है जिससे अनुकूलन आसान होता है।"
  },
  {
    "id": "T20",
    "question": "Theming aur styling kaise manage hoti hai?",
    "answer": "Tailwind CSS aur CSS variables se styling aur theming manage hoti hai, customization asaan hota hai."
  }
];

// Group FAQs by their ID
const groupedFaqs: { [id: string]: { question: string, answer: string }[] } = {};
faqData.forEach(faq => {
    if (!groupedFaqs[faq.id]) {
        groupedFaqs[faq.id] = [];
    }
    groupedFaqs[faq.id].push(faq);
});

// Group IDs by category
const categorizedFaqIds: { [category: string]: string[] } = {};
Object.keys(groupedFaqs).forEach(id => {
    const category = id.charAt(0);
    if (!categorizedFaqIds[category]) {
        categorizedFaqIds[category] = [];
    }
    if (!categorizedFaqIds[category].includes(id)) {
        categorizedFaqIds[category].push(id);
    }
});


const Section = ({ title, children, id }: { title: string, children: React.ReactNode, id: string }) => (
    <section id={id} className="mb-8 scroll-mt-20">
        <h2 className="text-2xl font-bold font-headline mb-6 pb-2 border-b-2 border-primary/20">{title}</h2>
        <div className="space-y-6">
            {children}
        </div>
    </section>
);

const FaqItem = ({ qaGroups }: { qaGroups: { question: string; answer: string }[] }) => (
    <Card>
        <CardContent className="pt-6">
            <div className="space-y-4">
                {qaGroups.map((qa, index) => (
                    <div key={index}>
                        <p className="font-semibold text-foreground">{qa.question}</p>
                        <p className="text-muted-foreground mt-1">{qa.answer}</p>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);

export function FaqPage() {
  return (
    <div className="container max-w-4xl py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight font-headline lg:text-5xl">
                Frequently Asked Questions
            </h1>
            <p className="mt-4 text-muted-foreground">Find answers to the most common questions about the Offline AutoML Toolkit.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
            <aside className="lg:w-1/4 lg:sticky top-20 self-start">
                <p className="font-semibold mb-2">Categories</p>
                <ul className="space-y-2">
                    {Object.entries(faqCategories).map(([id, name]) => (
                         <li key={id}>
                            <a href={`#category-${id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="flex-1">
                {Object.entries(categorizedFaqIds).map(([categoryKey, faqIds]) => (
                    <Section key={categoryKey} id={`category-${categoryKey}`} title={faqCategories[categoryKey as keyof typeof faqCategories]}>
                       {faqIds.map(id => <FaqItem key={id} qaGroups={groupedFaqs[id]} />)}
                    </Section>
                ))}
            </main>
        </div>
    </div>
  );
}
