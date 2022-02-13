import { User } from "./user.model";

export class Chat {

  id?: string;
  message?: string;
  sender?: User;
  roomId?: number;
  date?: string;


  constructor(message?: string, sender?: User, roomId?: number, date?: string, id?: string) {
    this.message = message;
    this.sender = sender;
    this.roomId = roomId;
    this.date = date;
    this.id = id;
  }
}
