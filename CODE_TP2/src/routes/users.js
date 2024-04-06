const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  addItem,
  updateState,
  viewWatchlist,
  getAllUsers,
  deleteUser,
  deleteItemFromWatchList,
} = require("../controllers/users");

router.post("/create", createUser);
router.get("/get", getUser);
router.get("/getAll", getAllUsers);
router.post("/add_item", addItem);
router.put("/update_state", updateState);
router.get("/view_watchlist", viewWatchlist);
router.delete("/delete_user", deleteUser);
router.delete("/delete_item", deleteItemFromWatchList);

module.exports = router;
