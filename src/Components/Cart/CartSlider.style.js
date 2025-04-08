import styled from "styled-components";

export const SliderOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 450px;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease-out;
  overflow-y: auto;

  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
  
  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0;
    color: #333;
  }

  @media (max-width: 576px) {
    padding: 14px 16px;
    
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
    color: #333;
  }

  @media (max-width: 576px) {
    width: 36px;
    height: 36px;
    font-size: 24px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fafafa;
  }

  @media (max-width: 576px) {
    padding: 12px 16px;
  }
`;

export const CartImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
  background-color: #f9f9f9;

  @media (max-width: 576px) {
    width: 70px;
    height: 70px;
    margin-right: 12px;
  }
`;

export const CartInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CartName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px 0;
  color: #333;

  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
`;

export const CartNote = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 6px 0;
  font-style: italic;

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

export const CartQuantity = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 0 0 10px 0;

  @media (max-width: 576px) {
    font-size: 0.85rem;
    margin-bottom: 8px;
  }
`;

export const RemoveButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  color: #e53935;
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    background-color: rgba(229, 57, 53, 0.1);
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
`;

export const CartSummary = styled.div`
  margin-top: auto;
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  background-color: #fafafa;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);

  p {
    margin: 6px 0;
    font-size: 0.95rem;
    color: #555;
    display: flex;
    justify-content: space-between;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 12px 0 20px;
    color: #333;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 576px) {
    padding: 16px;
    
    p {
      font-size: 0.9rem;
    }
    
    h4 {
      font-size: 1.1rem;
      margin: 10px 0 16px;
    }
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #FF6B6B;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #43a047;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 576px) {
    padding: 12px;
    font-size: 0.95rem;
  }
`;

export const ItemPrice = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  margin: 4px 0 10px;

  @media (max-width: 576px) {
    font-size: 0.85rem;
    margin: 3px 0 8px;
  }
`;

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e0e0e0;

  @media (max-width: 576px) {
    height: 30px;
  }
`;

export const QuantityButton = styled.button`
  width: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;
  color: #555;

  &:hover {
    background: #e0e0e0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: #f5f5f5;
  }

  @media (max-width: 576px) {
    width: 30px;
    font-size: 1rem;
  }
`;

export const QuantityInput = styled.input`
  width: 40px;
  height: 100%;
  text-align: center;
  border: none;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  font-size: 0.9rem;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 576px) {
    width: 36px;
  }
`;