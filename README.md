Water Quality and Bacteria Contamination Dataset

Overview
This dataset contains 50,585 records of water quality parameters and bacterial contamination levels collected from different water bodies. The data is structured with 14 fields, representing various physicochemical properties of water and bacterial concentration levels.

File Information
- Filename: `water_quality_bacteria_combined.csv`
- Rows: 50,585
- Columns: 14

Data Fields
| Column Name              | Data Type  | Description |
|--------------------------|-----------|-------------|
| `Water_Body`             | Object    | Name/type of the water body where the sample was collected (5 unique categories). |
| `pH`                     | Float     | pH level of the water sample. |
| `Turbidity_NTU`          | Float     | Turbidity of water in Nephelometric Turbidity Units (NTU). |
| `Temperature_C`          | Float     | Temperature of the water in degrees Celsius. |
| `Dissolved_Oxygen_mgL`   | Float     | Dissolved oxygen level in mg/L. |
| `Conductivity_uS`        | Float     | Electrical conductivity of the water in microsiemens per centimeter (µS/cm). |
| `Bacteria_CFU_100mL`     | Float     | Concentration of bacteria in colony-forming units per 100mL. |
| `Potability`             | Integer   | Indicates whether the water is potable (1 = Yes, 0 = No). |
| `Organic_Carbon_mgL`     | Float     | Concentration of organic carbon in mg/L. |
| `Ammonia_mgL`            | Float     | Ammonia concentration in mg/L. |
| `Nitrates_mgL`           | Float     | Nitrate concentration in mg/L. |
| `Nitrites_mgL`           | Float     | Nitrite concentration in mg/L. |
| `Sulfate_mgL`            | Float     | Sulfate concentration in mg/L. |
| `Solids_ppm`             | Float     | Total dissolved solids in parts per million (ppm). |

 Unique Categories in Categorical Fields
- `Water_Body`: 5 unique categories (types of water bodies where samples were collected).
  - Ocean: 10,225 samples
  - Reservoir: 10,201 samples
  - River: 10,190 samples
  - Lake: 10,047 samples
  - Pond: 9,922 samples

Usage
This dataset can be used for:
- Analyzing water quality based on physicochemical parameters.
- Detecting bacterial contamination levels in various water sources.
- Training machine learning models for water potability classification.

Notes
- Missing values, if present, should be handled before analysis.
- Ensure proper scaling for ML models when using features with different units.

For further inquiries or contributions, please contact the dataset provider.

