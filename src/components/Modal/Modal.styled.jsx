import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  background-color: white;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 541px;

  min-height: 225px;
  max-height: 80%;

  padding: 40px;

  border-radius: 24px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    // background:transparent
    background: #3e85f3;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    height: 112px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7c7c7c;
  }


`;

export const CloseButton = styled.img`
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: black;

  transition: color 250ms linear, transform 250ms linear;

  &:hover {
    color: #3470ff;
    transform: scale(1.1);
  }
`;










export const Item = styled.li`

  display: inline-block;
  *display: inline;
  padding: 10px;
  width: 274px;
  // height: 426px;
  text-decoration: none;
  position: relative;

  // margin-right: 29px;
  margin-bottom: 50px;

  font-family: Manrope;

  // &:nth-child(4n) {
  //   margin-right: 0;
  // }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  width: 196px;
  height: 50px;
  padding: 14px 39px;
  color: #3470FF;
  background-color: #FFFFFF;
  border-radius: 10px;
  border: none;
  // box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const Img = styled.img`
  border-radius: 14px;
  object-fit: cover;
`;

export const PriceCar = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 1);
`;

export const InfoCar = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  word-spacing: 3px;
`;

export const Decor = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const ButtonCar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 274px;
  height: 44px;
  top: 20px;
  left: 20px;
  border-radius: 12px;
  border: none;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  background-color: rgba(52, 112, 255, 1);
  padding: 12px, 99px, 12px, 99px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.25);
  }
    cursor: pointer;
  }
`;

export const MainInfo = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 1);
  margin-bottom: 8px;
  word-spacing: 4px;
`;

export const TitleCarInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;