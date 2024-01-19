"use client"

import { 
  getCurrentAddress,
  getAmountSaledTokens,
  sandbox,
  getTotalSupply,
} from "@/components/metamask/contract";

function Sandbox() {
  return(
    <div>
      <button onClick={getTotalSupply}>
        Click
      </button>
    </div>
  )
}

export default Sandbox;