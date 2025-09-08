export const siteConfig = {
  name: "Tunde",
  title: "A Data Engineer",
  description: "Portfolio website of Olatunde Adekola",
  accentColor: "#9c38e9fa",
  social: {
    email: "adekolaolat@gmail.com",
    linkedin: "https://www.linkedin.com/in/olatunde-adekola-7893b6178/",
    
  },
  aboutMe:
    ["I’ve worked across data roles as both a Data Engineer and a Data Scientist, helping businesses turn messy data into clear and actionable insights. I focus on Azure, where I design and maintain scalable, efficient pipelines using modern data architectures, lakehouses, data warehouses, and real-time streaming systems to power analytics.","I make sure Analysts and Data Scientists have clean, reliable, and business-ready  data so they can focus on uncovering insights, not fixing data problems.", "Committed to self-development, I stay updated on new technologies and best practices, applying them to improve solutions and collaborate effectively across teams."],
  skills: ["Big Data","Python", "SQL / T-SQL", "Azure", "Fabric","Databricks","PySpark", "Linux","Git", "SQL Server","Postgres", "Power BI", "Tableau"],
  projects: [
    {
      name: "Bus Operations in Liverpool",
      description:
        "Out of an interest in understanding Liverpool’s bus operations, I developed an end-to-end Azure data pipeline that pulls live data from the Bus Open Data Service (BODS) API. The solution processes and transforms over 3M+ data points, making it easy to analyze and report on city’s bus network.",
      link: "https://github.com/adekolaolat/bods-liverpool-azure-data-engineering",
      skills: ["PySpark","SQL/T-SQL","ETL","Azure Data Factory", "ADLS", "Databricks", "Synapse Analytics","Medallion lakehouse architecture","Git","Power BI"],
    },
    {
      name: "On-Prem to Cloud Data Integration with Microsoft Fabric",
      description:
        "Developed a Microsoft Fabric data pipeline to lands on-premises data into a lakehouse and transform it for analytics. For a business procurement use case, I created a dashboard that identifies high-cost suppliers and flags regular suppliers with low product costs, helping to monitor product quality and drive cost reduction efforts.",
      link: "https://github.com/adekolaolat/fabric-data-engineering-on-premises-db",
      skills: ["Fabric","PySpark", "SQL/T-SQL", "Data Factory","Data Migration","Lakehouse", "Data modelling", "Git","Power BI"],
    },
    {
      name: "Predicting Hospital Readmission Risk: Fabric ML workload",
      description:
        "Hospitals incur penalties when patients are readmitted within 30 days, making early identification of high-risk patients crucial. This project leverages Microsoft Fabric to integrate patient data, visit history, lab results, and costs, and runs a machine learning workload to predict 30-day readmission risk.",
      link: "https://github.com/adekolaolat/fabric-hospital-readmission-risk-ml",
      skills: ["Fabric", "Azure", "Medallion lakehouse architecture", "MLflow", "Python", "SQL","Predictive modelling", "ADLS Gen 2" ],
    },
    {
      name: "Data Governance: Implementing Granular Access Control",
      description:
        "This project implements a security aspect of data governance at a granular level by applying features such as Dynamic Data Masking (DDM), Column-Level Security (CLS), and Row-Level Security (RLS) within a business setting.",
      link: "https://github.com/adekolaolat/granular-data-security-sql-server-fabric",
      skills: ["T-SQL", "SQL Server", "SSMS","Fabric", "Azure"],
    },

  ],
  
};
