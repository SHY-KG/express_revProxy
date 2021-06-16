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

    // XML to JSON
    try {
        const { data: xmlData } = await axios.get(`${SETTING_URL}${url}`);
        
        let parser = new xml2js.Parser();

        parser.parseString(xmlData, (err, result) => {
            if (err) {
                throw err;
            }
            const jsonData = JSON.stringify(result, null, 4);
            return res.send(jsonData)
        });
    } catch (error) {
        return res.send(error)
    }
};