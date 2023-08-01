import { Action, ActionTypes, Todo } from "../../components/todos";
import uuid from "react-uuid";

// state의 타입
type TodoState = {
    todos: Todo[];
    todo?: Todo;
};

const initialState: TodoState = {
    todos: [
        {
            id: uuid(),
            title: "React 강의",
            body: "정리해서 분할 학습하기",
            isDone: false,
        },
        {
            id: uuid(),
            title: "Java Script 문제",
            body: "기본부터 순서대로",
            isDone: false,
        },
    ],
};

// action creator
export const addTodo = (payload: Todo) => {
    return {
        type: ActionTypes.ADD_TODO,
        payload,
    };
};

export const removeTodo = (payload: string) => {
    return {
        type: ActionTypes.REMOVE_TODO,
        payload,
    };
};

export const changeTodo = (payload: string) => {
    return {
        type: ActionTypes.CHANGE_TODO,
        payload,
    };
};

export const readTodo = (payload: string) => {
    return {
        type: ActionTypes.READ_TODO,
        payload,
    };
};

const todos = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case ActionTypes.REMOVE_TODO:
            return {
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case ActionTypes.CHANGE_TODO:
            return {
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, isDone: !todo.isDone }
                        : todo
                ),
            };
        case ActionTypes.READ_TODO:
            if (action.payload) {
                const todo = state.todos.find(
                    (todo) => todo.id === action.payload
                );
                return {
                    ...state,
                    todo: todo,
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default todos;
