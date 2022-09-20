import TempoDisplay from "./TempoDisplay";
import { useState } from "react";

export default function App() {
  const [tempo, setTempo] = useState(96);

  return <TempoDisplay tempo={tempo} />;
}
