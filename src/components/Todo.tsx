import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/config/configStore";
import { removeTodo, changeTodo } from "../redux/modules/todo";
import { styled } from "styled-components";

type TodoProps = {
    isDone: boolean;
};

const Todo = ({ isDone }: TodoProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // store 조회
    const todoList = useSelector((state: RootState) => state.todos.todos);

    const removeButtonClickHandler = (id: string) => {
        dispatch(removeTodo(id));
    };

    const changeButtonClickHandler = (id: string) => {
        dispatch(changeTodo(id));
    };

    return (
        <WorkingWapper>
            <h2>{isDone ? "Finally Done !! 🎉🎉" : "You must do it !🔥"}</h2>
            <Working>
                {todoList
                    .filter((item) => item.isDone === isDone)
                    .map((todo) => {
                        return (
                            <div className="card" key={todo.id}>
                                <h3>{todo.title}</h3>
                                <p>{todo.body}</p>
                                <div className="card-button">
                                    <button
                                        onClick={() =>
                                            removeButtonClickHandler(todo.id)
                                        }
                                    >
                                        삭제
                                    </button>
                                    <button
                                        className="toggle"
                                        onClick={() =>
                                            changeButtonClickHandler(todo.id)
                                        }
                                    >
                                        {todo.isDone ? "취소" : "완료"}
                                    </button>
                                </div>
                                <p
                                    className="detail"
                                    onClick={() => {
                                        navigate(`details/${todo.id}`);
                                    }}
                                >
                                    상세보기
                                </p>
                            </div>
                        );
                    })}
            </Working>
            {/* </Working> */}
        </WorkingWapper>
    );
};

export default Todo;

const WorkingWapper = styled.div`
    h2 {
        margin: 20px 0 0 16px;
    }
`;
const Working = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    .card {
        width: 250px;
        height: 170px;
        margin: 0 auto;
        padding: 14px;
        border: 4px solid #c3c4c7;
        border-radius: 16px;
        margin-bottom: 30px;
        box-shadow: 6px 20px 80px 1px #888888ad;
        transition: all 0.2s ease-in-out;
    }
    .card:hover{
      transform: scale(1.03); /* 크기를 1.03배로 확대 */
      box-shadow: 6px 20px 100px 1px #888888ad; /* 그림자를 더 강조하여 떠있는 효과를 줌 */
    }
    }
    h3 {
        width: 210px;
        height: 38px;
        overflow: hidden;
        margin: 0 0 12px 0;
        font-size: 22px;
    }
    p {
        width: 200px;
        height: 24px;
        overflow: hidden;
        font-size: 16px;
        margin-top: -10px;
        font-weight: 600;
    }
    .card-button {
        display: flex;
        margin: 0 auto;
        margin-top: 12px;
        justify-content: center;
    }
    button {
        font-weight: 600;
        padding: 4px 24px 6px 24px;
        margin: 0 10px 0 0;
        background-color: #ff8085;
        &:hover {
            background-color: #d63638;
        }
    }
    .toggle {
        font-weight: 600;
        padding: 4px 24px 6px 24px;
        margin: 0 0 0 10px;
        background-color: #31ccab;
        &:hover {
            background-color: #00a380;
        }
    }
    .detail {
        margin: 6px 6px 0 0;
        font-weight: bold;
        font-size: 12px;
        text-align: right;
        cursor: pointer;
        color: gray;
    }
`;
