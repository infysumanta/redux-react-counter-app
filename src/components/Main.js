import React from "react";
import Button from "./Button";
import Counter from "./Counter";
import Step from "./Step";
import Max from "./Max";

export default function Main() {
  return (
    <main>
      <Counter />
      <section className="step-sec">
        <div className="flex center">
          <Step />
          <Max />
        </div>
      </section>
      <Button />
    </main>
  );
}
