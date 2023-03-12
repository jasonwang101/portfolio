import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Portfolio } from 'src/app/models/Portfolio';

@Component({
  selector: 'app-portfolio-item-modal',
  standalone: true,
  templateUrl: './portfolio-item-modal.component.html',
  styleUrls: ['./portfolio-item-modal.component.css']
})
export class PortfolioItemModalComponent {
  @Input() portfolio? : Portfolio;

  constructor(public activeModal: NgbActiveModal) {}
}