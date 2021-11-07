import {Board} from "../../models/board";

export interface BoardItemOperations {
  onDelete(board: Board): void;
  onUpdate(board: Board): void;
  onSelect(board: Board): void;
}
