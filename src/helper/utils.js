import { data } from "../data/data";

export const getAggregatedDataByYear = () => {
  const years = [...new Set(data.map((item) => item.Year.split(", ")[1]))];
  const result = years.map((year) => {
    const cropsOfYear = data.filter((item) => item.Year.includes(year));
    const maxProduction = Math.max(
      ...cropsOfYear?.map(
        (item) => Number(item["Crop Production (UOM:t(Tonnes))"]) || 0
      )
    );
    const minProduction = Math.min(
      ...cropsOfYear?.map(
        (item) => Number(item["Crop Production (UOM:t(Tonnes))"]) || 0
      )
    );
    const cropMax = cropsOfYear.find(
      (item) =>
        Number(item["Crop Production (UOM:t(Tonnes))"]) === maxProduction
    );
    const cropMin = cropsOfYear.find(
      (item) =>
        Number(item["Crop Production (UOM:t(Tonnes))"]) === minProduction
    );

    return {
      Year: year,
      CropMax: cropMax?.["Crop Name"] || "N/A",
      CropMin: cropMin?.["Crop Name"] || "N/A",
    };
  });
  return result;
};

export const getAverageDataByCrop = () => {
  const crops = [...new Set(data.map((item) => item["Crop Name"]))];
  const result = crops.map((crop) => {
    const cropData = data.filter((item) => item["Crop Name"] === crop);
    const totalYield = cropData.reduce(
      (acc, item) =>
        acc +
        (Number(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0),
      0
    );
    const totalArea = cropData.reduce(
      (acc, item) =>
        acc + (Number(item["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0),
      0
    );
    const avgYield = (totalYield / cropData.length).toFixed(3);
    const avgArea = (totalArea / cropData.length).toFixed(3);

    return {
      Crop: crop,
      AverageYield: avgYield,
      AverageArea: avgArea,
    };
  });
  return result;
};
