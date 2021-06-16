import axios from "axios";

const DEV_ORIGIN_URL = "DEVURL"
const SETTING_URL = process.env.ORIGIN_URL || DEV_ORIGIN_URL;

module.exports = async (req, res) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (url === "/") {
        return res.json({
            ok: false,
            error: "Check the ORIGIN API.",
        });
    }
    const { data } = await axios.get(`${SETTING_URL}${url}`);
    return res.json(data);
};