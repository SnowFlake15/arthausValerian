import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "src/app/events.service";
import { Event } from "src/app/models/event";

@Component({
  selector: "app-event-page",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.scss"],
})
export class EventPageComponent {
  eventId: any
  event: any
  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get("id");
    this.getEvent().then();
  }
  async getEvent() {
    this.event = await this.eventService.getEventOne(this.eventId);
  }
}
