import styled from 'styled-components'
import { LeftPanel, RightPanel } from "./pages"

const PanelsContainer = styled.div`
  padding: 2rem 1rem;

  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 10px;
`

function App() {
  return (
    <PanelsContainer>
      <LeftPanel />
      <RightPanel />
    </PanelsContainer>
  );
}

export default App;
