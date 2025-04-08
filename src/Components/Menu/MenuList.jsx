import React, { useState } from "react";
import {
  Container,
  FilterButtons,
  ButtonFilter,
  MenuGrid,
  MenuCard,
  MenuImage,
  MenuName,
  MenuPrice,
  OrderButton,
  LoadMoreButton,
} from "./MenuList.style";
import menuData from "../../Assets/data/menuData"; // contoh import data
import MenuModal from "./MenuModal/MenuModal";

const categories = ["All", "Makanan", "Minuman", "Dessert"];

const MenuList = ({ addToCart, cartItems }) => {
    console.log('addToCart di MenuList:', addToCart); // Debugging
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [visibleItems, setVisibleItems] = useState(6);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
  
    const filteredMenu = selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);
  
    const handleLoadMore = () => {
      setVisibleItems((prev) => prev + 6);
    };
  
    const handleOrderClick = (item) => {
      setSelectedProduct(item);
      setModalOpen(true);
    };
  
    return (
      <Container>
        <FilterButtons>
          {categories.map((cat) => (
            <ButtonFilter
              key={cat}
              $active={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </ButtonFilter>
          ))}
        </FilterButtons>
  
        <MenuGrid>
          {filteredMenu.slice(0, visibleItems).map((item) => (
            <MenuCard key={item.id}>
              <MenuImage src={item.image} alt={item.name} />
              <MenuName>{item.name}</MenuName>
              <MenuPrice>Rp{item.price.toLocaleString()}</MenuPrice>
              <OrderButton onClick={() => handleOrderClick(item)}>
                Pesan Sekarang
              </OrderButton>
            </MenuCard>
          ))}
        </MenuGrid>
  
        {visibleItems < filteredMenu.length && (
          <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
        )}
  
        <MenuModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          product={selectedProduct}
          addToCart={addToCart} // Pastikan ini diteruskan dengan benar
        />
      </Container>
    );
  };

export default MenuList;
