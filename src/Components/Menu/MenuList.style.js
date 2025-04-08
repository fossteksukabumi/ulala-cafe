import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 100px 20px 60px; /* padding-top memastikan konten tidak berada di belakang navbar */
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 30% 16px 40px;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
  
  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 30px;
  }
`;

export const ButtonFilter = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? "#FF6B6B" : "#f8f9fa"};
  color: ${props => props.active ? "#fff" : "#343a40"};
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? "0 4px 10px rgba(255, 107, 107, 0.3)" : "0 2px 5px rgba(0, 0, 0, 0.05)"};
  
  &:hover {
    background-color: ${props => props.active ? "#FF6B6B" : "#e9ecef"};
    transform: translateY(-2px);
    box-shadow: ${props => props.active ? "0 6px 12px rgba(255, 107, 107, 0.4)" : "0 4px 8px rgba(0, 0, 0, 0.1)"};
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const MenuCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const MenuImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #f1f3f5;
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

export const MenuName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #343a40;
  margin: 16px 20px 8px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const MenuPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #FF6B6B;
  margin: 0 20px 16px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const OrderButton = styled.button`
  display: block;
  width: calc(100% - 40px);
  margin: 0 20px 20px;
  padding: 10px 0;
  background-color: #FF6B6B;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #fa5252;
    box-shadow: 0 4px 8px rgba(255, 107, 107, 0.4);
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 0;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  width: 180px;
  margin: 40px auto 0;
  padding: 12px 0;
  background-color: transparent;
  color: #495057;
  border: 2px solid #FF6B6B;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FF6B6B;
    color: white;
    box-shadow: 0 4px 8px rgba(255, 107, 107, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 150px;
    margin: 30px auto 0;
    font-size: 14px;
  }
`;