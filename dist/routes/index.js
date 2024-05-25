"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import dashboard from "./dashboard";
const registerRoutes = (app) => {
    const router = (0, express_1.Router)();
    // router.use(dashboard);
    router.use("/*", (req, res) => {
        res.status(404).send("Not found");
    });
    app.use("/api", router);
};
exports.default = registerRoutes;
