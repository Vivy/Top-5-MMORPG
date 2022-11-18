import styled from 'styled-components';

export const Ff14 = styled.div`
display: grid;
align-items: center;
justify-items: center;
grid-template-columns: repeat(3, 1fr);
background-color: aqua;
padding: 1rem;
gap: 2rem;
a{
  grid-column: 2/3;
  font-size: 40px;
}
img{
  grid-column: 2/3;
  height: 300px;
  width: 600px;
}
p{
  grid-column: 2/3;
}
span{
  grid-column: 2/3;
}

`
