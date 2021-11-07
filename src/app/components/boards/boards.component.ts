import { Component, OnInit } from '@angular/core';
import {Board} from "../../models/board";
import {BoardItemOperations} from "../board-item/BoardItemOperations";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit, BoardItemOperations {

  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(board: Board) {
  }

  onDelete(board: Board) {
  }

  onSelect(board: Board) {
  }

}
