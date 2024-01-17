"use client"

import { 
  getCurrentAddress,
  getAmountSaledTokens,
  sandbox,
} from "@/components/metamask/contract";

function Sandbox() {
  return(
    <div>
      <button onClick={getAmountSaledTokens}>
        Click
      </button>
    </div>
  )
}

export default Sandbox;