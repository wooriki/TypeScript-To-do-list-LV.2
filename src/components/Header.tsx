import { styled } from "styled-components";

const Header = () => {
    return (
        <HeaderTag>
            <header className="header">
                <h3>My Todo List</h3>
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
    h3 {
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
