import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { PhotoData } from "../data";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const photos = PhotoData.photos;

    return { photos };
  }
}
