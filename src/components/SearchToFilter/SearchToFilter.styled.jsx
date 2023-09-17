import styled from 'styled-components';

export const AddBtn = styled.button`

display: flex;
align-items: center;
justify-content: center;
align-self: end;

width: 136px;
height: 52px;
background-color: #3470FF;
border-radius: 12px;
cursor: pointer;

  padding: 8px 16px;
  border: 1px solid #F7F7FB;
  color: #FFFFFF;
  font-weight: 600;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: transform 0.2s linear 0s, box-shadow 0.2s linear 0s;

  &.active {
    color: white;
    border: none;
    background-color: #3470FF;
  }
  &:hover,
  &:focus {
    // transform: scale(1.02);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }

`;

export const InputBrandCar = styled.select`
  width: 224px;
  margin-top: 0px;
  margin-right: 18px;
  padding: 14px 89px 14px 18px;
  align-items: center;
//   padding: 0px 15px;
  background-color: #F7F7FB;
  border-radius: 14px;
  border: 1px solid #F7F7FB;
  gap: 32px;

  cursor: pointer;
  color: #121417;
  font-weight: 500;
  font-size: 18px;
`;

export const InputPrice = styled.select`
  width: 125px;
  margin-top: 0px;
  padding: 14px 18px 14px 18px;
  margin-right: 18px;
  align-items: center;
//   padding: 0px 15px;
  background-color: #F7F7FB;
  border-radius: 14px;
  border: 1px solid #F7F7FB;
  gap: 32px;
cursor: pointer;
  color: #121417;
  font-weight: 500;
  font-size: 18px;
`;

export const InputKmFrom = styled.input`

  width: 125px;
  margin-top: 0px;
  padding: 14px 18px 14px 18px;
  align-items: center;
//   margin-right: 18px;
//   padding: 0px 15px;
  background-color: #F7F7FB;
  border-radius: 14px 0 0 14px;
  border: 1px solid rgba(138, 138, 137, 0.2);
  gap: 32px;
  cursor: pointer;

  color: #121417;
  font-weight: 500;
  font-size: 18px;
`;

export const InputKmTo = styled.input`

  width: 125px;
  margin-top: 0px;
  padding: 14px 18px 14px 18px;
  align-items: center;
  margin-right: 18px;
  background-color: #F7F7FB;
  rgba(247, 247, 251, 1)
  ;
    border-radius: 0px 14px 14px 0;
  
  border: 1px solid rgba(138, 138, 137, 0.2);
  gap: 32px;
cursor: pointer;

  color: #121417;
  font-weight: 500;
  font-size: 18px;
`;

export const Option = styled.option`
    width: 12px;
    height:18px;
  margin-top: 0px;
  padding: 14px 18px 14px 18px;
  align-items: center;
  margin-right: 18px;
  background-color: rgba(18, 20, 23, 0.05);
  rgba(247, 247, 251, 1)
  ;
    border-radius: 0px 14px 14px 0;
  
  border: 1px solid rgba(18, 20, 23, 0.05);
  gap: 32px;
    cursor: pointer;

  color: rgba(18, 20, 23, 0.2);
  font-weight: 500;
  font-size: 16px;

`;
export const Form = styled.form`
// margin-left: 15px;
display: flex;
justify-content: center;
padding: 30px;
`;

export const FormName = styled.p`
font-family: Manrope;
color: #8A8A89;
font-weight: 500;
font-size: 14px;
line-height: 18px;
margin: 0px;
padding-bottom: 8px;
`;


export const DivForm = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;	
box-shadow: 0px 0px 24px #5C5696;

`;