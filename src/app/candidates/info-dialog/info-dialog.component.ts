import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidateModel } from '../candidates.component';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: CandidateModel, private dialog: MatDialogRef<InfoDialogComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialog.close()
  }

}
