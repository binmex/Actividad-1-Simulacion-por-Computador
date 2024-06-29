const express = require("express");
const router = express.Router();
const { upload } = require("../utils/UploadFile");
const { uploadFileToGCS } = require("../controllers/loginControllers");

router.post("/upload", upload.single("file"), uploadFileToGCS);

module.exports = router;
const routes = require("express").Router();
const {
  validate,
  findAll,
  findById,
  save,
  deleteUser,
  update,
} = require("../controllers/loginController");
const check = require("../middleware/auth");

// routes.get("/", check.auth, findAll);
// routes.get("/:id", check.auth, findById);
// routes.post("/save", check.auth, save);
// routes.patch("/:id", check.auth, update);
// routes.delete("/:id", check.auth, deleteUser);
// routes.post("/", validate);

routes.get("/",   findAll);
routes.get("/:id",   findById);
routes.post("/save",   save);
routes.patch("/:id",   update);
routes.delete("/:id",   deleteUser);
routes.post("/", validate);

module.exports = routes;
