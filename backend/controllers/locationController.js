import Location from "../models/Location.js";

// CREATE
export const createLocation = async (req, res) => {
  try {
    const location = new Location(req.body);
    const saved = await location.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ (ALL)
export const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ (BY ID)
export const getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) return res.status(404).json({ error: "Location not found" });
    res.json(location);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateLocation = async (req, res) => {
  try {
    const updated = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ error: "Location not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteLocation = async (req, res) => {
  try {
    const deleted = await Location.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Location not found" });
    res.json({ message: "Location deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
