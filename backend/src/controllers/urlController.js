const shortid = require('shortid');
const URL = require('../models/url');

const DOMAIN = 'http://localhost:3000';

async function generateNewShortURL(req, res) {
    const body = req.body;

    console.log('Body:', body); 


    if (!body || !body.url) {
        return res.status(400).json({ err: 'URL precisa ser passada' });
    }

    const shortId = shortid();
    const fullShortURL = `${DOMAIN}/${shortId}`;

    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({ shortURL: fullShortURL });
}

async function getAnalytics(req, res) {
    const shortId = req.params.shortId;

    const result = await URL.findOne({ shortId });

    if (!result) {
        return res.status(404).json({ err: 'URL não encontrada' });
    }

    return res.json({ totalClicks: result.visitHistory.length, analytics: result.visitHistory });
}

async function getAll(req, res) {
    const result = await URL.find();

    return res.status(200).json({ result: result });
}

module.exports = { generateNewShortURL, getAnalytics, getAll };
