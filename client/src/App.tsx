import { Button, Card, Col, Container, Input, Text } from '@nextui-org/react'
import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'

type Mode = 'register' | 'login'

function App() {

  const [mode, setMode] = useState<Mode>('login')

  return (
    <Container css={{ minHeight: '100vh' }} display='flex' justify='center' alignItems='center'>
      <Card css={{
        maxW: "400px"
      }}>
        <Card.Header>
          <Text b> Login </Text>
        </Card.Header>

        <Card.Divider />

        <Card.Body>
          {
            mode == 'login' && <Login onChangeMode={setMode}/>
          }
          {
            mode == 'register' && <Register onChangeMode={setMode}/>
          }
        </Card.Body>

        <Card.Divider />

      </Card>
    </Container>
  )
}

export default App
