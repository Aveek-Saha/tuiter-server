import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = new Date().getTime() + "";
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.replies = 0;
    newTuit.retweets = 0;
    newTuit.userAvatar =
        "https://npr.brightspotcdn.com/legacy/sites/wksu/files/201512/nasa_logo.jpg";
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
};

const findTuits = (req, res) => {
    res.json(tuits);
};

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate);
    tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };
    
    console.log(tuits);
    res.sendStatus(200);
};

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
    
    res.sendStatus(200);
};

export default (app) => {
    app.post("/api/tuits", createTuit);
    app.get("/api/tuits", findTuits);
    app.put("/api/tuits/:tid", updateTuit);
    app.delete("/api/tuits/:tid", deleteTuit);
};
