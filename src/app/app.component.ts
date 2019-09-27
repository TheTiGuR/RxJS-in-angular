import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit(){
    of(2, 4, 6, 8).subscribe(value => console.log(value));
    from([2, 4, 6, 8]).subscribe(
      item => {console.log(`resulting item...${item}`)},
      err => {console.log(`error occurred...${err}`)},
      () => {console.log(`All done`)}
    )

    from([
      'Bob',
      'Joe',
      'Jim'
    ]).subscribe(
      item => {console.log(`Greetings, ${item}`)},
      err => {console.log(`Dang, I got an error: ${err}`)},
      () => {console.log('Done saying hello to everyone.')}
    )
  }
}
