export class User {
  userName?: string;
  chatColor?: string;
  location?: string;


  constructor(username?: string, chatColor?: string, location?: string) {
    this.userName = username ;
    this.chatColor = chatColor;
    this.location = location;
  }
}
