import uuid from "react-uuid";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todo";
import { Todo } from "../components/todos";
import { styled } from "styled-components";

const Form = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    // title 변경
    const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        if (newTitle.length <= 12) {
            setTitle(newTitle);
        } else {
            alert("제목은 12글자 이하로 입력해주세요.");
        }
    };

    // body 변경
    const bodyChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newBody = e.target.value;
        if (newBody.length <= 25) {
            setBody(newBody);
        } else {
            alert("내용은 25글자 이하로 입력해주세요.");
        }
    };

    const addButtonClickHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (!title || !body) {
            alert("제목 혹은 내용을 입력해주세요.");
            return;
        }

        const newTodo: Todo = {
            id: uuid(),
            title,
            body,
            isDone: false,
        };

        dispatch(addTodo(newTodo));
        setTitle("");
        setBody("");
    };

    // 페이지 랜더링 시 titleInput에 autoFocus되게
    // useRef , useEffect 사용
    const titleInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, []);

    return (
        <FormTag>
            <div className="form-input">
                <div className="input-wrapper">
                    <label>제목</label>
                    <input
                        type="text"
                        className="title-input"
                        value={title}
                        onChange={titleChangeHandler}
                        ref={titleInputRef}
                        autoFocus
                    />
                </div>
                <div className="input-wrapper">
                    <label>내용</label>
                    <input
                        type="text"
                        className="body-input"
                        value={body}
                        onChange={bodyChangeHandler}
                    />
                </div>
                <button onClick={addButtonClickHandler}>추가하기</button>
            </div>
        </FormTag>
    );
};

const FormTag = styled.form`
    height: 90px;
    align-items: center;
    margin-top: 10px;
    padding: 20px;
    background-color: #4f94d4;
    border-radius: 20px;

    .form-input {
        width: 100%;
        display: flex;
        text-align: center;
        padding: 5px;
        justify-content: center;
    }
    .input-wrapper {
        margin: 0;
        width: 40%;
        display: flex;
    }
    label {
        color: white;
        font-size: 20px;
        width: 40px;
        margin: 5px 0 0 0;
    }
    input {
        width: 300px;
        height: 40px;
        margin: 0 20px;
        padding-left: 10px;
        font-size: 20px;
        border: none;
        border-radius: 10px;
    }

    button {
        padding: 4px 20px 4px 20px;
        background-color: #135e96;
        &:hover {
            background-color: #9ec2e6;
        }
    }
`;
export default Form;
