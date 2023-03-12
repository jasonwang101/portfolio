import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Portfolio } from 'src/app/models/Portfolio';
import { PortfolioItemModalComponent } from './portfolio-item-modal/portfolio-item-modal.component';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent {
  @Input() portfolio?:Portfolio;

  constructor(private modalService: NgbModal) {}

  open()
  {
    const modalRef = this.modalService.open(PortfolioItemModalComponent); 
    modalRef.componentInstance.portfolio = this.portfolio;
  }
}
