import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  constructor(
    private eventService: EventsService
  ){}

  ngOnInit() {
    this.getEvents().then()
  }

  async getEvents(){
    this.events = await this.eventService.getEvents()
  }
}
