import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readTodo } from "../redux/modules/todo";
import { styled } from "styled-components";
import { RootState } from "../redux/config/configStore";

// styled
// const DetailContainer = styled.div`
//     display: flex;
//     justify-content: center;
// `;

// const DetailFlexDiv = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;

// const DetailBox = styled.div`
//     border: 1px solid black;
//     width: 600px;
// `;

// const DetailPtag = styled.p`
//     margin-left: 10px;
// `;

// const MoveHomeButton = styled.button`
//   margin: 10px 10px 0px 0px;
//   height: 30px;
// `;

// const DetailH2 = styled.h2`
//     margin-left: 10px;
// `;

function Detail() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();
    if (id) {
        dispatch(readTodo(id));
    }

    const todo = useSelector((state: RootState) => {
        return state.todos.todo;
    });

    return (
        <DetailWarrper>
            <div className="inner-detail">
                <div>
                    <h5>{todo?.id.substring(0, 13)}</h5>
                </div>
                <h2>{todo?.title}</h2>
                <p>{todo?.body}</p>
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Home
                </button>
            </div>
        </DetailWarrper>
    );
}

export default Detail;

const DetailWarrper = styled.div`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .inner-detail {
        width: 850px;
        height: 250px;
        padding: 40px;
        border: 5px double #3582c4;
        border-radius: 20px;
        background-color: #f0f0f1;
        box-shadow: 30px 30px 100px 2px #888888ad;
    }

    h5 {
        font-weight: 600;
        color: #2271b1;
    }
    h2 {
        width: 760px;
        height: 48px;
        overflow: hidden;
        font-size: 38px;
        margin: 10px 0 0 0;
    }
    p {
        margin: 20px 0 0 10px;
        width: 550px;
        height: 24px;
        overflow: hidden;
    }
    button {
        float: right;
        margin-top: -20px;
        font-size: 20px;
        color: white;
        font-weight: 600;
        background-color: #2271b1;
        padding: 6px 24px 6px 24px;
        &:hover {
            background-color: #9ec2e6;
            color: black;
        }
    }
`;
