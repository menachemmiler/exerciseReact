import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import ResponseData from "../types/DTO/responseData";
const app = express();
const PORT = 3000;
interface Unit {
  name: string;
  description: string;
  image: string;
}
interface UnitsData {
  [category: string]: Unit[];
}

let unitsData: UnitsData | null = null;
fs.readFile(path.join(__dirname, "../idfUnits.json"), "utf8", (err, data) => {
  if (err) {
    console.error("Error loading data:", err);
    return;
  }
  unitsData = JSON.parse(data);
  console.log("Data loaded successfully");
});


app.get("/api/units", (req: Request, res: Response<ResponseData>): void => {
  if (!unitsData) {
    res.status(500).json({
      err: true,
      message: "eror",
    });
  }
  res.status(200).json({
    err: false,
    data: unitsData,
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
