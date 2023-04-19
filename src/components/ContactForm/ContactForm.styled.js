import styled from "styled-components";

export const Form = styled.form `background-color: rgb(27, 77, 0);
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0.5rem 0.5rem 2rem rgb(167, 164, 164),
    -0.5rem -0.5rem 2rem rgb(172, 171, 171);
`;
    

export const LabelStyle = styled.label ` 
  margin-bottom: 10px;
  color: #fff;
`;
   

// export const labelChild = styled.last-child `
//   margin-bottom: 0px;
// `
   


export const InputNameStyle = styled.input `
  margin-left: 28px;
`;
    
export const InputNumberStyle = styled.input ` 
 margin-left: 10px;
`;  