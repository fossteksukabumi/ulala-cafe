import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 800px;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  
  @media (min-width: 768px) {
    width: 50%;
    height: auto;
    max-height: 400px;
  }
`;

export const ModalContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
  color: #222;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ModalPrice = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #e53935;
  margin-bottom: 1.5rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
`;

export const Input = styled.input`
  width: 80px;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

export const AddToCartButton = styled.button`
  padding: 0.875rem 1rem;
  background-color: #FF6B6B;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  margin-top: 0.5rem;
  
  &:hover {
    background-color: #3a7bc8;
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  color: #333;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;