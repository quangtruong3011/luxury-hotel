import BaseService from "./BaseService";

class RoomService extends BaseService {
    constructor() {
        super("http://localhost:8080/api/rooms");
    }

    getRooms = () => {
        return this.get('/');
    };

    getRoom = (id) => {
        return this.get(`/${id}`);
    };

    createRoom = (data) => {
        return this.post('/', data);
    };

    updateRoom = (id, data) => {
        return this.put(`/${id}`, data);
    };

    deleteRoom = (id) => {
        return this.delete(`/${id}`);
    };
}

export default RoomService;