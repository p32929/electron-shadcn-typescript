
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="flex flex-row items-center justify-center p-16">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Counter: {counter}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Click on increase / decrease to check the state changes
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={decrease} variant="outline">Decrease --</Button>
          <Button onClick={increase}>Increase ++</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
