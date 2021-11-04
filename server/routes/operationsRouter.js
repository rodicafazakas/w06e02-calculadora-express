const express = require("express");

const router = express.Router();
const operationsRouter = require("../operations");

router.get('/calculator/sumar', operationsRouter.sumar);
router.get('/calculator/restar', operationsRouter.restar);
router.get('/calculator/multiplicar', operationsRouter.multiplicar);
router.get('/calculator/dividir', operationsRouter.dividir);

module.exports = router;