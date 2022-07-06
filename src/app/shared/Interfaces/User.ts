import { Anime } from "./Anime";

export interface User {
  id: Number;
  name: String;
  password: String;
  email: String;
  watched?: Anime[];
  favourite?: Anime[];
  watchedLater?: Anime[];
}
