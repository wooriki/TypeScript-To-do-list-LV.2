import React from "react";
import Todo from "../components/Todo";
import Form from "../components/Form";
import Header from "../components/Header";
import { styled } from "styled-components";
// import "/App.css";

function Home() {
    return (
        <Layout>
            <Header />
            <Form />
            <Todo isDone={false} />
            <Todo isDone={true} />
        </Layout>
    );
}

const Layout = styled.div`
    width: 80%;
    // margin: 0 auto;
`;

export default Home;
