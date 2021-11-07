import {Component, OnDestroy, OnInit} from '@angular/core';
import {Board} from "../../models/board";
import {BoardItemOperations} from "../board-item/BoardItemOperations";
import {BoardsServiceService} from "../../services/boards-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit, BoardItemOperations, OnDestroy {

  boards: Board[] = [];

  boardsSubscription?: Subscription;

  constructor(private boardService: BoardsServiceService) {
  }

  ngOnInit(): void {
    this.boardsSubscription = this.boardService.boards().subscribe((boards) => {
      this.boards = boards;
    });
  }

  ngOnDestroy() {
    this.boardsSubscription?.unsubscribe()
  }

  onUpdate(board: Board) {
    console.log(board)
  }

  onDelete(board: Board) {
    console.log(board)
  }

  onSelect(board: Board) {
    console.log(board)
  }

}
