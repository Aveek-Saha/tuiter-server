// import posts from "./tuits.js";
// let tuits = posts;

import * as tuitsDao from "../../tuits/tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = new Date().getTime() + "";
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.replies = 0;
    newTuit.retweets = 0;
    newTuit.userAvatar =
        "https://npr.brightspotcdn.com/legacy/sites/wksu/files/201512/nasa_logo.jpg";
    newTuit.liked = false;
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
};

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
};

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex((t) => t._id == tuitdIdToUpdate);
    // tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };

    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);

    res.json(status);
};

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    // tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);

    res.json(status);
};

export default (app) => {
    app.post("/api/tuits", createTuit);
    app.get("/api/tuits", findTuits);
    app.put("/api/tuits/:tid", updateTuit);
    app.delete("/api/tuits/:tid", deleteTuit);
};
