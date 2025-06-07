import React, { useState } from "react";
import styles from "./MpesaSimulator.module.css";

const generateTransactionCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length: 9 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

const MpesaSimulator = () => {
  const [message, setMessage] = useState("");

  const simulateMessage = ({
    amount = 850,
    recipient = "JANE DOE",
    phone = "0722123456",
    balance = 2150,
    fee = 13,
  } = {}) => {
    const code = generateTransactionCode();
    const now = new Date();
    const date = now.toLocaleDateString("en-KE");
    const time = now.toLocaleTimeString("en-KE", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const msg = `${code} Confirmed. Ksh${amount.toFixed(
      2
    )} sent to ${recipient.toUpperCase()} ${phone} on ${date} at ${time}. New M-PESA balance is Ksh${balance.toFixed(
      2
    )}. Transaction cost, Ksh${fee.toFixed(
      2
    )}. Amount you can transact today is Ksh${(300000 - amount).toFixed(2)}.`;

    setMessage(msg);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>M-Pesa Message Simulator</h2>
      <button onClick={() => simulateMessage()} className={styles.button}>
        Simulate Message
      </button>
      {message && (
        <div className={styles.messageBox}>
          <pre className={styles.message}>{message}</pre>
        </div>
      )}
    </div>
  );
};

export default MpesaSimulator;
