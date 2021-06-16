import express from 'express';
import axios from "axios";

const DEV_ORIGIN_URL: string = "DEVURL"
const SETTING_URL: string = process.env.ORIGIN_URL || DEV_ORIGIN_URL;

export const modules =  async (req: express.Request, res: express.Response) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (url === "/") {
        return res.json({
            ok: false,
            error: "Check the ORIGIN API.",
        });
    }
    // [TODO] Axios res types or interface
    const { data } = await axios.get(`${SETTING_URL}${url}`);
    return res.json(data);
};