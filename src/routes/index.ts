import { Application, Request, Response, Router } from "express";

// import dashboard from "./dashboard";

const registerRoutes = (app: Application) => {
    const router: Router = Router();
    // router.use(dashboard);

    router.use("/*", (req: Request, res: Response) => {
        res.status(404).send("Not found");
    });
    app.use("/api", router);
};


export default registerRoutes;
