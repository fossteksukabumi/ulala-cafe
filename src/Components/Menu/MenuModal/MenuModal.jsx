import React, { useState } from "react";
import { toast } from "react-toastify";

import {
  ModalOverlay,
  ModalContainer,
  ModalImage,
  ModalContent,
  ModalTitle,
  ModalPrice,
  InputGroup,
  Label,
  Input,
  TextArea,
  AddToCartButton,
  CloseButton,
} from "./MenuModal.style";

const MenuModal = ({ isOpen, onClose, product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [note, setNote] = useState("");
  
    if (!isOpen || !product) return null;
  
    const handleAddToCart = () => {
        const qty = parseInt(quantity);
        if (qty <= 0) return;
      
        if (typeof addToCart === 'function') {
          addToCart(product, qty, note);
          toast.success("Berhasil ditambahkan ke keranjang!");
        } else {
          console.error('addToCart is not a function');
          console.log("addToCart di MenuModal:", addToCart);
        }
        onClose();
      };
    
    return (
      <ModalOverlay>
        <ModalContainer>
          <CloseButton onClick={onClose}>×</CloseButton>
          <ModalImage src={product.image} alt={product.name} />
          <ModalContent>
            <ModalTitle>{product.name}</ModalTitle>
            <ModalPrice>{product.price}</ModalPrice>
  
            <InputGroup>
              <Label>Jumlah:</Label>
              <Input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </InputGroup>
  
            <InputGroup>
              <Label>Catatan (opsional):</Label>
              <TextArea
                rows="3"
                placeholder="Contoh: yang satu tanpa saus, pedas sedang..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </InputGroup>
  
            <AddToCartButton onClick={handleAddToCart}>
              Tambah ke Keranjang
            </AddToCartButton>
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>
    );
  };
    

export default MenuModal;
