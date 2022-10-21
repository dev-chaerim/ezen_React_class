import React from 'react';
import styled from 'styled-components';



const MenuContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 30px;

    .content_menu_list {
        width: 400px;
        padding: 50px 50px;
        justify-content: center;
        text-align: justify;
        opacity: 0.8;
        /* background-color: #807d7d; */
    }

    .content_menu_list h1 {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .content_menu_list h4 {
        margin: 16px 0;
    }

    .content_menu_list p {
        font-size: 12px;
    }

    .content_menu_img img {
        width: 400px;
    }

    .main_contents hr {
        opacity: 0.3;
    }

`

const Menu = () => {
  return (
    <MenuContainer>
        <div className="content_menu_list">
            <h1>Our Menu</h1>
            <br/>
            <h4>Bread Basket</h4>
            <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
            <br/>
            <h4>Honey Almond Granola with Fruits</h4>
            <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
            <br/>
            <h4>Belgian Waffle</h4>
            <p>Vanilla flavored batter with malted flour 7.50</p>
            <br />
            <h4>Scrambled eggs</h4>
            <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
            <br />
            <h4>Blueberry Pancakes</h4>
            <p>With syrup, butter and lots of berries 8.50</p>
        </div>
        <div className="content_menu_img">
            <img src="https://www.w3schools.com/w3images/tablesetting.jpg" alt="menu_img"/>
        </div>
    </MenuContainer>
  );
}

export default Menu;