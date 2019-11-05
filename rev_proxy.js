import axios from "axios";

const SETTING_URL = "ORIGIN API URL";

module.exports = async (req, res) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (url === "/") {
        return res.json({
            ok: false,
            error: "Check the ORIGIN API",
        });
    }
    const { data } = await axios.get(`${SETTING_URL}${url}`);
    return res.json(data);
};