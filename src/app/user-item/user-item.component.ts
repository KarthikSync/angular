import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.scss"]
})
export class UserItemComponent implements OnInit {
  name: string;
  names: string[];

  constructor() {
    this.name = "Karthik";
    this.names = ["a", "b"];
  }

  ngOnInit() {}
}
