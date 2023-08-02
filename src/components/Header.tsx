import { styled } from "styled-components";

const Header = () => {
    return (
        <HeaderTag>
            <header className="header">
                <p className="title">My Todo List</p>
                <p>TypeScript</p>
            </header>
        </HeaderTag>
    );
};

const HeaderTag = styled.div`
    margin: 0 auto;
    display: flex;
    margin-top: 30px;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .title {
        font-size: 18px;
        width: 50%;
        text-align: left;
        margin-left: 20px;
    }
    p {
        font-size: 18px;
        width: 50%;
        text-align: right;
        margin-right: 20px;
    }
`;
export default Header;
