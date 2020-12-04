import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements AfterViewInit {
  @Input('heroes') heroes:Hero[];

  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<Hero> = new MatTableDataSource<Hero>() ;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Hero>(this.heroes);
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
