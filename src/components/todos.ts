export type Todo = {
    id: string;
    title: string;
    body: string;
    isDone: boolean;
  };
  
  export enum ActionTypes {
    ADD_TODO = "todo/reducer/ADD_TODO",
    REMOVE_TODO = "todo/reducer/REMOVE_TODO",
    CHANGE_TODO = "todo/reducer/CHANGE_TODO",
    READ_TODO = "todo/reducer/READ_TODO",
  }
  
  type AddTodoAction = {
    type: ActionTypes.ADD_TODO;
    payload: Todo;
  };
  
  type RemoveTodoAction = {
    type: ActionTypes.REMOVE_TODO;
    payload: string; // Todo의 id를 전달받아 삭제
  };
  
  type ChangeTodoAction = {
    type: ActionTypes.CHANGE_TODO;
    payload: string; // Todo의 id를 전달받아 상태 변경
  };
  
  type ReadTodoAction = {
    type: ActionTypes.READ_TODO;
    payload: string; // Todo의 id를 전달받아 해당 Todo를 선택
  };
  
  // union
  export type Action =
    | AddTodoAction
    | RemoveTodoAction
    | ChangeTodoAction
    | ReadTodoAction;
  