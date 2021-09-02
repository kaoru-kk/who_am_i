
import React from 'react'
import { Canvas } from 'react-three-fiber'
import styled from 'styled-components'

import SampleBox from './components/SampleBox'

export default function App() {
  return (
    <Container>
      <Canvas>
        <SampleBox />
      </Canvas>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`