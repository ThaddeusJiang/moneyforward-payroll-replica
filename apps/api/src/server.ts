import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { JsonGetPayslip, JsonGetPayslips } from "./modules/Payslip/controller";
import {
  JsonGetPaymentItemSetting,
  UpdatePaymentItemSetting,
} from "./modules/PaymentItemSetting/controller";
import {
  JsonGetSettingPeriodCollections,
  UpdateSettingPeriodCollection,
} from "./modules/SettingPeriodCollection/controller";

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/payslips/:id", JsonGetPayslip)
    .get("/payslips", JsonGetPayslips)
    .get("/payment-item-settings/:id", JsonGetPaymentItemSetting)
    .get("/settings/period-collections", JsonGetSettingPeriodCollections);

  app
    .put("/payment-item-settings/:id", UpdatePaymentItemSetting)
    .put("/settings/period-collections", UpdateSettingPeriodCollection)
    // .get("/payment-item-setting", JsonGetPaymentItemSetting)
    .get("/healthz", (req, res) => {
      return res.json({ ok: true });
    });

  return app;
};
