"use client"

import { useWeb3Modal } from '@web3modal/ethers5/react'
import { Button} from "@/components/ui/button"

export default function ConnectButton() {
  const { open } = useWeb3Modal()

  return (
    <div>
      <Button className="flex w-1/3" onClick={() => open()}>Open Connect Modal</Button>
      <Button className="flex w-1/3" onClick={() => open({ view: 'Networks' })}>Open Network Modal</Button>
    </div>
  )
}