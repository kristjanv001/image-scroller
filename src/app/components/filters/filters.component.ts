import { Component, input, output } from "@angular/core";
import { Filter } from "../../models/filter";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-filters",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./filters.component.html",
})
export class FiltersComponent {
  filters = input.required<Filter[]>();
  currentFilter = input.required<Filter>();
  changeFilter = output<Filter>();

  onFilterChange(filter: Filter) {
    this.changeFilter.emit(filter);
  }
}
