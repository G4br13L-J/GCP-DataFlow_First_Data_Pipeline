
# 📊 GCP Dataflow Pipeline: CSV to BigQuery

This project demonstrates how to create a **data ingestion pipeline** using **Google Cloud Dataflow**, which reads a CSV file from **Google Cloud Storage (GCS)**, transforms the data using a **JavaScript UDF**, and writes the results to a **BigQuery** table.

The dataset contains fictional employee information such as names, job titles, departments, and salaries.

---

## 📁 Project Structure

```
📦 dataflow-pipeline/
 ┣ 📄 bq.json         → Defines BigQuery schema for the target table
 ┣ 📄 udf.js          → JavaScript UDF for row transformation
 ┣ 📄 employee_data.csv (stored in GCS bucket)
```

---

## 🚀 Technologies Used

- **Google Cloud Dataflow**
- **Google Cloud Storage (GCS)**
- **BigQuery**
- **JavaScript (UDF)**
- **JSON (Schema definition)**

---

## 🔄 Pipeline Workflow

1. **CSV File** is uploaded to a GCS bucket.
2. **Dataflow job** is triggered:
   - Reads the CSV file.
   - Applies transformations using a **JavaScript UDF**.
   - Converts rows to **JSON objects** matching the BigQuery schema.
3. Transformed data is loaded into a **BigQuery table**.

---

## 🧠 Key Learnings

- Setting up a **Dataflow pipeline** for ETL tasks.
- Using **JavaScript UDFs** to clean and transform data.
- Defining **BigQuery schemas** with JSON.
- Moving data from **Cloud Storage to BigQuery** efficiently.

---
## 📷 Screenshots

<img width="1082" height="771" alt="image" src="https://github.com/user-attachments/assets/a783fb84-9197-4495-8e90-7868e8c2f89e" />
<img width="1444" height="698" alt="image" src="https://github.com/user-attachments/assets/48c29e1c-4a36-424f-bd29-dfe5973ee6bc" />
<img width="1823" height="851" alt="image" src="https://github.com/user-attachments/assets/2f7bd1b4-19ad-4969-b067-ef6a32d648e0" />

---
## 📹 Reference

This project follows the tutorial by **Vishal Bulbule**'s channel '**TechTrapture**' on YouTube:

> [Google Cloud Dataflow Explained | Create Your First Data Pipeline (GCS to BigQuery)](https://www.youtube.com/watch?v=3dMSI-UDFfA)

---

