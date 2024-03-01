import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit, OnDestroy {

  folderName: string | undefined;
  paramsSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.folderName = params['folderName'];
      // Now you can use this.folderName in your component
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

}
