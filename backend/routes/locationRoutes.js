import express from "express";
import {
  createLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
} from "../controllers/locationController.js";

const locationsRouter = express.Router();


locationsRouter.post("/", createLocation);
locationsRouter.get("/", getAllLocations);
locationsRouter.get("/:id", getLocationById);
locationsRouter.put("/:id", updateLocation);
locationsRouter.delete("/:id", deleteLocation);

export default locationsRouter;
