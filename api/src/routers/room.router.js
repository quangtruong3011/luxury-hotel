import { Router } from "express"
import roomController from "../controllers/room.controller.js";

const roomRouter = Router();

roomRouter.get("/", roomController.getRooms);
roomRouter.get("/:roomId", roomController.getRoom);
roomRouter.post("/", roomController.createRoom);
roomRouter.put("/:roomId", roomController.updateRoom);
roomRouter.delete("/:roomId", roomController.deleteRoom);

export default roomRouter;