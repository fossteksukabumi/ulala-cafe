import React, { useState } from "react"; 

import {
  SliderOverlay,
  SliderContainer,
  CartHeader,
  CartItem,
  CartImage,
  CartInfo,
  CartName,
  CartNote,
  CartQuantity,
  RemoveButton,
  CloseButton,
  CartSummary,
  CheckoutButton,
  ItemPrice,
  QuantityControl,
  QuantityButton,
  QuantityInput,
  ItemActions
} from "./CartSlider.style";

const CartSlider = ({ isOpen, onClose, cartItems, removeFromCart, updateQuantity }) => {
  const [tableNumber, setTableNumber] = useState("");
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (!tableNumber.trim()) {
      alert("Mohon isi nomor meja terlebih dahulu.");
      return;
    }

    const itemList = cartItems
        .map((item) => {
        const itemLine = `- ${item.name} (${item.quantity}x) = Rp${(
            parseFloat(item.price) * item.quantity
        ).toLocaleString()}`;
        const noteLine = item.note ? `  Catatan: ${item.note}` : "";
        return `${itemLine}${noteLine ? "%0A" + noteLine : ""}`;
        })
        .join("%0A");  
    
    const message = `Halo, saya ingin memesan:%0A${itemList}%0A%0ASubtotal: Rp${subtotal.toLocaleString()}%0APajak (12%): Rp${tax.toLocaleString()}%0ATotal: Rp${total.toLocaleString()}%0A%0ANomor Meja: ${tableNumber}`;
    
    const whatsappURL = `https://wa.me/6285691625074?text=${message}`;
    
    window.open(whatsappURL, "_blank");
  };

  return (
    <SliderOverlay onClick={onClose}>
      <SliderContainer onClick={(e) => e.stopPropagation()}>
        <CartHeader>
          <h2>Keranjang</h2>
          <CloseButton onClick={onClose}>×</CloseButton>
        </CartHeader>

        {cartItems.length === 0 ? (
          <p style={{ padding: "20px" }}>Keranjang kosong</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <CartImage src={item.image} alt={item.name} />
                <CartInfo>
                  <CartName>{item.name}</CartName>
                  {item.note && <CartNote>Catatan: {item.note}</CartNote>}
                  <ItemPrice>
                    Rp{parseFloat(item.price).toLocaleString()} x {item.quantity} = Rp{(parseFloat(item.price) * item.quantity).toLocaleString()}
                  </ItemPrice>
                  <ItemActions>
                    <QuantityControl>
                      <QuantityButton 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </QuantityButton>
                      <QuantityInput 
                        type="number" 
                        min="1" 
                        inputMode="numeric"
                        value={item.quantity}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d+$/.test(value)) {
                              handleQuantityChange(item.id, parseInt(value));
                            } else if (value === "") {
                              handleQuantityChange(item.id, 1); // fallback ke 1 kalau input kosong
                            }
                          }}                          
                      />
                      <QuantityButton onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                        +
                      </QuantityButton>
                    </QuantityControl>
                    <RemoveButton onClick={() => removeFromCart(item.id)}>Hapus</RemoveButton>
                  </ItemActions>
                </CartInfo>
              </CartItem>
            ))}

            <CartSummary>
            <div style={{ margin: "10px 0" }}>
              <label htmlFor="tableNumber">Nomor Meja:</label>
              <input
                type="text"
                id="tableNumber"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder="Contoh: 1"
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "4px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
              <p>
                <span>Subtotal:</span>
                <span>Rp{subtotal.toLocaleString()}</span>
              </p>
              <p>
                <span>Pajak 12%:</span>
                <span>Rp{tax.toLocaleString()}</span>
              </p>
              <h4>
                <span>Total:</span>
                <span>Rp{total.toLocaleString()}</span>
              </h4>
              <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
            </CartSummary>
          </>
        )}
      </SliderContainer>
    </SliderOverlay>
  );
};

export default CartSlider;
