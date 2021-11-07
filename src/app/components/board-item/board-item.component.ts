import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Board} from "../../models/board";
import {BoardItemOperations} from "./BoardItemOperations";

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements BoardItemOperations {

  @Input()
  board!: Board;

  @Output() deleteBoard: EventEmitter<Board> = new EventEmitter<Board>();
  @Output() updateBoard: EventEmitter<Board> = new EventEmitter<Board>();
  @Output() selectBoard: EventEmitter<Board> = new EventEmitter<Board>();

  constructor() { }

  onDelete(board: Board) {
    this.deleteBoard.emit(board);
  }

  onUpdate(board: Board) {
    this.updateBoard.emit(board);
  }

  onSelect(board: Board) {
    this.selectBoard.emit(board);
  }

}
