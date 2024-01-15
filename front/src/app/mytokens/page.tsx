"use client"

import Modal from "@/components/layout/modal/Modal";
import { PaymentProcess } from "@/components/layout/payment/PaymentProcess";
import { useState } from "react";

export default function MyTokens() {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div>
      <button className="px-4 border" onClick={() => setModalActive(true)}>Modal</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <PaymentProcess />
      </Modal>
    </div>
  )
}