import styled from 'styled-components';
export const ButtonFeedback = styled.button`
  cursor: pointer;
  border-radius: ${p => p.theme.radii.md};
  border: 1.5px solid ${p => p.theme.colors.black}; 
  background-color: ${p => p.theme.background.GreenYellow};
  padding: ${p => p.theme.spasing(4)};
  width: 100px;
  margin-bottom: ${p => p.theme.spasing(5)};  
  margin-right: ${p => p.theme.spasing(2)}; 
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.06em;
   text-transform: capitalize;
`; 