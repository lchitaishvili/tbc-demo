import { Component, OnInit } from '@angular/core';
import { faCopyright, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faQuestionCircle = faQuestionCircle;
  faCopyright = faCopyright;

  constructor() { }

  ngOnInit() {
  }

}
