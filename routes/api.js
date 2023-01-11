const router = require("express").Router();
const apiController = require("../controller/apiController");
// const { upload, uploadMultiple } = require("../middlewares/multer");

router.get("/landing-page", apiController.landingPage);

module.exports = router;
